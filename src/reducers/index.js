import { combineReducers } from 'redux'
import plantsReducer from './plantsReducer'
// import plantReducer from './plantReducer'



export default combineReducers({
    plants: plantsReducer,
    // plant: plantReducer
})
