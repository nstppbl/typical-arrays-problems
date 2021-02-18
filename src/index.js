
exports.min = function min (array) {
    
    if (!array || !array.length) {
        return 0 }
        
    let minm = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] < minm) {
            minm = array[i] 
        }  
        }   
    return minm 
}

exports.max = function max (array) {

    if (!array || !array.length) {
        return 0 }

    let maxm = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] > maxm) {
            maxm = array[i]
        }
    }
    return maxm 
}

exports.avg = function avg (array) {

    if (!array || !array.length) {
        return 0 }

    let sum = 0
    for (var i = 0; i < array.length; i++){
            sum = sum + array[i]
        }
    return (sum/array.length)
}
