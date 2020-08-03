function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
    const result = Client.checkForName(formText) 

    //clear the HTML
    document.getElementById('score').innerHTML = ""
    document.getElementById('agreement').innerHTML = ""
    document.getElementById('subjectivity').innerHTML = ""
    document.getElementById('confidence').innerHTML = ""
    document.getElementById('irony').innerHTML = ""
    document.getElementById('error').innerHTML = ""

    if(result){
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
        console.log('here')

        if (res.status.msg == 'OK') {
            document.getElementById('score').innerHTML = "Score: " + res.score_tag;
            document.getElementById('agreement').innerHTML = "Agreement: " + res.agreement;
            document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity;
            document.getElementById('confidence').innerHTML = "Confidence: " + res.confidence;
            document.getElementById('irony').innerHTML = "Irony: " +  res.irony;
        }
        else{
            document.getElementById('error').innerHTML = "Error. Please enter a valid URL"
        }
    })
    }
    else {
        document.getElementById('error').innerHTML = "Error. Please enter a valid URL"
    }
    document.getElementById('name').innerText = ""
}


export { handleSubmit }

