export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

export const removeBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

export const updateBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});
