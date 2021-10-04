// Showcase a note
const showbox = document.createElement('div'); 
showbox.id = 'showbox';
document.body.appendChild(showbox);

// Checking for notes
document.addEventListener('DOMContentLoaded', getNotes);
function getNotes(textBox){
    let textBoxs;
    if(localStorage.getItem('textBoxs') === null){
        textBoxs = [];
    }else{
        textBoxs = JSON.parse(localStorage.getItem('textBoxs'));
    }
    textBoxs.forEach(function(textBox){
        
        const textNode = document.createTextNode(textBox);
        const newEl = document.createElement('p');
        newEl.className = 'note';
        newEl.appendChild(textNode);
        const grid = document.getElementById('grid-container');
        grid.appendChild(newEl)
        document.getElementById('new-note').value = '';
    });

    const notes = document.querySelectorAll('p');
    notes.forEach(notes => {
    notes.addEventListener('click', e=>{
        showbox.classList.add('active');

        const newPar = document.createElement('p');
        newPar.innerHTML = notes.innerHTML;

        while(showbox.firstChild){
            showbox.removeChild(showbox.firstChild)
        }

        showbox.appendChild(newPar);
    })
    })
    showbox.addEventListener('click', e =>{
        if(e.target !== e.currentTarget) return
        showbox.classList.remove('active');
    })
}

// Add a new note
const addNoteBtn = document.getElementById('submit');
addNoteBtn.addEventListener('click', addNote);

function addNote(){
    const textBox = document.getElementById('new-note').value;
    if(textBox ===''){
        alert('Add a Note');
    }
    const textNode = document.createTextNode(textBox);
    const newEl = document.createElement('p');
    newEl.className = 'note';
    newEl.appendChild(textNode);
    const grid = document.getElementById('grid-container');
    grid.appendChild(newEl)
    document.getElementById('new-note').value = '';

    // Adding To Storage
    storeInLocalStorage(textBox);

    // Adding Showcase New Note
    const notes = document.querySelectorAll('p');
    notes.forEach(notes => {
    notes.addEventListener('click', e=>{
        showbox.classList.add('active');

        const newPar = document.createElement('p');
        newPar.innerHTML = notes.innerHTML;

        while(showbox.firstChild){
            showbox.removeChild(showbox.firstChild)
        }

        showbox.appendChild(newPar);
    })
    })   
}

// Storage
function storeInLocalStorage(textBox){
    let textBoxs;
    if(localStorage.getItem('textBoxs') === null){
        textBoxs = [];
    }else{
        textBoxs = JSON.parse(localStorage.getItem('textBoxs'));
    }
    textBoxs.push(textBox);
    localStorage.setItem('textBoxs', JSON.stringify(textBoxs))
    }
