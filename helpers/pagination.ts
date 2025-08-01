export const getPagination = (page?: number, limit?: number) => {
  const safePage = Number(page) || 1;
  const safeLimit = Number(limit) || 10;

  const skip = (safePage - 1) * safeLimit;

  return {
    page: safePage,
    limit: safeLimit,
    skip,
  };
};
