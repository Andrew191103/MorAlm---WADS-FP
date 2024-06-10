import '../App.css';
import MoralmLogo from '../assets/MoralmLogo.png';
import UserLogo from '../assets/user.png';

function Header(){
    return(
        <div className="Header">
            <nav className="top-nav">
            <div className="nav-left">
                <img src={MoralmLogo} alt="Moralm Logo" className="logoimg" />
            </div>
            <div className="gradient-bar">
                <div className="segment segment1"></div>
                <div className="segment segment2"></div>
                <div className="segment segment3"></div>
                <div className="segment segment4"></div>
            </div>
            <div className="nav-right">
                <img src={UserLogo} alt="User Avatar" className="useravatar" />
                <div className="user-info">
                ⏷
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header