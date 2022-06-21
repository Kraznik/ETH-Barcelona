const { ethers } = require("ethers");
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");
const axios = require("axios");

// Main function, exported separately for testing
exports.main = async function (signer, recipient, contractAddress, payload) {
  // Create contract instance from the relayer signer

  // Check relayer balance via the Defender network provider
  const relayer = await signer.getAddress();
  console.log("relayer: ", relayer);

  let events = payload.events;

  for (let i = 0; i < events.length; i++) {
    let evt = events[i];
    console.log("transaction: ");
    console.log(evt.transaction.logs[1]);
    const to = evt.transaction.from;

    const burn_hash = evt.transaction.transactionHash;

    const block_number = parseInt(evt.transaction.blockNumber, 16);

    const url_get = `https://api.covalenthq.com/v1/80001/events/address/0x4137cF37598EE871d1F4A6DEE9188217Ed40c649/?starting-block=${block_number}&ending-block=${
      block_number + 1
    }&key=ckey_9f2ed5152bcb4eb1a8dbc4cf854`;

    const { data } = await axios.get(url_get);
    const items = data.data.items;
    let token_id;
    await items.map((item) => {
      if (item.decoded) {
        token_id = item.decoded.params[3].value;
      }
    });
    // const token_id = data.data.items[0].decoded.params[3].value;
    console.log("token id: ", token_id);

    const url = "https://eth-barcelona.kraznikunderverse.com/qrcode";
    var tkt_data = {
      walletAddress: to,
      tokenID: token_id,
      hash: burn_hash,
    };
    await axios.post(url, tkt_data, {
      headers: {
        "Content-Type": "application/json",
        validate: "alpha romeo tango",
      },
    });
  }

  return tkt_data;
};

// Entrypoint for the Autotask
exports.handler = async function (event) {
  const {
    body, // Object with JSON-parsed POST body
    headers, // Object with key-values from HTTP headers
    queryParameters, // Object with key-values from query parameters
  } = event.request;
  // Initialize defender relayer provider and signer
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, {
    speed: "fast",
  });
  const contractAddress = "0x0463E2FED074C5F6736C28a856F4efD05ADA1B8f"; // Mumbai NFT Ticket contract
  const payload = body;

  return exports.main(
    signer,
    await signer.getAddress(),
    contractAddress,
    payload
  ); // Send funds to self
};
