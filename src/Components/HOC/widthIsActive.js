import { useState } from "react";

const WidthActive = (WrappedComponent) => {
	const UpdatedCompoenet = (props) => {
		const [isActive, setActive] = useState(false);
		const activeToggle = () => {
			setActive(!isActive);
		};
		return (
			<WrappedComponent
				isActive={isActive}
				activeToggle={activeToggle}
				{...props}
			/>
		);
	};
	return UpdatedCompoenet;
};

export default WidthActive;
