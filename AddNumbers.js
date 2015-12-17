var arry=[1,2,4,5,6,7,8,9];
var result=arry.reduce( function(acc,array){
    
  //console.log(acc,array);
   
    var sum=acc+array;
    
    return sum;
  
},0);
console.log("result   " +result);

