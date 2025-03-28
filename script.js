function plus (){
    var nat = 0, i = 0;
    nat = Fad.fedy.value;
    i= nat.charAt(nat.length-1);
    if (i == "+" || i == "-" || i == "*" || i == "/"){
        nat = nat.substring(0,nat.length-1);

    }else{
        fad.fedy.value  += "+";
    }
        
}