import React from 'react'
import Card from '../../components/Card/card'
import MenuBar from '../../components/Menubar/menu'
import kl from '../../styles/kl2.jpg'

function App () {
  return (
    <div className="App">
      <div className='all-content'>
      <div className="title-item">
        <h1>Nomad Runway Calculator</h1>
      </div>
      <div className="content-section">
        <div className="nomadcalc-item">
          <MenuBar></MenuBar>
        </div>
        <div className="nomadcalc-item">
          <Card></Card>
        </div>
        <div className="nomadcalc-item">
          <div className="nomadcalc-item__tribute">
            <div className="nomadcalc-item__thanks">
              <p>Huge thanks to
                <a className ='nomadcalc-item__thanks__link' href="https://twitter.com/levelsio" target="_blank">
                  <label className='nomadcalc-item__thanks__levelsio'> @levelsio</label>
                </a> for the idea</p>
            </div>
          </div>
        </div>
        <div className="nomadcalc-item nomadcalc-item__footer">
          <div className="">
            <p>Disclaimer: This is a work in progress.</p>

            <p className='pls-dont-sue-me-<3'>
            The information provided here is for informational purposes only and should not be considered as legal,
            financial, or travel advice. You should consult with a licensed professional for advice specific to your
            individual needs. Our travel calculation service does not make any guarantee or other promise as to the
            accuracy, completeness, or reliability of the information provided. Your use of the information on our
            website or materials linked from the website is at your own risk. We disclaim any and all liability for any
            damages or losses that may arise from the use of our service.
          </p> </div>
        </div>
      </div>
      </div>
      <div className='freaking-kl'>
        <img src={kl}></img>
      </div>
    </div>
  )
}

export default App
