
const noteText = document.getElementById("noteText");
const noteButton = document.getElementById("noteButton")


noteText.textContent = '';

noteButton.addEventListener("click", function (){
event.preventDefault();

const saveNote = noteText.value;
console.log(saveNote);
});
// noteText.style.height = 'auto';
// noteText.style.height = `${noteText.scrollHeight}px`
console.log(noteText.value);