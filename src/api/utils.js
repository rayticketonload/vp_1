export function eraseEmpty(obj) {
  const res = {};
  for (const key in obj) {
    if (obj[key] !== '' && obj[key] !== null) {
      res[key] = obj[key];
    }
  }
  return res;
}

export function encodeQueryData(data) {
  const ret = [];
  for (const d in data) {
    ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
  }
  return ret.join('&');
}

// 格式化查询日期（开始-结束）参数
export function formatDateRange(dateRange, key, formatFilter) {
  const dateRangeParams = {
    [`${key}Start`]: null,
    [`${key}End`]: null,
  };

  if (!dateRange) {
    return dateRangeParams;
  }

  if (dateRange.min) {
    dateRangeParams[`${key}Start`] = formatFilter(dateRange.min);
  }

  if (dateRange.max) {
    dateRangeParams[`${key}End`] = formatFilter(dateRange.max);
  }

  return dateRangeParams;
}
