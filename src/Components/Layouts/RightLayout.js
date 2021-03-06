// import SelectBox from "../select/Select";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import DropDownIcons from "../DropDownIcons/DropDownIcons";
// import DatePickers from "../DatePicker/DatePicker";
import styles from "./Layout.module.scss";
import CreateTaskFrom from "../CreateTaskForm/CreateTaskFrom";
import RightHeader from "../RightHeader/RightHeader";
const RightLayout = ({ isActive }) => {
	return (
		<section
			className={`${styles.ContentLayout} ${styles.rightLayout} ${
				isActive && styles.rightLayout__active
			}`}
		>
			<div className={styles.createTask}>
				<RightHeader />
				{/* <div className={styles.createTaskHeader}>
					<h1>کار جدید</h1>
					<div className={styles.today}>
						کارهای امروز
						<span className={styles.todayBadge}>0</span>
					</div>
				</div> */}
				{/* <form action="#" className={styles.newTaskFrom}>
					<DropDownIcons ref={testRef} />
					<SelectBox />
					<input type="text" placeholder="چه کاری رو باید انجام بدم؟ *" />
					<input type="text" placeholder="کجا؟ *" />
					<div className={styles.todoTimes}>
						<DatePickers />
						<div className={styles.switch}>
							<ToggleSwitch />
							هر روز
						</div>
					</div>
					<span className={styles.importfilds}>فیلدهای ضروری *</span>
					<button className={styles.createTaskBtn}>ایجاد</button>
				</form> */}
				<CreateTaskFrom />
			</div>
		</section>
	);
};
export default RightLayout;
