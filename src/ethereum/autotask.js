const { ethers } = require("ethers");
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");
const axios = require("axios");

// Main function, exported separately for testing
exports.main = async function (signer, recipient, payload) {
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

    const url_get = `https://api.covalenthq.com/v1/137/events/address/0xE3A161EdD679fC5ce2dB2316a4B6f7ab33a8eD6A/?starting-block=${block_number}&ending-block=${
      block_number + 1
    }&key=ckey_9f2ed5152bcb4eb1a8dbc4cf854`;

    console.log("covalent url: ", url_get);

    const { data } = await axios.get(url_get);
    const items = data.data.items;
    let token_id;
    console.log(items);
    await items.map((item) => {
      if (item.decoded) {
        console.log(item.decoded.params);
        token_id = item.decoded.params[3].value;
      }
    });

    console.log("token id: ", token_id);

    try {
      const url = "https://prod.ethbarcelona.kraznikunderverse.com/qrcode";
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
    } catch (err) {
      if (typeof token_id === "undefined") {
        throw err;
      }
      console.error(err);
    }
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
  const payload = body;

  return exports.main(signer, await signer.getAddress(), payload); // Send funds to self
};
