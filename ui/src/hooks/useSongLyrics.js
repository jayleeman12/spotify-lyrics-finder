import React, { useEffect, useState } from 'react';

export default function useSongLyrics(songs) {
    const [songLyrics, setSongLyrics] = useState([]);
    useEffect(() => {
        if (songs && songs !== []) {
            songs.forEach(song => {
                const songName = song.name.toLowerCase().replace(/ /g, '-');
                let artistName = song.artist.toLowerCase().replace(/ /g, '-');
                artistName = artistName.charAt(0).toUpperCase() + artistName.substr(1);
                fetch(`https://genius.com/${artistName}-${songName}-lyrics`, {
                    headers: {
                        "Content-Type": "text/html; charset=utf-8"
                    }
                })
                    .then(res => res.text())
                    .then(html => {
                        console.log(html);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            });
        }
    }, [songs])
    return songLyrics;
}