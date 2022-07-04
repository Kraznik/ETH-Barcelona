const configTestnet = {
  apiBaseUrl: "https://eth-barcelona.kraznikunderverse.com",
  dgApiBaseUrl: "https://api-main.doingud.work",
  dgAppBaseUrl: "https://main.doingud.work",
};

const configMainnet = {
  apiBaseUrl: "https://prod.ethbarcelona.kraznikunderverse.com",
  dgApiBaseUrl: "https://api.doingud.com",
  dgAppBaseUrl: "https://doingud.com",
};

export const config =
  process.env.REACT_APP_NETWORK === "mainnet" ? configMainnet : configTestnet;
