# BlueWallet - Bitcoin Wallet

[![CircleCI](https://circleci.com/gh/Overtorment/BlueWallet.svg?style=svg)](https://circleci.com/gh/Overtorment/BlueWallet)

Thin Bitcoin Wallet.
Built with React Native, Expo and BlockCypher API.

* Build and run on your own using Expo Client
* Private keys never leave your device
* SegWit-first. Replace-By-Fee support

Alpha version, do not rely on it too much for now! 

![blue wallet](https://raw.githubusercontent.com/Overtorment/BlueWallet/master/gif.gif  "Blue Wallet screenshots gif")




## RUN IT

* In your console:

```
git clone https://github.com/Overtorment/BlueWallet.git
cd BlueWallet
npm install
npm start
``` 

* Install Expo client: https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8
* With Expo client, open the QR code shown in your console after `npm start`

## ALTERNATIVELY

* Install Expo Client: https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8
* Launch BlueWallet from https://expo.io/@overtorment/bluewallet

## MOTIVATION TO BUILD IT

I was not satisfied with existing iOS Bitcoin apps, especially with BreadWallet (the one I mainly used) where development stalled and they could not even deliver such features as SegWit, RBF and custom fees (at the times where custom fees were especially needed).
So I knew I could create one to use myself and let others use it.
I had experience with awesome bitcoin-js lib (javascript), and since I dont own any Macs, don't plan to and not going to learn ObjC/Swift - ReactNative (where you also write in javascript) was an obvious choice.


## AUTHOR

Igor Korsakov

## LICENSE

MIT


## ROADMAP

### v1.0.0 alpha

Support for single private-key wallets:

* SegWith P2SH compatibility addresses

#### Screens:
 
* Wallets
    * Sub-screen Edit Wallet
        * ~~Edit label~~
        * ~~Delete~~
        * ~~View info: type, address, privkey (?)~~
    * ~~Sub-screen Add Wallet~~
* Transactions
    * ~~Sub screen to view transaction details (confs, fee, seen date, confirmed date, time to confirm)~~
        * View TX on block explorer
* Receive 
    * ~~Choose wallet~~
    * ~~Sub-screen with QR~~
        * ~~address as un-editable input (for copy-paste)~~
* Send
    * ~~Choose Wallet~~
    * ~~Scan QR~~
        * ~~Sub screen edit balance, memo, receiver name ...~~
            * ~~Validation error in case of empty fields~~
        * ~~Broadcast TX~~
            * ~~save TX meta info to wallet storage (memo, txhex)~~
* Settings
    * ~~Opensource link~~    
    * ~~Technologies used~~


### v2.0.0 beta

* Legacy addresses
* ~~Encrypt all storage, PIN/Password/Fingerprint security~~
* Currency conversion
* Localization (RU, UA)

#### Screens:

* Receive
    * Choose wallet 
        * Choose amount in BTC, label etc
        * Generate specialized QR wih above info
    * Choose walet
        * Receive through changelly/shapeshift
* Send    
    * ~~Handle `bitcoin://` URI~~
    * ~~Scan QR with `bitcoin://` URI~~
* Transactions
    * ~~Sub screen to view transaction details (confs, fee, seen date, confirmed date, time to confirm)~~
        * ~~Do RBF on TX (with change-destination address)~~
        * Do CPFP
* Settings
    * Appstore RateMe link

### v3.0.0 beta

Support HD (multi-private keys)

#### Screens

* Settings
    * Different UTXO usage strategies
* Address book..?

### v4.0.0

Lightning support?


## BACKLOG FEATURES

* [x] RBF
* [ ] CPFP
* [ ] Sign any message with private key
* [ ] Verify other message signature
* [ ] Tool: Cold wallet verifier (scans private keys and displays public keys realtime)
* [x] Export (backup) secrets/private keys
* [ ] Cold wallet generator
* [x] Export created signed tx, no broadcast 
* [ ] Work through proxy? TOR?
* [ ] Localizations (RU, UA, BY? Arab, JP, CH?)
* [ ] Get unspents offline, create & sign TX offline
* [ ] Sweep other private key
* [ ] Rebroadcast TX (to some different endpoints?)
* [ ] Batch transaction
* [ ] MultiSig M-of-N  (while keeping only 1..M of all sigs on device)
    * [ ] Sign your part of multisig via QR code
* [ ] Transaztion queue chart, fee estimation
* [ ] Push notifications for all associated addresses
* [ ] Keep PrivKey/WIF on paper, scan only on TX signing, not keping on device (watch-only address)
* [ ] Decode TX screen
* [ ] Migrate to ElectrumX server (ditch blockcypher) - requires socket/tcp support in Expo
* [x] Fake password which unlocks fake wallets (aka plausible deniability)
* [x] BIP38 (password-protected key)
