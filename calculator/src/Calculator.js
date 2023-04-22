import React from 'react';

export default function Calculator(){
    return(
        <div className="App"> 
            <div className='container'>
                <div className="display">
                    0
                </div>
                <div className='operators'>
                    <button>/</button>
                    <button>*</button>
                    <button>+</button>
                    <button>DEL</button>
                </div>
                <div className="digits"></div>
                
            </div>
        </div>
    )
}