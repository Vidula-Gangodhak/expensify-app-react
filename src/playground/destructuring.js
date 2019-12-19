//const person={
//    name:'Neil',
//    age:24,
//    location:{
//        city:'Mumbai',
//        temp:32
//    }
//};

//const{name:firstname ='Anonymous',age}=person;
//console.log(`${firstname} is ${age}`);

//const{temp:temperature,city}=person.location;
//if(city && temperature){
//    console.log(`It is ${temperature} in ${city}`);
//}

//const book={
//    title:'Ego is the Enemy',
//    author:'Ryan Holiday',
//    publisher:{
//        name:'Penguin'
//    }
//};

//const {name:publisherName='Self-Published'}=book.publisher;
//console.log(publisherName);

//Array destructuring

const address=['1299 S Juniper Street','Philadelphia','19147'];
const [,city ,state='New York']=address;

console.log(`You are in ${city} ${state}`);

const item=['coffee(hot)','$2.00','$2.50','$2.75'];
const [itemName,mediumPrice]=item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
