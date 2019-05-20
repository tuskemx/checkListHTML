const tasks = [...document.getElementsByTagName('li')]

console.log(tasks);

const addTask = document.getElementById("addtask");

addTask.addEventListener('click', ()=> {
let text = document.getElementById("add").value;
let node = document.createElement("li")
node.innerText = text;
document.getElementById("theList").appendChild(node)
 
})





tasks.forEach(item => item.addEventListener('click', function changeState() {
    if (item.className === 'lineThrough') {
        item.setAttribute('class', 'deline')
    }
    else {
        item.setAttribute('class', 'lineThrough')
    }

}))




