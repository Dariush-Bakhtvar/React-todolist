import styles from "./Progress.module.scss";
// import styles from "./progress.scss";
const CircularProgress = ({ cx, cy, r, isActive }) => {
	return (
		<div className={styles.progressbar}>
			<svg className={styles.progressbar__svg}>
				<circle
					cx={cx}
					cy={cy}
					r={r}
					className={`${styles.progressbar__svg_circle} ${
						isActive ? styles.circle_forward : styles.circle_backward
					}`}
				></circle>
			</svg>
		</div>
	);
};

export default CircularProgress;
