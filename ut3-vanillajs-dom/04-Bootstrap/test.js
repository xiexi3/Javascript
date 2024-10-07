const body = document.body;
const div = document.createElement("div"); 
const anchorCount = 9;
const anchorArray = [];

body.classList.add('p-3', 'm-0', 'border-0', 'bd-example');
div.classList.add('list-group');

let i = 0;
while (i < anchorCount) {
	const anchor = document.createElement("a");
	anchor.setAttribute("href", "#");
	anchor.classList.add('list-group-item', 'list-group-item-action');
	anchor.innerHTML = "A simple ";
	anchorArray.push(anchor);
	div.appendChild(anchorArray[i]);
	i++;
}

anchorArray.forEach(element => {
	
});

const currentDiv = document.getElementById("div2");
document.body.insertBefore(div, currentDiv);