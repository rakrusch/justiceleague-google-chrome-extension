document.addEventListener('DOMContentLoaded', function () {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const closeButton = document.getElementById('closeButton');



  yesButton.addEventListener('click', () => {
      // Send a message to the background script
      //chrome.runtime.sendMessage({ type: 'GREETING', greeting: 'Hello, background!' }, (response) => {
          // Display an alert with the response message
      //    alert('Response from background: ' + response.response);
      //});

      window.location.href = 'summary-page.html';

  });

  noButton.addEventListener('click', () => {
    window.location.href = 'settings-page.html';
    //window.close();
  });

  closeButton.addEventListener('click', () => {
    window.close();
  });

});
