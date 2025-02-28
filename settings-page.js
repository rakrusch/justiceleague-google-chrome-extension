document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');
    const homeButton = document.getElementById('homeButton');
    const dropbtn = document.getElementById('.dropbtn');
    const languageOptions = document.querySelectorAll('.dropup-content a');

    closeButton.addEventListener('click', () => {
      window.close();
    });
  
    homeButton.addEventListener('click', () => {
      window.location.href = 'popup.html';
    });
  
    languageOptions.forEach(option => {
        option.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLanguage = this.textContent;
            dropbtn.textContent = selectedLanguage + " ▼";
        });
    });
  });