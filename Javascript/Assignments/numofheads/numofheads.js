window.onload = function(){
    document.getElementById('click').onclick = click;

    var heads = 0;
    var tails = 0;
    var headsratio = 0;
    var tailsratio = 0;
    function click() {  
        var rep =50;
        for(var i=0; i<rep; i++){
            console.log(rep);
            x = (Math.floor(Math.random() * 2) == 0);
            if(x){
    	        //flip("heads");
                heads++;
            }else{
                //flip("tails");
                tails++;
            }
        }
        headsratio = heads/rep*10;
        tailsratio = tails/rep*10;

        document.getElementById("result").innerHTML = "<br>Number of Heads = "+heads+"<br>Number of Tails = "+tails+ "<br>Ratio of Heads:Tails = "+ headsratio +" : "+tailsratio;
        heads=0;
        tails=0;
    }
}