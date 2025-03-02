document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("closeButton");
  const homeButton = document.getElementById("homeButton");
  const languageButton = document.querySelector(".dropbtn");
  const languageOptions = document.querySelectorAll(".dropup-content a");

  const dropContent = document.querySelector(".dropup-content");

  const savedLanguage = localStorage.getItem("selectedLanguage");

  //applyTranslation(savedLanguage);

  if (savedLanguage) {
    applyTranslation(savedLanguage);
  }

  // Function to change language
  function setLanguage(language) {
    localStorage.setItem("selectedLanguage", language); // Save language
    languageButton.textContent = language; // Update the button text
    applyTranslation(localStorage.getItem("selectedLanguage"));
    console.log("Language changed to:", language);
  }

  languageButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event bubbling
    dropContent.classList.toggle("show"); // Toggle the "show" class
  });

    // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!languageButton.contains(event.target) && !dropContent.contains(event.target)) {
        dropContent.classList.remove("show"); // Hide dropdown
    }
  });

  closeButton.addEventListener("click", () => {
    window.close();
  });

  homeButton.addEventListener("click", () => {
    window.location.href = "summary-page.html";
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const selectedLanguage = option.textContent; // Get the selected language
      setLanguage(selectedLanguage); // Call the setLanguage function
    });
  });
  
  //applyTranslation(savedLanguage);
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
  Spanish: {
    language: "lenguaje:",
    machineTranslate: "traducción automática:"
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
