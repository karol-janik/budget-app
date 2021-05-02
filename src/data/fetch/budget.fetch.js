export const fetchBudgetData = (id) => {
  const promise = fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`
  );

  return promise;
};

export const fetchBudgetCategoriesData = (id) => {
  const promise = fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`
  );

  return promise;
};