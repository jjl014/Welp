import {combineReducers} from 'redux';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';


const EntitiesReducer = combineReducers({
  businesses: BusinessesReducer,
  reviews: ReviewsReducer
});

export default EntitiesReducer;
