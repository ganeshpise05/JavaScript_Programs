// Delclaration of Function

let firstFunct = function() {

    console.log("Function block executed !"); 
}

firstFunct()

// Parameterized Function 

let add = function(a,b){
    console.log(`Addition of ${a} and ${b} is : ${a+b}`);
}

let sub = function(c,d){
    console.log(`Substraction of ${c} and ${d} is : ${c-d}`);
}

let multi = function(e,f){
    console.log(`Multiplication of ${e} and ${f} is : ${e*f}`); 
}

let div = function(g,h){
    console.log(` Division of ${g} and ${h} is : ${g/h}`); 
}

let mod = function(i,j){
    console.log(` Modulus of ${i} and ${j} is : ${i%j}`); 
}

add(100,200) 
sub(300,200)
multi(5,10)
div(5,10)
mod(5,10)

// Without declaring Funnction

function WithoutDecla (a,b){
    console.log(a,b,"function executed !");
}
WithoutDecla(10,20)



