function makeTextBigger() {
    const textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
  }
  
  function changeTextStyle() {
    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancy");
  
    if (fancyRadio.checked) {
      alert("FancyShmancy selected!");
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      alert("BoringBetty selected!");
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function mooText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
  
    // Add "-Moo" to the last word of each sentence
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
      }
      sentences[i] = words.join(" ");
    }
  
    textArea.value = sentences.join(". ");
  }
  