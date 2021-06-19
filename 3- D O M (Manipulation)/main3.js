// EVENTS //

//the old way would be to add a link to the function 
//directly inside the html file
//<button class="btn" id="button" onclick="buttonClick()">



//new way : use the .addEventListener(event ,function)
var button = document.getElementById('button');
button.addEventListener('click', buttonClick);


function buttonClick(e) {
    let header = document.querySelector('header');
    header.innerHTML = "<h1>Welcome bruuh</h1>";
    document.querySelector('#main').style.
    background = "#EEE";
}


    //Event Parameter
    console.log(e);
    console.log(e.target) //this will give the element where the button is from
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList); //DomTokenList (array)
    var output = document.getElementById('output');
    output.style.color = "gold" 
    output.innerHTML= e.target.id
    console.log(e.type) //whatever type of event it is

    //look for where exactly the client clicked 
    //(from the window); clientX is from the browser's pov
    console.log(e.clientX);
    console.log(e.clientY);

    //look for where exactly the client clicked 
    //(from the element itself); offsetX is from the element's pov
    console.log(e.offsetX);
    console.log(e.offsetY);

// see if you are holding alt/ctrl/shift key //
// With this ,you can explore different functionality of 
//basically cool key combination to add some 
//spiciness to your website 
    console.log(e.altKey) 
    console.log(e.ctrlKey) 
    console.log(e.shiftKey) 


var button = document.getElementById('button');
var box = document.getElementById('box');
var output = document.getElementById('output');


// // types of events:

//With A BUTTON/MOUSE
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

//With A MOUSE
// mouseenter&mouseleave VS mouseover&mouseout
// only aplies in box VS applies on the elemnts in the box
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent); 
box.addEventListener('mouseout', runEvent);

//acctually track the mouse position
box.addEventListener('mousemove', runTheEvent);

function runTheEvent(e){
//     console.log('EVENT TYPE :'+e.type);

    // output.innerHTML = "MouseX :"+e.offsetX+
    //           "<br>MouseY :"+e.offsetY;

    output.innerHTML = "red:"+
    (e.offsetX/box.offsetWidth*100)+"%"+
                        "<br>green:"+
    (e.offsetY/box.offsetHeight*100)+"%";

    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",0)" ;}




//With The KEYBOARD
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

function runEvent(e){
    console.log('EVENT TYPE :'+e.type);

    console.log(e.target.value);
    //output it somewhere
    document.getElementById('typed').textContent = e.target.value;
};



//focus vs blur (go in vs go out of the element)
itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

// cut VS paste (when you cut/paste/copy ,the event is fired)
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);
itemInput.addEventListener('copy', noCopy);
// or ,you can just use:
itemInput.addEventListener('input', runEvent)

function noCopy(e){
    alert('Copy Non authorized');
    document.body.style.backgroundColor = 'black';
};


//CHANGE event
var select = document.querySelector('select')
select.addEventListener('change', runEvent)


function runEvent(e){
    console.log('EVENT TYPE :'+e.type);
    console.log(e.target.value);

};


//SUBMIT event
form.addEventListener('submit', subEvent);

function subEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE :'+e.type);
}
