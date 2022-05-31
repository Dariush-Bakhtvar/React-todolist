// import WidthActive from "../HOC/widthIsActive";
// import { useTodo } from "../Provider/Provider";
import LeftOverlay from "./LeftOverlay";
import RightOverlay from "./RightOverlay";
import styles from "./overlay.module.scss";
const Overlay = ({ isActive, activeToggle }) => {

  return (
    <section
      className={`${styles.overlayWrapper} ${isActive && styles.overlayWrapper__active
        }`}
    >
      <div
        className={`${styles.overlay} ${isActive ? styles.overlay__active : styles.overlay__removeActive
          }`}
      >
        {/* right Panel */}
        <RightOverlay isActive={isActive} activeToggle={activeToggle} />

        {/* left panel */}
        <LeftOverlay isActive={isActive} activeToggle={activeToggle} />

      </div>
    </section>
  );
};

// export default WidthActive(Overlay);
export default Overlay;
