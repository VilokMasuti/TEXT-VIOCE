let speech = new SpeechSynthesisUtterance();
 let voices = [];
  let voiceselct = document.querySelector("select");
  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i) => (voiceselct.options[i] =new Option(voice.name,i)));
  }

  voiceselct.addEventListener("change", ()=>{
    speech.voice= voices [voiceselct.value];
  })


document.addEventListener("click",() =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});