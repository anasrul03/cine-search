import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import { useEffect, useState } from "react";

export class ApiStoreImpl {
  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
    });
  }

  data = [];
  error = null;
  isLoaded = false;
  movies = [];
  apiKey = "d62dc3f89ffd51183a0e62149a3931a4";

  fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=3`
      )
      .then(
        (res) => {
          this.isLoaded = true;
          this.movies = res.data;
          console.log("data is available");
          console.log(res.data);
        },
        (error) => {
          this.isLoaded = true;
          this.error = error;
          console.log("data error");
        }
      );
  };
}

const ApiStore = new ApiStoreImpl();

export default ApiStore;
