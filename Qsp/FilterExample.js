
let data = 

[{"id":1,"first_name":"Arleta","last_name":"Masdon","email":"amasdon0@squidoo.com","gender":"Female"},
    {"id":2,"first_name":"Rosalind","last_name":"Rief","email":"rrief1@ow.ly","gender":"Female"},
    {"id":3,"first_name":"Twyla","last_name":"Larkings","email":"tlarkings2@aol.com","gender":"Female"},
    {"id":4,"first_name":"Karlens","last_name":"McLemon","email":"kmclemon3@bbb.org","gender":"Male"},
    {"id":5,"first_name":"Ivar","last_name":"Rozalski","email":"irozalski4@nifty.com","gender":"Male"},
    {"id":6,"first_name":"Del","last_name":"Costelow","email":"dcostelow5@umich.edu","gender":"Male"},
    {"id":7,"first_name":"Annabella","last_name":"Burgis","email":"aburgis6@seesaa.net","gender":"Female"},
    {"id":8,"first_name":"Layton","last_name":"Macenzy","email":"lmacenzy7@flickr.com","gender":"Male"},
    {"id":9,"first_name":"Corabella","last_name":"Derricoat","email":"cderricoat8@smugmug.com","gender":"Female"},
    {"id":10,"first_name":"Craggie","last_name":"Tearny","email":"ctearny9@instagram.com","gender":"Male"},
    {"id":11,"first_name":"Ephrem","last_name":"Jansson","email":"ejanssona@bizjournals.com","gender":"Male"},
    {"id":12,"first_name":"Orv","last_name":"Edsell","email":"oedsellb@blog.com","gender":"Male"},
    {"id":13,"first_name":"Nickolas","last_name":"MacAirt","email":"nmacairtc@gmpg.org","gender":"Male"},
    {"id":14,"first_name":"Tuck","last_name":"Hilary","email":"thilaryd@blogtalkradio.com","gender":"Male"},
    {"id":15,"first_name":"Raymund","last_name":"Szanto","email":"rszantoe@wikipedia.org","gender":"Male"},
    {"id":16,"first_name":"Killian","last_name":"Cockerell","email":"kcockerellf@blinklist.com","gender":"Non-binary"},
    {"id":17,"first_name":"Julie","last_name":"Sambrok","email":"jsambrokg@deviantart.com","gender":"Female"},
     ]

    let maleArray = data.filter ((val) => {
        return val.gender = "Male"
    })
    console.log(maleArray);

    console.log("*****************************************");
    

    let femaleArray = data.filter ((val) => {
        return val.gender = "Female"
    })
    console.log(femaleArray);
    
    console.log("*****************************************");

    