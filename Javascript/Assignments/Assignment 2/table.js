    function drawtable(){
        var numrows = document.getElementById("rows").value;
        var numcols = document.getElementById("columns").value;
    
        console.log(numcols,numrows);

        for(var r=0;r<parseInt(numrows,10);r++)
        {
            var x=document.getElementById('output').insertRow(r);
            for(var c=0;c<parseInt(numcols,10);c++)  
            {
                var y=  x.insertCell(c);
                y.innerHTML="Row-"+r+" Column-"+c; 
                y.id= r+"t"+c;
            }
        }
    }
