import React from 'react'

import { Helmet } from 'react-helmet'

import './shadow.css'

const Shadow = (props) => {
  return (
    <div className="shadow-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="shadow-dummy-container">
        <img
          src="/external/shadow2271-z1kk-300w.png"
          alt="Shadow2271"
          className="shadow-shadow"
        />
      </div>
    </div>
  )
}

export default Shadow
