
import './card.css'
import { useSelector } from 'react-redux'
import { airportsNomad } from '../misc/Countries'
import menu from '../Menubar/menu'

function Card () {
  const state = useSelector((state: any) => state.overviewCard)
  const menuState = useSelector((state: any) => state.menubar)

  return (
        <div className="overview-card">
                 <div className="overview-card__items">
            <div className="overview-card__title">
                <h1>Overview</h1>
            </div >

            <div className="overview-card__">
                <table className='overview-card__table'>
                    <tr className='overview-card_row-result'>
                        <th>✈️ One way flight ticket </th>
                        <th>${state.flightPrice}</th>
                    </tr>
                    <tr className='overview-card_row-result'>
                        <th>🏨 1 month in a shared apartment</th>
                        <th>${state.accomodationPrice}</th>
                    </tr>
                    <tr className='overview-card_row-result'>
                        <th>🍽 1 month of food</th>
                        <th>${state.monthlyFoodPrice}</th>
                    </tr >
                    <tr className='overview-card_row-result'>
                        <th>📆 Monthly expenses</th>
                        <th>${state.monthlyExpenses}</th>
                    </tr>
                    <tr className='overview-card_row-result'>
                        <th>💸 Daily expenses</th>
                        <th>${state.dailyExpenses}</th>
                    </tr>
                </table>

            </div>
            <div className="overview-card_expenses">

                <table>
                </table>
            </div>
            <div className="overview-card_survivaldays">
                <p>You could live in {menuState.destinationCountry} for <label className='overview-card_survivaldays_sucess'>{state.survivalYears}</label> years <label className='overview-card_survivaldays_sucess'>{state.survivalMonths}</label> months <label className='overview-card_survivaldays_sucess'>{state.survivalDays}</label> days </p>
            </div>
            </div>

        </div>

  )
}

export default Card
