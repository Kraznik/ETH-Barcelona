import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RPC_URLS = {
  80001:
    "https://polygon-mumbai.g.alchemy.com/v2/T95ylN-bR7zmaXiaZkP0R1sOObutgv-M",
  137: "https://polygon-mainnet.g.alchemy.com/v2/VX9hsINm25dNmmBqKi9ydn_iBW4sio4i",
};

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 137, 80001],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    80001: RPC_URLS[80001],
    137: RPC_URLS[137],
  },
  qrcode: true,
  pollingInterval: 15000,
});

export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}

//coinbase
export const walletlink = new WalletLinkConnector({
  // url: RPC_URLS[4],
  url: RPC_URLS[137],
  appName: "ETH BCN",
  supportedChainIds: [1, 4, 80001, 137],
});
