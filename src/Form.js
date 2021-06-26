
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function Form({ setInput, todos, setTodos, input }) {


    const inputHandeler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(input!==''){
            setTodos([
                ...todos, { text: input, completed: false, id: Math.random() * 1000 }
            ]);
            setInput("");
        }
    }


    return (
        <>
            <div className="card-text">
                <div className="mb-3">
                    <form>
                        <input type="text" required value={input} onChange={inputHandeler} style={{ width: "18rem" }} className="form-control form-control-sm d-inline-block" id="listItem" placeholder="Item" />
                        <button onClick={submitHandler} className="ml-1 btn btn-primary d-inline-block">+</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form