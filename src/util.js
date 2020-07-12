import moment from 'moment';
import data from './settings.json'
/*load setting value from json file*/

const now = moment()
    .utcOffset("+0900")
    .format("YYYY-MM-DD");

const util = {
    /*Functions about define datekind and daykind to make URL query string. */
    getDateKind() {
    const semester = data.calendar[0].semester;
    const vacation_session = data.calendar[1].vacation_session;
    const vacation = data.calendar[2].vacation;

    if (moment(now).isBetween(semester.start, semester.end, null, [])) {
        return "semester";
    } else if (
        moment(now).isBetween(
            vacation_session.start,
            vacation_session.end,
            null,
            []
        )
    ) {
        return "vacation_session";
        } else if (moment(now).isBetween(vacation.start, vacation.end, null, [])) {
            return "vacation";
        } else {
            return "error";
        }
    },


    getDayKind() {
    const holiday = data.calendar[3].holiday;

    // console.log((moment().utcOffset('+0900').day()));
    let momentDay = moment()
        .utcOffset("+0900")
        .day();
    if (holiday.indexOf(now) !== -1) {
        //holiday 배열에서 오늘날짜 값을 찾을 경우
        console.log("공휴일 보정");
        momentDay = 0; //일요일로 날짜 보정.
    }

    switch (momentDay) {
        case 0: //sunday
            return "weekend";
        case 6: //saturday
            return "weekend";
        default:
            return "week";
        }
    },

    isHalt() {
    const haltList = data.calendar[4].halt;
    if (haltList.indexOf(now) !== -1) {
        return "halted";
        } else {
            return "";
        }
    }


}


export default util;
