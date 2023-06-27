let skillList = [
    {
      skillName: "HTML",
      uniqueNo: 1,
    },
    {
      skillName: "CSS",
      uniqueNo: 2,
    },
    {
      skillName: "JavaScript",
      uniqueNo: 3,
    }
  ];

let skillListContainer = document.getElementById('skillListContainer');

function onMarkSkill(labelId){
  let labelEl = document.getElementById(labelId);
  labelEl.classList.toggle('selected');
}

function createAndAppendSkill(skill){
  let checkBoxId = 'checkbox' + skill.uniqueNo;
  let labelId = 'label' + skill.uniqueNo;

  let skillEl = document.createElement('li');
  skillEl.classList.add('p-1');
  skillListContainer.appendChild(skillEl);

  let checkBoxEl = document.createElement('input');
  checkBoxEl.type = 'checkbox';
  checkBoxEl.id = checkBoxId;

  checkBoxEl.onclick = function(){
    onMarkSkill(labelId);
  };

  skillEl.appendChild(checkBoxEl);

  let labelEl = document.createElement('label');
  labelEl.setAttribute('for',checkBoxId);
  labelEl.classList.add('checkbox-label');
  labelEl.id = labelId;
  labelEl.textContent = skill.skillName;
  skillEl.appendChild(labelEl);
}

for (let skill of skillList){
  createAndAppendSkill(skill);
}