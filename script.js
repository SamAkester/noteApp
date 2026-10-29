
const noteText = document.getElementById("noteText");
const newNote = document.querySelector(".noteSection");
const noteTitle = document.getElementById("noteHeader");
const saveButton = document.getElementById("noteButton");
const createdButtons = [];



function editNote(saveNote){
saveNote.addEventListener("dblclick" , function(){
saveNote.contentEditable = true;
        saveNote.focus();
        completeNoteEdit(saveNote);

})};

function completeNoteEdit(saveNote){
    saveNote.addEventListener("keydown" ,function(e){
        if (e.key === "Enter"){
saveNote.contentEditable = false;
        }
    });
}
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
const createButton = document.createElement("button");
noteContainer.appendChild(createButton)
createButton.textContent = "Delete";
createButton.classList.add("createButton");

const deleteNoteFromServer = async (id, noteContainer) => {
    try {
        const response = await fetch(`http://localhost:3000/notes/${id}`,{
            method:"DELETE",

        })
        if (response.ok){
            noteContainer.remove();

        }else{
            console.error("failed to delete note. Status:", response.status);
        }
    } catch (error){
        console.error(`error deleting note:`, error);
    }
}

createButton.addEventListener("click", function (){
deleteNoteFromServer(noteContainer.dataset.id, noteContainer);
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
const saveNote = document.createElement("p");
const noteContainer = document.createElement("div");
saveNote.textContent = typedNote;
deleteNote(saveNote, noteContainer);
noteContainer.classList.add("noteContainer")
noteContainer.appendChild(saveNote);

newNote.appendChild(noteContainer); 
console.log(newNote.innerHTML)
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
    noteContainer.dataset.id = data.id

})
.catch(error => {
    console.log("error sending note", error);
});
};
};
saveButton.addEventListener("click", saveNoteFunction);
noteText.addEventListener("keydown",saveNoteFunction);

// load saved notes when the page opens
fetch("http://localhost:3000/notes")
    .then(response => response.json())
    .then(notes =>  {
        notes.forEach(function(note){
       
const saveNote = document.createElement("p");
const noteContainer = document.createElement("div");
noteContainer.dataset.id = note.id;
console.log(note.id);
saveNote.textContent = note.content;
deleteNote(saveNote, noteContainer);
noteContainer.classList.add("noteContainer");
noteContainer.appendChild(saveNote);
newNote.appendChild(noteContainer);
editNote(saveNote);
        })

     });
