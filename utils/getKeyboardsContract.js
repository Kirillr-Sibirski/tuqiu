import { ethers } from 'ethers';

import abi from '../utils/Keyboards.json'

const contractAddress = '0xD011D83AE164B46BB9eEc783FCe0e19D38C40719';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(contractAddress, contractABI, signer);
    } else {
        return undefined;
    }
}