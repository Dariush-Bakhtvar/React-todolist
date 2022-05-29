import React, { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
// import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
// let date = new DateObject({ calendar: persian, locale: persian_fa });
const DatePickers = () => {
	const [value, setValue] = useState();
	const inputRef = useRef();
	const test = (e) => {
		setValue(e);
		let x = [e.toDate().toLocaleString("fa-IR", "HH:mm:ss")];
		console.log(x.toString().split("،"));
		console.log(e.format("YYYY/MM/DD hh:mm:ss"));
		console.log(e.format("YYYY/MM/DD hh:mm:ss").toString().split(" "));
		console.log(inputRef.current.children[0].value, "value of inputRef");
		console.log(value.format());
	};
	return (
		<DatePicker
			className="purple"
			format="HH:mm:ss YYYY/MM/DD"
			plugins={[<TimePicker position="bottom" />]}
			calendar={persian}
			locale={persian_fa}
			calendarPosition="bottom-right"
			placeholder="چه موقع؟ *"
			onChange={test}
			value={value}
			ref={inputRef}
		/>
	);
};
export default DatePickers;
