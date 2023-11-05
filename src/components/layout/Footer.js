import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.footer}>
        {/* <a className={classes.footer__remantek}>Remantek</a> */}
        <a className={classes.footer__copyright}>copyright @2023</a>
    </div>
  )
}

export default Footer