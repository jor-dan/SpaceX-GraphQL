interface OutputControl {
  limit?: number;
  offset?: number;
  order?: string;
  sort?: string;
}

const body = ({
  limit, offset, order, sort,
}: OutputControl) => {
  const res: any = {};
  if (limit) res.limit = limit;
  if (offset) res.offset = offset;
  if (order) res.order = order;
  if (sort) res.sort = sort;
  return res;
};

export default body;
