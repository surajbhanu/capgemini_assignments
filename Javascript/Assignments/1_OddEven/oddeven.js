function oddoreven(){
    var num = document.getElementById("input").value;
    var respose = "";
    if(isNaN(num) == true){
        response = "Please enter a valid number";
        document.getElementById('output').innerHTML=response;
    }else{
        if(num%2 == 0){
            response = "You have entered number "+num+" which is a Even number";
        }else{
            response = "You have entered number "+num+" which is a Odd number";
        }
        document.getElementById('output').innerHTML=response;
    };
}
