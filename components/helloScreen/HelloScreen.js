import ScrollAnimation from 'react-animate-on-scroll'
import { Button } from '../button/Button'

import classes from './helloScreen.module.scss'

import Web3 from 'web3'
import stakingContract from '../../blockchain/mintTokenContract.js'
import { useState, useEffect } from 'react'

export function HelloScreen() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1>Mint Token </h1>
        <p>FORM</p>
        <Button>Raise</Button>
        <Button>Mint Token</Button>
      </div>
      <ScrollAnimation
        animatePreScroll={true}
        animateIn="fadeInUp"
        animateOnce={true}
        duration={2}
      ></ScrollAnimation>
    </div>
  )
}

