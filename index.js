// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob");


function  destructivelyRemoveLastCat(){
    cats.pop();
}
 destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat()

function prependCat(name){
    const allCats = [ name,...cats];
    return allCats;

}
prependCat("Arnold");

function appendCat(name){
    const allCats = [...cats,name];
    return allCats;

}
appendCat("Broom")

function removeLastCat(){

     return cats.slice(0, cats.length-1)
}
removeLastCat()

function removeFirstCat(){

    return cats.slice(1)
}
removeFirstCat()