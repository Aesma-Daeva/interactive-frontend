function getDate(){
  var today = new Date();
  var year = today.getFullYear();
  document.getElementById("footerYear").innerHTML = year;
}

getDate();