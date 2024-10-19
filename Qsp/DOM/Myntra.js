

// 1.Body creating
let {body} = document
console.log(body);

// 2.Giving element to body
let Div = document.createElement("div")
console.log(Div);

body.append(Div)
console.log(body); 

let nav = document.createElement("nav")
nav.setAttribute("class" , "navbar")


