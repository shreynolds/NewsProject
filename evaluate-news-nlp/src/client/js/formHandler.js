function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
    Client.checkForName(formText) //will update this to valid URL later!

    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8081/article', {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({'url': formText}),   
  }).then(res => res.json())
  .then(function(res){
      console.log(res)
      
      //here, will add the result to the HTML
  })
}


export { handleSubmit }

