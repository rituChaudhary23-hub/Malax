export const getDate = (theDate, days) => {
  let newDate = new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  let month = newDate.getMonth() + 1;
  let date =
    (newDate.getDate() < 10 ? "0" : "") +
    newDate.getDate() +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    newDate.getFullYear();
  return date;
};
export function copyTextToClipboard(text) {
  var txtArea = document.createElement("textarea");
  txtArea.id = "txt";
  txtArea.style.position = "fixed";
  txtArea.style.top = "0";
  txtArea.style.left = "0";
  txtArea.style.opacity = "0";
  txtArea.value = text;
  document.body.appendChild(txtArea);
  txtArea.select();
  try {
    var successful = document.execCommand("copy");
    if (successful) {
      return true;
    }
  } catch (err) {
  } finally {
    document.body.removeChild(txtArea);
  }
  return false;
}

export const listDateFormat = date => {
  debugger
  let newDAte = new Date(date);
  let parsedDate = newDAte.toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let time = newDAte.toLocaleTimeString("default", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  });
  return parsedDate + " " + time;
};

export function trimPair(pair, type) {
  if (type === 1) return pair.substring(0, pair.indexOf("-"));
  else return pair.substring(pair.indexOf("-") + 1);
}

export const listDateFormat_csv = date => {
  let newDAte = new Date(date);
  let parsedDate = newDAte.toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return parsedDate;
};
export const listDateFormat_sample = date => {
  debugger
  if(date != undefined){
  let newDAte = date.split('T')[0];
  // let parsedDate = newDAte.toLocaleDateString("default", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric"
  // });
  return newDAte;
  } else {
    let newDAte = new Date(date);
    let parsedDate = newDAte.toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return parsedDate
  }
};

function parseDateFormat(date) {
  return (
    date.substr(date.lastIndexOf("-") + 1) +
    "-" +
    date[3] +
    date[4] +
    "-" +
    date[0] +
    date[1]
  );
}

export const extractDate = (date, type) => {
  if (type === 1) {
    let parsedDate = date.substring(0, date.indexOf(" - "));
    parsedDate = parseDateFormat(parsedDate);
    return parsedDate;
  } else {
    let parsedDate = date.substring(date.indexOf(" - ") + 3);
    if (parsedDate.length !== 0) {
      parsedDate = parseDateFormat(parsedDate);
      return parsedDate;
    } else return false;
  }
};
