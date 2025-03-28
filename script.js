function plus (){
    var nat = document.getElementById("fedy").value;
    var i = nat.charAt(nat.length-1);

    if (i=="+" || i=="-" || i=="*" || i=="/" || i=="/"){

    } else {
        document.getElementById("fedy").value += "+";
    }

}