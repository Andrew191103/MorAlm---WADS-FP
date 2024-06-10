import '../../styles/Login.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function LoginButton(){

    // return(
    //     <div className='logButton'>
    //         <Button
    //         sx={{
    //             bgcolor: '#467E18',
    //             borderRadius: 10,
    //             width: 450
    //         }}
    //         variant="contained">
    //             Login
            
    //         </Button>
    //     </div>
    // );

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#467E18'),
        width: 450,
        borderRadius: 40,
        backgroundColor:'#467E18',
        '&:hover': {
          backgroundColor: '#274C08',
        },
      }));

      return (
        <div className='logButton'><ColorButton variant="contained">Login</ColorButton></div>
      );
}

export default LoginButton