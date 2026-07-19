import { db } from "./firebase.js";

import { collection, addDoc } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
addDoc(collection(db,"orders"),{
    name:"Ko Ko",
    phone:"09123456789",
    item:"Book",
    qty:2,
    price:1000
})
.then(()=>{
    console.log("Order saved");
})
.catch((error)=>{
    console.log(error);
});
