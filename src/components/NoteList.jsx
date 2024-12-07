/* eslint-disable react/prop-types */
import NoteSearch from "./NoteSearch"

function NoteList({ notes, selectedHandler, noteSelected, onSearch }) {
    if (!noteSelected || notes.length === 0) {
        return (
            <div className="basis-2/6 border-e-[3px] border-[#636363] flex flex-col">
                <div className="w-full px-8 py-6">
                    <NoteSearch onSearch={onSearch} />
                </div>

                <div className="flex flex-col w-full h-[70%] justify-center items-center">
                    <h1 className="text-lg text-black font-semibold">No Notes Are Available</h1>
                </div>
            </div>
        )
    }

    notes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return (
        <div className="basis-2/6 border-e-[3px] border-[#636363] flex flex-col">
            <div className="w-full px-8 py-6">
                <NoteSearch onSearch={onSearch} />
            </div>

            <div className="flex flex-col w-full h-full overflow-y-auto">
                {notes.map((note) => (
                    <button onClick={() => selectedHandler(note.id)} className={`flex flex-col w-full px-8 h-[76px] py-3 ${noteSelected.id == note.id ? 'bg-black' : 'bg-white'} justify-between group hover:bg-black transition-all duration-200 ease-in-out`} key={note.id}>
                        <h1 className={`text-lg font-semibold ${noteSelected.id == note.id ? 'text-white' : 'text-black'
                            } group-hover:text-white transition-all duration-200 ease-in-out`}>{note.title}</h1>
                        <p className="text-sm font-extralight text-[#A5A5A5] line-clamp-1 text-start">{note.body}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default NoteList