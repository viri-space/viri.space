var titles = ['watch your head', 'ok', 'stay hydrated']
var title = titles[Math.floor(Math.random() * titles.length)] // pick random item
document.title = title

function goBack() {
  window.history.back();
}
