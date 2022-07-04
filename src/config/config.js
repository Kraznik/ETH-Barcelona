const configTestnet = {
  apiBaseUrl: "https://eth-barcelona.kraznikunderverse.com",
};

const configMainnet = {
  apiBaseUrl: "https://prod.ethbarcelona.kraznikunderverse.com",
};

export const config =
  process.env.REACT_APP_NETWORK === "mainnet" ? configMainnet : configTestnet;
