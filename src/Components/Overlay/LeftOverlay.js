import styles from "./overlay.module.scss";
import { GoBookmark } from "react-icons/go";
import { VscCircleFilled } from "react-icons/vsc";
import { useTodo } from "../Provider/Provider";
import WidthActive from "../HOC/widthIsActive";
const LeftOverlay = ({ isActive, activeToggle }) => {
  const TodoTask = useTodo();
  return (
    <div
      className={`${styles.panel} ${styles.leftPanel} ${isActive && styles.leftPanel__active
        }`}
    >
      <div className={styles.StatusPanel}>
        <h2>شرح وظایف</h2>
        <ul className={styles.StatusTasksCount}>
          <li>
            <GoBookmark className={styles.IconeColor1} />
            <span> همه کارها</span>
            <span>{TodoTask.length || 0}</span>
          </li>
          <li>
            <VscCircleFilled className={styles.IconeColor2} />
            <span>کسب و کار</span>
            <span>
              {
                TodoTask.filter((item) => item.TaskType.value === "Business")
                  .length
              }
            </span>
          </li>
          <li>
            <VscCircleFilled className={styles.IconeColor3} />
            <span>شخصی</span>
            <span>
              {
                TodoTask.filter((item) => item.TaskType.value === "Personal")
                  .length
              }
            </span>
          </li>
          <li>
            <VscCircleFilled className={styles.IconeColor4} />
            <span>خانوادگی</span>
            <span>
              {
                TodoTask.filter((item) => item.TaskType.value === "Family")
                  .length
              }
            </span>
          </li>
          <li>
            <VscCircleFilled className={styles.IconeColor5} />
            <span>کاری</span>
            <span>
              {TodoTask.filter((item) => item.TaskType.value === "Work").length}
            </span>
          </li>
        </ul>
        <button onClick={activeToggle}>وظایف</button>
      </div>
    </div>
  );
};
export default WidthActive(LeftOverlay);
