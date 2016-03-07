import mServices from './_mServices';
import cuid from 'cuid';
import _ from 'lodash';

mServices.service('ApiService', function ($http, localStorageService, $q) {
    const FIREBASE_URL = 'https://inmotion-challange.firebaseio.com/';

    this.firebase = {
        /*
            example firebase response:
         {
             "-KC8jCGBUzMIFFoKx3Vz": {
                 "actors": ["Keanu Reeves","Laurence Fishburne","Carrie-Anne Moss"],
                 "genre": "Sci-Fi",
                 "rating": 5,
                 "title": "The Matrix",
                 "year": 1999
             },
             "-KC8jmyVQ5rH4JOMfHSS": {
                 "actors": ["Gerard Butler","Brenton Thwaites"],
                 "genre": "Fantasy/Action",
                 "rating": 5,
                 "title": "Gods of Egypt",
                 "year": 2016
             }
         }
         */
        findAll: () => {
            return $http.get(`${FIREBASE_URL}/movies.json`);
        },
        /*
         example firebase response:
        "-KC8jmyVQ5rH4JOMfHSS": {
            "actors": ["Gerard Butler","Brenton Thwaites"],
            "genre": "Fantasy/Action",
            "rating": 5,
            "title": "Gods of Egypt",
            "year": 2016
        }
        */
        find: (id) => {
            return $http.get(
                `${FIREBASE_URL}/movies/:id.json`,
                {
                    params: { id: id }
                }
            );
        },
        /*
        movie object should be formatted for firebase like this:
         {
             "actors": ["Gerard Butler","Brenton Thwaites"],
             "genre": "Fantasy/Action",
             "rating": 5,
             "title": "Gods of Egypt",
             "year": 2016
         }
         firebase adds push IDs:
         */
        add: (movie) => {
            return $http.post(
                `${FIREBASE_URL}/movies.json`,
                {
                    data: movie
                }
            );
        },
        update: (movie, id) => {
            return $http.put(
                `${FIREBASE_URL}/movies/:id.json`,
                {
                    data: movie,
                    params: { id: id }
                }
            );
        },
        remove: (id) => {
            return $http.delete(
                `${FIREBASE_URL}/movies/:id.json`,
                {
                    params: { id: id }
                }
            );
        }
    };
    this.localStorage = {
        findAll: () => {
            return $q((resolve, reject) => {
                setTimeout(() => {
                    let movies;
                    let movie;

                    _.forEach(localStorageService.keys(), (key) => {
                        movie = JSON.parse(localStorageService.get(key));
                        movies = _.assign(movies, { [key]: movie });
                    });

                    if (_.isObject(movies)) {
                        resolve(movies);
                    } else {
                        reject('There was a problem loading the movies');
                    }
                }, 10);
            });
        },
        find: (id) => {
            return $q((resolve, reject) => {
                setTimeout(() => {
                    const movie = JSON.parse(localStorageService.get(id));

                    if (_.isObject(movie)) {
                        resolve(movie);
                    } else {
                        reject('movie data was not returned correctly');
                    }
                }, 10);
            });
        },
        add: (movie) => {
            return $q((resolve, reject) => {
                setTimeout(() => {
                    const id = cuid();

                    localStorageService.set(id, JSON.stringify(movie));
                    const savedMovie = JSON.parse(localStorageService.get(id));

                    if (_.isObject(savedMovie)) {
                        resolve(savedMovie);
                    } else {
                        reject('movie was not saved');
                    }
                }, 10);
            });
        },
        update: (movie, id) => {
            return $q((resolve, reject) => {
                setTimeout(() => {
                    localStorageService.remove(id);

                    localStorageService.set(id, JSON.stringify(movie));
                    const updatedMovie = JSON.parse(localStorageService.get(id));

                    if (_.isObject(updatedMovie)) {
                        resolve(updatedMovie);
                    } else {
                        reject('movie was not updated');
                    }
                }, 10);
            });
        },
        remove: (id) => {
            return $q((resolve, reject) => {
                setTimeout(() => {
                    localStorageService.remove(id);

                    if (_.indexOf(localStorageService.keys(), id) === -1) {
                        resolve('movie was deleted');
                    } else {
                        reject('movie was not deleted');
                    }
                }, 10);
            });
        }
    };
});
