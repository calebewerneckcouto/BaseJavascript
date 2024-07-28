// Seleciona os elementos da página
const addNoteBtn = document.getElementById('addNoteBtn');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Função para adicionar uma nova nota
function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Por favor, digite uma nota.');
        return;
    }

    // Cria um novo elemento de lista
    const li = document.createElement('li');
    li.textContent = noteText;

    // Cria o botão de exclusão
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        notesList.removeChild(li);
    };

    // Adiciona o botão de exclusão à nota
    li.appendChild(deleteBtn);

    // Adiciona a nova nota à lista
    notesList.appendChild(li);

    // Limpa o campo de entrada
    noteInput.value = '';
}

// Adiciona o evento de clique ao botão de adicionar nota
addNoteBtn.addEventListener('click', addNote);

// Adiciona o evento de pressionar a tecla Enter para adicionar a nota
noteInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNote();
    }
});
