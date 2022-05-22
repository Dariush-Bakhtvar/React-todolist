import DropDown from "../dropDown/DropDown";
import styles from "./Layout.module.scss";
const LeftLayout = ({ isActive }) => {
	return (
		<section
			className={`${styles.ContentLayout} ${styles.leftlayout} ${
				isActive && styles.leftlayout__activeLeft
			}`}
		>
			<div className={styles.myTasksContainer}>
				<div className={styles.myTaskHeader}>
					<div className={styles.HeaderContent}>
						<h1>کارهای من</h1>
						<DropDown />
					</div>
				</div>
			</div>
		</section>
	);
};

// export default WidthActive(LeftLayout);
export default LeftLayout;
