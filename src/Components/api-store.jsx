import axios from "axios";
import { makeObservable, observable, action } from "mobx";

export class ApiStoreImpl {
  data = [];
  error = null;
  isLoaded = false;
  movies = [];
  latest_movies = [];
  trending_movie = [];
  related_movie = "";
  apiKey = "d62dc3f89ffd51183a0e62149a3931a4";

  constructor() {
    makeObservable(this, {
      data: observable,
      error: observable,
      isLoaded: observable,
      movies: observable,
      trending_movie: observable,
      latest_movies: observable,
      related_movie: observable,
      fetchSearchData: action.bound,
      fetchTrendingMovie: action.bound,
      fetchLatestMovie: action.bound,
    });
  }
  fetchSearchData = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`)
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

  fetchTrendingMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
      )
      .then(
        (res) => {
          this.isLoaded = true;
          this.trending_movie = res.data;
          console.log("data is available");
          console.log(res.data);
          console.log("Trending Movie has been fetched");
        },
        (error) => {
          this.isLoaded = true;
          this.error = error;
          console.log("data error");
        }
      );
  };

  fetchLatestMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`
      )
      .then(
        (res) => {
          this.isLoaded = true;
          this.latest_movies = res.data;
          console.log("data is available");
          console.log(res.data);
          console.log("Latest Movie has been fetched");
        },
        (error) => {
          this.isLoaded = true;
          this.error = error;
          console.log("data error");
        }
      );
  };

  fetchRelatedMovie = (searchKeyword) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchKeyword}`
      )
      .then(
        (res) => {
          this.isLoaded = true;
          this.related_movie = res.data;
          console.log("data is available");
          console.log(res.data);
          console.log("Latest Movie has been fetched");
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
