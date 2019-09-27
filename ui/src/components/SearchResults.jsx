import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultsContainer = styled.div`
    width: 30%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const SearchResults = props => {
    return (
        <ResultsContainer>
            {props.songs.map(song => {
                if (song.lyrics.includes(props.query)) {
                    return <p>{song.artist} - {song.name}</p>
                }
            })}
        </ResultsContainer>
    )
};

SearchResults.propTypes = {
    songs: PropTypes.shape({
        name: PropTypes.string,
        artist: PropTypes.string,
        lyrics: PropTypes.string
    }),
    query: PropTypes.string
};

export default SearchResults;