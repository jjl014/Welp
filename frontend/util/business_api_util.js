export const getAllBusinesses = () => (
  $.ajax({
    method: "GET",
    url: "/api/businesses"
  })
);

export const getBusiness = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/businesses/${id}`
  })
);

export const postBusiness = (business) => (
  $.ajax({
    method: "POST",
    url: "/api/businesses",
    data: {business}
  })
);

export const patchBusiness = (business) => (
  $.ajax({
    method: "PATCH",
    url: `/api/businesses/${business.id}`,
    data: {business}
  })
);

export const deleteBusiness = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/businesses/${id}`
  })
);