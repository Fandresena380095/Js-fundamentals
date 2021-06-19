var form = document.getElementById('myForm');
var btn = document.getElementById('subButton');
var txtInput = document.getElementById('txtInput');
var ul = document.getElementById('itCont');
var filter = document.getElementById('filter');



btn.addEventListener('click', addElements);

function addElements(e){
	e.preventDefault();
	
	var item = document.getElementById('txtInput').value;
	var itemNode = document.createTextNode(item);

	var li = document.createElement('li');
	li.className = 'item';

	var delButton = document.createElement('button');
	delButton.className = 'delButton';
	delButton.appendChild(document.createTextNode('X'));

	li.appendChild(delButton);
	li.appendChild(itemNode);

	ul.appendChild(li);
}

ul.addEventListener('click', deleteElement);

function deleteElement(e){
	e.preventDefault();
	var typed = e.target;
	if(typed.classList.contains("delButton")){
		if(confirm('Sure ?')){
			var li = typed.parentElement;
			ul.removeChild(li);
		};
	};
};


filter.addEventListener('keyup', filterItems);

function filterItems(e){
	var text = e.target.value.toLowerCase();
	var allList = ul.getElementsByTagName("li");
	var iNodeList = Array.from(allList);

	iNodeList.forEach(function(item){
		var matchingValue = item.firstChild.textContent;
		if(matchingValue.toLowerCase().indexOf(text)!= -1){
			item.style.display = "flex";
		} else {
			item.style.display = 'none';
		};
	});
};