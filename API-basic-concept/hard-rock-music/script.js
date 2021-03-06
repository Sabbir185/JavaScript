const searchSongs = () => {
    const searchText = document.getElementById('search-input').value;
    // api fetching
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}


// display data
const displaySongs = songs => {
    const artistContainer = document.getElementById('artist-container');
    // to solve auto added searched keyword's songs , first empty the div then add :)
    artistContainer.innerText = ''; 
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist['name']}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/ogg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyricsData('${song.artist['name']}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        artistContainer.appendChild(songDiv);
    });
}


// async await , alternative process of .then
const getLyricsData = async(artist, title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    try{
        const res = await fetch(url)
        const data = await res.json();
        getLyrics(data.lyrics);
    }
    catch(err){
        alert(err);
    }
}


const getLyrics = (lyric) => {
    document.getElementById('lyrics-rock').innerText = lyric;
    
}