import React, { useState } from 'react'
import DynamicIcon from '../DymanicIcons/DynamicIcon'
import CircularProgress from '../CircularProgress/CircularProgress'
import styles from './Tasks.module.scss'
const Tasks = ({ Task }) => {
  const [hover, setHover] = useState(false)
  return (
    <div className={styles.TaskWrapper}>
      <div className={styles.TaskIcons}>
        <CircularProgress cx={50} cy={50} r={35} isActive={true} />
        <span className={styles.iconWrapper}>
          <DynamicIcon name={Task.icon} />
        </span>
      </div>
      <div className={styles.TaskContent}>
        <div className={styles.Task}>
          <p>{Task.WhatDo}</p>
          <p>{Task.WhereDo}</p>
        </div>
        <div className={styles.TaskDate} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          {Task.TimeDo[0]}
          {hover && <div>
            <button>1</button>
            <button>2</button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Tasks