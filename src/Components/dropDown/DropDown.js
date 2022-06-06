import { useState } from "react";
import styles from "./dropDown.module.scss";
import { HiOutlineClock } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import TodayTaskCounter from '../../Utils/TodayTaskCounter'
import { useTodo } from "../Provider/Provider";
const DropDown = () => {
  const [toggle, setToggle] = useState(false);
  const TodoTask = useTodo();
  const toggleHandler = () => {
    setToggle(!toggle);
    console.log(TodoTask.filter((item, index) => TodoTask.indexOf(item) !== index).length);
  };
  return (
    <div className={styles.dropDownTask}>
      <div className={styles.dropdownBtn} onClick={toggleHandler}>
        <HiOutlineClock />
        امروز
        <IoMdArrowDropdown />
      </div>
      {toggle && (
        <ul className={`${styles.dropDown}`}>
          <li className={styles.today}>
            امروز
            <span>{<TodayTaskCounter />}</span>
          </li>
          <div className={styles.lineSapce}></div>
          <li className={styles.upComing}>
            <p>آینده</p>
            <ul className={styles.upComingMenu}>
              {TodoTask.map(item => {
                return <li key={item.id}>
                  {`${item.TimeDo[0]}  ${item.TimeDo[1]}`}
                  {/* <span>{TodoTask.filter(i => i.TimeDo[0] === i.TimeDo[0] && i.TimeDo[1] === i.TimeDo[1])}</span> */}
                </li>
              })}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
