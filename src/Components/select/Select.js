import React from "react";
import Select from "react-select";
import styles from "./select.module.scss";
const Options = [
	{ value: "Business", label: "کسب و کار" },
	{ value: "Personla", label: "شخصی" },
	{ value: "Family", label: "خانوادگی" },
	{ value: "Work", label: "کاری" },
];

const styleMap = {
	Business: "#00c7c7",
	Personla: "#f2d06c",
	Family: "#313a87",
	Work: "#ca89fc",
};
const colourStyles = {
	singleValue: (provided, { data }) => ({
		...provided,
		color: styleMap[data.value] ? styleMap[data.value] : "defaultColor",
		// specify a fallback color here for those values not accounted for in the styleMap
	}),
	ontrol: (base) => ({
		...base,
		height: 35,
	}),
};

const SelectBox = () => {
	return (
		<Select
			className={styles.select}
			defaultValue={Options[0]}
			options={Options}
			styles={colourStyles}
			theme={(theme) => ({
				...theme,
				borderRadius: 4,
				colors: {
					...theme.colors,
					text: "dodgerblue",
					primary25: "#dff9fb",
					primary: "#ab4a64",
				},
				spacing: {
					...theme.spacing,
					controlHeight: 30,
					baseUnit: 2,
				},
			})}
		/>
	);
};
export default SelectBox;
