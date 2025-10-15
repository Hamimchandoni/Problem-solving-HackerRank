function compareTriplets(a, b) {
    let point1 = 0;
    let point2 = 0;
    let len = a.length
    for(let i = 0; i < len; i++){
        if(a[i] > b[i]){
            point1++
        }else if(a[i] < b[i]){
            point2++
        }
    } 
    return [point1, point2]
}