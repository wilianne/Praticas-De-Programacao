function Sum(){
    //data input
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    
    //processing
    const total_sum = n1 + n2;

    //data output
    
    result.innerHTML = "The result is: "+total_sum;
    console.log('The result is: '+total_sum);


}
function Sub(){
    //data input 
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);

    //processing
    const total_sub = n1 - n2;

    //data output
    result.innerHTML = "The result is: "+total_sub;
    console.log('The result is: '+total_sub);

}
function Mult(){
    //data input
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);

    //processing
    const total_mult = n1 * n2

    //data output
    result.innerHTML = 'The result is: '+total_mult;
    console.log('The result is: '+total_mult);
}
function Div(){
    //data input
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    let total_div = 0;
    //processing
    if (n2 === 0){
        total_div = "dont exist";
    }
    else{
        total_div = n1 / n2;
    }
    

    //data output
    result.innerHTML = 'The result is: '+total_div;
    console.log('The result is: '+total_div);
}