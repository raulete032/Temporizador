
import {createTimeString} from "./library.js";


setInterval(()=>{
    let currentTime= new Date();
    currentTime= createTimeString(currentTime);
    document.getElementById("currentTime").innerHTML="Hora actual: " + currentTime;
}, 1000);

var sound=null;
var interval=null;
document.getElementById("bStart").onclick= ()=>{
    
    document.getElementById("error").innerHTML="";

    document.getElementById("bStart").style.display="none";
    document.getElementById("bRestart").style.display="initial";

    document.getElementById("hours").disabled=true;
    document.getElementById("minutes").disabled=true;
    document.getElementById("seconds").disabled=true;

    
    let h= parseInt(document.getElementById("hours").value);
    let m= parseInt(document.getElementById("minutes").value);
    let s= parseInt(document.getElementById("seconds").value);

    if(h<=-1)
        document.getElementById("error").innerHTML+="Las horas no son correctas<br>";

    if(m<=-1 || m>=60)
        document.getElementById("error").innerHTML+="Los minutos no son correctos<br>";

    if(s<=-1 || s>=60)
        document.getElementById("error").innerHTML+="Los segundos no son correctos";

    let sw= document.getElementById("error").textContent;

    if(sw!="") //Hay algún error, se sale
        return;

    if(h==0 && m==0 && s==0)
        return;
    
    //En este punto los datos introducidos son correctos

    interval= setInterval(()=>{

        if(s>=1)
            s--;
        else
            s=59;
        
        if(s==0)
            if(m>0)
                m--;
        if(m==0)
            if(h>0){
                h--;
                m=59;
            }
                

        let str="";
        if(h<=9)
            str+="0"+h+":";
        else
            str+=h+":";    
        
        if(m<=9)
            str+="0"+m+":";
        else
            str+=m+":"

        if(s<=9)
            str+="0"+s;
        else
            str+=s;
        
        document.getElementById("countdown").innerHTML=str;
        
        if(h==0 && m==0 && s==0){
            clearInterval(interval);
            sound= new Audio("./audio/alarma.mp3");
            sound.play();           
            sound.loop=true;            
            
            document.getElementById("bStart").style.display="none";
            document.getElementById("bRestart").style.display="none";
            document.getElementById("bStop").style.display="initial";
        }    
    }, 1000);
}

document.getElementById("bStop").onclick= ()=>{
    
    sound.pause();

    document.getElementById("bStart").style.display="initial";
    document.getElementById("bStop").style.display="none";
    document.getElementById("bRestart").style.display="none";

    document.getElementById("hours").disabled=false;
    document.getElementById("minutes").disabled=false;
    document.getElementById("seconds").disabled=false;

    document.getElementById("hours").value=0;
    document.getElementById("minutes").value=0;
    document.getElementById("seconds").value=0;
}

document.getElementById("bRestart").onclick= ()=>{

    clearInterval(interval);
    document.getElementById("countdown").innerHTML="";

    document.getElementById("hours").disabled=false;
    document.getElementById("minutes").disabled=false;
    document.getElementById("seconds").disabled=false;

    document.getElementById("hours").value=0;
    document.getElementById("minutes").value=0;
    document.getElementById("seconds").value=0;

    document.getElementById("bStart").style.display="initial";
    document.getElementById("bStop").style.display="none";
    document.getElementById("bRestart").style.display="none";

}
