import '../../styles/Login.css';
import logImgPure from '../../assets/logimgpure.png';
import imgOne from '../../assets/log1.png';
import imgTwo from '../../assets/log2.png';
import imgThree from '../../assets/log3.png';
import imgFour from '../../assets/log4.png';

function LoginImage() {
  return (
    <>
    <img src={logImgPure} className='LoginImage'></img>
    <img src={imgOne} className='LoginImage1'></img>
    <img src={imgTwo} className='LoginImage2'></img>
    <img src={imgThree} className='LoginImage3'></img>
    <img src={imgFour} className='LoginImage4'></img>
    </>
  )
}

export default LoginImage