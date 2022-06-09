'use strict';
const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');




boxesQuery.forEach((box, i) =>{
 if(box.matches('.this')) console.log(`This one, index is ${i}`);// matches szuka css selektor 
})


console.log(boxesQuery[0].closest('.wrapper')); // szuka rodzica ze wszkazanym css-selektorom 
// boxesQuery[0].remove();
// boxesGet[0].remove();
// console.log(boxesQuery);
// console.log(boxesGet);

// for( let i = 0; i < 5; i++){
//     const div = document.createElement('div')
//     div.classList.add('box')
//     document.body.append(div);
// }

// for(const[key, value] of Object.entries(boxesQuery)){
//     console.log(key, value )
// }

// console.log(document.body.children);


// console.log(Array.from(boxesGet));
// console.log(Array.from(boxesQuery));
// Array.from(boxesQuery)[3]=`<div class = "box"></div>`; // Array.from()- daje nam statyczna tablice  