import styles from "./RightHeader.module.scss";
import { useTodo } from "../Provider/Provider";
import TodayTaskCounter from "../../Utils/TodayTaskCounter";
const RightHeader = () => {
	const TodoTask = useTodo();
	return (
		<div className={styles.createTaskHeader}>
			<h1>کار جدید</h1>
			<div className={styles.today}>
				کارهای امروز
				<span className={styles.todayBadge}>
					{TodoTask.length ? <TodayTaskCounter /> : 0}
				</span>
			</div>
		</div>
	);
};

export default RightHeader;
