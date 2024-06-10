import '../../styles/Register.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import Lock from '../assets/Iconlock.png';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

function PasswordReg(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
    <div className='passwordRegister'>
        <FormControl 
        sx={{ bgcolor: '#EFEFEF', borderRadius: 10, width: 636 }}
        variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password-register" style={{color: '#6A6A6A'}}>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </div>
    )
}

export default PasswordReg