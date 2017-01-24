const DateHelpers = {
  dateTimeDisplay: (dtDateString) => {
    let displayDateTimeObj = new Date(dtDateString);

    return displayDateTimeObj.toLocaleDateString() + ' at ' + displayDateTimeObj.toLocaleTimeString();
  },

  dateDisplay: (dDateString) => {
    let displayDateObj = new Date(dDateString);

    return displayDateObj.toLocaleDateString();
  },

  timeDisplay: (timeString) => {
    let displayTimeObj = new Date(timeString);

    return displayTimeObj.toLocaleTimeString();
  },

  isoDateString: (isoDateString) => {
    let isoDateObj = new Date(isoDateString);

    return isoDateObj.toISOString();
  },
}

export default DateHelpers;
