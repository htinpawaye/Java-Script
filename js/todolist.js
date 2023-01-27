let addbtn = document.getElementById('add_btn');
let new_task = document.getElementById('new-task');
let incomplete_tasks = document.getElementById('incomplete-tasks');
let complete_tasks = document.getElementById('completed-tasks');

addbtn.addEventListener('click', function () {
    let inputtext = new_task.value;
    console.log(inputtext);
    //input checkbox
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    //input label
    let label = document.createElement('label');
    label.innerText = inputtext;
    //edit btn
    let editbtn = document.createElement('button');
    editbtn.classList.add('edit');
    editbtn.innerText = "Edit";
    //delete btn
    let deletebtn = document.createElement('button');
    deletebtn.classList.add('delete');
    deletebtn.innerText = "Delete";
    //input edit text
    let input_edit = document.createElement('input');
    input_edit.type = "text";

    let li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(input_edit);
    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    incomplete_tasks.appendChild(li);
    new_task.value = "";

    checkbox.onchange = change;
    editbtn.onclick = edit;
    deletebtn.onclick = deletetask;
})

function change() {
    if (this.checked) {
        let li = this.parentNode;
        let ul = this.parentNode.parentNode;
        ul.removeChild(li);
        complete_tasks.appendChild(li);
    }
    else if (!this.checked) {
        let li = this.parentNode;
        let ul = this.parentNode.parentNode;
        ul.removeChild(li);
        incomplete_tasks.appendChild(li);
    }
}

function edit() {
    let li = this.parentNode;
    if (!li.classList.contains('editMode')) {
        li.classList.add('editMode');
        let label = li.querySelector('label');
        let text_element = li.querySelector('input[type=text]');
        text_element.value = label.innerText;
    }
    else {
        li.classList.remove('editMode');
        let label = li.querySelector('label');
        let text_element = li.querySelector('input[type=text]');
        label.innerText = text_element.value;
    }
}

function deletetask() {
    if (this.onclick) {
        let li = this.parentNode;
        let ul = this.parentNode.parentNode;
        ul.removeChild(li);
    }
}

let checkboxes = document.querySelectorAll('input[type=checkbox]');
console.log(checkboxes);
for (index = 0; index < checkboxes.length; index++) {
    checkboxes[index].onchange = change;
}

let deletebtns = document.querySelectorAll('button.delete')
for (let index = 0; index < deletebtns.length; index++) {
    deletebtns[index].onclick = deletetask;
}
let editbtns = document.querySelectorAll('button.edit')
for (let index = 0; index < editbtns.length; index++) {
    editbtns[index].onclick = edit;
}