import './index.css'
import { FaRegLightbulb, FaRegTrashAlt, FaArchive, FaBell } from "react-icons/fa";

const sideBaritems = ["Notes", "Remembers", "Edit Markers", "Archive", "Bin"]

export default function Sidebar() {
    return (
        <div className="container">
            <ul>
                <li>
                    <div className='list-item'>
                        <a href="#">
                            <FaRegLightbulb className='menu-icon' />
                            <span className="li-item">Notes</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className='list-item'>
                        <a href="#">
                            <FaBell className='menu-icon' />
                            <span className="li-item">Remembers</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className='list-item'>
                        <a href="#">
                            <FaArchive className='menu-icon' />
                            <span className="li-item">Edit Markers</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className='list-item'>
                        <a href="#">
                            <FaRegLightbulb className='menu-icon' />
                            <span className="li-item">Archive</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className='list-item'>
                        <a href="#">
                            <FaRegTrashAlt className='menu-icon' />
                            <span className="li-item">Bin</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}