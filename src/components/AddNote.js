import React,{useState} from 'react'
{/*this component is for adding new note in our notes application*/}
function AddNote({handleAddNote}) {
{/*this noteText is the value for adding Note input*/}
    const [noteText,setNoteText] = useState('');
    
    const charLimit = 300;
   
    const handleChange =(event)=>{
  
    if(charLimit - event.target.value.length>=0){
        setNoteText(event.target.value)
    }
   
    }
    
    
    const handleSaveClick =() =>{
    {/*if there's no character in input , then we will not save the note*/}
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
       
    }
    return (
        <div className="note new">
        {/*the text area for our input*/}
            <textarea  cols="10" rows="8" placeholder="Type to add a new note..."
            onChange={handleChange} value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
