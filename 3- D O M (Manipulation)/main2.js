// TRAVERSING THE DOM //
//parents ,siblings ,childs

// PARENT
var items = document.querySelector(".item");

//parentNode (x.parentNode)
console.log(items.parentNode);
//you can also use it
let ul = items.parentNode;
ul.style.backgroundColor = "#ABA";
ul.style.border = "1px solid #445";
//or do crazy stuff
console.log(items.parentNode.parentNode);

//parentElement (x.parentElement) [same as parentNode]
console.log(items.parentElement);
// //you can also use it
let ul = items.parentElement;
ul.style.backgroundColor = "#ABA";
ul.style.border = "1px solid #445";
// //or do crazy stuff
console.log(items.parentElement.parentElement);

// childNodes (x.childNodes) (you will get a NodeList)
// #text in there is basically a <br> (linebreak)
//its usage is not suggested
let itCont = document.querySelector('#itCont');
console.log(itCont.childNodes);

// use .children instead
// (x.children) (you will get a html Collection)
console.log(itCont.children); //indexing is possible
let itContYellow = itCont.children[1];
itContYellow.style.backgroundColor = 'yellow' ;

// x.firstChild / x.lastChild
//hehe! it will give you a #textNode 
console.log(itCont.firstChild) //you will get a #text because of linebreak

// x.firstElementChild/ x.lastElementChild are suggested
console.log(itCont.firstElementChild);
let fec = itCont.firstElementChild;
let lec = itCont.lastElementChild;
fec.innerText = 'boooo';
lec.textContent = 'trololololol';


// x.nextSibling (you will also get a #nodeList)
var header = document.getElementById('header');
console.log(header.nextSibling);

// x.nextElementSibling (advised)
console.log(header.nextElementSibling);


// x.previousSibling (you will also get a #nodeList)
var itCont = document.getElementById('itCont');
console.log(itCont.previousSibling);

// x.previousElementSibling (advised)
console.log(itCont.previousElementSibling);




