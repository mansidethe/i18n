import React from 'react'
import './Home.css'
import i18n from './../../utils/i18n'

function Home() {
  const usersCount = 15;

  return (
    <div className='main-container'>
     
        <h1 className='text-center'>{i18n("welcomemessage")}</h1>

        <div className='container'>
        <h3>{i18n("normalmessage")}</h3>
        <h2>{i18n("userstack", "<studentCount>",usersCount)}</h2>
        <h2 className='text'>{i18n("greetingmessage")}</h2>
        </div>
       
<div className='select-option'>
        <select 
        
         defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
          localStorage.setItem("lang", e.target.value);
          window.location.reload();
        }}>
        <option value='mr'>Marathi</option>
        <option value='hi'>Hindi</option>
        <option value='en'>English</option>
        </select>
        </div>
        
    </div>
  )
}

export default Home