function submitForm(event) {
  event.preventDefault();

  var courseSelect = document.getElementById("courseSelect");
  var selectedCourse = courseSelect.options[courseSelect.selectedIndex].text;

  var ratingInputs = document.getElementsByName("rating");
  var userRating = 0;

  for (var i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      userRating = ratingInputs[i].value;
      break;
    }
  }

  if (selectedCourse === "select" || userRating === 0) {
    alert("Please select a course and provide a rating before submitting.");
  } else {
    alert("Thank you for your feedback!\nYour rating for course " + selectedCourse + " is " + userRating);
    
  }
}