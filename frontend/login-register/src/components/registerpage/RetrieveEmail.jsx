import '../../styles/Login.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function RetrieveEmail(){

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#467E18'),
        width: 636,
        borderRadius: 40,
        backgroundColor:'#467E18',
        '&:hover': {
          backgroundColor: '#274C08',
        },
      }));

      return (
        <div className='regRetrieveButton'><ColorButton variant="contained">Retrieve Email</ColorButton></div>
      );
}

export default RetrieveEmail