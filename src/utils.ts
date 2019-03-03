interface QueryStrings {
  order?: string;
  sort?: string;
}

const body = ({ order, sort }: QueryStrings) => {
  const res: any = {};
  if (order) res.order = order;
  if (sort) res.sort = sort;
  return res;
};

export default body;
