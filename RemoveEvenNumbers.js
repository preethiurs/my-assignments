var arry=[1,2,4,5,6,7,8,9];
var result=arry.filter( function(element){
    
    
   if (element % 2 == 0) {
            return false;
        }
    return true;
   
});
console.log(result);

