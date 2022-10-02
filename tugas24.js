function sorting(){
    const arr1 = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("Sebelumnya : "+arr1.join(','))

    var asc = arr1.sort()
    console.log("Ascending : "+asc.join(','))

    var desc = arr1.reverse()
    console.log("Descending : "+desc.join(','))
}

sorting()
