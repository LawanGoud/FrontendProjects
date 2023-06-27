let checkboxWithLabelContainer = document.getElementById('checkboxWithLabelContainer');

checkboxWithLabelContainer.classList.add('text-center','p-5');
let checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';
checkboxEl.id = 'checkbox';
checkboxWithLabelContainer.appendChild(checkboxEl);

let labelEl = document.createElement('label');
labelEl.setAttribute('for','checkbox');
labelEl.textContent = 'Click Me!';
labelEl.classList.add('ml-2');
labelEl.id = 'checkboxLabel';
checkboxWithLabelContainer.appendChild(labelEl);