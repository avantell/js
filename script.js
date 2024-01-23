'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')
let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
}
for (let i = 0; i < 2; i++ ) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {

                personalMovieDB.movies[a] = b
                console.log('done')
        } else {
                console.log('error')
                i--
        }


}

console.log(personalMovieDB)

if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30)
        console.log("Вы классический зритель")
else if (personalMovieDB.count >= 30)
        console.log("Вы киноман")
else
        console.log("Произошла ошибка")


/* Задание на урок:

3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';



