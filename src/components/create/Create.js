import React from 'react'
import './Create.css'
const Create = () => {
  return (
    <>
    <section className='newPost'>
        <div className='container boxItems'>
            <div className='img'>
        <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
            <form>
                <div className='inputFile flexCenter'>
                    <input type="file" />
                </div>
                <input type="text" placeholder="Title" />
                <textarea name='' rows="10" cols="30"></textarea>
                <button className='button'>Create Post</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Create