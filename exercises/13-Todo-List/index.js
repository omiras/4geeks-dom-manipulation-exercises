// Your code here

document.querySelector('#addToDo').addEventListener('keyup', (event)=> {
    if (event.key!="Enter") {
        return;
    }

    let newLi = document.createElement('li');
    newLi.innerHTML = `<span><i class="fa fa-trash"></i></span> ${event.target.value}`;
    newLi.addEventListener('click', deleteItem);
    document.querySelector('ul').appendChild(newLi);

    event.target.value = "";
});

function deleteItem(event) {
    console.log(event.target.parentNode);
    let element = event.target.parentNode;

    element.parentNode.removeChild(element);
}

document.querySelectorAll('.fa-trash').forEach((element)=> {
    element.parentNode.addEventListener('click', deleteItem);
});
