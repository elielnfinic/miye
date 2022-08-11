import {ApiPromise, WsProvider} from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
const { Keyring } = require('@polkadot/keyring');

export const login = async() => {
    web3Enable("miye");
    const accounts = await web3Accounts();
    console.log(accounts);
}

export const connect = async () => {
 const wsProvider = new WsProvider('ws://127.0.0.1:9944');
 const api = await ApiPromise.create({provider : wsProvider});

 const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

 console.log(api.genesisHash.toHex());
 return api;
};

