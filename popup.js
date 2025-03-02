document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const closeButton = document.getElementById("closeButton");
  // const settingsButton = document.getElementById("settingsButton");

  yesButton.addEventListener("click", () => {
    // Send a message to the background script
    //chrome.runtime.sendMessage({ type: 'GREETING', greeting: 'Hello, background!' }, (response) => {
    // Display an alert with the response message
    //    alert('Response from background: ' + response.response);
    //});

    window.location.href = "summary-page.html";
  });

  noButton.addEventListener("click", () => {
    window.close();
  });

  closeButton.addEventListener("click", () => {
    window.close();
  });

  // settingsButton.addEventListener("click", () => {
    // window.location.href = "settings-page.html";
  // });

  const savedLanguage = localStorage.getItem("selectedLanguage") || "English";
  applyTranslation(savedLanguage);
});

const translations = {
  English: {
    title: "Would you like to summarize this privacy policy?",
    yes: "Yes", 
    no: "No"
  },
  Arabic: {
    title: "هل ترغب في تلخيص سياسة الخصوصية هذه؟",
    yes: "نعم",
    no:"لا"
  },
  Spanish: {
    title: "¿Le gustaría resumir esta política de privacidad?",
    yes: "Sí",
    no: "No"
  },
  Swahili: {
    title: "Je, ungependa kufanya muhtasari wa sera hii ya faragha?",
    yes: "ndio",
    no: "hapana"
  },
};
function applyTranslation(language) {
  const translation = translations[language];
  document.getElementById("titleQ").textContent = translation.title;
  document.getElementById("yesButton").textContent = translation.yes;
  document.getElementById("noButton").textContent = translation.no;

}
