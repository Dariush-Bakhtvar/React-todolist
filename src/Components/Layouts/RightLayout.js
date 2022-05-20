import styles from "./Laout.module.scss";
const RightLayout = ({ isActive }) => {
	return (
		<section
			className={`${styles.ContentLayout} ${styles.rightLayout} ${
				isActive && styles.rightLayout__active
			}`}
		>
			<div>تست داریوش</div>
		</section>
	);
};
export default RightLayout;
