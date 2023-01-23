//Task 1
document.getElementById("hider").onclick = function () {
  document.getElementById("text").hidden = true;
};

//Task 2
alert(2);

//Task 3
let panes = document.querySelectorAll(".pane");
for (let pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  pane.firstChild.onclick = () => pane.remove();
}
