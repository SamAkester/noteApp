
const noteText = document.getElementById("noteText");
const newNote = document.querySelector(".noteSection");
let createButton;
const createdButtons = [];




noteButton.addEventListener("click", function (event){
event.preventDefault();
const typedNote = noteText.value;

if (typedNote.trim() === ""){
    console.log("type note!")
}else{
const createButton = document.createElement("button");
const saveNote = document.createElement("p");
const noteContainer = document.createElement("div");
saveNote.textContent = typedNote;
createButton.textContent = "delete";
createButton.classList.add("createButton");
noteContainer.classList.add("noteContainer")
noteContainer.appendChild(saveNote);
noteContainer.appendChild(createButton);
newNote.appendChild(noteContainer); 
noteText.value = "";
createdButtons.push(createButton);
console.log(typedNote)
}});

console.log(createdButtons);
