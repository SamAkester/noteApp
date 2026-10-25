

const noteText = document.getElementById("noteText");
const newNote = document.querySelector(".noteSection");
const noteTitle = document.getElementById("noteHeader");
const saveButton = document.getElementById("noteButton");
let createButton;
const createdButtons = [];


function editNote(saveNote, enter){
    
saveNote.addEventListener("dblclick" , function(){
saveNote.contentEditable = true;
        saveNote.focus();

    saveNote.addEventListener("keydown", function(e){
if (e.key === "Enter"){
    e.preventDefault();
    saveNote.contentEditable = false;
}})
})};


//edit title
noteTitle.addEventListener("dblclick", function (e){
    noteTitle.contentEditable = true;
    noteTitle.focus();
noteTitle.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
                    e.preventDefault();
    console.log("enter")

noteTitle.contentEditable = false;
    }
});
});
//double click to delete note
function deleteNote(saveNote ,noteContainer){


    saveNote.addEventListener("dblclick" , function(){
           if (noteContainer.querySelector(".createButton")){
return; } 

createButton = document.createElement("button");
noteContainer.appendChild(createButton)
createButton.textContent = "Delete";
createButton.classList.add("createButton");
createButton.addEventListener("click", function (){
noteContainer.remove();
});
    });
};
//save note

function saveNoteFunction(event){
    if (event.type === "keydown" && event.key != "Enter") return;
event.preventDefault();
const typedNote = noteText.value;

if (typedNote.trim() === ""){
    console.log("type note!")
}else{
    console.log(createdButtons.length)
const saveNote = document.createElement("p");
const noteContainer = document.createElement("div");
saveNote.textContent = typedNote;
deleteNote(saveNote, noteContainer);
noteContainer.classList.add("noteContainer")
noteContainer.appendChild(saveNote);
newNote.appendChild(noteContainer); 
noteText.value = "";
editNote(saveNote);

fetch("http://localhost:3000/notes",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        content:typedNote
    })
})
.then(response => response.json())
.then(data => {
    console.log(data.message);
})
.catch(error => {
    console.log("error sending note", error);
});

};
console.log(typedNote)
};
saveButton.addEventListener("click", saveNoteFunction);
noteText.addEventListener("keydown",saveNoteFunction);






// createButton.addEventListener("click", function (noteContainer){
// noteContainer.remove();
// });


