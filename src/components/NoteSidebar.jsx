/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NoteSidebar({ noteTypes, selectedTypeHandler }) {
    return (
        <div className="basis-1/6 bg-black rounded-l-[1.5rem] flex flex-col gap-8">
            <button disabled className="bg-white p-4 rounded-tl-[1.5rem] rounded-br-[1.5rem] w-fit">
                <FontAwesomeIcon icon={faBars} className='text-black text-xl' />
            </button>
            <div className="flex flex-col w-full font-semibold text-lg">
                <button onClick={() => selectedTypeHandler('all')} className="px-4 py-2 text-white w-full flex gap-4 group">
                    <div className={`w-1 h-full ${noteTypes == 'all' ? 'bg-white' : 'bg-black'} rounded-t-xl rounded-b-xl group-hover:bg-white transition-all duration-300 ease-in-out`}></div>
                    <p>Personal Notes</p>
                </button>
                <button onClick={() => selectedTypeHandler('archived')} className="px-4 py-2 text-white w-full flex gap-4 group">
                    <div className={`w-1 h-full ${noteTypes == 'archived' ? 'bg-white' : 'bg-black'} rounded-t-xl rounded-b-xl group-hover:bg-white transition-all duration-300 ease-in-out`}></div>
                    <p>Archived</p>
                </button>
            </div>
        </div>
    );
}

export default NoteSidebar;
