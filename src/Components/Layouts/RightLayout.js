import SelectBox from "../select/Select";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import DropDownIcons from "../DropDownIcons/DropDownIcons";
import styles from "./Layout.module.scss";
const RightLayout = ({ isActive }) => {
	return (
		<section
			className={`${styles.ContentLayout} ${styles.rightLayout} ${
				isActive && styles.rightLayout__active
			}`}
		>
			<div className={styles.createTask}>
				<div className={styles.createTaskHeader}>
					<h1>کار جدید</h1>
					<div className={styles.today}>
						کارهای امروز
						<span className={styles.todayBadge}>0</span>
					</div>
				</div>
				<form action="#" className={styles.newTaskFrom}>
					<DropDownIcons />
					<SelectBox />
					<input type="text" placeholder="چه کاری رو باید انجام بدم؟ *" />
					<input type="text" placeholder="کجا؟ *" />
					<div className={styles.todoTimes}>
						<input
							type="datetime-local"
							placeholder="چه موقع؟ *"
							className={styles.data}
						/>
						<div className={styles.switch}>
							<ToggleSwitch />
							هر روز
						</div>
					</div>
					<span className={styles.importfilds}>فیلدهای ضروری *</span>
					<button className={styles.createTaskBtn}>ایجاد</button>
				</form>
			</div>
		</section>
	);
};
export default RightLayout;
