
var list = [1,2,3,4];
function average(data)
{
    
    var sum = data.reduce(function(sum, value){
        return sum + value;
       }, 0);

      return sum / data.length;
 
}
function variance(list)
{
     var avg = average(list);
  
     var squareDiffs = list.map(function(value){
     var diff = value - avg;
     var sqrDiff = diff * diff;
     return sqrDiff;
      });
  
    return average(squareDiffs);
     

}

console.log(" Mean " +average(list));
console.log(" Variance " +variance(list));