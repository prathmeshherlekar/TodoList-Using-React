import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AiTwotoneDelete } from "react-icons/ai";
import './style.css'

const TodoItems = ({item,setTodos,todos,todo,flag}) => {
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id));        
        console.log("DeleteClicked");
    };
    
    
    const completedHandler=()=>{
        console.log("Completed");
        
        setTodos(
            todos.map(
                (item)=>{
                    if(item.id===todo.id){                        
                        return {
                            ...item,completed:!item.completed
                        }
                        
                    }
                    
                    return item;
                }                
            )            
        );
        
        
    }
    return (
        <>
            <div className={`row mb-3 ${!todo.completed&&flag?'d-none':''} ${todo.completed&&!flag?'d-none':''} `}>
                <div className="from-group">
                    <div className="form-check">                        
                        <div className="col-md-6 d-inline-block">
                            <input className="form-check-input" checked={todo.completed?true:false} onClick={completedHandler} type="checkbox" id={todo.id} />
                            <label className="form-check-label" for={todo.id} >
                                {item}
                            </label>
                        </div>
                        <div className="col-md-2 offset-md-2 d-inline-block float-end">
                            <button className="btn btn-danger" onClick={deleteHandler}>
                                <AiTwotoneDelete />
                            </button>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoItems;