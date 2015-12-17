

var points = [{x: -1, y: 1 }, {x: -1, y: -1 }, {x: 1, y: -1 }, {x: 2, y: 2 }, {x: -1, y: 2 }, {x: -1, y: -2 }, {x: 1, y: -2 }, {x: 1, y: 6 }, {x: -1, y: 4 }, {x: -3, y: -1 }, {x: 1, y: -1 }, {x: 10, y: 1 }, {x: -1, y: 11 }, {x: -1, y: -1 }, {x: 1, y: -1 } ];


function getMagnitude(point) {

      var magnitude = point.x*point.x + point.y*point.y;

        return magnitude;

}


var result=points.reduce( function( accObject, point){
    console.log(accObject)
    if(point.x >= 0)
        {
            if(point.y >=0)
                {
                  //first quad
                    
                    var magnitude=getMagnitude(point);
                    if (getMagnitude(point) > getMagnitude(accObject.first))
                        accObject.first = point;
                        
                    return accObject;
                    
                    
                    
                }
            // fourth quandrant
            

                    var magnitude=getMagnitude(point);
                    if (getMagnitude(point) > getMagnitude(accObject.fourth))
                        accObject.fourth = point;
                    
                    return accObject;
            
        }
    
        if(point.y >= 0) {
                    // secound quadrant
      
                var magnitude=getMagnitude(point); 
              if (getMagnitude(point) > getMagnitude(accObject.second))
                        accObject.second = point;
                return accObject;
        }
        //third quadrant 
            
        var magnitude=getMagnitude(point);
        if (getMagnitude(point) > getMagnitude(accObject.third))
             accObject.third = point;
                    
        return accObject;
                        
    
  
}, {first:{ x: 0, y: 0 },second:{ x: 0 , y: 0},third:{ x: 0 , y: 0},fourth:{x: 0, y: 0}});
console.log("result ",result);