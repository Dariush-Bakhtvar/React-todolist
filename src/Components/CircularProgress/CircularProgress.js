import styles from "./Progress.module.scss";
// import styles from "./progress.scss";
const CircularProgress = ({ cx, cy, r, Motion }) => {
	return (
		<div className={styles.progressbar}>
			<svg className={styles.progressbar__svg}>
				<circle
					cx={cx}
					cy={cy}
					r={r}
					className={`${styles.progressbar__svg_circle} ${
						Motion && styles.circle__motion
					}`}
				></circle>
			</svg>
		</div>
	);
};

export default CircularProgress;
