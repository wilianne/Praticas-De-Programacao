function Calculate(operation){
    const n1 = (document.getElementById('n1').value);
    const n2 = (document.getElementById('n2').value);
    let total_result = 0;
    switch(operation){
        case "+":
            total_result = Sum(n1,n2);
            break
        case "-":
            total_result = Sub(n1,n2);
            break

        case "*":
            total_result = Mult(n1,n2);
            break
        case "/":
            total_result = Div(n1,n2);
            break

    }
    result.innerHTML = "The result is: "+total_result;
}
function Sum(n1,n2){

    return Number(n1) + Number(n2);

}
function Sub(n1,n2){

    return Number(n1) - Number(n2);

}
function Mult(n1,n2){

    return  Number(n1) * Number(n2);
    
}
function Div(n1,n2){
    
    let total_div = 0;
    if (n2 === 0){
        return "dont exist";
    }
    else{
        return Number(n1) / Number(n2);
    }
    

}