const configTestnet = {
  apiBaseUrl: "https://eth-barcelona.kraznikunderverse.com",
  dgApiBaseUrl: "https://api-main.doingud.work",
  dgAppBaseUrl: "https://main.doingud.work",
  alchemyUrl: `https://polygon-mumbai.g.alchemy.com/v2/WWvtjuEXcDbNHpx1f65J2dF3PP8JhVwN`,
  contractAddress: "0x4137cF37598EE871d1F4A6DEE9188217Ed40c649",
  dgMomentsCreatorAddress: "0x99354ac00459C0D601760fd9c00329444D60F614", // "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c", // "",
  sio: {
    id: "05dd4c3b-6635-4694-a4f4-11740b82df65",
    decentralizedId: 111,
  },
};

const configMainnet = {
  apiBaseUrl: "https://prod.ethbarcelona.kraznikunderverse.com",
  dgApiBaseUrl: "https://api.doingud.com",
  dgAppBaseUrl: "https://doingud.com",
  alchemyUrl: `https://polygon-mainnet.g.alchemy.com/v2/VX9hsINm25dNmmBqKi9ydn_iBW4sio4i`,
  contractAddress: "0xE3A161EdD679fC5ce2dB2316a4B6f7ab33a8eD6A",
  dgMomentsCreatorAddress: "0xc694391CEFAD1b89aC6e13dc1b54307d83aED114",
  sio: {
    id: "707eabb4-bd4f-4c71-a154-ecf614ae56ee",
    decentralizedId: 43,
  },
};

export const config =
  process.env.REACT_APP_NETWORK === "mainnet" ? configMainnet : configTestnet;
