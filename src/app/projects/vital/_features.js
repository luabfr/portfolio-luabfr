function featBruma( bruma ){
    if(bruma){
        return "Smooth";
    }else{
        return "Not today";
    }
}

function featMosquitas( mosquitas ){
    if(mosquitas){
        return "Some flies";
    }else{
        return "Fortunately not";
    }
}

function featMosquitasAmount( mosquitasAmount ){
    if(mosquitasAmount == undefined){
        return "-";
    }else{
        return mosquitasAmount;
    }
}

function featArbustos( hayArbustos ){
    if(hayArbustos){
        return "Yeah, i like them";
    }else{
        return "Nope";
    }

}

function featMidnite( isMidnite ){
    if(isMidnite){
        return "Nocturnal wildlife";
    }else{
        return "Day life";
    }
}

function featTonoNatura( tono ){
    if(tono >= 0 && tono <= 30){
        return "Warm";
    }else if(tono >= 30 && tono <= 50){
        return "Fresh";
    }else if(tono >= 50 && tono <= 70){
        return "Cold";
    }else if(tono >= 70 && tono <= 100){
        return "Exotic";
    }
}

function featBugs( isBug ){
    if(isBug == 1){
        return "Only him";
    }else if(isBug == 2){
        return "Him and his friend";
    }else if(isBug == 3){
        return "All in the family";
    }
}