import React from 'react'
import './Account.css'
import image from '../../Assets/chooseFile.png';
import img from '../../Assets/LoginPageImage_2.jpg'
const Account = () => {
  return (
    <>
    <section className='accountInfo'>
        <div className='container boxItems'>
        <h1>Account Information</h1>
        <div className='content'>
            <div className='left'>
                <div className='img flexCenter'>
                    <input type='file' src={image} alt='img'/>
                    <img src={img} alt='images'  />
                </div>
                </div>
                <div className='right'>
                    <label htmlFor=''>Username</label>
                    <input type='text' />
                    <label htmlFor=''>Email</label>
                    <input type='email' />
                    <label htmlFor=''>Password</label>
                    <input type='password' />
                    <button className='button'>Update</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Account
