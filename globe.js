// {
//     var a = 1; // global variable
//     //let a = 1;   //block scope
//     document.write('print',a+ '<br>');
//     {
//         document.write('print',a+ '<br>');
//     }
//     document.write('print',a+ '<br>');
// }
// document.write('print',a+ '<br>')

// let a = 10;
// a = 20;
// //var a = 10;
// //var a = 20;
// document.write(a);

// const pie = 3.14;
// //pie = 3;
// console.log(pie);

const fruits = {
    f1: 'mango', f2: 'apple'
}
document.write(fruits.f2);
fruits.f1 = 'cherry';
document.write("<br>" + fruits.f1);
fruits = 212;
document.write("<br>" + fruits);