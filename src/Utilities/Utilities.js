export const calculateDuration = (startTime, endTime) => {
  const startDate = new Date(`01/01/2023 ${startTime}`);
  const endDate = new Date(`01/01/2023 ${endTime}`);

  const timeDifference = endDate - startDate;

  const hours = Math.floor(timeDifference / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);
  let duration = `${hours} hours`;

  if (minutes > 0) {
    duration += ` ${minutes} minutes`;
  }
  return duration;
};

export const renderDayMonthFormat = (appointmentDate) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(appointmentDate);
};

export const formattedDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date());
};

export const greetings = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Noon";
  } else {
    return "Evening";
  }
};
