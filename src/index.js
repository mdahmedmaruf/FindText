var longText = document.querySelector("#long_text");
var shortText = document.querySelector("#short_text");
var results = document.querySelector("#results");

shortText.addEventListener("keypress", function() {
  var match = longText.value.indexOf(shortText.value);

  if (match === -1) {
    results.innerHTML = `The Value of ${shortText.value} was not found`;
  } else {
    results.innerHTML = `The Value of ${shortText.value} Was Fount At ${match}`;
  }
});
