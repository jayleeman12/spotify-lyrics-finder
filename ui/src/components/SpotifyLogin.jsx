import React, { useEffect } from 'react';

const SpotifyLogin = props => {
    useEffect(() => {
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=8288ac55387b4bb9a09916d7d33c97f8&response_type=token&redirect_uri=http://localhost:3000/search&scope=user-library-read`);
    }, [])
    return (
        <div>
            Connecting to spotify...
        </div>
    )
}

export default SpotifyLogin;