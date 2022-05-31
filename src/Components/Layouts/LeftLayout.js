// import CircularProgress from "../CircularProgress/CircularProgress";
import DropDown from "../dropDown/DropDown";
import styles from "./Layout.module.scss";
import { useTodo } from '../Provider/Provider'
import { GoCalendar } from 'react-icons/go'
import Tasks from "../Tasks/Tasks";
const LeftLayout = ({ isActive }) => {
  const TodoTask = useTodo();
  const TaskRender = () => {
    if (TodoTask.length)
      return TodoTask.map(task => {
        return <>
          <Tasks
            key={task.id}
            Task={task}
          />
        </>
      })
    return <div className={styles.noTask}>
      <GoCalendar />
      <p>امروز کار خاصی نداری</p>
    </div>
  }

  return (
    <section
      className={`${styles.ContentLayout} ${styles.leftlayout} ${isActive && styles.leftlayout__activeLeft
        }`}
    >
      <div className={styles.myTasksContainer}>
        <div className={styles.myTaskHeader}>
          <div className={styles.HeaderContent}>
            <h1>کارهای من</h1>
            <DropDown />
          </div>
        </div>
        <div className={styles.myTaskContent}>
          {TaskRender()}
        </div>
      </div>
    </section>
  );
};

// export default WidthActive(LeftLayout);
export default LeftLayout;
