const movieList = document.querySelector(".movieList");
const db = firebase.database();

db.ref('movies').on('value', (data)=>{
    data.forEach(
        (obj)=>{
            let e = obj.val();
            console.log(e.name);
            let movie = new MovieComponent(e);
            movieList.appendChild(movie.render());
        }
    );

});