const addNote = document.querySelector(".add");
const notesModal = document.querySelector(".modal");

addNote.onpointerup = () => {
  notesModal.querySelector("input").value = "";
  notesModal.querySelector("textarea").value = "";
  notesModal.style.display = "flex";
};

const closeNoteModal = () => (notesModal.style.display = "");

const createNoteMarkup = (note) => {
  const titleSpan = document.createElement("span");
  titleSpan.textContent = note.title;
  titleSpan.className = "noteTitle"

  const textSpan = document.createElement("span");
  textSpan.textContent = note.text;

  const panelDiv = document.createElement("div");
  panelDiv.append(titleSpan, textSpan);

  const deleteIcon = document.createElement("span");
  deleteIcon.classList = "material-symbols-outlined";
  deleteIcon.textContent = "delete";

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
  };

  const li = document.createElement("li")
  li.append(panelDiv, deleteIcon)
  return li
};

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

  const note = { title, text };
  const notes = JSON.parse(localStorage.getItem("saved-notes") || "[]");
  notes.push(note);
  localStorage.setItem("saved-notes", JSON.stringify(notes));

  document.querySelector("main ul").append(createNoteMarkup(note));
  closeNoteModal();
};

const notes = JSON.parse(localStorage.getItem("saved-notes") || "[]");
const ul = document.querySelector("main ul");
notes.forEach((note) => ul.append(createNoteMarkup(note)));


const searchNote = document.querySelector(".searchNote");
const allNoteTitles = document.querySelectorAll(".noteTitle");

    searchNote.onkeyup = () => {
      const searchStr = searchNote.value
      allNoteTitles.forEach((item) => {
        titleStr = item.innerText
        if (titleStr.includes(searchStr)){
          item.style.color = 'red'
        }
        else{
          item.style.color = 'black'
        }; 
        });
        
    };
4




