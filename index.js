
const tasks = [...document.getElementsByTagName('li')]
const addTask = document.getElementById("addtask");
const Dates = [...document.getElementsByClassName("date")]


// console.log(Dates);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();

// const currDate = [year, month, day];

// console.log(currDate);
let secondsDate = new Date();


let current_datetime = new Date()
let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
console.log(formatted_date)




addTask.addEventListener('click', () => {
    let text = document.getElementById("add").value;
    let node = document.createElement("li")
    node.innerText = text;
    document.getElementById("theList").appendChild(node)
    node.addEventListener('click', function changeState() {
        if (node.className === 'lineThrough') {
            node.setAttribute('class', 'deline')
        }
        else {
            node.setAttribute('class', 'lineThrough')
        }

    })
})


tasks.forEach(item => item.addEventListener('click', function changeState() {
    if (item.className === 'lineThrough') {
        item.setAttribute('class', 'deline')
    }
    else {
        item.setAttribute('class', 'lineThrough')
    }

}))




