


var doctors = [
    { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
    { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
    { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
    { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
    { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
    { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
    { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
    { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
    { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
    { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
    { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
    { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
];

doctors = doctors.reduce(function(memo, doctor) {
    console.log(memo,doctor);
    if (doctor.begin > 2000) {
        memo.push({
            doctorNumber: "#" + doctor.number,
            playedBy: doctor.actor,
            yearsPlayed: doctor.end - doctor.begin + 1
        });
    }
    return memo;
}, []);

console.log(JSON.stringify(doctors));




//final code max quadrant
var points = [{x: -1, y: 1 }, {x: -1, y: -1 }, {x: 1, y: -1 }, {x: 2, y: 2 }, {x: -1, y: 2 }, {x: -1, y: -2 }, {x: 1, y: -2 }, {x: 1, y: 6 }, {x: -1, y: 4 }, {x: -3, y: -1 }, {x: 1, y: -1 }, {x: 10, y: 1 }, {x: -1, y: 11 }, {x: -1, y: -1 }, {x: 1, y: -1 } ];


var result=points.reduce( function( accObject, point){
   
    
    
    console.log(accObject);
    
    
    var max_magnitude=0;
    
    
    if(point.x > 0)
        {
            if(point.y >0)
                {
                    //first quadrant
                   // console.log("first quadrant");
                    //console.log(newarray.first.x);
                    //newarray.push(point);
                    
                var magnitude = point.x*point.x + point.y*point.y;

                  if ( magnitude > max_magnitude ) {
                     max_magnitude = magnitude;
                  }
                  
                    
                    //console.log("first quadrant max " +first_max_magnitude);
                     return point;
                    //accObject.push({x:point.x,y:point.y});
                    
                }
            // fourth quandrant
            
             var magnitude = point.x*point.x + point.y*point.y;

            if ( magnitude > max_magnitude ) {
            max_magnitude = magnitude;
          
             }
             //console.log("fourth quadrant max " +fourth_max_magnitude);
             return point;   
            
        }
    
    if(point.y > 0)
        {
            if(point.x < 0)
                {
                    // secound quadrant
                   // console.log("secounds quadrant");
                    //console.log(newarray.secound.x);
                    //newarray.push(point);
                    //console.log("point" +point)
            var magnitude = point.x*point.x + point.y*point.y;

            if ( magnitude > max_magnitude ) {
              max_magnitude = magnitude;
          
             }
                    
                 //console.log("secound quadrant max " +secound_max_magnitude);
                return point;
                }
            //third quadrant 
            
           var magnitude = point.x*point.x + point.y*point.y;

            if ( magnitude > max_magnitude ) {
              max_magnitude = magnitude;
          
             }
            
            //console.log("third quadrant max " +third_max_magnitude);

            return point;

            
            
        }
    
  
}, []);
console.log("result " +JSON.stringify(result));
 

