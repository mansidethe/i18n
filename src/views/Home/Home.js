import React from 'react'
import './Home.css'
import i18n from './../../utils/i18n'

function Home() {
  const usersCount = 15;

  return (
    <div>
        <h1>{i18n("welcomemessage")}</h1>
        <p>{i18n("normalmessage")}</p>
        <h2>{i18n("greetingmessage")}</h2>
        <h5>{i18n("endMessage")}</h5>
       

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

        <h5>{i18n("userstack", "<studentCount>",usersCount)}</h5>
    </div>
  )
}

export default Home