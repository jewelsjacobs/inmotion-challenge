import mServices from './_mServices';
import cuid from 'cuid';

mServices.service('ApiService', function ($http, localStorageService, $q) {
    const FIREBASE_URL = 'https://inmotion-challange.firebaseio.com/';
    const deferred = $q.defer();

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
            setTimeout(() => {
                deferred.notify('getting movies');
                let movies;

                if (typeof localStorageService.keys() === 'string'
                    && typeof JSON.parse(localStorageService.get(localStorageService.keys())).edited !== 'undefined') {
                    movies = Object.assign(
                        {
                            [localStorageService.keys()]: JSON.parse(localStorageService.get(localStorageService.keys()))
                        }
                    );
                } else if (Array.isArray(localStorageService.keys())) {
                    localStorageService.keys().forEach((key) => {
                         if (typeof JSON.parse(localStorageService.get(key)).edited !== 'undefined') {
                            movies = Object.assign(
                                {
                                    [key]: JSON.parse(localStorageService.get(key))
                                }
                            );
                        }
                    });
                }
                console.log(movies, localStorageService.keys());
                if (movies) {
                    deferred.resolve(movies);
                } else {
                    deferred.reject('There was a problem loading the movies');
                }
            }, 10);

            return deferred.promise;
        },
        find: (id) => {
            setTimeout(() => {
                deferred.notify('finding movie');
                deferred.resolve(JSON.parse(localStorageService.get(id)));
            }, 10);

            return deferred.promise;
        },
        add: (movie) => {
            setTimeout(() => {
                deferred.notify('adding movie');
                deferred.resolve(localStorageService.set(cuid(), JSON.stringify(movie)));
            }, 10);

            return deferred.promise;
        },
        update: (movie, id) => {
            localStorageService.remove(id);
            setTimeout(() => {
                deferred.notify('updating movie');
                deferred.resolve(localStorageService.set(id, JSON.stringify(movie)));
            }, 10);

            return deferred.promise;
        },
        remove: (id) => {
            localStorageService.remove(id);
            setTimeout(() => {
                deferred.notify('deleting movie');
                deferred.resolve(localStorageService.remove(id));
            }, 10);

            return deferred.promise;
        }
    };
});
