import '../../styles/Login.css';
import EmailText from './EmailText.jsx';
import LoginButton from './LoginButton.jsx';
import LoginGreen from './LoginGreen.jsx';
import PasswordText from './PasswordText.jsx';
import Logo from '../../assets/logo.png';
import RegButton from './RegButton.jsx';
import LoginImage from './LoginImage.jsx';

function Login() {
    return (
        <div className='Login'>
            <div className='LoginTextBox'>
                <img src={Logo} className="appLogo" alt="logo" />
                <div className='loginText'>Log In</div>
                <div className='loginTextTwo'>Kindly log in using your credentials</div>
                <EmailText />
                <PasswordText />
                <LoginButton />
                <RegButton />
            </div>
            <LoginGreen />
            <LoginImage />
        </div>
    );
}

export default Login;