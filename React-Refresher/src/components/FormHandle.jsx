export function FormHandle(){
    function handleSubmit(e){
        e.preventDefault();
        alert('Form Submitted!');
    }


    return(
    <form onSubmit={handleSubmit}> <input type="text" />
    <button>Submit</button>
    
    </form>)
}