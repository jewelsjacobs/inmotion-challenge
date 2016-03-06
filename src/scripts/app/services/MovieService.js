import mServices from './_mServices';

mServices.service('MovieService', function (ApiService, API) {
    this.getMovies = () => {
        return ApiService[API].findAll();
    };

    this.getMovie = (id) => {
        return ApiService[API].find(id);
    };

    this.addMovie = (movie) => {
        return ApiService[API].add(movie);
    };

    this.updateMovie = (movie, id) => {
        return ApiService[API].update(movie, id);
    };

    this.deleteMovie = (id) => {
        return ApiService[API].remove(id);
    };
});
