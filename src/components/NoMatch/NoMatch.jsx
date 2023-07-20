import React from 'react'

function NoMatch() {

    const backgroundImageUrl = "img/p32.jpeg"
    const StyleObject = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className='container' style={StyleObject}>
            <h1 className='font-xxl text-error'>Página no encontrada</h1>
        </div>
    )
}

export default NoMatch