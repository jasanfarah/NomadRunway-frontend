// 💰 Savings
// 🇩🇰 Copenhagen
// 🇲🇾 Kuala Lumpur
// :TODO - Convert input box to a component!
import './menu.css'
import React, { useState } from 'react'
import { airports, airportsNomad } from '../misc/Countries'
import { calculate } from '../../redux/menubar'
import { store, type AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'

function Menu () {
  const dispatch = useDispatch<AppDispatch>()
  const [savings, setSavings] = useState('')
  const [selectedAirport, setSelectedAirport] = useState('')
  const [selectedAirportDestination, setSelectedAirportDestination] = useState('')

  // @ts-expect-error
  function handleAirportChange (event) {
    setSelectedAirport(event.target.value)
  }
  // @ts-expect-error
  function handleAirportDestinationChange (event) {
    setSelectedAirportDestination(event.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    // ADD VALIDATION TO INPUTS
    // ADD FREAKING COUNTRY CODES
    const calculateor = await calculate(selectedAirport, selectedAirportDestination, '2022-05-01', savings)
    // @ts-expect-error
    const destinationCountry = airportsNomad.find((airport) => airport.code === selectedAirportDestination).country
    dispatch({ type: 'SUBMIT', payload: { destinationCountry, departureAirport: selectedAirport, arrivalAirport: selectedAirportDestination, departureDate: '2002', savings } })
    await dispatch({ type: 'UPDATE', payload: calculateor })
  }

  return (
            <div className="menu-bar">
                <form onSubmit={handleSubmit}>
                    <div className='menu-bar__items'>
                        <div className='menu-bar__item'>
                            <input type="number" name="savings" placeholder="💰 Savings" value={savings}
                                   onChange={event => { setSavings(event.target.value) }}/>
                        </div>
                        <div className='menu-bar__item'>
                            <select name="country1" value={selectedAirport} onChange={handleAirportChange}>
                                <option value="">Select your origin</option>
                                {airports.map((airport) => (
                                    <option key={airport.code} value={airport.code}>
                                        {`${airport.country} - ${airport.code}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='menu-bar__item'>
                            <select name="country2" value={selectedAirportDestination} onChange={handleAirportDestinationChange}>
                                <option value="">Select your destination</option>
                                {airportsNomad.map((airportNomad) => (
                                    <option key={airportNomad.code} value={airportNomad.code}>
                                        {`${airportNomad.country} - ${airportNomad.code}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                      <div className='menu-bar__item'>
                        <input type="date" name="savings" placeholder="💰 Date" value={savings}
                               onChange={event => { setSavings(event.target.value) }}/>
                      </div>
                        <div className='menu-bar__calculate'>
                            <button type='submit'>
                                Calculate
                            </button>
                        </div>
                    </div>
                </form>
            </div>
  )
}

export default Menu
