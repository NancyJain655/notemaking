import { useEffect, useState } from "react";
import "./App.css";
import NoNote from "./components/NoNote";
import ActivatedNote from "./components/ActivatedNote";
import ButtonForNote from "./components/ButtonForNote";
import Modal from "./components/Modal";
import { FaPlus } from "react-icons/fa6";

function App() {
  const [notes, setNotes] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')))
  },[showModal])

  return (
    <div className="main">
      {/* CODE FOR SIDEBAR WINDOW */}
      <div className="sidebar">
        <div className="side-content">
          <h1 className="heading">Pocket Notes</h1>
          {notes?.map((note) => (
            <ButtonForNote
            key={note.id}
              color={note.color}
              name={note.name}
              onClick={() => {
                setActiveNote(note)
                if(window.innerWidth<427){

                  
                  document.querySelector('.sidebar').style.display = 'none';
                  document.querySelector('.main-content').style.display = 'block';
                }

              }
            }
          />
        ))}
      </div>
      <button className="add" onClick={() => setShowModal(true)}>
        <FaPlus size={22} />
        </button>
        </div>

        {/* CODE FOR  MAIN CONTENT WINDOW */}

      <div className="main-content">
        {activeNote ? (
          <ActivatedNote name={activeNote.name} color={activeNote.color} />
        ) : (
          <NoNote />
        )}
      </div>
      {showModal ? <Modal isOpen={showModal} onClose={(()=> setShowModal(false))} /> : null}
    </div>

);
}

export default App;



