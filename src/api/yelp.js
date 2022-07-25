import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer yaF7eGg6G8HJ-xqJ36Fkuwt_TAV0aApvJEwcifmYXnxgCwD0BwskRs1C0jkPEWQkM1hrczi2cvNoia_AuILVoaWp155jUZp0qWbhWqCqWkRop8bL7r1Pinj5PS_dYnYx",
  },
});
