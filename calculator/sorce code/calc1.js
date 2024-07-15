var disp = document.getElementById("display")
        
function appendToDisplay(value){
    disp.value+= value
}

function clearDisplay(){
    disp.value="";
}

function evaluation(){
    var equation =disp.value
    try{
        disp.value=eval(equation)
    }catch(e){
        disp.value= e
    }
}

function del(){
    equation = disp.value
    equation=equation.slice(0,equation.length -1)
    disp.value=equation
}