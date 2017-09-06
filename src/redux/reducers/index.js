import { combineReducers } from 'redux'
import userReducer from './todos.js'
import userdetReducer from './userdetails.js'
import SearchReducer from './search.js'
import holdingsReducer from './holdings.js'
import userticketsReducer from './usertickets.js'
import transactionReducer from './transaction.js'
import userUpdateReducer from './userUpdate.js'
import supportReducer from './tickets.js'
import ticketReducer from './ticketDetail.js'
import esclateReducer from './esclatetomanagement.js'
import replyReducer from './mandrillReducer.js'
const todoApp = combineReducers({
  userReducer,
  userdetReducer,
  SearchReducer,
  holdingsReducer,
  transactionReducer,
  userUpdateReducer,
  supportReducer,
  userticketsReducer,ticketReducer,esclateReducer,replyReducer

})

export default todoApp