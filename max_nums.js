// start coding your function here!

/*
function find_max(arr){
    let max_num = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max_num){
            max_num = arr[i];
        }
    }
    return max_num;
}

exports.find_max = find_max;
*/
function find_max(arr) {
    return Math.max(...arr);
}
exports.find_max = find_max