// Examine the DOCUMENT OBJECT 
// console.log(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[3]);
// // document.all[10].textContent = "132hbchi";
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);

// Selectors 

// console.log(document.getElementById("header-title"));
// var headertitle = document.getElementById("header-title");
// console.log(headertitle);

// headertitle.textContent = "hello";
// headertitle.innerHTML = "yoo";

// console.log(headertitle.textContent);
// console.log(headertitle.innerText); ///// it cares about the css given to the content
// console.log(headertitle.innerHTML);
// headertitle.innerHTML = "<h3>hello</h3>";
// headertitle.style.borderBottom = "solid 5px #000";

////Getting ElementsBYCLASSNAME

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello ";

// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
// for(var i = 0 ; i < items.length ; ++i){
//     items[i].style.backgroundColor = "#f4f4f4";
// }

//// GETTING ELEMENTS BY TAG NAME 


// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello ";

// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
// for(var i = 0 ; i < li.length ; ++i){
//     li[i].style.backgroundColor = "#f4f4f4";
// }

////Query Selector 

// var header = document.querySelector("#main-header");

// header.style.borderBottom = "solid 4px #000";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector("input[type = 'submit']");
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "blue";


// var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
// Seconditem.style.color = "peachpuff";


// // Query Selector All

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = 'hello ';

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for(var i = 0 ; i < odd.length ; ++i){
// odd[i].style.backgroundColor = "#f4f4f4";
// even[i].style.backgroundColor = "#ccc";
// }



// ///Traversing the DOM ////
var itemlist = document.querySelector("#items");
// //parent node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// // console.log(itemlist.parentNode.parentNode.parentNode.parentNode);

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement);



//childNodes

// console.log(itemlist.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "yellow";

////first child 

// console.log(itemlist.firstChild);

////first element child 

// console.log(itemlist.firstElementChild);

// itemlist.firstElementChild.style.border = "dashed 2px";

//last child 
// console.log(itemlist.lastChild);

///last element child 

// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.style.backgroundColor = "#0ff";



/// nextsibling

// console.log(itemlist.nextSibling);

//next element sibling

// console.log(itemlist.nextElementSibling);

////previous siblings

// console.log(itemlist.previousSibling);

//previous element siblings 

// console.log(itemlist.previousElementSibling);

// itemlist.previousElementSibling.style.color = "green";



/// create a div 

// var newDiv = document.createElement('div');

//add class
// newDiv.className = "hello";

//add id
// newDiv.id = "hello1";

//add attribute

// newDiv.setAttribute("title", "hello div");

///create a text node
// var newDivText = document.createTextNode("hello world");

//add text to new div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container"); // getting parent
// var h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1); // inserting

// newDiv.style.color = "#0ff";
// newDiv.style.fontSize = "55px";

// console.log(newDiv);


//////// EVENTS

// var button = document.getElementById("button").addEventListener('click', buttonClick);
// function buttonClick(e) {
//     // console.log("button - clicked");
//     // document.getElementById("header-title").textContent = "changed";
//     // document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById("output");
//     // output.innerHTML = "<h1>" + e.target.id + "</h1>";
//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);

// }




var button = document.getElementById("button").addEventListener('dblclick', runEvent);
function runEvent(e){
    console.log("Event TYpe : " + e.type);
}
    









































































































// // EXAMINE THE DOCUMENT OBJECT //




// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

