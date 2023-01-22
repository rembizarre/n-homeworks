//1
const newElementById = document.getElementById('age-table');

//2 
const elementByTag = document.getElementsByTagName('label');
console.log(elementByTag)

//3 
const elementByTag0 = document.getElementsByTagName('td')[0];
console.log(elementByTag0)

//4 
const newFormById = document.getElementById('name="search"');
console.log(newFormById)

//5
const first = document.body.firstElementChild;
console.log(first)

//6
const last = document.body.lastElementChild;
console.log(last)

//7 
INPUT:
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>

//OUTPUT
tagName
