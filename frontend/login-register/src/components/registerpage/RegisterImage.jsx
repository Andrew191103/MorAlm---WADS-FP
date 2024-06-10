import '../../styles/Login.css';
import RegImgPure from '../../assets/regimgpure.png';
import regone from '../../assets/reg1.png';
import regtwo from '../../assets/reg2.png';
import regthree from '../../assets/reg3.png';
import regfour from '../../assets/reg4.png';

function RegisterImage() {
  return (
    <>
    <img src={RegImgPure} className='RegisterImage'></img>
    <img src={regone} className='RegisterImage1'></img>
    <img src={regtwo} className='RegisterImage2'></img>
    <img src={regthree} className='RegisterImage3'></img>
    <img src={regfour} className='RegisterImage4'></img>
    </>
  )
}

export default RegisterImage