import TextField from '@mui/material/TextField';
import '../../styles/Register.css';


function UserName(){
    return(
        <div className='textFieldReg'>
            <TextField id="outlined-basic-firstname"
            label="First Name"
            variant="outlined"
            sx={{
                bgcolor: '#EFEFEF',
                borderRadius: 10,
                width: 310,
            }}
            InputLabelProps={{
                style: { color: '#6A6A6A' } // Default text color
            }}
            />

            <TextField id="outlined-basic-lastname"
            label="Last Name"
            variant="outlined"
            sx={{
                bgcolor: '#EFEFEF',
                borderRadius: 10,
                width: 310,
            }}
            InputLabelProps={{
                style: { color: '#6A6A6A' } // Default text color
            }}
            />
        </div>
    )
}


export default UserName;