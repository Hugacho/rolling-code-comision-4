let i;
if (localStorage.getItem('count')) {
    i = localStorage.getItem('count');
} else {
    i = 0;
}

const processForm = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const familyData = [];
    for (let u = 0; u < i; u++) {
        const name = document.getElementById('name_' + u).value;
        const lastname = document.getElementById('lastname_' + u).value;
        familyData.push({
            name,
            lastname
        });
    }
    localStorage.setItem('familyData', JSON.stringify(familyData));
    console.log(familyData);
}

const addMember = () => {
    const el = document.getElementById('family-members');
    const group = createGroup(i);
    el.appendChild(group);
    i++;
    localStorage.setItem('count', i);
}

const createElement = (type, className, content, id, onClickCallback) => {
    const el = document.createElement(type);

    if (content) {
        if (type === 'input') {
            el.placeholder = content;
        } else {
            el.innerText = content;
        }
    }
    if (id || id === 0) {
        el.id = content.toLowerCase() + '_' + id;
    }
    if (className) {
        el.className = className;
    }
    if (onClickCallback) {
        el.onclick = onClickCallback;
    }
    return el;
}

const createGroup = (id) => {
    const row = createElement('div', 'row mb-2', '', 'row_' + id);
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const col3 = createElement('div', 'col-2');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    const deleteButton = createElement('button', 'btn btn-danger', 'Delete', '', () => deleteElement(id));

    col1.appendChild(input1);
    col2.appendChild(input2);
    col3.appendChild(deleteButton);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    return row; 
}

const setDefaultValues = (id, idName, value) => {
    document.getElementById(idName + '_' + id).value = value;
}

const createInitialElements = () => {
    const familyData = JSON.parse(localStorage.getItem('familyData'));
    for (let k = 0; k < i; k++) {
        console.log(familyData[k]);
        const el = document.getElementById('family-members');
        const group = createGroup(k);
        el.appendChild(group);
        setDefaultValues(k, 'name', familyData[k].name);
        setDefaultValues(k, 'lastname', familyData[k].lastname);
    }
}
createInitialElements();

const deleteElement = (id) => {
    const conf = confirm('Estás seguro que deseas eliminar el item ' + id);
    if (conf) {
        const row = document.getElementById('_row_' + id);
        const rowParent = row.parentNode;
        rowParent.removeChild(row);
        i--;
        localStorage.setItem('count', i);
        const familyData = JSON.parse(localStorage.getItem('familyData'));
        familyData.splice(id, 1);
        localStorage.setItem('familyData', JSON.stringify(familyData));
    }
}
