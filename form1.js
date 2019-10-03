let i = 0;

const processForm = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    console.log(title);

}

const addMember = () => {
    const el = document.getElementById('family-members');
    const group = createGroup(i);
    el.appendChild(group);
    i++;
}

const createElement = (type, className, placeholder = '', id) => {
    const el = document.createElement(type);
    if (placeholder !== '' && type === 'input') {
        el.placeholder = placeholder;
    }
    if (type === 'input') {
        el.id = placeholder + '_input_' + id;
    }
    el.className = className;
    return el;
}

const createGroup = (id) => {
    const row = createElement('div', 'row mb-2');
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    col1.appendChild(input1);
    col2.appendChild(input2);
    row.appendChild(col1);
    row.appendChild(col2);
    return row; 
}