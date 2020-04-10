// get add item form
const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add item function
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="material-icons delete">delete</i>
    </li>
    `; 
    ul.innerHTML += html;
};

// Add items by listening for submit event
addForm.addEventListener('submit', e => {
    e.preventDefault();

    // get todo item
    const todo = addForm.add.value.trim();

    if(todo.length){
        // call
        generateTemplate(todo);
        addForm.reset();
    } 
});

// delete item using 'event delegation'
ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// filter
const filterTodos = (term) => {

    // add 'filtered' class to items which DONOT match
    Array.from(ul.children)
    .filter((todo) => {
        return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo)=>{
        todo.classList.add('filtered')
    });

    // remove the 'filtered' class to items which DO match
    Array.from(ul.children)
    .filter((todo) => {
        return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo)=>{
        todo.classList.remove('filtered')
    });
};

// search item
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});