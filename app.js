import React from 'react';
import lizard from './john-cobb-14128-unsplash-e1526486464740-1112x630.jpg';
import './style.css'
function App()
{
    return (
        <div className='card' >
            <div className='card-image'>
                <img src={lizard} alt="lizard" style={{width:'300px',height:'185px'}}/>
            </div>
            <div className='card-title'>
                <h3>Lizard</h3>
            </div>
            <div className='card-body'>
                <p>Lizards area widespread group of squamate reptiles,with over 6,000 species,racing acroos all continents except Antartica</p>
            </div>
            <div className='btn'>
                <div>
                    <a style={{color:'blue'}}>
                        SHARE
                    </a>
                </div>
                <div>
                    <a className='button'  style={{color:'blue'}}>
                    LEARN MORE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default App;