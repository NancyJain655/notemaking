import React, { useEffect, useState } from 'react'
import styles from './Icon.module.css'

const Icon = ({name, color}) => {

    const [initials, setInitials] = useState('');
    //calculate initials for group icon
    const calculateInitials = (name) => {
        name = name.trim().replace(/\s+/g, ' ');
        const words = name.split(' ');
        if (words.length >= 2) {
            return words[0][0].toUpperCase() + words[1][0].toUpperCase();
        } else {
            return words[0][0].toUpperCase();
        }
    };

    
    useEffect(()=>{
        setInitials(calculateInitials(name));
      },[name])
  
  
  
    return ( <div className={styles.icon} style={{backgroundColor: color}}>{initials}</div>
    )
  }
  
  export default Icon