import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner, importKey } from '@taquito/signer';
import React, { Component } from "react";

const Tezos = new TezosToolkit('https://hangzhounet.smartpy.io');
Tezos.setProvider({
  signer: new InMemorySigner('edskRuPWa2G6WcuYck5jAseCpENckWykWKWCgNXuDqvCQDVJXd4RvHgF2LENL14Z1EPqFfqM6f2EaV4MiJEywRFqq4KenuKVis'),
});
const FAUCET_KEY = {
  "pkh": "tz1i93fXjygCyZCydw29XgBkz8o3sMNiyYJY",
  "mnemonic": [
    "raise",
    "clay",
    "into",
    "ceiling",
    "index",
    "orient",
    "enjoy",
    "shiver",
    "valley",
    "fuel",
    "object",
    "save",
    "squirrel",
    "major",
    "response"
  ],
  "email": "pzpdqiai.eughzjkh@teztnets.xyz",
  "password": "JTqtAfhWLi",
  "amount": "7990477146",
  "activation_code": "ab4930e49efdd444a2112878184ab6abf05886ee"
};
importKey(
  Tezos,
  FAUCET_KEY.email,
  FAUCET_KEY.password,
  FAUCET_KEY.mnemonic.join(' '),
  FAUCET_KEY.secret
).catch((e) => console.error(e));
const amount = 20;
const address = 'tz1daYLri6SC1rm9G7LoEf3entZT1xF4EvfU';   //debjanee
var hoodieHashCode;
var hoodieImage;
var hoodieDescription;
var response= new Object();
class Dapp extends Component {
  constructor(props) {
    super(props);
  }
  checkBalance(){
    Tezos.tz
      .getBalance('tz1i93fXjygCyZCydw29XgBkz8o3sMNiyYJY')
      .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
      .catch((error) => console.log(JSON.stringify(error)));
    }
    callBackend(){
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText)
      response = JSON.parse(xhr.responseText);
      hoodieHashCode= response.hoodieHashCode;
      hoodieImage = response.hoodieImage;
      hoodieDescription = response.hoodieDescription;
    })
    xhr.open('GET', 'http://localhost:8080/buyNFT/USERNAME')
    xhr.send()

  }
  configureTezos() {
    this.sendTezos();
    this.callBackend();
    Tezos.contract.at('KT1TV49PVhvhn1kJkuM4jENEc6PsjRRK2hgu')
      .then((contract) => {
        console.log(hoodieImage);
        switch (hoodieDescription){
        case "Grey":

        console.log('we got a ocean Grey hoodie');
       // changeImage("Grey");
//          return (
//               <img src = "../resource/img/2109_GAP_CROAKIES_v128_Generative11.png">
//             );
        break;
        case "Ocean Blue":
        console.log('we got a ocean blue hoodie');
        break;
        case "Purple":
        console.log('we got a Purple hoodie');
        break;
        case "Navy Blue":
        console.log('we got a Navy Blue hoodie');
        break;
        case "Brown":
        console.log('we got a Brown hoodie');
        break;
        case "Green":
        console.log('we got a Green hoodie');
        break;
        case "Lime Yellow":
        console.log('we got a Lime Yellow hoodie');
        break;
        case "Pink":
        console.log('we got a Pink hoodie');
        break;
        case "Black":
        console.log('we got a Black hoodie');
        break;
        case "Blue":
        console.log('we got a Blue hoodie');
        break;
        default:
        console.log('out of stock');
        break;
        }
        return contract.methods.setAll(hoodieHashCode, 20, "12345678").send();
      }).then((op) => {
        console.log(op);
        console.log(`Waiting for ${op.hash} to be confirmed...`);
        return op.confirmation(1).then(() => op.hash);
      })
      .then((hash) => console.log(`Operation injected: https://hangzhou.tzstats.com/${hash}`))
      .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
  }

  sendTezos() {
    console.log(`Transfering ${amount} ꜩ to ${address}...`);
    Tezos.contract
      .transfer({ to: address, amount: amount })
      .then((op) => {
        console.log("123456789");
        console.log(`Waiting for ${op.hash} to be confirmed...`);
        return op.confirmation(1).then(() => op.hash);
      })
      .then((hash) => console.log(`Operation injected: https://hangzhou.tzstats.com/${hash}`))
      .catch((error) => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
  }
  render() {
    return (
      <button
        name="Dapp"
        className="profile_btn"
        onClick={() => this.configureTezos()}
      > Buy now </button>
    );
  }

}


export default Dapp;
