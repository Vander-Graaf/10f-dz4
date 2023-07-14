







let htmlCode = `
<ul>
  <li class="list-item green" data-test-id="1">green</li>
  <li class="list-item red" data-test-id="2">red</li>
  <li class="list-item orange" data-test-id="3">yellow</li>
  <li class="list-item blue" data-test-id="4">blue</li>
  <li class="list-item white" data-test-id="5">orange</li>
</ul>
`;




// TASK 1
function getLi() {
  const li = document.querySelector('li');
  const testLi = li.textContent;
  return testLi
}
const li = getLi()
console.log(li)
// TASK 1




// TASK 2
function getArrayLi(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const pasteArrayLi = Array.from(doc.querySelectorAll('li'), li => li.textContent);
  return pasteArrayLi;
}
const ArrayLi = getArrayLi(htmlCode);
console.log(ArrayLi);

// TASK 2





// TASK 3
function getArrayCLass(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const itemlist = doc.querySelectorAll('.list-item');
  const pasteArrayClass = Array.from(itemlist, itemlist => itemlist.textContent);
  return pasteArrayClass;
}
const ArrayClass = getArrayCLass(htmlCode);
console.log(ArrayClass);
// TASK 3






// TASK 4
function getArrayAttribute(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const itemlist = doc.querySelectorAll('.list-item');
  const pasteArrayAttribute = Array.from(itemlist, itemlist => itemlist.getAttribute('Class'));
  return pasteArrayAttribute;
}
const ArrayAttribute = getArrayAttribute(htmlCode);
console.log(ArrayAttribute);
// TASK 4





// TASK 5
function getArrayIDAttribute(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const itemlist = doc.querySelectorAll('.list-item');
  const pasteArrayIDAttribute = Array.from(itemlist, itemlist => itemlist.getAttribute('data-test-id'));
  return pasteArrayIDAttribute;
}
const arrayIDAttribute = getArrayIDAttribute(htmlCode)
console.log(arrayIDAttribute);
// TASK 5



//TASK 6  
function getBrokenItems() {
  const itemlist = document.querySelectorAll('.list-item');
  const brokenItems = Array.from(itemlist).filter(item => !item.classList.contains(item.textContent));
  const startScan = brokenItems.map(item => item.getAttribute('data-test-id'));
  return startScan;
}
 const getScan = getBrokenItems();
 console.log(getScan);
//TASK 6




//TASK 7
function changeItems() {
const itemList = document.querySelectorAll('.list-item');

itemList.forEach((item) => {
  const text = item.textContent;
  const TestID = item.getAttribute('data-test-id');
  item.textContent = `${TestID} ${text}`;
})

};

changeItems()
//TASK 7




//TASK 8
const secretLoginInput = document.getElementById('secret-login');
secretLoginInput.value = 'You were hacked';
//TASK 8






























