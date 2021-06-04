class MovieComponent{

    constructor(movie){
        this.movie = movie;

    }

    render = () =>{
        let component = document.createElement('div');
        component.classList.add('movie');

        component.innerHTML = (
            `
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

            `
        );
        const clasifForm = component.querySelector('.clasification');

        clasifForm.addEventListener('change', ()=>{
            if(clasifForm.puntaje.value){
            switch(clasifForm.puntaje.value){
                case '1':
                    console.log(this.movie.name + 'puntaje de 1');
                    break;

                case '2':
                    console.log(this.movie.name + 'puntaje de 2');
                    break;

                case '3':
                    console.log(this.movie.name + 'puntaje de 3');
                    break;

                case '4':
                    console.log(this.movie.name + 'puntaje de 4');
                    break;

                case '5':
                    console.log(this.movie.name + 'puntaje de 5');
                    break;

            }
        };

        });
        

        return component;
    }


    votar = () => {
        

    }

}