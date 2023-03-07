import { useState } from 'react';
import './Meme.css'

import memesData from '../../memesData';

function Meme(){
    const memes = memesData.data.memes;
    const [memeImage,setMemeImage] = useState("");

    function getMemeImage(){

        let memeImageSource = memes[Math.floor(Math.random()*memes.length)].url;
        setMemeImage(memeImageSource);

    }

    return (
        <div className='meme'>

            <div className='form'>
                
                <section className='text-fields'>
                    <input type='text' id='top-text' name='top-text' 
                    placeholder='Top Text'/>
                    <input type='text'  id='bottom-text' name='bottom-text' 
                    placeholder='Bottom Text'/>
                </section>

                <button onClick={getMemeImage}>Get a new meme image 
                <i className="fa fa-picture-o" aria-hidden="true"></i></button>
                
            </div>

            <div className="image--container">

                <img src={memeImage} alt="" className='meme__image' />

            </div>

        </div>
    );
}

export default Meme