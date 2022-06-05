import { useState } from 'react'
import DynamicIcon from '../DymanicIcons/DynamicIcon'
import CircularProgress from '../CircularProgress/CircularProgress'
import styles from './Tasks.module.scss'
import { GoTrashcan, GoCheck } from 'react-icons/go';
import { RiArrowGoBackFill } from 'react-icons/ri'
const Tasks = ({ Task, isCompelete, remove }) => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false);
  return (
    <div className={styles.TaskWrapper} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} >
      <div className={styles.TaskIcons}>
        <CircularProgress cx={50} cy={50} r={35} isActive={active} />
        <span className={`${styles.iconWrapper} ${active && styles.compelete}`}>
          <DynamicIcon name={Task.icon} />
        </span>
      </div>
      <div className={styles.TaskContent}>
        <div className={`${styles.Task} ${active && styles.Task_active}`}>
          <p>{Task.WhatDo}</p>
          <p>{Task.WhereDo}</p>
        </div>
        <div className={styles.TaskDate}>

          {hover ? <div className={styles.MngTask}>
            <button onClick={remove}><GoTrashcan /></button>
            <button onClick={() => { isCompelete(); setActive(!active) }}>
              {active ? <RiArrowGoBackFill /> : <GoCheck />}
            </button>
          </div> : Task.TimeDo[0]}
        </div>
      </div>
    </div>
  )
}

export default Tasks