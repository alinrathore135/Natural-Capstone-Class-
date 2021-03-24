var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);
    
    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
      console.log("taking selfie --- ");
      speak();
    }

    
}

function speak(){
    var synth = window.speechSynthesis;
    
    speak_data = "Taking you selfie in 5 seconds";


    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    webcame.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}
Webcame.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="selfie.jpeg" src="'+data_url+'">'
    });
}
 function save()
 {
     link = document.getElementById("link");
     image = document.getElementById("selfie_jpej").src ;
     link.href = image;
     link.click();
 }