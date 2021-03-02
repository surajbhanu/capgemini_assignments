function farentocel(){
    var farenheit = document.getElementById("input").value;

    if(isNaN(farenheit)){
        var response = "Please enter a valid number in Farenheit";
        document.getElementById('output').innerHTML=response;
        return;
    }

    var celsius = farenheit - 32;
    var response = "Its "+ celsius +" Degree Celsius";
    document.getElementById('output').innerHTML=response;
}