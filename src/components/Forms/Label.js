function Label({fo,text}){
    return (
        <label for={fo} class="sr-only">{text}</label>
    );
}
export default Label;