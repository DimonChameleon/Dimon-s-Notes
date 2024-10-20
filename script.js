const addNote = document.querySelector('.add')
const notesModal = document.querySelector('.modal')

addNote.onpointerup = () => {
    notesModal.querySelector('input').value = ''
    notesModal.querySelector('textarea').value = ''
    notesModal.style.display = 'flex'
}

const closeNoteModal = () => notesModal.style.display = ''

const createNoteMarkup = (title, text) => {
    const titleSpan = document.createElement('span')
    titleSpan.textContent = title

    const textSpan = document.createElement('span')
    textSpan.textContent = text

    const li = document.createElement('li')
    li.append(titleSpan, textSpan)

    return li
}

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
    
    document.querySelector('main ul').append(createNoteMarkup(title, text))
    localStorage.setItem('saved-note', JSON.stringify({ title, text }))
    closeNoteModal()
}
