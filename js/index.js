const movieList = document.querySelector(".movieList");
const db = firebase.database();

//visualizacion de los componentes
db.ref('movies').on('value', (data)=>{
    movieList.innerHTML = '';
    data.forEach(
        (obj)=>{
            let e = obj.val();
            let movie = new MovieComponent(e);
            movieList.appendChild(movie.render());

        }
    );

});