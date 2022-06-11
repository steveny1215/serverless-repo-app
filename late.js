// start coding your function here!
function running_late(date){
    if(date <= 10){
        return "It's late!";
    }else{
        return "It is still early!";
    }
}
exports.running_late = running_late;
