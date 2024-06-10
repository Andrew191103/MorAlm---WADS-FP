import React from 'react';
import MoralmLogo from '../assets/MoralmLogo.png';
import UserLogo from '../assets/UserLogo.png';

const styles = {
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    position: 'relative',
    background: 'linear-gradient(to right, #467E18 0%, #467E18 12%, #699744 10%, #699744 15%, #81A862 20%, #81A862 20%, #90B274 20%, #90B274 100%)',
  },
  gradientBar: {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  segment1: {
    height: '100%',
    backgroundColor: '#467E18',
    width: '20%',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
  },
  segment2: {
    height: '100%',
    backgroundColor: '#699744',
    width: '5%',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
  },
  segment3: {
    height: '100%',
    backgroundColor: '#81A862',
    width: '5%',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
  },
  segment4: {
    height: '100%',
    backgroundColor: '#90B274',
    width: '100%',
  },
  navLeft: {
    zIndex: '1',
    marginLeft: '1%',
  },
  navRight: {
    zIndex: '1',
    marginRight: '5%',
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    marginLeft: '20px',
    maxWidth: '130px',
  },
  userAvatar: {
    height: '40px',
    marginRight: '20px',
  },
  userInfo: {
    fontSize: '12px',
    whiteSpace: 'nowrap',
    lineHeight: '0.1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '15px',
    fontWeight: '700',
    fontFamily: 'DM Sans, sans-serif'
},
};

const Header = () => {
  return (
    <nav style={styles.topNav}>
      <div style={styles.navLeft}>
        <img src={MoralmLogo} alt="Moralm Logo" style={styles.logoImg} />
      </div>
      <div style={styles.gradientBar}>
        <div style={styles.segment1}></div>
        <div style={styles.segment2}></div>
        <div style={styles.segment3}></div>
        <div style={styles.segment4}></div>
      </div>
      <div style={styles.navRight}>
        <img src={UserLogo} alt="User Avatar" style={styles.userAvatar} />
        <div style={styles.userInfo}>
          <p>Harbor 1</p>
          <p>23567899865</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
