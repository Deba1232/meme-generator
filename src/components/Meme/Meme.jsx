import { useEffect, useState } from 'react';
import './Meme.css'


function Meme(){

    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    const [allMemes,setAllMemes] = useState({});

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data));
    }, []);
        
    function handleChange(event){
        const {name, value} = event.target;

        setMeme(prevText => {
            return(
                {
                    ...prevText,
                    [name]: value,
                }
            );
        });
    }

    function getMemeImage(){

        const memesArray = allMemes.data.memes;
        let randomImageUrl = memesArray[Math.floor(Math.random()*memesArray.length)].url;

        setMeme(prevMemeData => {
            return(
                {
                    ...prevMemeData,
                    randomImage: randomImageUrl,
                }
            );
        });

    }

    return (
        <main>

            <div className='form'>
                
                <section className='text-fields'>
                    <input 
                        type='text' 
                        id='top-text' 
                        name="topText"
                        placeholder="Top Text"
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <input 
                        type='text'  
                        id='bottom-text' 
                        name="bottomText" 
                        placeholder='Bottom Text'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    
                </section>

                <button onClick={getMemeImage}>
                    Get a new meme image <i className="fa fa-picture-o" aria-hidden="true"></i>
                </button>
                
            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="" className='meme--image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    );
}

export default Meme