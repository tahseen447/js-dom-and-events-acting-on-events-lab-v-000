function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let name = retrieveEmployeeInformation();
  let newElement = document.createElement('li');
  newElement.createTextNode(name);
  document.getElementById('.employee-list').appendChild(newElement);
}
