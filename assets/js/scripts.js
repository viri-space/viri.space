// var titles = ['watch your head', 'ok', 'stay hydrated']
// var title = titles[Math.floor(Math.random() * titles.length)] // pick random item
// document.title = title
//
// function goBack() {
//   window.history.back();
// }

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
