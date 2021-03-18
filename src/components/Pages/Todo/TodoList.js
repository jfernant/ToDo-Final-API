
function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className={myClass}>
      <div className="flex px-5 py-3 border-b-2 border-gray-100 w-full">
        <div className="flex w-9/12 sm:w-10/12">
          <p className="flex items-center px-5">
          <svg class="h-12 w-12 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="4" /></svg>
          <span className="px-2">{descripcion}</span></p>
        </div>
        <div className="flex w-1/12">
          <button onClick={onClick} className="p-1 mx-1 rounded-md">
          <svg class="h-8 w-8 text-green-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
          </button>
          <button onClick={onDeleteClick} className="p-1 mx-1 rounded-md">
          <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
          </button>
        </div>
      </div>
    </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.id}
        descripcion={o.description}
        id={o.id}
        fb_id={o.fb_id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  
  return (
    <section className="TodoList w-full">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
