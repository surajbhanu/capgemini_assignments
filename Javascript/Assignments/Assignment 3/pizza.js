function formsubmit(){
    var form = document.getElementById("myform");
    console.log(form);

    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;

    var chkBox = document.getElementByTagname('<%= cblHotelFacility.ClientID %>');
    var options = chkBox.getElementsByTagName('input');
    var listOfSpans = chkBox.getElementsByTagName('span');
    for (var i = 0; i < options.length; i++)
    {
        if(options[i].checked)
        {
            alert(listOfSpans[i].attributes["JSvalue"].value);
        }
    }

    console.log(name,mail);
}