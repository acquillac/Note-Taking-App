// Add a new note
const addNoteBtn = document.getElementById('submit');
addNoteBtn.addEventListener('click', addNote);

function addNote(){
    const textBox = document.getElementById('new-note').value;
    const textNode = document.createTextNode(textBox);
    const newEl = document.createElement('p');
    newEl.className = 'note';
    newEl.appendChild(textNode);
    const grid = document.getElementById('grid-container');
    grid.appendChild(newEl)
    console.log(newEl);
    document.getElementById('new-note').value = '';
}




// Showcase a note
const showbox = document.createElement('div'); 
showbox.id = 'showbox';
document.body.appendChild(showbox);

const notes = document.querySelectorAll('p');
notes.forEach(notes => {
    notes.addEventListener('click', e=>{
        showbox.classList.add('active');

        const newPar = document.createElement('p');
        newPar.innerHTML = notes.innerHTML;

        console.log(newPar.innerHTML);

        showbox.appendChild(newPar);
    })
})

