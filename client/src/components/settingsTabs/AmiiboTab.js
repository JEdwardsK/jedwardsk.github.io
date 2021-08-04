import React from 'react'
import amiiboLogo from '../../assets/logos/amiibo.png'
const AmiiboTab = () => {
  return (
    <div>
      <div>
        <img src={amiiboLogo} alt="amiibo logo" />
        <h4>You can edit and delete data saved to amiibo accessories</h4>
      </div>
      <div>
        <h4>Register Owner and Nickname</h4>
      </div>
      <div>
        <h4>Delete Game Data</h4>
      </div>
      <div>
        <h4>Rest amiibo</h4>
      </div>
    </div>
  )
}

export default AmiiboTab
