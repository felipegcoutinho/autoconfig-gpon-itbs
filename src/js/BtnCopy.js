import React from 'react'

function BtnCopy() {
  const [buttonText, setButtonText] = React.useState('Copiar');

  function copyToClip(str) {
    function listener(e) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', str);
    }
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    setButtonText('Copiado!');
    setTimeout(() => {
      setButtonText('Copiar');
    }, 2000);
  }

  return (
    <div className={Style.btnContainer}>
      <button className={Style.button} onClick={() =>
        copyToClip(document.getElementById('profile-vlan').innerText)}>
        {buttonText}
      </button>
    </div>
  )
}

export default BtnCopy