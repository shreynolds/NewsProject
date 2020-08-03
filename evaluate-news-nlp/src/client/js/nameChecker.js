function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
       '.com',
       '.org',
       'gov',
       'edu'
    ]
    var i;
    let not = 0
    for (i = 0; i < names.length; i++) {
      if (!(inputText.includes(names[i]))) {
          not += 1
      }
    }
    if (not == names.length){
        return false
    }
    return true
    
}

export { checkForName }
