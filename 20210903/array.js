'use strict';

const completion = ['apple','banana','cup','dog'];
const participant = ['apple','banana','banana','cup','dog'];
const mathScore = [45,72,95,80,75];


// // push
// console.log('push');
// mathScore.push(100);
// console.log(mathScore);

// //pop
// console.log('pop');
// mathScore.pop();
// console.log(mathScore);

// //join
// console.log('join');
// console.log(mathScore.join());
// console.log(mathScore.join(' and '));

// //concat
// console.log('concat');
// const concatArr = completion.concat(mathScore);
// console.log(concatArr);

// //slice
// console.log('slice');
// console.log(mathScore.slice(0,2));
// console.log(mathScore);

// //splice
// console.log('splice');
// var x = mathScore.splice(1,2,50);
// console.log(x);
// console.log(mathScore);


// //sort
// console.log('sort');
// console.log(mathScore.sort());
// console.log(mathScore.sort((a,b)=> b-a));


// // indexof
// console.log(mathScore.indexOf(95));

// // find
// console.log('fine');
// console.log(mathScore.find(score=>score < 95));

// // foreEach
// console.log('foreEach');
// mathScore.forEach(function(score){
//     console.log(score);
// });

// // some
// console.log('some');
// console.log(mathScore.some(score =>score==45));

// // every
// console.log('every');
// console.log(mathScore.every(score =>score>=45));

// // filter
// console.log('filter');
// console.log(mathScore.filter(score => score>70));

// // reduce
// console.log('reduce');
// var result = mathScore.reduce((pre, curr, i) => {
//     console.log(pre, curr, i)
//     return pre+curr;
// });

// //map
// console.log('map');
// console.log(mathScore.map(score => score+10))
// console.log(mathScore);




///////////////////////////////////////////////////////
// completion.map(
//             function(name){
//                 return completion[name]=(completion[name]|0)+1;
//             });   
// var result = participant.find(
//     function(name){
//         return !completion[name]--;
//     }); 
//     console.log(result);

//////////////////////////////////////////////////////////
// completion.map(name=>completion[name]=(completion[name]|0)+1)    
// var result = participant.find( name=> !completion[name]--)
// console.log(result);




