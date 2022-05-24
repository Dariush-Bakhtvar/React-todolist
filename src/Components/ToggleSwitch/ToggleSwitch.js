import { useState } from "react";
import styles from "./toggleSwitch.module.scss";
const ToggleSwitch = () => {
	const [isSwitch, setSwitch] = useState(false);
	return (
		<label htmlFor="switch" className={styles.toggleSwitch}>
			<input
				type="checkbox"
				id="switch"
				className={styles.inputSwitch}
				checked={isSwitch}
				onChange={() => setSwitch(!isSwitch)}
			/>
			<span className={styles.toggleBox}></span>
		</label>
	);
};

export default ToggleSwitch;
