import React from 'react'
import styles from './Topbar.module.css'

export default function Topbar() {
return (
<div className={styles.container}>
    <div>
        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>
              
        <div> SAMPLETEXT1</div>
        <div> SAMPLETEXT</div>
        <div>SAMPLETEXT2</div>
        
    </div>
</div>
)
}
