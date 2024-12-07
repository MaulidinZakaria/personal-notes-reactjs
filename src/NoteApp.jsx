import { Component } from "react";
import CoverSection from "./components/CoverSection";
import NoteDetail from "./components/NoteDetail"
import NoteList from "./components/NoteList"
import NoteSidebar from "./components/NoteSidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getInitialData } from "./utils";
import AddNoteModal from "./components/AddNoteModal";

class NoteApp extends Component {

    constructor(props) {
        super(props);
        const allNotes = getInitialData();
        this.state = {
            allNotes: allNotes,
            notes: allNotes,
            noteSelected: allNotes[0],
            noteTypes: 'all',
            showModal: false
        }

        this.selectedNoteHandler = this.selectedNoteHandler.bind(this);
        this.selectedNoteTypeHandler = this.selectedNoteTypeHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onShowAddNote = this.onShowAddNote.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.addNoteHandler = this.addNoteHandler.bind(this);
    }

    selectedNoteHandler(id) {
        const selected = this.state.notes.find(note => note.id == id);
        this.setState({
            noteSelected: selected
        })
    }

    selectedNoteTypeHandler(type) {
        const notes = this.state.allNotes.filter(note => {
            if (type === 'all') {
                return true;
            }
            return note.archived === true;
        });

        this.setState({
            noteTypes: type,
            notes: notes,
            noteSelected: notes.length > 0 ? notes[0] : null
        });
    }

    onArchivedHandler() {
        const allNotes = this.state.allNotes.map(
            note => note.id == this.state.noteSelected.id ? { ...note, archived: !note.archived } : note
        );

        if (this.state.noteTypes != 'all') {
            const notes = allNotes.filter(note => note.archived === true);
            this.setState({
                allNotes: allNotes,
                notes: notes,
                noteSelected: notes.length > 0 ? notes[0] : null
            });
            return;
        }

        this.setState({
            allNotes: allNotes,
            notes: allNotes,
            noteSelected: allNotes.find(note => note.id == this.state.noteSelected.id)
        })
    }

    onDeleteHandler() {
        const allNotes = this.state.allNotes.filter(
            note => note.id != this.state.noteSelected.id
        );

        const notes = this.state.noteTypes === 'all'
            ? allNotes
            : allNotes.filter(note => note.archived === true);


        this.setState({
            allNotes: allNotes,
            notes: notes,
            noteSelected: notes.length > 0 ? notes[0] : null
        });
    }

    onShowAddNote() {
        this.setState({ showModal: true });
    }

    onCloseModal() {
        this.setState({ showModal: false });
    }

    addNoteHandler(note) {
        const allNotes = [...this.state.allNotes, note];
        this.setState({
            allNotes: allNotes,
            notes: allNotes,
            noteSelected: note,
            noteTypes: 'all',
        });
    }

    searchHandler = (searchText) => {
        if (searchText == '') {
            let notes = this.state.allNotes;
            notes = this.state.noteTypes === 'all'
                ? notes
                : notes.filter(note => note.archived === true);

            this.setState({
                notes: notes,
                noteSelected: notes[0]
            });
            return;
        }
        let notes = this.state.allNotes.filter(note => {
            return note.title.toLowerCase().includes(searchText.toLowerCase()) || note.body.toLowerCase().includes(searchText.toLowerCase());
        });

        notes = this.state.noteTypes === 'all'
            ? notes
            : notes.filter(note => note.archived === true);

        this.setState({
            notes: notes,
            noteSelected: notes.length > 0 ? notes[0] : null
        });
    }

    render() {
        return (
            <div className="relative pb-12">
                <AddNoteModal show={this.state.showModal} onClose={this.onCloseModal} onSubmit={this.addNoteHandler} />
                <CoverSection onShowAddNote={this.onShowAddNote} />
                <div className="mx-40 h-[75vh] border-[6px] border-black rounded-[2rem] flex relative">
                    <NoteSidebar noteTypes={this.state.noteTypes} selectedTypeHandler={this.selectedNoteTypeHandler} />
                    <NoteList notes={this.state.notes} selectedHandler={this.selectedNoteHandler} noteSelected={this.state.noteSelected} onSearch={this.searchHandler} />
                    <NoteDetail note={this.state.noteSelected} onArchive={this.onArchivedHandler} onDelete={this.onDeleteHandler} />
                    <button onClick={this.onShowAddNote} className="absolute bg-black right-5 bottom-5 rounded-full text-white size-14 text-3xl flex justify-center items-center">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteApp;
