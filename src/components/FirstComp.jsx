import React from 'react';

const FirstComp = () => {
    return (
        <div>
            <FirstComp className='dark'>
                <input type="radio" name='theme' id='light' value="light" />
                <label htmlFor="light">claro</label>
                <input type="radio" name='theme' id='dark' value="dark" />
                <label htmlFor="dark">Oscuro</label>
            </FirstComp>
            
        </div>
    );
};

export default FirstComp;
