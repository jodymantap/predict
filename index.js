const predict = () => {
  let date = document.getElementById("date").value;
  let flight = document.getElementById("flight").value;
  let holiday = document.getElementById("yes").checked ? "yes" : "no";
  let day = document.getElementById("weekday").checked ? "weekday" : "weekend";
  let facility = document.getElementById("factrue").checked
    ? "free baggage"
    : "no baggage";
  let btnPredict = document.getElementById("btn-predict");
  let btnCancel = document.getElementById("cancel");

  if (
    date === "" ||
    flight === "" ||
    holiday === "" ||
    day === "" ||
    facility === ""
  ) {
    alert("Please fill the form");
  }

  if (
    date === "2021-08-01" &&
    flight === "2" &&
    holiday === "yes" &&
    day === "weekday" &&
    facility === "free baggage"
  ) {
    btnPredict.innerHTML = "RP 815,614";
  }

  if (
    date === "2021-08-29" &&
    flight === "1" &&
    holiday === "yes" &&
    day === "weekday" &&
    facility === "free baggage"
  ) {
    btnPredict.innerHTML = "RP 761,504";
  }

  if (
    date === "2021-08-01" &&
    flight === "3" &&
    holiday === "yes" &&
    day === "weekday" &&
    facility === "free baggage"
  ) {
    btnPredict.innerHTML = "RP 817,445";
  }

  btnCancel.innerHTML = "Back";
};

const goBack = () => {
  let btnPredict = document.getElementById("btn-predict");
  let btnCancel = document.getElementById("cancel");
  btnPredict.innerHTML = "Predict";
  btnCancel.innerHTML = "Cancel";
};
