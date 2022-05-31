import styles from "./overlay.module.scss";
import WidthActive from "../HOC/widthIsActive";
const RightOverlay = ({ isActive, activeToggle }) => {
  return (
    <div
      className={`${styles.panel} ${styles.rightPanel} ${isActive && styles.rightPanel__active
        }`}
    >
      <div className={styles.ContentPanel}>
        <h2>سلام !</h2>
        <p>برنامه ی امروزت چیه؟ بریم کار هارو زمانبندی کنیم؟!</p>
        <button onClick={activeToggle}>بزن بریم</button>
      </div>
    </div>
  );
};

// export default RightOverlay;
export default WidthActive(RightOverlay);
