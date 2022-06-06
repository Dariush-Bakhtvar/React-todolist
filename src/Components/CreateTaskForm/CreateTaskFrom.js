import { useState, useRef } from "react";
import { useTodoAction } from "../Provider/Provider";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import widthIsActive from "../HOC/widthIsActive"; // HOC Toggle Active
import CircularProgress from "../CircularProgress/CircularProgress";
import DynamicIcon from "../DymanicIcons/DynamicIcon";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// DataPicker style
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/purple.css";
import styles from "./Form.module.scss";
const Icons = [
  "FaRocketchat",
  "FaHighlighter",
  "FaMapMarkedAlt",
  "FaPrint",
  "FaEnvelope",
  "FaCar",
  "FaUserFriends",
  "FaCameraRetro",
  "FaVideo",
  "FaBriefcase",
  "FaCalculator",
  "FaHeart",
  "FaHeadphones",
  "FaBuilding",
  "FaShopify",
  "FaCartArrowDown",
  "FaShoppingCart",
  "FaWrench",
  "FaTree",
  "FaDollarSign",
];
const Options = [
  { value: "Business", label: "کسب و کار", color: "#00c7c7" },
  { value: "Personal", label: "شخصی", color: "#f2d06c" },
  { value: "Family", label: "خانوادگی", color: "#313a87" },
  { value: "Work", label: "کاری", color: "#ca89fc" },
];
const styleMap = {
  Business: "#00c7c7",
  Personla: "#f2d06c",
  Family: "#313a87",
  Work: "#ca89fc",
};
const colourStyles = {
  singleValue: (provided, { data }) => ({
    ...provided,
    color: styleMap[data.value] ? styleMap[data.value] : "defaultColor",
    // specify a fallback color here for those values not accounted for in the styleMap
  }),
  ontrol: (base) => ({
    ...base,
    height: 35,
  }),
};
const CreateTaskFrom = ({ isActive, activeToggle }) => {
  const [icon, setIcon] = useState("");
  const [hover, setHover] = useState(false);
  const [date, setDate] = useState();
  const [taskType, setTaskType] = useState("");
  const Dispatch = useTodoAction();
  const DoInputRef = useRef();
  const whereInputRef = useRef();
  const DateRef = useRef();
  const GetPersionDate = (e) => {
    setDate(e);
    // let x = [e.toDate().toLocaleString("fa-IR", "HH:mm:ss")];
    // console.log(x.toString().split("،"));
    // console.log(e.format("YYYY/MM/DD hh:mm:ss"));
    // console.log(e.format("YYYY/MM/DD hh:mm:ss").toString().split(" "));
    // console.log(inputRef.current.children[0].value, "value of inputRef");
    // const toDay = new DateObject({
    // 	calendar: persian,
    // 	locale: persian_fa,
    // 	format: "DD/MM/YYYY dddd",
    // });
    // console.log(toDay.day);
    // console.log(toDay.format());
    console.log(e?.format?.("D MMMM YYYY"));
  };
  const formSbumitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  const createTaskHandler = () => {
    const WhatDo = DoInputRef.current.value;
    const WhereDo = whereInputRef.current.value;
    const WhenDo = date.format().toString().split(" ");
    if (!WhatDo || !WhereDo) return;
    Dispatch({ type: "createTask", taskType, WhatDo, WhereDo, WhenDo, icon });
    DoInputRef.current.value = "";
    whereInputRef.current.value = "";
    setDate();
    setIcon("");
    activeToggle();
  };
  return (
    <form
      action="#"
      className={styles.newTaskFrom}
      onSubmit={formSbumitHandler}
    >
      {/* DropDown menu */}
      <section className={styles.IconContaier}>
        <CircularProgress cx={50} cy={50} r={35} isActive={isActive} />
        <div
          className={`${styles.IconsButton} ${icon.length > 0 && styles.IconsButton_active
            }`}
          onClick={() => setHover(!hover)}
        >
          {icon === "" ? <FaPlus /> : <DynamicIcon name={`${icon}`} />}
        </div>
        {hover && (
          <ul className={styles.IconsMenu}>
            {Icons.map((item, index) => {
              return (
                <li
                  key={index}
                  className={styles.IconBtn}
                  onClick={() => {
                    setIcon(item);
                    activeToggle();
                    setHover(false);
                  }}
                >
                  <DynamicIcon name={item} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
      {/* selectBox */}
      <Select
        className={styles.select}
        defaultValue={Options[0]}
        options={Options}
        styles={colourStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            text: "dodgerblue",
            primary25: "#dff9fb",
            primary: "#ab4a64",
          },
          spacing: {
            ...theme.spacing,
            controlHeight: 30,
            baseUnit: 2,
          },
        })}
        value={taskType}
        onChange={(e) => setTaskType(e)}
        placeholder="دسته بندی ..."
      />
      <input
        type="text"
        placeholder="چه کاری رو باید انجام بدم؟ *"
        ref={DoInputRef}
      />
      <input type="text" placeholder="کجا؟ *" ref={whereInputRef} />
      <div className={styles.todoTimes}>
        <DatePicker
          className={`purple ${styles.DataPicker}`}
          // format="HH:mm:ss YYYY/MM/DD MMMM"
          format="D MMMM YYYY HH:mm:ss"
          plugins={[<TimePicker position="bottom" />]}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          placeholder="چه موقع؟ *"
          onChange={GetPersionDate}
          value={date}
          ref={DateRef}
          animations={[opacity(), transition({ from: 35, duration: 800 })]}
        />
        <div className={styles.switch}>
          <ToggleSwitch />
          هر روز
        </div>
      </div>
      <span className={styles.importfilds}>فیلدهای ضروری *</span>
      <button
        className={styles.createTaskBtn}
        type="submit"
        onClick={createTaskHandler}
      >
        ایجاد
      </button>
    </form>
  );
};

export default widthIsActive(CreateTaskFrom);
