import ScrollAnimation from 'react-animate-on-scroll'
import { Button } from '../button/Button'

import classes from './helloScreen.module.scss'

import Web3 from 'web3'
import mintTokenContract from '../../blockchain/mintTokenContract.js'
import { useState, useEffect } from 'react'




export function HelloScreen() {

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1>Mint NFT</h1>
        <form id="theForm">
        <table>         
          <tr>
            <td align="left">NFT Creator Wallet Address</td>
            <td><input type="text" id="creatorWalletAddress" value=""  size="40" /></td>
          </tr>
          <tr>
          <td align="left">NFT URI:</td>
          <td><input type="text" id="NFT Token URI" value=""  size="40" /></td>
          </tr>
          <tr>
          <td align="left">NFT ID:</td>
          <td><input type="text" id="NFT Token ID" value="12345"  size="40" /></td>
          </tr>
          <tr>
          <td align="left">NFT Price:</td>
          <td><input type="text" id="Price" value="1.0 ETH"  size="40" /></td>
          </tr>
          <tr>
          <td align="left">NFT Royalty:</td>
          <td><input type="text" id="Royalty" value="0.1 ETH"  size="40" /></td>
          </tr>
          </table>
        <Button>Mint NFT</Button>
        </form>

      <ScrollAnimation
        animatePreScroll={true}
        animateIn="fadeInUp"
        animateOnce={true}
        duration={2}
      ></ScrollAnimation>
    </div>
  </div>
  )
}

