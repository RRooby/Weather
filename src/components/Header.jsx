import React from 'react';

const Header = () => {
    return (
        <div>
            <header className='dark'>
                <input type="radio" name='theme' id='light' value="light" />
                <label htmlFor="light">claro</label>
                <input type="radio" name='theme' id='dark' value="dark" />
                <label htmlFor="dark">Oscuro</label>
            </header>
            
        </div>
    );
};

export default Header;
