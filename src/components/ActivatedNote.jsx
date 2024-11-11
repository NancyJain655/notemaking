import React, { useEffect, useState } from "react";
import styles from "./ActivatedNote.module.css";
import dayjs from "dayjs";
import { v4 as uuid } from 'uuid';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Icon from "./Icon";


const ActivatedNote = ({name,color}) => {
    const [currentNote, setCurrentNote] = useState("");
    const [notes, setNotes] = useState([]);
    
  
    
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleNoteSumbit();
      // console.log('Enter key pressed');
    }
  };
  const handleNoteSumbit = () => {
    if(currentNote.trim()){
      const note = {
        id: uuid(),
        note: currentNote,
        date: new dayjs().format('DD MMM YYYY'),
        time: new dayjs().format('hh:mm A')
      }
      const data = JSON.parse(localStorage.getItem('notes')) || [];
    const newNotes = [...notes, note];
    setNotes(newNotes);

    const newNoteData = data.map(note => {
      if(note.name === name){
        note.content = newNotes;
      }
      return note;
    })
    localStorage.setItem('notes', JSON.stringify(newNoteData));
    setCurrentNote('');
  }
}

useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes')) || [];
    const filterNotes = data.filter(note => note.name === name);
    if (filterNotes.length > 0) {
      setNotes(filterNotes[0].content);
    }
  }, [name]);

  
  return (
    <div className={styles.mainContain}>
        <div className={styles.head}>
            <button className={styles.backButton}
              onClick={() => {
                document.querySelector('.sidebar').style.display = 'block';
                document.querySelector('.main-content').style.display = 'none';
              }}
            ><IoMdArrowRoundBack /></button>
            <Icon name={name} color={color} />
            <h1>{name}</h1>
        </div>

        

        <div className={styles.notesContain}>
          {
            notes.map((note) => (
              <div key={note.id} className={styles.note}>

                  <p>{note.note}</p>
                  <div className={styles.time}>
                    <p>{note.date} <GoDotFill /> {note.time}</p>
                  </div>
              </div>
            ))
          }
        </div>
        <div className={styles.textContain}>
            <div className={styles.textarea}>
                <textarea 
                  placeholder="Enter your note here..."
                  onKeyDown={handleKeyPress}
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                /> 
                <button 
                  type="submit"
                  disabled={!currentNote.trim()}
                  onClick={() => handleNoteSumbit()}
                ><IoMdSend color={!currentNote.trim() ? '#B0B0B0' : '#001F8B'} size={29}/>
</button>
            </div>
        </div>
       
        </div>
  )
};

export default ActivatedNote;