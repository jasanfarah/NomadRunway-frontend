interface IOverviewCardState {
    origin: string;
    destination: string;
    departureDate: string;
    flightPrice: string;
    accomodationPrice: string;
    monthlyFoodPrice: string;
    monthlyExpenses: string;
    dailyExpenses: string;
    survivalYears: string;
    survivalMonths: string;
    survivalDays: string;
}

export const initialState = {
    "origin": "",
    "destination": "-",
    "departureDate": "2022-05-01",
    "flightPrice": "-",
    "accomodationPrice": "-",
    "monthlyFoodPrice": "-",
    "monthlyExpenses": "-",
    "dailyExpenses": "-",
    "survivalYears": "-",
    "survivalMonths": "-",
    "survivalDays": "-"
};


// @ts-ignore
export function overviewCardReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, origin: action.payload.origin, destination: action.payload.destination, departureDate: action.payload.departureDate, flightPrice: action.payload.flightPrice, accomodationPrice: action.payload.accomodationPrice, monthlyFoodPrice: action.payload.monthlyFoodPrice, monthlyExpenses: action.payload.monthlyExpenses, dailyExpenses: action.payload.dailyExpenses, survivalYears: action.payload.survivalYears, survivalMonths: action.payload.survivalMonths, survivalDays: action.payload.survivalDays};
        default:
            return state;
    }
}


