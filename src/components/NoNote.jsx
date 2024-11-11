import React from "react";
import img from "/assets/bgImage.png";
import styles from "./NoNote.module.css";
//if there is no note at that time the home screen will be
const NoNote = () => {
    return (
        <div className={styles.mainContain}>
        <div className={styles.imgContain}>
            <img src={img} alt="bgImage" />
            <h2>Pocket Note</h2>
            <p>
                Send and receive messages without keeping your phone online. Use
                Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
        </div>
        </div>
    );
};

export default NoNote;