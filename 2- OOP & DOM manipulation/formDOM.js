const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
//if you wanna set things  further ,use setTimeout()
//setTimeout take (function ,delay<ms>)
        setTimeout( () => msg.remove(), 3000 );
    } else {

 //create an empty <li> element :
        const li = document.createElement('li');

//take the values of the Forms and transform into a textNode :
        li.appendChild(document.createTextNode
            (`${nameInput.value} : ${emailInput.value}`));

//Append the nodes to the ul(userList)
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    };
};


/* 
WHAT IS A NODE :

	Nodes are in the DOM aka Document Object model.
	In the DOM, all parts of the document,
	such as elements, attributes, text, etc
	.are organized in a hierarchical 
	tree-like structure; consisting of
	parents and children. These individual
	parts of the document are known as nodes.


WHAT IS A TEXT NODE :

    TextNode objects contain only text content without
    any HTML or XML markup. TextNode objects 
    make it possible to insert texts into 
    the document as nodes (appendChild, insertBefore).
  
    insertBefore = insert at the very start (LIFO)
    appendChild = insert at the very last (FIFO)
*/


/* // Cleaner code 
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout( () => msg.remove(), 3000 );
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    };
};
*/