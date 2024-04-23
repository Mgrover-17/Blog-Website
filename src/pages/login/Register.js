import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../../Assets/myAccount.jpg'
import './Login.css'
const Register = () => {
  return (
    <>
    <section className='login'>
        <div className='containers'>
            <div className='backImg'>
                <img src={bgImage} alt=""/>
                <div className='text'>
                    <h1>Register</h1>
                </div>
            </div>
            <form>
                <span>Email Address*</span>
                <input type='email' required />
                <span>Username*</span>
                <input type='text' required />
                <span>Password*</span>
                <input type='password' required />
                <button className="button">Register</button>
                <Link to="/login">Login</Link>
            </form>
        </div>
    </section>
    </>
  )
}

export default Register