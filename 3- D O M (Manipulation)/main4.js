// SMALL PROJECT WITH THE WEB APP //


var form = document.getElementById("myForm");
var itemList = document.getElementById('itCont');
var subBtn = document.querySelector('#subButton')

//form submit event
subBtn.addEventListener('click', addItem);

function addItem(e){
    e.preventDefault()

    var item = document.getElementById('txtInput').value;
    var itemNode = document.createTextNode(item)
    var li = document.createElement('li');
    li.className = "item";

    var delButton = document.createElement('button');
    delButton.className = 'delButton';
    delButton.appendChild(document.createTextNode('X'))

    li.appendChild(itemNode);
    li.appendChild(delButton);

    itemList.appendChild(li);
}

//Delete event 
itemList.addEventListener('click', removeItem)

function removeItem(e){
    var clicked = e.target

    if (clicked.classList.contains('delButton')){
        if(confirm('Are you sure ?')){
            var li = clicked.parentElement;
            itemList.removeChild(li)
        };
    };
};


//filter the item 
var filter = document.getElementById('filter')
filter.addEventListener('keyup', filterItems)

// function filterItems(e){   
//     //convert the value of filter into lowercase first 
//     var typedText = e.target.value.toLowerCase();
//     //get list (you'll get an html collection) out of all the li items
//     var items = itemList.getElementsByTagName('li')
    
//     //turn that html collection into an array
//     var arrItems = Array.from(items);

//     //itterate through the items 
//     arrItems.forEach(function(item){
//         var itemName = item.firstChild.textContent; //the firstchild of the given item in the list contains the textContent
//         if(itemName.toLowerCase().indexOf(typedText) //if the actual item and the typedText match 
//         != -1){
//             item.style.display = "flex"; //display the actual item
//         } else {
//             item.style.display = 'none';
//         };     
//     });
// };


function filterItems(e){
    var typedText = e.target.value.toLowerCase();
    var itemMarkupList = itemList.getElementsByTagName('li');
    var itemArray = Array.from(itemMarkupList);

    itemArray.forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(typedText)!= -1){
            item.style.display = "flex";
        } else {
            item.style.display = 'none'
        }
    })
}




