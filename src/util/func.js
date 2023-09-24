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

// export const getPeriod = (startDate, endDate) => {
//   let period = '';
//   const date1 = new Date(changeDateNotation(startDate, '-'));
//   const date2 = endDate === null ? new Date() : new Date(changeDateNotation(endDate, '-'));
  
//   const diffDate = date1.getTime() - date2.getTime();
//   const diffMonth = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));

//   return period;
// };


const getYearMonthDiff = (startDate, endDate) => {
  let year = 0;
  let month = 0;
  
  const date1 = new Date(startDate);
  const date2 = endDate === null ? new Date() : new Date(endDate);
  
  const diffDate = date1.getTime() - date2.getTime();
  const diffMonth = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30))) + 1;

	year = Math.trunc(diffMonth / 12);
  month = 1; // diffMonth / 12의 나머지

  return [year, month];
};