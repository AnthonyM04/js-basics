const numArray = [
    'value1',   //0
    'value2',   //1
    'value3',   //2
    [           //3
        'sub-value1',   //0
        'sub-value2',   //1
        'sub-value3'   //2
    ],
    [           //4
        'sub-valueA',   //0
        'sub-valueB',   //1
        'sub-valueC'    //2
    ],
    {
        name: 'Jiho', //name
        gender: 'male' //gender
    },
]

console.log( numArray[4][3])
console.log( numArray[5]['name'])
