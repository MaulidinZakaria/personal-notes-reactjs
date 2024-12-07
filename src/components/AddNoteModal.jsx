/* eslint-disable react/prop-types */
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

class AddNoteModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            charCount: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const charCount = 50 - event.target.value.length
        if (charCount < 0) return;

        this.setState(() => {
            return {
                title: event.target.value,
                charCount: charCount,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler() {
        const note = {
            id: new Date().getTime(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date().toISOString(),
            archived: false,
        };
        
        this.props.onSubmit(note);
        this.setState(() => {
            return {
                title: "",
                body: "",
                charCount: 50,
            }
        });
        this.props.onClose();
    }

    render() {
        if (!this.props.show) return null;

        return (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000] h-full w-full">
                <div className="bg-white rounded-lg shadow-lg w-[500px] p-6 relative">
                    <div className="flex flex-row w-full justify-between items-center mb-4">
                        <h1 className="text-xl font-bold">Add New Note</h1>
                        <button
                            className="text-xl text-black font-bold"
                            onClick={this.props.onClose}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <form>
                        <div className="mb-4">
                            <div className="flex justify-between items-center w-full">
                                <label className="block text-base font-medium mb-2">Title</label>
                                <p className="text-sm font-medium text-gray-500">{this.state.charCount}/50 Characters</p>
                            </div>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter note title"
                                value={this.state.title}
                                onChange={this.onTitleChangeEventHandler}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-base font-medium mb-2">Body</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter note content"
                                rows="4"
                                value={this.state.body}
                                onChange={this.onBodyChangeEventHandler}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            onClick={this.onSubmitEventHandler}
                            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 ease-in-out"
                        >
                            Save Note
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddNoteModal;
