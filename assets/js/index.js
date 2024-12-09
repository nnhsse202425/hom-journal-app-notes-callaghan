/**
 * contains client-side JavaScript function
 *  (primarily event handlers to fetch data from the Node server)
 */
const socket = window.io();

socket.on("new entry", (entry) => {
  console.log(entry);
  const element = document.createElement("div");
  element.className = "entry";
  element.innerHTML = `
    <div>${entry.date}</div>
      <div class="entryHabit">${entry.habit}</div>
      <div class="entryContent">${entry.content}</div>
      <div>
        <a href="/editEntry/${entry.id}" role="button" class="secondary">
          Edit
        </a>
      </div>
  `;
  document.getElementById("entries").append(element);
});
