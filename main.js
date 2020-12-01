// 1) custom map

/* var arr = [1, 2, 3, 4, 5];

function customMap(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var acc = arr[i] ** 2;
        result.push(acc);
    }

    return result;
}

var res = customMap(arr);
console.log(res); */


// 2) custom filter

var arr = [1, 2, 3, 4, 5];

function customFilter(arr) {
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

var res = customFilter(arr);

console.log(res);

// 3) main task