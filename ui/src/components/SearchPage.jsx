import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import useSpotifyTracks from '../hooks/useSpotifyTracks';
import { parseUrl } from '../utils';
import useSongLyrics from '../hooks/useSongLyrics';

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #4fabc4
`

const SearchPage = props => {
    const [tokenType, setTokenType] = useState('');
    const [tokenValue, setTokenValue] = useState('');
    useEffect(() => {
        const result = parseUrl(window.location.hash);
        setTokenType(result.token_type);
        setTokenValue(result.access_token);
    }, []);
    const trackItems = useSpotifyTracks(tokenType, tokenValue);
    const songLyrics = useSongLyrics(trackItems);
    const onQueryChanged = (query) => {
        console.log(query);
    }
    return (
        <PageContainer>
            <h1>Lyrics Searcher</h1>
            <SearchBar onQueryChanged={onQueryChanged} />
        </PageContainer>
    )
};

export default SearchPage;


// if (trackItems) {
//     return (
//         <div>
//             {trackItems.map((trackItem, index) => {
//                 const track = trackItem.track;
//                 if (track && track.artists && track.artists[0]) {
//                     return <p key={index}>{track.name} - {track.artists[0].name}</p>
//                 }
//             })}
//         </div>
//     )
// }