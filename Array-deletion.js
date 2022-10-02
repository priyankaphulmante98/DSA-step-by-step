// function removeEl(){
// let data = [30, 40, 45, 76,20,80];
// let position = document.getElementById("position").value;
// position =parseInt(position); //int convert
// for(let p=position; p<data.length-1; p++){
// //    console.log(data[p]);
//     data[p]=data[p+1];
// } 
//  data.length=data.length-1
// console.log(data);
// }

function removeEl(){
    let data = [30, 40,50,60,70, 80];
    let position = document.getElementById("position").value
    position =parseInt(position);
    for(let p=position; p<data.length-1; p++){
        // console.log(data[p]);
        data[p]=data[p+1];
    }
    data.length=data.length-1
    console.log(data);
}










// let data = [30, 40, 45, 76,20,80];
// data.slice(0,2,45);
// console.log(data);

// let item = [20,30,40,50,70]
// item.slice(2,0,2000,)
// console.log(item);

// let priya =[23,4,5,6,7,8,9]
// priya.splice(2,0,3000)
// console.log(priya);