
var SpeechRecognition = window.webkitSpeechRecognition;
var Lia=new SpeechRecognition();
var camera=document.getElementById("camera")


function stbutton(){
    Lia.start()

}
Lia.onresult = function(event){
console.log(event)
var content=event.results[0][0].transcript


Webcam.attach(camera);
}


Webcam.set({
    width:600,
    height:300,
    image_format:'png',
    png_quality:100
});
