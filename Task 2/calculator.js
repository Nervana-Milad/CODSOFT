function display_on_screen(val) {
  document.getElementById("res").value += val;
}

function Clear() {
  document.getElementById("res").value = "";
}

function finalResult() {
  var p = document.getElementById("res").value;
  var q = eval(p);
  document.getElementById("res").value = q;
}

function delete_last_number() {
  var r = document.getElementById("res").value;
  var ans = r.toString().slice(0, -1);
  document.getElementById("res").value = ans;
}
