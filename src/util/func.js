export const changeDateNotation = (date, notation) => {
  if (date === null || date === undefined) return '';

  const dateStr = String(date);
  let newDate = '';

  for (let i = 0; i < dateStr.length; i++) {
    if (i === 3) {
      newDate += `${dateStr[i]}${notation}`;
    } else {
      newDate += dateStr[i];
    }
  }

  return newDate;
};

export const getYearMonthDiff = (startDate, endDate) => {
  let year = 0;
  let month = 0;

  const date1 = new Date(changeDateNotation(startDate, '-'));
  const date2 = endDate === null ? new Date() : new Date(changeDateNotation(endDate, '-'));
  
  const diffDate = date1.getTime() - date2.getTime();
  const diffMonth = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30))) + 1;

	year = Math.trunc(diffMonth / 12);
  month = diffMonth % 12;

  return [year, month];
};

export const getYearMonthDiffStr = (diffArr) => {
  let diffStr = '';
  const diffYear = diffArr[0];
  const diffMonth = diffArr[1];

  if (diffYear === 0) {
    diffStr = `${diffMonth}개월`;
  } else if (diffYear !== 0 && diffMonth === 0) {
    diffStr = `${diffYear}년`;
  } else if (diffYear !== 0 && diffMonth !== 0) {
    diffStr = `${diffYear}년 ${diffMonth}개월`;
  } else {
    return console.error('getYearMonthDiffStr: Check argument!')
  }

  return diffStr;
};