import {combineReducers} from 'redux';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';
import ImagesReducer from './images_reducer';

const EntitiesReducer = combineReducers({
  businesses: BusinessesReducer,
  reviews: ReviewsReducer,
  images: ImagesReducer
});

export default EntitiesReducer;
