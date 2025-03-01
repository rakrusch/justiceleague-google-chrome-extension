document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("closeButton");
  const homeButton = document.getElementById("homeButton");
  const languageButton = document.querySelector(".dropbtn");
  const languageOptions = document.querySelectorAll(".dropup-content a");

  const savedLanguage = localStorage.getItem("selectedLanguage");

  applyTranslation(savedLanguage);

  if (savedLanguage) {
    languageButton.textContent = savedLanguage;
  }

  // Function to change language
  function setLanguage(language) {
    localStorage.setItem("selectedLanguage", language); // Save language
    languageButton.textContent = language; // Update the button text
    console.log("Language changed to:", language);
  }

  closeButton.addEventListener("click", () => {
    window.close();
  });

  homeButton.addEventListener("click", () => {
    window.location.href = "popup.html";
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const selectedLanguage = option.textContent; // Get the selected language
      setLanguage(selectedLanguage); // Call the setLanguage function
    });
  });
  
  applyTranslation(savedLanguage);
});

const translations = {
  English: {
    language: "Language:",
    machineTranslate: "Machine Translate:",
  },
  Arabic: {
    language: "لغة:",
    machineTranslate: "الترجمة الآلية:",
  },
  Swahili: {
    language: "Lugha:",
    machineTranslate: "Ufasiri wa mashine:",
  },
};
function applyTranslation(language) {
  const translation = translations[language];
  document.getElementById("lang").textContent = translation.language;
  document.getElementById("machineTranslate").textContent = translation.machineTranslate;
}
