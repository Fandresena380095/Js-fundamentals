// LET CREATE ELEMENT AND INSERT THEM //

//createElement

//create a <div>
var newDiv = document.createElement('div');

//add a class to it
newDiv.className = 'helloClass';

//add an id to it
newDiv.id = 'helloId';

//add attribute & value ('attribute' , 'value')
newDiv.setAttribute('title','hello div');

//in order for you to instert a text in a div,
//you need to create a textNode out of the text
var newDivText = document.createTextNode("Hello World");
//add the text to the newDiv (bc it is a child element of div,
//use x.appendChild
newDiv.appendChild(newDivText);


//now we gotta insert it in the dom
var referenceElement = document.querySelector('#main');
var insertBefore = document.querySelector('#myForm');
referenceElement.insertBefore(newDiv, insertBefore);



