// Lightweight shared behaviors
(function(){
  // V2 helpers for history with timestamps
  function getV2(){ try { return JSON.parse(localStorage.getItem('searchHistoryV2')) || []; } catch(e){ return []; } }
  function setV2(list){ localStorage.setItem('searchHistoryV2', JSON.stringify(list)); }

  document.addEventListener('DOMContentLoaded', function(){
    var input = document.getElementById('myInput');
    var searchGo = document.getElementById('searchGo');

    function commit(){
      var term = (input && input.value || '').trim();
      if (!term) return;
      var list = getV2();
      list.unshift({ q: term, ts: Date.now() });
      const seen = new Set();
      list = list.filter(item => { if (seen.has(item.q)) return false; seen.add(item.q); return true; }).slice(0, 200);
      setV2(list);
    }

    if (input) {
      input.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); commit(); } });
    }
    if (searchGo) { searchGo.addEventListener('click', commit); }
  });

  // expose helpers
  window.getSearchHistoryV2 = getV2;
  window.clearSearchHistory = function(){ setV2([]); };
})();
