import Overlay from "./Components/Overlay/Overlay";
import LeftLayout from "./Components/Layouts/LeftLayout";
import RightLayout from "./Components/Layouts/RightLayout";
import widthIsActive from "./Components/HOC/widthIsActive";
import "./Styles/App.scss";
const App = ({ isActive, activeToggle }) => {
	return (
		<div className="container">
			<LeftLayout isActive={isActive} />
			<RightLayout isActive={isActive} />
			<Overlay isActive={isActive} activeToggle={activeToggle} />
		</div>
	);
};

export default widthIsActive(App);
