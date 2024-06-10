import TextField from '@mui/material/TextField';
import '../../styles/Login.css';


function EmailText(){
    return(
        <div className='textField'>
            <TextField id="outlined-basic-email"
            label="Email"
            variant="outlined"
            sx={{
                bgcolor: '#EFEFEF',
                borderRadius: 10,
                width: 450,
            }}
            InputLabelProps={{
                style: { color: '#6A6A6A' } // Default text color
            }}
            />
        </div>
    )
}


export default EmailText;