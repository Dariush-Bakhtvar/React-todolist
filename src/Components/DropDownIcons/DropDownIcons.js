import { useState } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import styles from "./Icons.module.scss";
import DynamicIcon from "../DymanicIcons/DynamicIcon";
import { FaPlus } from "react-icons/fa";
import widthIsActive from "../HOC/widthIsActive";
const Icons = [
	"FaRocketchat",
	"FaHighlighter",
	"FaMapMarkedAlt",
	"FaPrint",
	"FaEnvelope",
	"FaCar",
	"FaUserFriends",
	"FaCameraRetro",
	"FaVideo",
	"FaBriefcase",
	"FaCalculator",
	"FaHeart",
	"FaHeadphones",
	"FaBuilding",
	"FaShopify",
	"FaCartArrowDown",
	"FaShoppingCart",
	"FaWrench",
	"FaTree",
	"FaDollarSign",
	// "",
];
const DropDownIcons = ({ isActive, activeToggle }) => {
	const [icon, setIcon] = useState("");
	const [hover, setHover] = useState(false);

	return (
		<section className={styles.IconContaier}>
			<CircularProgress cx={50} cy={50} r={35} isActive={isActive} />
			<div
				className={`${styles.IconsButton} ${
					icon.length > 0 && styles.IconsButton_active
				}`}
				onClick={() => setHover(!hover)}
				data-set={icon}
			>
				{icon === "" ? <FaPlus /> : <DynamicIcon name={`${icon}`} />}
			</div>
			{hover && (
				<ul className={styles.IconsMenu}>
					{Icons.map((item, index) => {
						return (
							<li
								key={index}
								className={styles.IconBtn}
								onClick={() => {
									setIcon(item);
									activeToggle();
									setHover(false);
								}}
							>
								<DynamicIcon name={item} />
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
};

export default widthIsActive(DropDownIcons);
