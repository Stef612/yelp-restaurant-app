import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import React from "react";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("yoooooo");
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
};

export default useResults;
