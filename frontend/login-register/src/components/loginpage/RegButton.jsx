import '../../styles/Login.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 

function RegButton(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Register`; 
    navigate(path);
  }

    const ColorButton = styled(Button)(() => ({
        width: 450,
        borderRadius: 40,
        color: '#467E18', // Text color
        backgroundColor: 'transparent', // Transparent background
        border: '1px solid #4CAF50', // Border color as green
        '&:hover': {
            color: '#fff',
            backgroundColor: '#274C08', // Darker green on hover
            border: '1px solid #467E18', // Darker green border on hover
        },
      }));

      return (
        <div className='regButton'>
          <ColorButton variant="outlined" onClick={routeChange}>Sign Up for Email</ColorButton>
          </div>
      );

    // const ColorButton = styled(Button)(() => ({
    //     width: 450,
    //     borderRadius: 40,
    //     '&:hover': {
    //       backgroundColor: '#467E18',
    //     },
    //   }));

    //   return (
    //     <div className='regButton'><ColorButton variant="outlined">Sign Up for Email</ColorButton></div>
    //   );

    // return(
    //     <div className='regButton'><Button variant="outlined">Sign Up for Email</Button></div>
    // )
}

export default RegButton