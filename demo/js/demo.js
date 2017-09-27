document.addEventListener('WebComponentsReady', function() {

  var button = document.querySelector('button');
  var notification = document.querySelector('notifications-bubbles');
  button.addEventListener('click', function() {
    notification.set('motion', true);
    window.setTimeout(function() {
      notification.set('motion', false);
    }, 700);
  });

});
