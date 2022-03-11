import { getRange } from '../utils'

export const BLOCK_MAX_DENSITY = 3

const getRandomBlock = () => Math.floor(Math.random() * BLOCK_MAX_DENSITY)

const getBlocks = (rows, columns) =>
  getRange(rows).map(() => getRange(columns).map(getRandomBlock))

  
const enemyNFTs = [
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9998_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5822_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4156_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x41a322b28d0ff354040e2cbc676f0320d8c8850d/1154_64_64.gif',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/30841_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x22c36bfdcef207f9c0cc941936eff94d4246d14a/69_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x495f947276749ce646f68ac8c248420045cb7b5e/96773753706640817147890456629920587151705670001482122310561805592519359070209_64_64.gif',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xf76179bb0924ba7da8e7b7fc2779495d7a7939d8/2054_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/ethereum/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/78000313_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3749_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/ethereum/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/78000077_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/ethereum/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/4697_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/ethereum/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/7583_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7/10761_64_64.jpg',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/8585_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/ethereum/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/78000772_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/ethereum/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/3784_64_64.png',
  'https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x959e104e1a4db6317fa58f8295f586e1a978c297/4339_64_64.png'
]


export const LEVELS = [
  {
    lives: 5,
    paddleWidth: 3.5,
    speed: 1,
    blocks: getBlocks(3, 6)
  },
  {
    lives: 4,
    paddleWidth: 3,
    speed: 1.4,
    blocks: getBlocks(4, 7)
  },
  {
    lives: 3,
    paddleWidth: 2.5,
    speed: 1.8,
    blocks: getBlocks(5, 8)
  },
  {
    lives: 3,
    paddleWidth: 2,
    speed: 2.2,
    blocks: getBlocks(6, 9)
  },
]
