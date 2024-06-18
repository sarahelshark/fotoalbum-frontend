import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    photos :' ',  //salvo qui i dati richiesti,

    funzioneDiFetch(){
      const base_apiUrl = 'http://127.0.0.1:8000/';
      const allPhotos_url  = 'api/photos';
      
      const url = base_apiUrl + allPhotos_url;

    console.log(url);

    axios
    .get(url)
    .then(response=>{
      console.log(response); //nessuna risposta, gestire CORS
      //se avessi la chiamata funzionante : 
      //this.photos = response.data.results
    })
    .catch(error =>{
      console.error('error details:', error);
    })
    }


  });









/* JAVASCRIPT PLAYGROUND */
  
  const [first, second] =[10,20];
  console.log(first);
  console.log(second);

  const user ={
    name:'sarah',
    age:23,
  }  

  const {name , age} = user
  console.log(name);
  console.log(age);



  function greet(name) {
    console.log('Ciao, ' + name);
  }

  setTimeout(greet, 4000, 'Utente'); 
  

  function sayHello() {
    console.log('Ciao!');
  }
  
  setTimeout(sayHello, 5000); 
  

  // Funzione che restituisce una Promise che si risolve dopo un certo ritardo
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Finished waiting for ${ms} milliseconds`);
    }, ms);
  });
}
  async function asyncFunction() {
    console.log('Start waiting...');
    
    const result1 = await wait(2000); // Attende 2 secondi
    console.log(result1); // Stampa il risultato dopo 2 secondi
    
    const result2 = await wait(3000); // Attende altri 3 secondi
    console.log(result2); // Stampa il risultato dopo altri 3 secondi
    
    console.log('All done!');
  }
  
  // Chiamata alla funzione asincrona
  asyncFunction();
