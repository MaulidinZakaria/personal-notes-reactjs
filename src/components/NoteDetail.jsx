import { showFormattedDate } from "../utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSol, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkReg } from '@fortawesome/free-regular-svg-icons';

/* eslint-disable react/prop-types */
function NoteDetail({ note, onArchive, onDelete }) {
    if (!note) {
        return (
            <div className="basis-3/6 px-10 py-12 flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl text-black font-bold">No Note Selected</h1>
            </div>
        );
    }

    return (
        note == null ?
            <div className="basis-3/6 px-10 py-12 flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl text-black font-bold">No Note Selected</h1>
            </div>
            :
            <div className="basis-3/6 px-10 py-12 flex flex-col gap-4">
                <div className="w-full flex gap-6 justify-end">
                    <button onClick={onDelete} className="text-3xl">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button onClick={onArchive} className="text-3xl">
                        <FontAwesomeIcon icon={note.archived ? faBookmarkSol : faBookmarkReg} />
                    </button>
                </div>
                <h1 className="text-2xl text-black font-bold">{note.title}</h1>
                <p className="text-lg">{note.body}</p>
                <p className="text-end font-semibold pt-4">{showFormattedDate(note.createdAt)}</p>
            </div>
    )
}

export default NoteDetail