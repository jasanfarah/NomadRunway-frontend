export const initialState = {
    "destinationCountry": "",
        "departureAirport": "",
        "arrivalAirport": "",
        "departureDate": "",
        "savings": "",

};

// @ts-ignore
export function menuBarReducer(state = initialState, action) {
    switch (action.type) {
        case 'SUBMIT':
            return { ...state, destinationCountry:action.payload.destinationCountry,departureAirport: action.payload.departureAirport,arrivalAirport: action.payload.arrivalAirport, departureDate: action.payload.departureDate, savings: action.payload.savings};
        default:
            return state;
    }
}

// @ts-ignore
export function calculate(selectedAirport, selectedAirportDestination, departureDate, savings) {
    const formData = {
        "departureAirport": selectedAirport,
        "arrivalAirport": selectedAirportDestination,
        "departureDate": "2022-05-01",
        "savings": savings,
    };
    const url = 'http://localhost:3001/calculate';

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
}
