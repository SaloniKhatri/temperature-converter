function convertTemperature(){
    let temp = parseFloat(document.getElementById('tempInput').value);
    let conversionType = document.getElementById('conversionType').value;
    let result = '';
    

    if (isNaN(temp)){
        result = 'Please enter a valid numnber!'
    }else{

        if(conversionType === 'CtoF'){
            result = `${temp}degC is ${(temp*9/5 + 32).toFixed(2)}degF`;
        }else if(conversionType === 'FtoC'){
            result = `${temp}degF is ${((temp-32)*5/9).toFixed(2)}degC`;

        }else{
            result = 'Invalid conversion type!';
        }
       
    }
    document.getElementById('result').textContent    = result;
}