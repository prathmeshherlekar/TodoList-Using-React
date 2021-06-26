import Form from "./Form";
import './style.css';
import { useState } from "react";
import List from './List';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [show,setShow]=useState(false);

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var date=new Date();

  const clearAll=()=>{
    setTodos([]);  
    setShow(false);
  }

  const showCompleted=()=>{
      setShow(!show);

  }
  var display='';
  if(todos.length===0){
    display='d-none';
  }



  return (
    <>
      <div className="mt-5 justify-content-center align-middle">
        <div className="col-md-4 cpl-xs-12 mt-5 offset-md-4">
          <div className="card border" style={{ width: "25rem", minHeight:"25rem" }}>
            <div className="card-body">
              <div className="date">
                <h3 className="card-title">{weekday[date.getDay()]}</h3>
                <h6>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h6>
              </div>
              <Form input={input} todos={todos} setTodos={setTodos} setInput={setInput} />
              <List todos={todos} show={show} setTodos={setTodos}/>
            </div>
            <div class={`text-center ${display}`}>
              <button className="btn btn-sm btn-light" onClick={showCompleted}>{show?'Hide':'Show'} Completed</button>
              <button className="btn btn-sm btn-light" onClick={clearAll}>CLEAR ALL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
