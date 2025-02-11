"use strict";
function zipList(list1, list2) {
    const res = [];
    for (let i = 0; i < list1.length; i++) {
        res.push(list1[i]);
        res.push(list2[i]);
    }
    return res;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(list1, list2) {
    let i = 0;
    const res = [];
    list1.forEach((d) => {
        res.push(d);
        res.push(list2[i]);
        i++;
    });
    return res;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
