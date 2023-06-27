let checkBoxWithLabelContainer = document.getElementById('checkBoxWithLabelContainer');
let checkboxId= 'checkbox';
let labelId = 'checkboxLabel';

function onCheckboxStatusChange(){
    checkboxLabelEl.classList.toggle('strike-through');
}

// Create a new Checkbox with Label component and add it to the page.

let checkboxInputEl = document.createElement('input');
checkboxInputEl.type = 'checkbox';
checkboxInputEl.id = checkboxId;

checkboxInputEl.onclick = function(){
    onCheckboxStatusChange()
}
checkBoxWithLabelContainer.appendChild(checkboxInputEl);

let checkboxLabelEl = document.createElement('label');
checkboxLabelEl.classList.add('checkbox-label');
checkboxLabelEl.setAttribute("for", checkboxId);
checkboxLabelEl.id = labelId;
checkboxLabelEl.textContent = 'I am a label';
checkBoxWithLabelContainer.appendChild(checkboxLabelEl);