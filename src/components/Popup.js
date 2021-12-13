import React from 'react'
import '../scss/popup.scss'

function Popup({ trigger, setIsOpen, update, setUpdate }) {
  
  const kopie = {...update};
  console.log('hier', kopie);
/*   function handChange(event) {
    setUpdate(event.target.value);
  } */

  return (trigger) ? (
    <div className='popup'>
      <h2>Update your item ...</h2>
      <form action="" className='popup-form'>
        <input type="text" className="inputItem" />
        <div className='popup-btn'>
          <button className="btn-update" onClick={() => setUpdate(update)}>update</button>
          <button className='btn-close' onClick={()=> setIsOpen(false)}>Close</button>
        </div>
      </form>
    </div>
  ) : '';
}

export default Popup;