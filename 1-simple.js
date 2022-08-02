if ("speechSynthesis" in window) {
  let demo = document.getElementById("demoA");
  demo.onclick = () => {
    let msg = new SpeechSynthesisUtterance("Hello, World!");
    speechSynthesis.speak(msg);
  };
  demo.disabled = false;
}
