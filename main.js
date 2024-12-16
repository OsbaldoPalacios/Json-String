document.getElementById('convertButton').addEventListener('click', () => {
    console.log("Inicia flujo de conversión")
    const conversionType = document.getElementById('conversionType').value;
    const inputData = document.getElementById('inputData').value;
    const resultOutput = document.getElementById('resultOutput')

    try{
        if(conversionType === 'jsonToString'){
            const parsedJSON = JSON.parse(inputData);
            const escapedString = JSON.stringify(parsedJSON).replace(/"/g, '\\"');
            resultOutput.value = `"${escapedString}"`;
        }else if(conversionType === 'stringToJson'){
            const unescapedString = inputData
                .replace(/^"|"$/g, '')
                .replace(/\\"/g, '"');
            const parsedJSON = JSON.parse(unescapedString);
            resultOutput.value = JSON.stringify(parsedJSON, null, 4);
        }else{
            resultOutput.value = 'Error: Tipo de conversión no válido'
        }
    }catch(error){
        console.log(error)
        resultOutput.value = 'Error: Dato de entrada no válido'
    }
});

document.getElementById("clearButton").addEventListener('click', () => {
    document.getElementById('inputData').value = '';
    document.getElementById('resultOutput').value= '';
})

