const { ethers } = require("ethers");
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");
const axios = require("axios");

// Inline ABI of the contract we'll be interacting with (check out the rollup example for a better way to handle this!)
const DG_ABI = [
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const secret_key = "alpha romeo tango";

const options = {
  headers: {
    validate: secret_key,
  },
};

const baseApiUrl = "https://eth-barcelona.kraznikunderverse.com";

// Main function, exported separately for testing
exports.main = async function (signer, recipient, contractAddress) {
  // Create contract instance from the relayer signer
  const poapNFT = new ethers.Contract(contractAddress, DG_ABI, signer);

  // Check relayer balance via the Defender network provider
  const relayer = await signer.getAddress();
  console.log("relayer: ", relayer);

  const url = `${baseApiUrl}/poapDistribution`;
  const { data } = await axios.get(url, options);
  const tickets = data.data;

  const from = relayer; //relayer
  let txs = [];

  // const poap_nft_type_id =
  //   "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000008";

  // const edition = "00000005";

  // const tokenIdInHex = poap_nft_type_id + edition;
  // const tokenIdInDec = ethers.BigNumber.from(parseInt(tokenIdInHex, 16));

  // console.log("poap token id: ", tokenIdInDec);

  for (let i = 0; i < tickets.length; i++) {
    console.log("ticket: ", tickets[i]);
    const to = tickets[i].ticketOwnerAddress, // ticket owner
      id = tickets[i].ticketTokenId; //token id

    const poapTokenId =
      "778223506044639989037977882871403642790744177833344237845110164656488453";
    tx = await poapNFT.safeTransferFrom(from, to, poapTokenId, 1, "0x00", {
      gasLimit: "1000000",
    });
    txs.push(tx);

    console.log("isPoapMinted setting to true in api for: ", id);

    const patch_url = `${baseApiUrl}/setPoapMinted/${id}`;
    await axios.patch(patch_url, {}, options);
  }

  return txs;
};

// Entrypoint for the Autotask
exports.handler = async function (credentials) {
  // Initialize defender relayer provider and signer
  const provider = new DefenderRelayProvider(credentials);
  const signer = new DefenderRelaySigner(credentials, provider, {
    speed: "fast",
  });
  const contractAddress = "0x4137cF37598EE871d1F4A6DEE9188217Ed40c649"; // DG Mumbai token contract
  return exports.main(signer, await signer.getAddress(), contractAddress); // Send funds to self
};
