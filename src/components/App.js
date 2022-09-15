
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"; 
import Note from './Note'
import CreateArea from './CreateArea';

// function noteTerm(term){
//     return(
//         <Note 
//         title={term.title}
//         content={term.content}
//         />
//     );
// }


function App(){

    const [notes,setNotes]= useState([]);
    function addItem(note){
        setNotes(prevValue =>{
            return [...prevValue,note]
        });
    }
    function deleteItem(id){
        setNotes((prevVlaue) => {
            return prevVlaue.filter((noteItem,index) =>{
                return index!==id;
            });
        });
    }
    return(
        <div>
        <Header />
        <CreateArea onAdd={addItem}/>
        {notes.map((noteItem,index) => {
            return <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteItem}
            />
        })}
        <Footer />
        </div>
    );
}

export default App;