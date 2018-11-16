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
  let employeeName = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  let submitButton = document.querySelector('input[type=submit]')
}
