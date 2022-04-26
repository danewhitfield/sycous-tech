import axios from "axios";

const sycousApi = axios.create({
  baseURL:
    "https://green-meadow-0b6c10003.azurestaticapps.net/building-location.json",
});

export const getData = () => {
  return sycousApi.get().then(({ data }) => {
    const consumers = data.locations.map((location) => location.consumers);
    return consumers;
  });
};
