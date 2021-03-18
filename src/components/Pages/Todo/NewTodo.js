function NewTodo({ onChange, value, onAddNew}){
  return (
      <div className="flex w-screen items-center border bg-white">
          <form class="flex items-center mx-auto p-5">
          <input type="text" type="text" id="txtNTodo" name="txtNTodo" placeholder="New list item" 
            onChange={onChange} value={value} caption="Nuevo item:"
            required
            className="p-2 border-b-2 border-gray-400 w-52 sm:w-96"
          ></input>
          <button onClick={onAddNew}
          className="mx-3">
          <svg class="h-12 w-12 text-green-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
          </button>
          </form>
      </div>
  );
}
export default NewTodo;
