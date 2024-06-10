import TextField from '@mui/material/TextField';
import '../../styles/Register.css';


function PhoneNumber(){
    return(
        <div className='phoneNum'>
            <TextField id="outlined-basic-phone"
            label="Phone Number"
            variant="outlined"
            sx={{
                bgcolor: '#EFEFEF',
                borderRadius: 10,
                width: 636,
            }}
            InputLabelProps={{
                style: { color: '#6A6A6A' } // Default text color
            }}
            />
        </div>
    )
}


export default PhoneNumber;