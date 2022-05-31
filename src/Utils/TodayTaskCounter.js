import { useTodo } from "../Components/Provider/Provider";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const toDay = new DateObject({
	calendar: persian,
	locale: persian_fa,
	format: "YYYY/MM/DD dddd",
});
const TodayTaskCounter = () => {
	const TodoTask = useTodo();
	const toDayfeild = toDay.format().toString().split(" ");
	return TodoTask.filter((item) => item.TimeDo[1] === toDayfeild[0].toString())
		.length;
};
export default TodayTaskCounter;
