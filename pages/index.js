import { useMetaMaskAccount } from "../components/meta-mask-account-provider";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from "axios";
import PrimaryButton from '../components/primary-button';
import Game from '../components/game';
import Game2 from "../components/game2";

export default function Home() {

  const { ethereum, connectedAccount, connectAccount } = useMetaMaskAccount();
  const [fetchingNFT, setFetchingNFT] = useState(false);
  const [NFTsFetched, setNFTsFetched] = useState(false);
  const [hasNFT, setHasNFT] = useState(undefined);
  const [userNFTs, setUserNFTs] = useState([]);
  const [selectedNFTName, setSelectedNFTName] = useState(undefined);
  const [selectedNFTImage, setSelectedNFTImage] = useState(undefined);

  const NFTPORT_KEY = '3109056c-5353-45b3-89b8-af9db0fb1637';

  function fetchNFTs() {
    setFetchingNFT(true);
    console.log(connectedAccount)
    const options = {
      method: 'GET',
      url: `https://api.nftport.xyz/v0/accounts/${connectedAccount}`,
      // url: 'https://api.nftport.xyz/v0/accounts/0xAB49C15deB2a4c51505b91634B36a988b495c724',
      // url: 'https://api.nftport.xyz/v0/accounts/0xd859d7d8603D2dAb768D679eEEC25930C8FC59C1',
      params: {
        chain: 'ethereum',
        // account_address: '0xAB49C15deB2a4c51505b91634B36a988b495c724',
        // account_address:  '0xd859d7d8603D2dAb768D679eEEC25930C8FC59C1',
        account_address: connectedAccount,
        continuation: '\'\'',
        include: 'metadata'
      },
      headers: {
        'Content-Type': 'application/json', 
        Authorization: NFTPORT_KEY
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      if (response.data.nfts.length === 0) {
        setHasNFT(false);
        setUserNFTs([{"token_id": "Nada", 
        "name": "You don't have any NFTs, but you can still play along.",
        "metadata": {
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Magritte1-1-2008.jpg"
        }}])
      }
      else {
        setHasNFT(true);
        setUserNFTs(response.data.nfts);
      }

      setFetchingNFT(false);
      setNFTsFetched(true);
    }).catch(function (error) {
      console.error(error);
      setFetchingNFT(false);
    });
  }

  function selectNFT(nft) {
    setSelectedNFTName(nft.name);
    setSelectedNFTImage(nft.metadata.image);
  }

  if (!ethereum) {
    return <p>Please install MetaMask to connect to this site</p>
  }
  
  if (!connectedAccount) {
    return (
      <div className='flex flex-col	justify-center items-center h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
        <h1 className='text-4xl text-indigo-900 text-center font-bold p-10'>Tuqiu ????</h1>
        <p className="pb-10">Brick breaker in the metaverse</p>
        <PrimaryButton onClick={connectAccount}>Connect MetaMask Wallet to play!</PrimaryButton>
      </div>
    )
  }

  function SelectAnNFT() {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="pb-4 font-mono">
          {NFTsFetched ? 'Now choose an NFT to play with by clicking one below.' : 'Click the button below to fetch your ETH NFTs.'}
        </p>
        <PrimaryButton onClick={() => fetchNFTs()}>Fetch NFTs</PrimaryButton>
        { 
          fetchingNFT == true && NFTsFetched == false
          ? <p>Fetching....</p>
          : userNFTs.map((nft) => 
            <div 
              key={nft.token_id}
              className="border-black border-8 rounded-lg p-2 bg-slate-50 flex flex-row items-center m-2 cursor-pointer"
              onClick={ () => selectNFT(nft) }
              >
              <img 
                className="cursor-pointer h-20"
                src={nft.metadata.image}
                />
              <p className="pl-4 font-mono" id={nft.token_id}>{nft.name}</p>
            </div>
          )
        }
      </div>
    )
  }

  function gameWIP() {
    return (
      <div className="bg-slate-50 border-black border-8 rounded-lg flex grow w-80">
        <div>
          <h1>Game goes here</h1>
        </div>
        <p>{selectedNFTName}</p>
      </div>
    )
  }
  
    return (
      <div className="h-screen bg-gradient-to-r from-rose-100 to-teal-100 grid grid-cols-1 grid-rows-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-4xl text-indigo-900 font-mono font-bold'>Tuqiu ????</h1>
          <p className="font-mono">Signed in as {connectedAccount.substring(0, 4) + '...' + connectedAccount.substring(38, 42)}</p>
        </div>
        <div className="row-span-6 flex flex-col justify-center items-center">
          { 
            selectedNFTName === undefined 
            ? <SelectAnNFT />
            : <Game2 selectedNFTImage={selectedNFTImage} />
            // : <gameWIP className="bg-slate-50 border-black border-8 rounded-lg flex grow w-80"/>
            // : <div className="bg-slate-50 border-black border-8 rounded-lg flex flex-col justify-around items-center grow w-2/3">
            //     Game goes here
            //     <img 
            //       src={selectedNFTImage} 
            //       width="64" height="64" 
            //     />
            //   </div>
          }
          
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-mono">Created for BuildQuest by:  The PaddleCrushers</p>  
        </div>
      </div>
    )
}