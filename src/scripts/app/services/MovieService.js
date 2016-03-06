import mServices from './_mServices';

mServices.service('MovieService', function (ApiService, API) {
    this.getMovies = () => {
        ApiService[API].findAll();
    };

    this.getMovie = (id) => {
        ApiService[API].find(id);
    };

    this.addMovie = (movie) => {
        return ApiService[API].add(movie);
    };

    this.updateMovie = (id) => {
        ApiService[API].update(id);
    };

    this.deleteMovie = (id) => {
        ApiService[API].remove(id);
    };
});
