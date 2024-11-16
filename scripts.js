document.addEventListener('DOMContentLoaded', () => {
    const artistData =[
        { name:"Henrique & Juliano", image:"img/artista-henrique-juliano.jpg" },
        { name:"Jorge & Mateus", image:"img/artista-jorge-mateus.jpg" },
        { name:"Zé Neto & Cristiano", image:"./img/artista-ze-neto.jpg" },
        { name:"Gusttavo Lima", image:"./img/artista-gustavo-limma.jpg" },
        { name:"Luan Santana", image:"./img/artista-luan-santana.jpg" },
        { name:"Maroon 5 ", image:"./img/artista-maroon5.jpeg" },
        { name:"Alok", image:"./img/artista-alok.jpeg" },
        { name:"Post Malone", image:"./img/artista-post-malone.jpg" },
        { name:"Marshmallow", image:"./img/artista-marshmallow.jpg" },
        { name:"Alan Waker", image:"./img/artista-alan-walker.jpeg" }
    ]
    
    const albumData = [
        {name:'White Noise (Sleep & Relaxation Sounds)', artist:'Sleepy John', image: './img/album-white-noise.jpg'},
        {name:'O Céu Explica Tudo (Ao Vivo)', artist:'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
        {name:'Nada como um dia após o outro', artist:'Racionais', image: './img/album-vida-loka.jpg'},
        {name:'HIT ME HARD AND SOFT', artist:'Billie Eilish', image: './img/album-hit-me.jpg'},
        {name:'CAJU', artist:'Liniker', image: './img/album-caju.jpg'},
        {name:'Animals', artist:'Maroon 5 ', image: './img/album-animals.jpg'},
        { name:"Ocean", artist:'Alok, Zeeba and Iro', image:"./img/album-ocean.jpeg" },
        { name:"Congratulations", artist:'Post Malone', image:"./img/album-congratulations.jpg" },
        { name:"Alone", artist:'Marshmallow', image:"./img/album-alone.jpg" },
        { name:"Faded", artist:'Alan Waker', image:"./img/album-faded.jpg" }
    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})


