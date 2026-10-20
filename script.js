
const noteText = document.getElementById("noteText");
const newNote = document.querySelector(".noteSection");
const noteTitle = document.getElementById("noteHeader");
const saveButton = document.getElementById("noteButton");
let createButton;
const createdButtons = [];


noteTitle.addEventListener("dblclick", function (){
let newTitle = document.createElement("input");
noteTitle.replaceWith(newTitle);

newTitle.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
noteTitle.textContent = newTitle.value;
newTitle.replaceWith(noteTitle);
    }

});
console.log("click")
});

saveButton.addEventListener("click", function (event,){
event.preventDefault();
const typedNote = noteText.value;

if (typedNote.trim() === ""){
    console.log("type note!")
}else{
    console.log(createdButtons.length)
createButton = document.createElement("button");
const saveNote = document.createElement("p");
const noteContainer = document.createElement("div");
saveNote.textContent = typedNote;
createButton.textContent = "Delete";
createButton.classList.add("createButton");
createButton.addEventListener("click", function (){
noteContainer.remove();
});
noteContainer.classList.add("noteContainer")
noteContainer.appendChild(saveNote);
noteContainer.appendChild(createButton);
newNote.appendChild(noteContainer); 
noteText.value = "";
createdButtons.push(createButton);

console.log(typedNote)
}});


// createButton.addEventListener("click", function (noteContainer){
// noteContainer.remove();
// });


