function cityreport() {
    alert("Weather Report Loading...");   
}

var cookiegone = document.querySelector(".cookiebutton");
// console.log(cookiegone);

function cookieAgree() {
    cookiegone.parentElement.remove();

}

//  temp converting below
// var degree = "°C"

//  function tempConvert(element){
//     
//        convert C to F:  (temperature * 9 / 5 + 32)}
//         convert F to C ((temperature - 32) * 5 / 9 );{
//            ???  temperature.innerText = element.value;
//      }
// 

var Ctemp=[ Number(document.getElementsByClassName("temp")[0].innerHTML),
            Number(document.getElementsByClassName("temp")[1].innerHTML),
            Number(document.getElementsByClassName("temp")[2].innerHTML),
            Number(document.getElementsByClassName("temp")[3].innerHTML),
            Number(document.getElementsByClassName("temp")[4].innerHTML),
            Number(document.getElementsByClassName("temp")[5].innerHTML),
            Number(document.getElementsByClassName("temp")[6].innerHTML),
            Number(document.getElementsByClassName("temp")[7].innerHTML), ];
    // console.log(Ctemp);checking for debug purposes
// var tempunit = document.getElementById("unit").value;
//     console.log(tempunit); used to check grabbing correct id

function tempConvert() {
    var tempunit = document.getElementById("unit").value;
    // console.log(tempunit);
    for(var i = 0; i < Ctemp.length; i++){
        if(tempunit=="fahren"){
        Ctemp[i]=Math.floor(Ctemp[i] * 9 / 5 + 32);
        // console.log(Ctemp[i]);
        document.getElementsByClassName("temp")[i].innerHTML = Ctemp[i];  
    }else{
        Ctemp[i]=Math.floor((Ctemp[i]-32) * 5 / 9);
        // console.log(Ctemp[1]);
        document.getElementsByClassName("temp")[i].innerHTML = Ctemp[i];
        }
    }
}

