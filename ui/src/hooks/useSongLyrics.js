import React, { useEffect, useState } from 'react';

export default function useSongLyrics(songs) {
    const [songLyrics, setSongLyrics] = useState([]);
    useEffect(() => {
        if (songs && songs !== []) {
            songs.forEach(song => {
                fetch(`http://localhost:8090/lyrics?song_name=${song.name}&artist_name=${song.artist}`)
                    .then(res => res.text())
                    .then(lyrics => {
                        setSongLyrics(previousSongLyrics => [
                            ...previousSongLyrics,
                            {
                                ...song,
                                lyrics: lyrics
                            }
                        ]);
                    })
            });
        }
    }, [songs]);
    return songLyrics;
}