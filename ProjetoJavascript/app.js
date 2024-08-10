const contactList = document.getElementById('contactList');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${contact.name} - ${contact.phone} - ${contact.email}
            <button class="edit" onclick="editContact(${index})">Editar</button>
            <button class="delete" onclick="deleteContact(${index})">Excluir</button>
        `;
        contactList.appendChild(li);
    });
}

function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        contacts.push({ name, phone, email });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Preencha todos os campos!');
    }
}

function editContact(index) {
    const newName = prompt('Novo nome:', contacts[index].name);
    const newPhone = prompt('Novo número de telefone:', contacts[index].phone);
    const newEmail = prompt('Novo e-mail:', contacts[index].email);

    if (newName && newPhone && newEmail) {
        contacts[index] = { name: newName, phone: newPhone, email: newEmail };
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
    } else {
        alert('Preencha todos os campos!');
    }
}

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
}

renderContacts();
