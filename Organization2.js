var people = [{
 name: 'Sandeep',
 empId: 0,
 age: 23,
 orgId: 1
}, {
 name: 'Arjun',
 empId: 1,
 age: 25,
 orgId: 2
}, {
 name: 'Nanha',
 empId: 3,
 age: 22,
 orgId: 1
}, {
 name: 'Nandu',
 empId: 4,
 age: 53,
 orgId: 3
}];

var organizations = [{
 name: 'Razorthink',
 id: 1,
 employees: [0, 3]
}, {
 name: 'Apple',
 id: 2,
 employees: [1]
}, {
 name: 'Microsoft',
 id: 3,
 employees: [4]
}];


people = people.filter(function(value, index,arra) {
    
    var ogrid=0;
    var OrganiseId = organizations.map(function(organization) {
         if(organization.name== "Microsoft"){
            ogrid=organization.id;
        }
        
      });
   
    if (value.orgId == ogrid) {
        return true;
       
    }
    return false;
    
});

console.log("people " +JSON.stringify(people));





