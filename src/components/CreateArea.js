
import React, { useState } from "react";

function CreateArea(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    function changeHandle(event){
        const {value,name} =event.target;
        setNote(prevValue =>{
            return {
                ...prevValue,
                [name] : value
            };
        })
    }
    function handleSubmit(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    return(
        <div>
            <form>
                <input onChange={changeHandle} value={note.title}name="title" placeholder="Title" />
                <textarea onChange={changeHandle} value={note.content}name="content" placeholder="Take a note ..." rows="3" />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;