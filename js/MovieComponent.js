class MovieComponent{

    constructor(movie){
        this.movie = movie;

    }

    //para crear cada componente con datos de firebase
    render = () =>{
        let currentScore = this.movie.score;
        let component = document.createElement('div');
        let currentClick = 0;
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
                let ob = '';
                let totalVotes;
                db.ref(`movies/${this.movie.name}/votos`).on('value', (data)=>{
                    currentScore = 0;
                    data.forEach(
                        (e)=>{
                            ob = e.val().point;
                            currentScore = currentScore + Number.parseInt(ob);
                        }
                        
                    )
                    totalVotes = data.numChildren();
                    //console.log(totalVotes);
                    let prom = currentScore/totalVotes;
                    console.log(typeof prom);

                    /*if(db.ref(`movies/${this.movie.name}/votos`) == null){
                        db.ref(`movies/${this.movie.name}/score`).set(0);   
                       }*/

                    db.ref(`movies/${this.movie.name}/score`).set(prom.toFixed(1));
                    
                    
                });
                
            };


            //para que solo sea posible votar una vez y ser redirigido
            currentClick = 1;
            if(currentClick==1){
                setInterval(()=>{location.href = "./Thanks.html"}, 500);
                
            }

          
        });

      
        

        return component;
    }



}