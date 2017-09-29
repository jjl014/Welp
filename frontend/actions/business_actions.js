export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const CLEAR_BUSINESS_ERRORS = "CLEAR_BUSINESS_ERRORS";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";
export const RECEIVE_SEARCH_BUSINESSES = "RECEIVE_SEARCH_BUSINESSES";
export const RECEIVE_RECOMMENDED_BUSINESSES = "RECEIVE_RECOMMENDED_BUSINESSES";
export const CLEAR_BUSINESSES = "CLEAR_BUSINESSES";

import {
  getAllBusinesses,
  getBusiness,
  postBusiness,
  patchBusiness,
  destroyBusiness,
  getRecommendedBusinesses } from '../util/business_api_util';

import {filterBusinesses} from '../util/search_api_util';

export const clearBusinesses = () => ({
  type: CLEAR_BUSINESSES
});

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

export const removeBusiness = (businessId) => ({
  type: REMOVE_BUSINESS,
  businessId
});

export const editBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveBusinessErrors = (errors) => ({
  type: RECEIVE_BUSINESS_ERRORS,
  errors
});

export const clearBusinessErrors = () => ({
  type: CLEAR_BUSINESS_ERRORS
});

export const receiveSearchBusinesses = (businesses) => ({
  type: RECEIVE_SEARCH_BUSINESSES,
  businesses
});

export const receiveRecommendedBusinesses = (businesses) => ({
  type: RECEIVE_RECOMMENDED_BUSINESSES,
  businesses
});

export const fetchBusinesses = () => dispatch => (
  getAllBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = (id) => dispatch => (
  getBusiness(id)
    .then((business) => dispatch(receiveBusiness(business)))
);

export const createBusiness = (business) => dispatch => (
  postBusiness(business)
    .then((newBusiness) => dispatch(receiveBusiness(newBusiness)),
          (errors) => dispatch(receiveBusinessErrors(errors.responseJSON)))
);

export const updateBusiness = (business) => dispatch => (
  patchBusiness(business)
    .then((updatedBusiness) => dispatch(receiveBusiness(updatedBusiness)),
          (errors) => dispatch(receiveBusinessErrors(errors.responseJSON)))
);

export const deleteBusiness = (businessId) => dispatch => (
  destroyBusiness(businessId)
    .then(() => dispatch(removeBusiness(businessId)))
);

export const searchBusinesses = (searchKeyword) => dispatch => (
  filterBusinesses(searchKeyword)
    .then((businesses) => dispatch(receiveSearchBusinesses(businesses)))
);

export const recommendedBusinesses = (recommend) => dispatch => (
  getRecommendedBusinesses(recommend)
    .then((businesses) => dispatch(receiveRecommendedBusinesses(businesses)))
);
