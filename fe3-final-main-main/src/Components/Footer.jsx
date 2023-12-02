import React from 'react'

import { ContextGlobal } from '../Components/utils/global.context';

import './css/footer.css'

const Footer = () => {
  const { state } = ContextGlobal();
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  return (
    <footer className={`${themeClass}`}>
      <div className={`bottom ${themeClass}`}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
        <div className="bottom-right">
          <img src="./img/ico-facebook.png" alt='Facebook' />
          <img src="./img/ico-instagram.png" alt='Instagram' />
          <img src="./img/ico-tiktok.png" alt='Tiktok' />
          <img src="./img/ico-whatsapp.png" alt='Whatsapp' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
