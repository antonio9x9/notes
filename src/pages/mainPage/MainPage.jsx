import Sidebar from "../../components/sideBar";

import "./index.css"

export default function MainPage() {
    return (
        <div className="container">
            <div className="topPanel">

                <div className="header">
                    <button>Expand left menu</button>
                    <h3>Notes</h3>
                    <input placeholder="Search" />
                    <button>Refresh</button>
                    <button>Settings</button>
                    <image>
                        User iamage
                        <button>Logout</button>
                    </image>
                </div>
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="centerPanel">
                <div className="addNotePanel">
                    <input placeholder="Add note..." />
                    <button>New list </button>
                    <button> New note with image</button>
                </div>

            </div>
        </div>
    );
}
