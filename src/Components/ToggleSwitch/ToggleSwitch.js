import style from "./toggleSwitch.module.scss";
const ToggleSwitch = () => {
	return (
		<>
			<input className={style.switch_checkbox} id={`switch`} type="checkbox" />
			<label className={style.switch_label} htmlFor={`switch`}>
				<span className={style.switch_Button} />
			</label>
		</>
	);
};

export default ToggleSwitch;
