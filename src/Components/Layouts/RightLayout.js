import SelectBox from "../select/Select";
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
					<div className={styles.todoIcons}></div>
					<SelectBox />
					<input type="text" placeholder="چه کاری رو باید انجام بدم؟ *" />
					<input type="text" placeholder="کجا؟ *" />
					<div className={styles.todoTimes}>
						<input type="datetime-local" placeholder="چه موقع؟ *" />
						<div className={styles.toggleBtn}></div>
					</div>
					<span>* فیلد های ضروری</span>
					<button>ایجاد</button>
				</form>
			</div>
		</section>
	);
};
export default RightLayout;
