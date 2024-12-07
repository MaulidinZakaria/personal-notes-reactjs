/* eslint-disable react/prop-types */
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class NoteSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',  // Untuk menyimpan nilai input pencarian
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ searchTerm: event.target.value });
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="relative flex justify-start items-center">
                <input
                    type="text"
                    className="border-b-2 border-black w-full pl-10 pr-2 py-2 outline-none"
                    placeholder="Search Notes"
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute text-xl pl-2" />
            </div>
        );
    }
}

export default NoteSearch;
