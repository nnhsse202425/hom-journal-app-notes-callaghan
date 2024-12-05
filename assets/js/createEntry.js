/**
 * contains client-side Javascript functions
 *  (primarily event handlers to fetch data from the Node server)
 */
const submitButton = document.querySelector("input.submit");

submitButton.addEventListener("click", () => {
  // get the values entered by the user
  const date = document.querySelector("input.date").value;
  // a more sophisticated select that selects all input elements of
  //  a class habits that are checked
  const habitOfMindButtons = document.querySelectorAll("input.habits:checked");
  const habitOfMind =
    habitOfMindButtons.length > 0 ? habitOfMindButtons[0].value : null;

  const content = document.querySelector("textarea.content").value;

  console.log(date + "; " + habitOfMind + "; " + content);

  // for now, redirect to the home page
  window.location = "/";
});
