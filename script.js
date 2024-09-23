const addNote = document.querySelector('.add')

const notesModal = document.querySelector('.modal')

addNote.onpointerup = () => notesModal.style.display = 'flex'

const closeNoteModal = () => notesModal.style.display = ''