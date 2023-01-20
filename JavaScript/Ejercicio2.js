/*2. Given the following data array:
["Apple", "Orange", "Banana", "Strawberry", "Grape", "Mango", "Melon",
"Pineapple", "Peach", "Peach"];
● Get all strings containing the letter 'p'.*/


const frutas = ["Apple", "Orange", "Banana", "Strawberry", "Grape", "Mango", "Melon",
"Pineapple", "Peach", "Peach"];


function filtrar_elementos (quiero_encontrar, lista) {
    return lista.filter(function(elemento_buscado) {
        return elemento_buscado.toLowerCase().indexOf(quiero_encontrar.toLowerCase()) > -1;
    })
  }
  
  console.log(filtrar_elementos('p',frutas)); 
 


/*● Obtain the ‘Grape’ string.
 */

console.log(filtrar_elementos('Grape',frutas))