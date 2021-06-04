class MovieComponent{

    constructor(movie){
        this.movie = movie;

    }

    render = () =>{
        let component = document.createElement('section');
        component.innerHTML = (
            `
            <div class="movie">
            <div class="movie__cont1">
                <div class="movie__name"> ${this.movie.name}</div>
                <form class="clasification">
                    <label class="clasification__check"> <input type="radio"  name="puntaje" value="1"> 1</label>
                    <label class="clasification__check"> <input type="radio"  name="puntaje" value="2"> 2</label>
                    <label class="clasification__check"> <input type="radio"  name="puntaje" value="3"> 3</label>
                    <label class="clasification__check"> <input type="radio"  name="puntaje" value="4"> 4</label>
                    <label class="clasification__check"> <input type="radio"  name="puntaje" value="5"> 5</label>
                </form>
                
            </div>

            <div class="movie__score"> ${this.movie.score} </div>
        </div>

            `
        );
        return component;
    }

}