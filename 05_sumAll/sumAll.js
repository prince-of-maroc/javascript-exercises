const sumAll = (num1, num2) => {
    if(num1 < 0 || num2 < 0) return "ERROR";
    if(typeof(num1) != "number" || typeof(num2) != "number") return "ERROR";
    if(num1 > num2){
        floor = num2;
        ceiling = num1;
    } else {
        floor = num1;
        ceiling = num2;
    }
    
    let final_number = 0;
    for(i = floor; i <= ceiling; i++){
        final_number += i;
    }
    return final_number;
};

// Do not edit below this line
module.exports = sumAll;
