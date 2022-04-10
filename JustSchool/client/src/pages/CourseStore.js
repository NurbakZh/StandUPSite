import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._courses = []
        makeAutoObservable(this)
    }
    setCourses(courses) {
        this._courses = courses
    }
    get courses() {
        return this._courses
    }

    get Size() {
        return this._courses.length
    }

    get CoursesIncrease() {
        const a = this._courses.sort(function(a, b) {
            return parseFloat(a.cost) - parseFloat(b.cost);
        });
        return a
    }

    get CoursesDecrease() {
        const a = this._courses.sort(function(a, b) {
            return parseFloat(b.cost) - parseFloat(a.cost);
        });
        return a
    }

    get courseClose() {
        function sorti(a, b) {
            var first = 0;
            var day = (parseInt(a.date[0]) * 10 + parseInt(a.date[1]));
            var month = a.date.split(" ")[1];
            var day1 = (parseInt(b.date[0]) * 10 + parseInt(b.date[1]));
            var month1 = b.date.split(" ")[1];
            const monthes = {0:"января",1:"февраля",2:"марта",3:"апреля",
                4:"мая",5:"июня",6:"июля",7:"августа",
                8:"сентября",9:"октября",10:"ноября",11:"декабря"}
            var monthy;
            var monthy1;
            for(let i = 0; i < 12; i++) {
                if(monthes[i] === month) {
                    monthy = i;
                } else if(monthes[i] === month1) {
                    monthy1 = i;
                }
            }
            if (monthy > monthy1) {
                first = 1;
            } else if (monthy < monthy1) {
                first = -1;
            } else {
                if (day > day1) {
                    first = 1;
                } else if (day < day1) {
                    first = -1;
                } else {
                    first = 0;
                }
            }
            return first
        }
        const c = this._courses.sort(sorti);
        return c
    }
}