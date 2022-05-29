import Overlay from "./Components/Overlay/Overlay";
import LeftLayout from "./Components/Layouts/LeftLayout";
import RightLayout from "./Components/Layouts/RightLayout";
import widthIsActive from "./Components/HOC/widthIsActive";
import "./Styles/App.scss";
import Provider from "./Components/Provider/Provider";
const App = ({ isActive, activeToggle }) => {
	return (
		<div className="container">
			<Provider>
				<LeftLayout isActive={isActive} />
				<RightLayout isActive={isActive} />
				<Overlay isActive={isActive} activeToggle={activeToggle} />
			</Provider>
		</div>
	);
};

export default widthIsActive(App);
