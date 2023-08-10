import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function NoMatch(props) {

    const {Title, children} = props

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

    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          navigate(`/`);
        }, 5000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [navigate]);

    return (
        <div className='container' style={StyleObject}>
            <h1 className='font-xxl text-error'>{Title}</h1>
            <h2>{children}</h2>
            <p>Redireccionando a inicio...</p>
        </div>
    )
}

export default NoMatch