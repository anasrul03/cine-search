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
      fetchData: action.bound,
    });
  }

  fetchData = (url) => {
    axios.get(url).then(
      (res) => {
        this.isLoaded = true;
        switch (url) {
          case `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`:
            this.movies = res.data;
            console.log("Movies data is available");
            break;
          case `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=1`:
            this.trending_movie = res.data;
            console.log("Trending Movie data is available");
            break;
          case `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&page=5`:
            this.latest_movies = res.data;
            console.log("Latest Movie data is available");
            break;
          default:
            console.log("Unknown URL");
        }
      },
      (error) => {
        this.isLoaded = true;
        this.error = error;
        console.log("Error fetching data");
      }
    );
  };
}

const ApiStore = new ApiStoreImpl();

export default ApiStore;
