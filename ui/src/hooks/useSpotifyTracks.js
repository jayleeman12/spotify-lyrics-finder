import React, { useEffect, useState } from 'react';

export default function useSpotifyTracks(tokenType, tokenValue) {
    const [ trackItems, setTrackItems ] = useState([]);
    useEffect(() => {
        const fetchTracks = (url) => {
            fetch(url, {
                headers: {
                    Authorization: `${tokenType} ${tokenValue}`
                }
            })
            .then(res =>  {
                if (res.status === 200) {
                    return res.json()
                } else {
                    res.text().then(text => {
                        throw new Error(text);
                    });
                }
            })
            .then(json => {
                setTrackItems(previousTrackItems =>
                    [...previousTrackItems, ...json.items.map(trackItem => {
                        const track = trackItem.track;
                        const isTrackValid = track.name &&
                                            track.artists &&
                                            track.artists[0] &&
                                            track.artists[0].name
                        if (isTrackValid) {
                            return {
                                name: track.name,
                                artist: track.artists[0].name
                            }
                        }
                    })]);
                if (json.next) {
                    fetchTracks(json.next);
                }
            });
        }
        if (tokenType && tokenValue) {
            fetchTracks('https://api.spotify.com/v1/me/tracks?limit=50&offset=0');
        }
    }, [tokenType, tokenValue]);
    return trackItems;
}