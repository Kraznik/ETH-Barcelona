const configTestnet = {
  apiBaseUrl: "https://eth-barcelona.kraznikunderverse.com",
  dgApiBaseUrl: "https://api-main.doingud.work",
  dgAppBaseUrl: "https://main.doingud.work",
  alchemyUrl: `https://polygon-mumbai.g.alchemy.com/v2/WWvtjuEXcDbNHpx1f65J2dF3PP8JhVwN`,
  contractAddress: "0x4137cF37598EE871d1F4A6DEE9188217Ed40c649",
};

const configMainnet = {
  apiBaseUrl: "https://prod.ethbarcelona.kraznikunderverse.com",
  dgApiBaseUrl: "https://api.doingud.com",
  dgAppBaseUrl: "https://doingud.com",
  alchemyUrl: `https://polygon-mainnet.g.alchemy.com/v2/VX9hsINm25dNmmBqKi9ydn_iBW4sio4i`,
  contractAddress: "0xE3A161EdD679fC5ce2dB2316a4B6f7ab33a8eD6A",
};

export const config =
  process.env.REACT_APP_NETWORK === "mainnet" ? configMainnet : configTestnet;
