import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import BusinessErrorsReducer from './business_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  business: BusinessErrorsReducer
});

export default ErrorsReducer;
