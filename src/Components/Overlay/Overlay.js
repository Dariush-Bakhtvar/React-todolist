// import WidthActive from "../HOC/widthIsActive";
import styles from "./overlay.module.scss";
import { GoBookmark } from "react-icons/go";
import { VscCircleFilled } from "react-icons/vsc";
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
						<p>برنامه ی امروزت چیه؟ بریم کار هارو زمانبندی کنیم؟!</p>
						<button onClick={activeToggle}>بزن بریم</button>
					</div>
				</div>
				{/* left panel */}
				<div
					className={`${styles.panel} ${styles.leftPanel} ${
						isActive && styles.leftPanel__active
					}`}
				>
					<div className={styles.StatusPanel}>
						<h2>شرح وظایف</h2>
						<ul className={styles.StatusTasksCount}>
							<li>
								<GoBookmark className={styles.IconeColor1} />
								<span> همه کارها</span>
								<span>0</span>
							</li>
							<li>
								<VscCircleFilled className={styles.IconeColor2} />
								<span>کسب و کار</span>
								<span>0</span>
							</li>
							<li>
								<VscCircleFilled className={styles.IconeColor3} />
								<span>شخصی</span>
								<span>0</span>
							</li>
							<li>
								<VscCircleFilled className={styles.IconeColor4} />
								<span>خانوادگی</span>
								<span>0</span>
							</li>
							<li>
								<VscCircleFilled className={styles.IconeColor5} />
								<span>کاری</span>
								<span>0</span>
							</li>
						</ul>
						<button onClick={activeToggle}>وظایف</button>
					</div>
				</div>
			</div>
		</section>
	);
};

// export default WidthActive(Overlay);
export default Overlay;
