let p1 = new Promise((resolve,reject) => {
    let a = 10 ;
    if (a == 10) resolve(); 
    else  reject();
});

p1.then(() => {console.log("True : a == 10")})
p1.catch(() => {console.log("False : a != 10")})    