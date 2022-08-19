import moment from "moment";

const weddingDate = "20230604";

export const weddingInfo = {
  date: moment(weddingDate),
  location: "Hacienda, Rio Grande",
};

export const schedule = {
  events: [
    {
      time: moment(`${weddingDate} 16:00`, "YYYYMMDD HH:mm"),
      display: "The Ceremony",
      icon: "rings.svg",
    },
    {
      time: moment(`${weddingDate} 16:30`, "YYYYMMDD HH:mm"),
      display: "Cocktails",
      icon: "cocktails.svg",
    },
    {
      time: moment(`${weddingDate} 17:15`, "YYYYMMDD HH:mm"),
      display: "Party Entrance First Dance",
      icon: "dancing.svg",
    },
    {
      time: moment(`${weddingDate} 17:30`, "YYYYMMDD HH:mm"),
      display: "Dinner Time!",
      icon: "dinnerplate.svg",
    },
    {
      time: moment(`${weddingDate} 18:15`, "YYYYMMDD HH:mm"),
      display: "Toasts",
      icon: "toast.svg",
    },
    {
      time: moment(`${weddingDate} 19:00`, "YYYYMMDD HH:mm"),
      display: "Cake Cutting",
      icon: "cake.svg",
    },
    {
      time: moment(`${weddingDate} 21:00`, "YYYYMMDD HH:mm"),
      display: "Bouquett Toss",
      icon: "bouquett.svg",
    },
    {
      time: moment(`${weddingDate} 22:30`, "YYYYMMDD HH:mm"),
      display: "Send Off",
      icon: "fireworks.svg",
    },
    {
      time: moment(`${weddingDate} 23:00`, "YYYYMMDD HH:mm"),
      display: "Farewell",
      icon: "car.svg",
    },
  ],
};
