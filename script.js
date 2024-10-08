const addNote = document.querySelector('.add')
const notesModal = document.querySelector('.modal')

addNote.onpointerup = () => {
    notesModal.querySelector('input').value = ''
    notesModal.querySelector('textarea').value = ''
    notesModal.style.display = 'flex'
}

const closeNoteModal = () => notesModal.style.display = ''

const saveNote = () => {
    const name = notesModal.querySelector('input').value.trim()
    const text = notesModal.querySelector('textarea').value.trim()

    const note = { name, text }
    localStorage.setItem('saved-note', JSON.stringify(note))

    closeNoteModal()
}
