document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');
    const settingsButton = document.getElementById('settingsButton');
    closeButton.addEventListener('click', () => {
      window.close();
    });
  
    settingsButton.addEventListener('click', () => {
      window.location.href = 'settings-page.html';
    });
  
  });
  