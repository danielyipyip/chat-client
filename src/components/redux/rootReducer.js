
import {combineReducers} from 'redux'
import messagesReducer from './messages/messagesReducer'
import demographicReducer from './demographics/demoReducer'

const rootReducer = combineReducers({
    messages: messagesReducer, 
    demographic: demographicReducer, 
})

export default rootReducer;