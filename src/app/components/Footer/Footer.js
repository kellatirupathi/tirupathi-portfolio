import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BiSolidPhoneOutgoing} from 'react-icons/bi'
import './footer.css'
const Footer = () => {
  return (
    <div id='footer'>
        <div className="footerSec1">
            <p className='footerDetails' ><MdEmail/> kellatirupathirao049@gmail.com</p>
            <p className='footerDetails' ><BiSolidPhoneOutgoing/> 6303639014</p>
        </div>
        <div className="footerSec2">
            <p>Tirupathi Rao Kella &copy; 2023 All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
