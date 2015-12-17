var list = [
  {
    "id": 1,
    "status": 1,
    "inputs": [
      "asd",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "test",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "gfg",
      ""
    ],
    "outputs": [
      ""
    ]
  }
]


var result=list.reduce(function (object,array) {
    
    if(array.inputs.length > 0){
        object.push({
            id:array.id
        });
    }
    return object;
  },[]);
console.log("result" +JSON.stringify(result));
