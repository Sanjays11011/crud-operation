import React, { useEffect } from 'react';
import { useState } from 'react';
import './adduser.css';
import { Datas,addData } from '../data/datas'; 

function Adduser(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
   


    function handleClose() {
        props.closeFunction();
    }

    function submitData() {
      
      if (!name || !email ||  !address) {
          window.alert('All fields are required');
          
          return;
      }

      if (!/^[0-9]{10}$/.test(phone)) {
        window.alert('Please enter a valid 10-digit phone number');
        return;
    }
    const newData = {
      id: Datas.length + 1,
      name: name,
      email: email,
      phone: phone,
      address: address
    };
    addData(newData);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }

  


  return (props.trigger)?(
    <div className='popup'>
        <div className='logpage'>
          <table className='logtable'>
            <tbody className='logbody'>
              <div className='closebtn'>
              <p className='close' onClick={handleClose}>&times;</p>
              </div>
            <tr>
              <td>
                <img id='image' src='login.png' alt='user' width="50" height="50"></img>
                </td>
              <td>
                <label id='logtitle'>Login page</label>
                </td>
            </tr>
            <tr>
  <td>
    <label className='loglabel'>Name</label>
  </td>
  <td>
    <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)} required placeholder='Enter name'/>
  </td>
</tr>
<tr>
  <td>
    <label className='loglabel'>Email ID</label>
  </td>
  <td>
    <input type="email" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} required placeholder='Enter Email'/>
  </td>
</tr>
<tr>
  <td>
    <label className='loglabel'>Phone NO</label>
  </td>
  <td>
    <input type="tel" name="phone" value={phone} id="phone" pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} required placeholder='Enter Phone number'/>
  </td>
</tr>
<tr>
  <td>
    <label className='loglabel'>Address</label>
  </td>
  <td>
    <textarea id="address" name="address" value={address} rows={4} cols={25} onChange={(e) => setAddress(e.target.value)} required></textarea>
  </td>
</tr>

            <tr>
              <td>
                <button id = 'logsub' type='submit' onClick={() => {handleClose(); submitData(); }}>Submit</button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
    </div>
  ):"";
  
}

export default Adduser;