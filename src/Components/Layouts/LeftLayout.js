// import WidthActive from "../HOC/widthIsActive";
import styles from "./Laout.module.scss";
const LeftLayout = ({ isActive }) => {
	console.log(isActive);
	return (
		<section
			className={`${styles.ContentLayout} ${styles.leftlayout} ${
				isActive && styles.leftlayout__activeLeft
			}`}
		>
			<div className={styles.Header}>متن آزمایشی برای تست برنامه</div>
		</section>
	);
};

// export default WidthActive(LeftLayout);
export default LeftLayout;
