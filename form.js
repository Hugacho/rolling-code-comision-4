const addElement = () => {
    const app = document.getElementById('app');
    const inputElement1 = createElement('input', 'name', Math.random());
    const inputElement2 = createElement('input', 'lastname', Math.random());
    app.appendChild(inputElement1);
    app.appendChild(inputElement2);
}

const createElement = (type, personalType, inputId) => {
    const inputElement = document.createElement(type);
    inputElement.className = 'form-control mb-2';
    inputElement.placeholder = 'Add ' + personalType;
    inputElement.id = inputId;
    return inputElement;
}