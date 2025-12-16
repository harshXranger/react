import React, { useState } from 'react';
import { Delete } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [task, setTask] = useState([]); 

  const deleteNote = (id) => {
    const updatedTasks = task.filter(note => note.id !== id);
    setTask(updatedTasks);
  };

  const submithandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Please enter both a title and content for your note.');
      return;
    }
    
    const newNote = {
      id: Date.now(),
      title: title, 
      content: content,
    };

    // setTask([...task, newNote]); 
       setTask([newNote, ...task]);
    

    setTitle('');
    setContent(''); 
  };


  return (
    <div className='bg-black min-h-screen text-white p-4 lg:flex lg:gap-8'>
      
      {/* --- Notes Form Section --- */}
      <form onSubmit={submithandler} className='flex flex-col gap-4 p-4 lg:w-1/2'>
        <h2 className='text-2xl font-bold mb-2 '>✍️ Add New Note</h2>

        <div className='flex flex-col gap-2'>
          <label className='font-bold tracking-wide' htmlFor="note-title">NOTES TITLE</label>
          <input
            id="note-title"
            className='border-2 border-gray-300 w-full p-3 text-white rounded outline-none '
            type="text"
            placeholder='Enter Note title'
            name="noteTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>

        <div>
          <textarea
            className='w-full h-45 sm:h-60 border-2 border-gray-300 rounded outline-none p-3 text-white '
            placeholder='Write your notes here...'
            name="noteContent"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button className='text-black border-2 border-gray-300 rounded bg-white p-3 font-mono w-full active:scale-[0.98] transition duration-150 ease-in-out hover:bg-gray-200'>
            SUBMIT NOTE
          </button>
        </div>
      </form>

      {/* --- Display Notes Section --- */}
      <div className='p-4 mt-6 lg:mt-4 lg:w-1/2'>
        <h2 className='text-xl font-bold mb-4'>📝 Recent Notes ({task.length})</h2>
        <div className='flex flex-wrap gap-4'>
          
          {task.length > 0 ? (
            task.map((note) => (
              <div 
                key={note.id}
                className="relative  w-full sm:w-40 h-32 rounded-lg text-black p-3 shadow-lg flex flex-col justify-between overflow-hidden bg-amber-300">
                
                {/* Delete Button */}
                <button 
                  onClick={() => deleteNote(note.id)}
                  className='absolute top-0 right-0 p-2 text-red-500 font-bold text-lg leading-none hover:text-red-700 transition duration-150'
                  title="Delete Note"
                >
                  <Delete />
                </button>
                
                <p className='font-semibold text-sm truncate mt-1' title={note.title}>
                    {note.title}
                </p>
                
                <p className='text-xs text-gray-600 line-clamp-3'>
                    {note.content}
                </p>
              </div>
            ))
          ) : (
            <p className='text-gray-400 italic'>
                Start by submitting your first note!
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;