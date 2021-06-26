import TodoItems from "./TodoItems";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const List=({todos,setTodos,show})=>{
    
    var pendingWork=todos;
    
    var pending="";
    pendingWork=pendingWork.filter((item)=>item.completed===false)    
    var percentage=parseInt(todos.length-pendingWork.length)/parseInt(todos.length)*100;
    


    if( pendingWork.length===0){
        pending="Time To Chill. You Have no todos";
        
    }else{
        pending="You Have "+pendingWork.length+" Pending Work(s)";
        
    }
  
    
    
    return (
        <>
        <p className="text-center">            
         {pending}
        </p>
                <div className="row">
                {       
                    todos.map(
                        (items)=>(
                            
                            <TodoItems item={items.text} flag={false} todo={items} todos={todos} key={items.id} setTodos={setTodos} />
                            
                        )
                    )
                }
                </div>
                
                <div className={`row ${show?'':'d-none'}`} >
                    <h6 >Completed {Math.floor(percentage)}% Work</h6>
                {       
                   
                    todos.map(
                        (items)=>(
                            
                            <TodoItems item={items.text}  flag={true}  todo={items} todos={todos} key={items.id} setTodos={setTodos} />
                            
                        )
                    )
                }
                </div>
                
            
        </>
    );

}

export default List;