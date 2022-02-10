import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._standups = []
        makeAutoObservable(this)
    }
    setStandUps(standups) {
        this._standups = standups
    }
    get standUps() {
        return this._standups
    }

    get Size() {
        return this._standups.length
    }

    get standUpsIncrease() {
        const a = this._standups.sort(function(a, b) {
            return parseFloat(a.cost) - parseFloat(b.cost);
        });
        return a
    }

    get standUpsDecrease() {
        const a = this._standups.sort(function(a, b) {
            return parseFloat(b.cost) - parseFloat(a.cost);
        });
        return a
    }

    get standUpsClose() {
        function sorti(a, b) {
            var first = 0;
            var day = (parseInt(a.date[0])*10+parseInt(a.date[1]));
            var month = (parseInt(a.date[3])*10+parseInt(a.date[4]));
            var year = (parseInt(a.date[6])*1000+parseInt(a.date[7])*100+parseInt(a.date[8])*10+parseInt(a.date[9]));
            var day1 = (parseInt(b.date[0])*10+parseInt(b.date[1]));
            var month1 = (parseInt(b.date[3])*10+parseInt(b.date[4]));
            var year1 = (parseInt(b.date[6])*1000+parseInt(b.date[7])*100+parseInt(b.date[8])*10+parseInt(b.date[9]));
            var hour = (parseInt(a.time[0])*10+parseInt(a.time[1]));
            var minute = (parseInt(a.time[3])*10+parseInt(a.time[4]));
            var hour1 = (parseInt(b.time[0])*10+parseInt(b.time[1]));
            var minute1 = (parseInt(b.time[3])*10+parseInt(b.time[4]));
            if(year>year1) {
               first = 1;
            } else if(year<year1){
                first = -1;
            } else{
                if(month>month1) {
                    first = 1;
                } else if(month<month1){
                    first = -1;
                } else{
                    if(day>day1) {
                        first = 1;
                    } else if(day<day1){
                        first = -1;
                    } else{
                        if(hour>hour1) {
                            first = 1;
                        } else if(hour<hour1){
                            first = -1;
                        } else{
                            if(minute>minute1) {
                                first = 1;
                            } else if(minute<minute1){
                                first = -1;
                            } else{
                                first = 0;
                            }
                        }
                    }
                }
            }
            return first
        }
        const c = this._standups.sort(sorti);
        return c
    }
}