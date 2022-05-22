import { useState } from "react";
import styles from "./dropDown.module.scss";
import { HiOutlineClock } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
const DropDown = () => {
	const [toggle, setToggle] = useState(false);
	const toggleHandler = () => {
		setToggle(!toggle);
	};
	return (
		<div className={styles.dropDownTask}>
			<div className={styles.dropdownBtn} onClick={toggleHandler}>
				<HiOutlineClock />
				امروز
				<IoMdArrowDropdown />
			</div>
			{toggle && (
				<ul className={`${styles.dropDown}`}>
					<li className={styles.today}>
						امروز
						<span>0</span>
					</li>
					<div className={styles.lineSapce}></div>
					<li className={styles.upComing}>
						<p>آینده</p>
						<ul className={styles.upComingMenu}>
							<li>
								1 خرداد
								<span>0</span>
							</li>
							<li>
								2 خرداد
								<span>0</span>
							</li>
						</ul>
					</li>
				</ul>
			)}
		</div>
	);
};

export default DropDown;
