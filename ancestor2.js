// ancestors

var peopleTree = {
 "sandeep": "shashi",
 "nanha": "shashi",
 "harish": "nanha",
 "divya": "harish",
 "arjun": "sandeep",
 "shashi": "vinoj",
 "vishal": "divya"
}


var ages = {
 'sandeep': 23,
 'shashi': 26,
 'nanha': 22,
 'harish': 24,
 'divya': 30,
 'arjun': 25,
 'vinoj': 26,
 'vishal': 5
}

var ancestor=[];
var age=[];

function getAncestors(input,peopleTree,ages){
  
  if(ancestor.indexOf(input)==-1){  
  ancestor.push(input);
  age.push(ages[input]);  
  }
 
  for(var i in peopleTree)
  {
  if(i == input){
      input=peopleTree[input]; 
      getAncestors(input,peopleTree,ages);
   
  } 
   
}
}

getAncestors('harish',peopleTree,ages);
console.log(ancestor,age);

<%  <p> element</p> %>



