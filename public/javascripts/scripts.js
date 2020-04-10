console.log("Our Express App");

let jsonObj = { 
    'name': {
        'firstname': 'Nancy',
        'lastname': 'Benny'
    },
    'email': "OhhNancy@gmail.com",
    'age': 35,
    'location': {
        'country': 'New Zealand',
        'city': 'Auckland',
        'homeaddress': "40 Pandora Avenue, Selwyn Heights"
    },
    'likes': ['Swimming', 'Sleeping']
};
console.log(jsonObj);

let jsObj = {
    name: {
        firstname: 'Nancy',
        lastname: 'Benny'
    },
    email: "OhhNancy@gmail.com",
    age: 35,
    location: {
        country: 'New Zealand',
        city: 'Auckland',
        homeaddress: "40 Pandora Avenue, Selwyn Heights"
    },
    likes: ['Swimming', 'Sleeping']
}
console.log(jsObj);

console.log(typeof jsonObj);
console.log(typeof jsObj);
console.log("======================");

var objStringified = JSON.stringify(jsObj);

console.log(objStringified);
console.log(typeof objStringified);
console.log("======================");

let objAgain = JSON.parse(objStringified);
console.log(objAgain);
console.log(typeof objAgain);




