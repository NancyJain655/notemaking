import React from 'react'
import Icon from './Icon'
import styles from './ButtonForNote.module.css'
//open groupdetails when click on that group

const ButtonForNote = ({color, name, onClick}) => {
    return (
        <div className={styles.button} onClick={onClick}>
             <Icon name={name} color={color} />
             <div className={styles.nameContain}>
            <p className={styles.name}>{name}</p>
        </div>
    </div>
  )
}

export default ButtonForNote
