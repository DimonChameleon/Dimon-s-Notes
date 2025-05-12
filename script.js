const addNote = document.querySelector('.add')
const notesModal = document.querySelector('.modal')

addNote.onpointerup = () => {
  notesModal.querySelector("input").value = "";
  notesModal.querySelector("textarea").value = "";
  notesModal.style.display = "flex";
}

const closeNoteModal = () => notesModal.style.display = ''

const createNoteMarkup = note => {
  const titleSpan = document.createElement('span')
  titleSpan.textContent = note.title
  titleSpan.className = 'noteTitle'

  const textSpan = document.createElement("span");
  textSpan.textContent = note.text

  if (note.font) {
    if (note.font.includes('bold')) {
      textSpan.style.fontWeight = 'bold'
    }

    if (note.font.includes('italic')) {
      textSpan.style.fontStyle = 'italic'
    }

    if (note.font.includes('underline')) {
      textSpan.style.textDecoration = 'underline'
    } else if (note.font.includes('strikethrough')) {
      textSpan.style.textDecoration = 'line-through'
    }
  }

  const panelDiv = document.createElement('div')
  panelDiv.append(titleSpan, textSpan)

  const deleteIcon = document.createElement('span')
  deleteIcon.classList = 'material-symbols-outlined'
  deleteIcon.textContent = 'delete'

  deleteIcon.onpointerup = () => {
    const spans = li.querySelectorAll('div span')
    const title = spans.item(0).textContent
    const text = spans.item(1).textContent

    const notes = JSON.parse(localStorage.getItem("saved-notes") || "[]")
    const index = notes.findIndex(note => note.title === title && note.text === text)

    if (index === -1) {
        Swal.fire({
            title: "Ошибка",
            text: "Заметка не найдена",
            icon: "error",
            showConfirmButton: false
        })
    } else {
        notes.splice(index, 1)
        localStorage.setItem("saved-notes", JSON.stringify(notes))
        li.remove()

        Swal.fire({
            title: "Успех",
            text: "Заметка успешно удалена",
            icon: "success",
            showConfirmButton: false
        })
    }
  }

  const li = document.createElement('li')
  li.style.background = note.color
  li.append(panelDiv, deleteIcon)
  return li
}

const saveNote = () => {
  const title = notesModal.querySelector("input").value.trim();
  const text = notesModal.querySelector("textarea").value.trim();

  if (!title && !text) {
    Swal.fire({
      title: "Ошибка",
      text: "Введите заголовок или текст заметки",
      icon: "error",
      showConfirmButton: false,
    })

    return
  }

  const note = {
    title,
    text,
    color: notesModal.querySelector('div').style.background,
    font: Array.from(textarea.classList)
  }

  const notes = JSON.parse(localStorage.getItem('saved-notes') || '[]')
  notes.push(note)
  localStorage.setItem('saved-notes', JSON.stringify(notes))

  document.querySelector('main ul').append(createNoteMarkup(note))
  closeNoteModal()
}

const notes = JSON.parse(localStorage.getItem("saved-notes") || "[]")
const ul = document.querySelector('main ul')
notes.forEach(note => ul.append(createNoteMarkup(note)))

const searchNote = e => {
  const searchStr = e.target.value.trim().toLowerCase()
  ul.innerHTML = ''

  if (!searchStr) {
    notes.forEach(note => ul.append(createNoteMarkup(note)))
    return
  }

  const filteredNotes = notes.filter(note => (note.title.toLowerCase().includes(searchStr) || note.text.toLowerCase().includes(searchStr)))

  if (!filteredNotes.length) {
    if (ul.querySelector('img')) {
      return
    }

    const notFoundImg = document.createElement('img')
    notFoundImg.src = 'not-found.png'
    ul.append(notFoundImg)
    return
  }

  filteredNotes.forEach(note => ul.append(createNoteMarkup(note)))
}

const colorButtons = notesModal.querySelectorAll('.panel:first-child div')

for (const [i, colorButton] of colorButtons.entries()) {
  colorButton.onpointerup = () => {
    notesModal.querySelector('div').style.background = 'rgb(' + ['250, 147, 147', '255, 232, 163', '194, 255, 173', '171, 255, 235', '214, 161, 255'][i] + ')'
  }
}

const fontButtons = notesModal.querySelectorAll('.panel:last-child div')
const fontStyles = ['bold', 'italic', 'underline', 'strikethrough']
const textarea = notesModal.querySelector('textarea')

for (const [i, fontButton] of fontButtons.entries()) {
  fontButton.onpointerup = () => {
    const checkLastButtons = (a, b) => {
      if (i === a && fontButtons.item(b).classList.contains('active')) {
        fontButtons.item(b).classList.remove('active')
        textarea.classList.remove(fontStyles[b])
      }
    }

    if (fontButton.classList.contains('active')) {
      textarea.classList.remove(fontStyles[i])
      fontButton.classList.remove('active')
    } else {
      checkLastButtons(2, 3)
      checkLastButtons(3, 2)

      textarea.classList.add(fontStyles[i])
      fontButton.classList.add('active')
    }
  }
}

const filterButton = document.querySelector('header section span')
filterButton.onpointerup = () => document.querySelector('#sorting-block').classList.toggle('enabled')

const alphabetSortButton = document.querySelector('aside div span:first-child')
alphabetSortButton.onpointerup = () => alphabetButton.classList.toggle('disabled')

const dateSortButton = document.querySelector('aside div:last-child span:first-child')
dateSortButton.onpointerup = () => dateButton.classList.toggle('disabled')

const alphabetButton = document.querySelector('aside div span:last-child')
alphabetButton.onpointerup = () => sortNotes(alphabetButton)

const dateButton = document.querySelector('aside div:last-child span:last-child')
dateButton.onpointerup = () => sortNotes(dateButton)

const sortNotes = button => {
  const notes = JSON.parse(localStorage.getItem("saved-notes") || "[]")
  const sortedNotes = [...notes]
  ul.innerHTML = ''

  if (button.textContent === 'unfold_more') {
    button.textContent = 'arrow_drop_up'
    sortedNotes.sort((a, b) => a.title.localeCompare(b.title))
  } else if (button.textContent === 'arrow_drop_up') {
    button.textContent = 'arrow_drop_down'
    sortedNotes.sort((a, b) => b.title.localeCompare(a.title))
  } else {
    button.textContent = 'unfold_more'
  }

  sortedNotes.forEach(note => ul.append(createNoteMarkup(note)))
}

ul.onpointerup = e => {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  li.classList.toggle('active');
}


// ⬇ Домашнее задание ⬇


const testList = '         kolbasa           '
function trimStart(str) {
  let i = 0;
  while (str[i] === ' ') {
    i++;
  }
  return str.slice(i);
}

console.log(' ')
console.log('DIY trimStart:')
console.log("|", trimStart(testList), "|") // я решил добавить знаки "|" чтобы было удобнее понимать где заканчивается строка

function trimEnd(str) {
  let i = str.length - 1;
  while (str[i] === ' ') {
    i--;
  }
  return str.slice(0, i + 1);
}

console.log(' ')
console.log('DIY trimEnd:')
console.log("|", trimEnd(testList), "|")

function trim(str) {
  return trimEnd(trimStart(str));
}

console.log(' ')
console.log('DIY trim:')
console.log("|", trim(testList), "|")

function indexOf(str, target) {
  for (let i = 0; i < str.length; i++) {
    let match = true;
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}
const testIndex = 'Hello mr. kolbaska!'

console.log(' ')
console.log('DIY IndexOf:')
console.log(indexOf(testIndex, 'r')) // должно быть 7 (наверное)
