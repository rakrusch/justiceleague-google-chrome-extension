document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');
    const homeButton = document.getElementById('homeButton');
    closeButton.addEventListener('click', () => {
      window.close();
    });
  
    homeButton.addEventListener('click', () => {
      window.location.href = 'popup.html';
    });
  
  });