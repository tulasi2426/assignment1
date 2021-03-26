//element fetched via tag name
var ele = document.getElementsByTagName('p');
console.log(ele[0]);                                              //printing on console
//element fetched via class name
var ele = document.getElementsByClassName('h1');
console.log(ele[0]);                                             //element fetched via id 
 //changing the content in class name 
ele[0].innerHTML = "<h1>MYTIME</h1>";
 //element fetched via id 
var ele = document.getElementById('ME');
console.log(ele);                                                  //element fetched via id 