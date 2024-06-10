import '../../styles/Register.css';
import Logo from '../../assets/logo.png';
import LoginGreen from '../LoginPage/LoginGreen';
import UserName from './UserName';
import PhoneNumber from './PhoneNumber';
import PasswordReg from './PasswordReg';
import ConfirmPassword from './ConfirmPassword';
import RetrieveEmail from './RetrieveEmail';
import RegisterImage from './RegisterImage';
import UserRole from './UserRole';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className='Register'>
            <div className='RegisterTextBox'>
                <img src={Logo} className="appLogo" alt="logo" />
                <div className='RegisterText'>Create an account</div>
                <UserName />
                <PhoneNumber />
                <UserRole />
                <PasswordReg />
                <ConfirmPassword />
                <RetrieveEmail />
                <div className='backToLogin'>
                    <Link to="/"> Already have an account? Sign in here! </Link>
                </div>
            </div>
            <LoginGreen />
            <RegisterImage />
        </div>
    );
}

export default Register