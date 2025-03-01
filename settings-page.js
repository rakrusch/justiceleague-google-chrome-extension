document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');
    const homeButton = document.getElementById('homeButton');
    const dropbtn = document.getElementById('.dropbtn');
    const languageOptions = document.querySelectorAll('.dropup-content a');
    //const englishButton = document.getElementById('englishButton');
    //const arabicButton = document.getElementById('arabicButton');
    //const swahiliButton = document.getElementById('swahiliButton');
    //const languageButtons = document.querySelectorAll('.language-button');

    closeButton.addEventListener('click', () => {
      window.close();
    });
  
    homeButton.addEventListener('click', () => {
      window.location.href = 'popup.html';
    });
  
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
          const languageCode = this.dataset.lang || this.id.replace('lang-', '');
          //const selectedLanguage = this.textContent;
          closeButton.textContent = languageCode;
        });
    });
  });