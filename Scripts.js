function buttonClicked(value) {
    const output = document.getElementById('output');

    if (value === 'C') {
        output.value = '';
        
    }else if (value === 'CE'){
        output.value = output.value.slice(0, -1);

    }else{
        output.value += value; 
    }
}
  
    function calculate() {
        let output = document.getElementById('output');
        let expression = output.value.trim();
    
        try {
            let result = eval(expression); 
                if( result % 1 !==0 ){
                    output.value = result.toFixed(2);

                }if (result === Infinity){
                    output.value = 0;
                    
                }else{
                    output.value = result;
                }
        }catch (error) {
            output.value = 'Error: Expresión inválida'; 
        }
    }  