import './Meme.css'

function Meme(){
    return (
        <div className='meme'>

            <form action='#' method='post' className='form'>
                
                <section className='text-fields'>
                    <input type='text' id='top-text' name='top-text' placeholder='Top Text'/>
                    <input type='text'  id='bottom-text' name='bottom-text' placeholder='Bottom Text'/>
                </section>

                <button type="submit">Get a new meme image <i class="fa fa-picture-o" aria-hidden="true"></i></button>
                
            </form>

        </div>
    );
}

export default Meme