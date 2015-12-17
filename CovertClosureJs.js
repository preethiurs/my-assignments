
var convert=function()
    {
  var multiplyfactor=0.62137;
           
    return {
    getkilometers: function(mi){
       return mi/multiplyfactor;
    },
    
    getmiles: function(km){
       return km*multiplyfactor;
    }
          
  };
}()
    
function getConvertMiles()
{
    var km=document.getElementById("kilometer").value;
    document.getElementById("kilomresult").value=convert.getmiles(km);
}
function getConvertKilometer()
{
    var mi=document.getElementById("miles").value;
    document.getElementById("milesresult").value=convert.getkilometers(mi);
}

    
    
    
    


    


