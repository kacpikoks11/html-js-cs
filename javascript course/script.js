
//Model
let todo_el = [
  {title:"get groceries", date:'2021-10-04', id:"1"},
  {title:"succ",date:"2020-02-2", id:"2"},
  {title:"aal",date:"2022-02-20", id:"3"}];

  const data = JSON.parse(localStorage.getItem('todos'));
  if(Array.isArray(data))
    todo_el = data;

  document.getElementById("todo-list").innerHTML="";
  render();
  
  function createTodo(title,date){
    
    todo_el.push({
      title: title,
      date: date,
      id: new Date().getTime().toString()
    });
    saveTodos();
  }

  function deleteTodo(event){
    const deleteButton = event.target;
    todo_el = todo_el.filter( ({id}) =>{
      id !== deleteButton.id;
    });
    saveTodos();
    render();
  }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todo_el));
  }
  
  

  //View
  function render(){
    document.getElementById("todo-list").innerHTML = '';
    todo_el.forEach(function (param){
      addTodo(param);
    });
  }
  
  



  //Controller
  let input_node = document.getElementsByClassName("input1")[0];
  input_node.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
      let datePicker = document.getElementById("date"); 
      createTodo(event.target.value, datePicker.value);
      
      render();
      event.target.value = '';
    }
  });
  
  
  
  function addTodo(todo){
    let element = document.createElement('div');
    element.innerText = todo.title + " " + todo.date;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.style = 'margin-left: 10px;'
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);
    
    document.getElementById("todo-list").appendChild(element);
  }
  