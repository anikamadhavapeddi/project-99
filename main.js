var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function (event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if (Content=="take my selfie"){
        console.log("taking selfie ---");
        speak();
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function(){
        img_id="Selfie1"
        take_snapshot();
        speak_data="Taking your selfie in 5 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);}
    setTimeout(function(){
        img_id="Selfie2"
        take_snapshot();
        speak_data="Taking your selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function(){
        img_id="Selfie3"
        take_snapshot();
        speak_data="Taking your selfie in 15 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
   

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id="Selfie1"){
            document.getElementById("result1").innerHTML='<img id="Selfie1" src="'+data_uri+'"/>';
        }
        if(img_id="Selfie2"){
            document.getElementById("result2").innerHTML='<img id="Selfie2" src="'+data_uri+'"/>';
        }
        if(img_id="Selfie3"){
            document.getElementById("result3").innerHTML='<img id="Selfie3" src="'+data_uri+'"/>';
        }
       
    })
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
    
});
camera=document.getElementById("camera");