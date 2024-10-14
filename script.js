const addNote = document.querySelector('.add')
const notesModal = document.querySelector('.modal')

addNote.onpointerup = () => {
    notesModal.querySelector('input').value = ''
    notesModal.querySelector('textarea').value = ''
    notesModal.style.display = 'flex'
}

const closeNoteModal = () => notesModal.style.display = ''

const saveNote = () => {
    const title = notesModal.querySelector('input').value.trim()
    const text = notesModal.querySelector('textarea').value.trim()

    if (!title && !text) {
        Swal.fire({
            title: 'Ошибка',
            text: 'Введите заголовок или текст заметки',
            icon: 'error',
            showConfirmButton: false
        })

        return
    }

    localStorage.setItem('saved-note', JSON.stringify({ title, text }))
    closeNoteModal()
}
