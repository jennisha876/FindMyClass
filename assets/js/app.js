// Lightweight shared behaviors
(function(){
  function saveSearch(term){
    try {
      var history = JSON.parse(localStorage.getItem('searchHistory')) || [];
      if (term && !history.includes(term)) {
        history.unshift(term);
        localStorage.setItem('searchHistory', JSON.stringify(history.slice(0, 10)));
      }
    } catch(e) {
      console.warn('Search history save failed', e);
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    var input = document.getElementById('myInput');
    if (input) {
      input.addEventListener('input', function(){
        var term = input.value.trim();
        if (term) saveSearch(term);
      });
    }
  });

  // expose helper
  window.getSearchHistory = function(){
    try { return JSON.parse(localStorage.getItem('searchHistory')) || []; }
    catch(e){ return []; }
  };
})();
