const initialState = {
    foreCastDetails : []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'FETCHDATA'){
        return {
            ...state,
            foreCastDetails : action.foreCast
        }
    }
    return state;
}

export default reducer;