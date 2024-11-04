const addNote = document.querySelector('.add')
const notesModal = document.querySelector('.modal')

addNote.onpointerup = () => {
    notesModal.querySelector('input').value = ''
    notesModal.querySelector('textarea').value = ''
    notesModal.style.display = 'flex'
}

const closeNoteModal = () => notesModal.style.display = ''

const createNoteMarkup = note => {
    const titleSpan = document.createElement('span')
    titleSpan.textContent = note.title

    const textSpan = document.createElement('span')
    textSpan.textContent = note.text

    const li = document.createElement('li')
    li.append(titleSpan, textSpan)
    li.className = "note-static";
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
    
    // 1. получить из localStorage хранимую строку
    // 2. распарсить (преобразовать) полученную строку в список
    // 3. добавить в список новую заметку
    // 4. преобразовать список обратно в строку
    // 5. записать новую строку в localStorage

    const note = { title, text}
    const notes = JSON.parse(localStorage.getItem('saved-notes') || '[]')
    notes.push(note)
    localStorage.setItem('saved-notes', JSON.stringify(notes))

    document.querySelector('main ul').append(createNoteMarkup(note))
    closeNoteModal()
}

const notes = JSON.parse(localStorage.getItem('saved-notes') || '[]')
const ul = document.querySelector('main ul')

// for..of
for (const note of notes) {
    ul.append(createNoteMarkup(note))
}

// ul.innerHTML = ''

// forEach
// notes.forEach(note => ul.append(createNoteMarkup(note)))

// for..of & forEach VS for

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

// for (const number of numbers) {
//     number *= 2
// }

// console.log(numbers.map(n => n * 2))
// console.log(numbers)

// const products = [
//     {
//         title: 'мебель',
//         price: 75,
//         amount: 2
//     },
//     {
//         title: 'мороженое',
//         price: 6,
//         amount: 4
//     }
// ]

// for (const product of products) {
//     for (const key in product) {
//         console.log(key)
//         console.log(product[key])
//     }

//     console.log('\n')
// }

// const products2 = products.map(p => ({
//     good: {
//         name: p.title,
//         price: p.price * 100
//     },
//     quantity: p.amount * 1000
// }))

// console.log(products)
// console.log(products2)

// const goods = [
//     {
//         good: {
//             name: 'мебель',
//             price: 7500
//         },
//         quantity: 2000
//     },
//     {
//         good: {
//             name: 'мороженое',
//             price: 600
//         },
//         quantity: 4000
//     }
// ]

// const result = JSON.parse(localStorage.getItem('name'))
// console.log(result.name)
// console.log(result.age)

// localStorage.setItem('name', JSON.stringify({
//     name: 'artem',
//     age: 20
// }))
