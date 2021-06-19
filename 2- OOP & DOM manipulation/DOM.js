// PUT YOUR SCRIPT IN THE BODY TAG
//these are simple examples of what you can do with DOM's
// {window.alert(1)} is equal to {alert(1)}
// to see what's going on ,use
// console.log(window);

// Single elements selectors

//1-by ID
console.log(document.getElementById('myForm')); //or asign into a variable
const form = document.getElementById('myForm');

//2-by Element using querySelector
// *the one that we are going to use the most
const container = document.querySelector(".container");
console.log(container);





// Multiple elements selectors

//1-this will give you a node list (array method possible)
const multipleItems = document.querySelectorAll('.item');
console.log(multipleItems); 

//2-these will give you a htmlCollection(array methods not possible)
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));


//loop through an item:
multipleItems.forEach( (item) => console.log(item) );






//LET US MANIPULATE THE document


const ul = document.querySelector('.items');
//remove:
// ul.remove();
// ul.lastElementChild.remove();

//change text content:
ul.firstElementChild.textContent = 'What\'s uuuup';
//or
ul.children[1].innerText = 'BRAAAD'
//or
ul.lastElementChild.innerHTML = '<h5>Coool</h5>';


//change some style with .style
// You can have events & functions and make your paging
//dynamic
function pinkClick(){
    const btn = document.querySelector('.btn');
    btn.style.background = 'cyan';
    btn.style.color = "#001";
};


//         EVENTS
//creating an event (onVar.addEventListener('event',{running function}))
const btn = document.querySelector('.btn');



btn.addEventListener('click', (ev) => {
//prevent the event from disappearing in the console
    ev.preventDefault();

//show the event's target (html element of the event):
    console.log(ev.target);

//show the class of the event's target:
    console.log(ev.target.className); 

// cool stuffs :

//change colors
    document.querySelector('#myForm').style.backgroundColor = '#CAC';

    //add superclass to the body with classList.add/.remove
    document.querySelector('body').classList.add('superclass');

    //change texts
    document.querySelector('.items')
    .firstElementChild.innerText = "You Have been hacked";
    document.querySelector('.items')
    .lastElementChild.innerHTML = "<h5> He hoo </h5>";
}); 



btn.addEventListener('mouseover', function(movev){
    movev.preventDefault();
    document.querySelector('body').style.background ="yellow";
});


btn.addEventListener('mouseout', function(mouev){
    mouev.preventDefault();
    document.querySelector('body').style.background ="red";
});


//little application 



