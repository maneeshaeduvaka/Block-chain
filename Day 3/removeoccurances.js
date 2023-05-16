let array = [1,2,3,1,4,6,4,4];
let value = 4;
for(let i=0;i<=array.length;i++){
    if(array[i] == value){
        array.splice(array[i]);
    }
}
console.log(array);