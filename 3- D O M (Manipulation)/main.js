// SELECTIONG ELEMENTS PROPERTIES //

//the following command will give you all the things
//attached to the DOM :
console.dir(document);

//acces properties of the document
console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.doctype);
console.log(document.body);
console.log(document.images);

//print every element of the html in the console as(html collection)
console.log(document.all);
//and indexing it: (this will print the header)
console.log(document.all[8]);


// console.log(document.forms);
// console.log(document.links);

// Put document.all elements into an array(in order to use array methods)
let ar = new Array();
for (x of document.all) {
    ar.push(x)
};
//then use an array property on it
console.log(ar.reverse());


//selectors

// TEXTCONTENT vs INNERTEXT vs INNERHTML

{/* <p id = "hidden-text1" >This is <span style="display:none">a text</span> </p>
<p id = "hidden-text2">This is <span style="display:none">a text</span> </p>
<h1> This is a title <h1> */}

let ht1 = document.getElementById("hidden-text1").innerText;
let ht2 = document.getElementById("hidden-text2").textContent;
document.querySelector("h1").innerHTML = "<h3>Helloo</h3>";
let ht3 = document.querySelector("h1").innerHTML;

console.log(ht1); 
// >>>>>innerText = this is (inner text pays attention to the styling)
console.log(ht2); 
// >>>>>textContent = this is a text 
console.log(ht3);
// >>>>> innerHTML = <h3>helloo</3>

// GETELEMENTYBID //
let header = document.getElementById("header");

//Change the style (use camelCase)
header.style.boxShadow = '2px 3px 10px cyan';

// GETELEMENTSBYCLASSNAME

let items = document.getElementsByClassName('item');
console.log(items);
// //acces to them individually
items[1].innerText = 'helloo';
items[1].style.fontWeight = "bold";
items[1].style.color = "yellow";

//this will give an error
// items.style.backgroundColor = '#ccc';
//because it's an html Collection ,you need to itterate though the list
//do this instead :
for (i of items) {
    i.style.backgroundColor = "#EEE";
};


// GETELEMENTSBYTAGNAME

var li = document.getElementsByTagName('li');
console.log(li);
// //acces to them individually
li[1].innerText = 'helloo';
li[1].style.fontWeight = "bold";
li[1].style.color = "yellow";


// QUERYSELECTOR VS QUERYSELECTORALL

// querySelector is only going to grab the first node/element

// first cild querySelector('x')
var firstItem = document.querySelector('.item');
firstItem.style.backgroundColor = '#35F';
firstItem.style.color = "#708";
//second child querySelector('x:nth-child(2)')
var secondItem = document.querySelector('.item:nth-child(2)');
secondItem.style.color = "#706";
secondItem.style.backgroundColor = '#35D';
//third child querySelector('x:nth-child(3)')
var thirdItem = document.querySelector('.item:nth-child(3)');
thirdItem.style.color = "#704";
thirdItem.style.backgroundColor = '#35B'; 
//last child querySelector('x:last-child')
var lastItem = document.querySelector('.item:last-child');
lastItem.style.color = "#702";
lastItem.style.backgroundColor = '#359';


//modify some content
var input = document.querySelector('input');
input.placeholder = "Please add some items"; 

//specifically select the button input (html as a reference)
var submit = document.querySelector('input[type="button"]');
submit.value = "SEND"


//QUERYSELECTORALL

const allItems = document.querySelectorAll('.item');
//this will output a node list, indexing is possible
console.log(allItems);


//some fun odd/even with nth-child
var oddList = document.querySelectorAll('.item:nth-child(odd)');
console.log(oddList);
for (i of oddList){
    i.style.backgroundColor = "#EE7";
    i.style.color = "green";
    i.innerText = 'odd child nodes'
};

var evenList = document.querySelectorAll('.item:nth-child(even)');
console.log(evenList);
for (i of evenList){
    i.style.backgroundColor = "#557";
    i.style.color = 'white';
    i.innerText = "even child nodes" ;
};


