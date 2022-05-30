import styles from "./RightHeader.module.scss";
import { useTodo } from "../Provider/Provider";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const RightHeader = () => {
	const TodoTask = useTodo();
	const toDay = new DateObject({
		calendar: persian,
		locale: persian_fa,
		format: "DD/MM/YYYY dddd",
	});
	const toDayfeild = toDay.format().toString().split(" ");

	console.log(
		toDayfeild[0]
			.split("")
			.filter((item) => !item.includes("/"))
			.join(" ")
	);
	// console.log(
	// 	TodoTask.filter((item) => item.TimeDo.includes(toDayfeild[0]).toString())
	// );

	return (
		<div className={styles.createTaskHeader}>
			<h1>کار جدید</h1>
			<div className={styles.today}>
				کارهای امروز
				<span className={styles.todayBadge}>0</span>
			</div>
		</div>
	);
};

export default RightHeader;
