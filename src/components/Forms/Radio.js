function Radio({id,name,type}){
    return (
        <input id={id} name={name} type={type} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
    );
}
export default Radio;