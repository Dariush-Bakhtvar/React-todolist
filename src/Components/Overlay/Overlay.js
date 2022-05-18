import WidthActive from "../HOC/widthIsActive";
import styles from "./overlay.module.scss";
const Overlay = ({ isActive, activeToggle }) => {
	return (
		<section
			className={`${styles.overlayWrapper} ${
				isActive && styles.overlayWrapper__active
			}`}
		>
			<div
				className={`${styles.overlay} ${
					isActive ? styles.overlay__active : styles.overlay__removeActive
				}`}
			>
				<div
					className={`${styles.panel} ${styles.rightPanel} ${
						isActive && styles.rightPanel__active
					}`}
				>
					<div className={styles.ContentPanel}>
						<h2>سلام !</h2>
						<p>برنامه امروزت چیه؟بریم زمان و کار هارو مدیریت کنیم؟!</p>
						<button onClick={activeToggle}>بزن بریم</button>
					</div>
				</div>
				{/* left panel */}
				<div
					className={`${styles.panel} ${styles.leftPanel} ${
						isActive && styles.leftPanel__active
					}`}
				>
					<h2>سلام</h2>
					<button onClick={activeToggle}>مشاهده کارها</button>
				</div>
			</div>
		</section>
	);
};

export default WidthActive(Overlay);
