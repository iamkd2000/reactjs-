import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const [detales, setDetales] = useState("")
  const [task, setTask] = useState([])

  const stopReload = (e) => {
    e.preventDefault();
    const copyTask = [...task]
    copyTask.push({ title, detales })
    setTask(copyTask)
    console.log(task)
    console.log(title)
    console.log(detales)
    settitle("")
    setDetales("")
  }

  const deleteNotes = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex bg-[#09090b] text-zinc-100 font-sans selection:bg-orange-500/30'>

      {/* Sidebar Section: Add Notes */}
      <div className='lg:w-1/3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800/50 flex flex-col justify-center'>
        <div className='max-w-md mx-auto w-full'>
          <h1 className='text-4xl font-black mb-2 tracking-tight bg-gradient-to-br from-orange-400 to-rose-500 bg-clip-text text-transparent'>
            StickyNotes.
          </h1>
          <p className='text-zinc-500 mb-10 text-sm font-medium'>Capture your thoughts, ideas, and tasks.</p>

          <form onSubmit={stopReload} className='flex flex-col gap-6'>
            <div className='space-y-2'>
              <label className='text-[10px] font-bold uppercase tracking-[2px] text-zinc-500 ml-1'>Note Title</label>
              <input
                type='text'
                placeholder='What is on your mind?'
                className='w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 focus:border-orange-500/50 outline-none rounded-2xl transition-all duration-300 placeholder:text-zinc-700'
                value={title}
                onChange={(e) => { settitle(e.target.value) }}
              />
            </div>

            <div className='space-y-2'>
              <label className='text-[10px] font-bold uppercase tracking-[2px] text-zinc-500 ml-1'>Details</label>
              <textarea
                placeholder='Describe your note here...'
                className='w-full px-5 py-4 h-44 bg-zinc-900/50 border border-zinc-800 focus:border-orange-500/50 outline-none rounded-2xl transition-all duration-300 resize-none placeholder:text-zinc-700'
                value={detales}
                onChange={(e) => { setDetales(e.target.value) }}
              />
            </div>

            <button className='w-full bg-zinc-100 text-black font-bold py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-[0.98] shadow-xl shadow-white/5'>
              Create Note
            </button>
          </form>
        </div>
      </div>

      {/* Main Section: Recent Notes */}
      <div className='lg:w-2/3 p-8 lg:p-16 overflow-y-auto max-h-screen bg-[#0c0c0e]'>
        <div className='flex items-end justify-between mb-12'>
          <div>
            <h2 className='text-2xl font-bold'>Recent Collections</h2>
            <div className='h-1 w-12 bg-orange-500 mt-2 rounded-full'></div>
          </div>
          <span className='px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-semibold text-zinc-400'>
            {task.length} Total
          </span>
        </div>

        {/* Notes Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {task.length > 0 ? (
            task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className='group flex flex-col justify-between p-7 bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500'
                >
                  <div className='mb-6'>
                    <h3 className='text-lg font-bold text-orange-400 mb-3 leading-tight truncate'>{elem.title}</h3>
                    <p className='text-zinc-400 text-sm leading-relaxed line-clamp-4'>{elem.detales}</p>
                  </div>

                  <button
                    onClick={() => { deleteNotes(idx) }}
                    className='w-full py-2.5 bg-zinc-800/50 group-hover:bg-red-500/10 text-zinc-500 group-hover:text-red-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border border-transparent group-hover:border-red-500/20'
                  >
                    Discard Note
                  </button>
                </div>
              )
            })
          ) : (
            <div className='col-span-full py-24 flex flex-col items-center justify-center border-2 border-dashed border-zinc-800/50 rounded-[3rem]'>
              <div className='w-12 h-12 bg-zinc-900 rounded-full mb-4 flex items-center justify-center text-zinc-700'>
                📝
              </div>
              <p className='text-zinc-600 font-medium italic'>Your workspace is empty.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default App