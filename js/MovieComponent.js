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

        //para votar
        clasifForm.addEventListener('change', ()=>{
            if(clasifForm.puntaje.value){
                console.log("has votado");
                switch(clasifForm.puntaje.value){
                    case '1':
                        let referencia1 = db.ref(`movies/${this.movie.name}/votos`).push();
                        let newVoto1 = {
                            id: referencia1.key,
                            point:1,
                        }
                        referencia1.set(newVoto1);
                        break;

                    case '2':
                        let referencia2 = db.ref(`movies/${this.movie.name}/votos`).push();
                        let newVoto2 = {
                            id: referencia2.key,
                            point:2,
                        }
                        referencia2.set(newVoto2);
                        break;

                    case '3':
                        let referencia3 = db.ref(`movies/${this.movie.name}/votos`).push();
                        let newVoto3 = {
                            id: referencia3.key,
                            point:3,
                        }
                        referencia3.set(newVoto3);
                        break;

                    case '4':
                        let referencia4 = db.ref(`movies/${this.movie.name}/votos`).push();
                        let newVoto4 = {
                            id: referencia4.key,
                            point:4,
                        }
                        referencia4.set(newVoto4);
                        break;

                    case '5':
                        let referencia5 = db.ref(`movies/${this.movie.name}/votos`).push();
                        let newVoto5 = {
                            id: referencia5.key,
                            point:5,
                        }
                        referencia5.set(newVoto5);
                        break;

                }

                //para calcular el actual puntaje

                let currentScore = this.movie.votos
            };




        });
        

        return component;
    }



}