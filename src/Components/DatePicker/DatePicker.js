import React, { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
const DatePickers = () => {
	// const [data, setDate] = useState();
	const inputRef = useRef();
	const test = (e) => {
		// console.log(value.toDate());
		// console.log(inputRef);
		// setDate(value);
		console.log(e.toDate());
	};
	return (
		<DatePicker
			className="purple"
			format="MM/DD/YYYY HH:mm:ss"
			plugins={[<TimePicker position="bottom" />]}
			calendar={persian}
			locale={persian_fa}
			calendarPosition="bottom-right"
			placeholder="چه موقع؟ *"
			onChange={test}
			// value={data}
			ref={inputRef}
		/>
	);
};
export default DatePickers;
