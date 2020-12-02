// 1) map

var arr = [1, 2, 3, 4, 5];

function toSquare(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var acc = arr[i] ** 2;
        result.push(acc);
    }

    return result;
}

var res = toSquare(arr);
console.log(res);


// 2) filter

var arr = [1, 2, 3, 4, 5];

function checkMultiplicity(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var acc = 0;
        if(arr[i] % 2 === 0) {
            acc = arr[i];
            result.push(acc);
        }         
    }

    return result;
}

var res = checkMultiplicity(arr);

console.log(res);

// 3) main task

var notification = [
    {
        date: '31/07/2019',
        msg: 'message 1'
    },
    {
        date: '31/07/2019',
        msg: 'message 2'
    },
    {
        date: '30/07/2019',
        msg: 'message 3'
    },
    {
        date: '25/09/2019',
        msg: 'message 4'
    }
];

var result = notification.reduce(function(acc, info) {

    if(info.date === info.date) {
        acc[info.date];

        if(!acc[info.date]) {
            acc[info.date] = [];
        }
        
        acc[info.date].push(info.msg);
    }
    
    return acc;
}, {});

console.log(result);
