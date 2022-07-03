import web3 from "./web3";
import abi from "./build/erc1155Abi.json";

const TicketToken = new web3.eth.Contract(
  abi,
  // "0xE3A161EdD679fC5ce2dB2316a4B6f7ab33a8eD6A" // doingud erc1155 polygon
  // "0x4137cF37598EE871d1F4A6DEE9188217Ed40c649" // mumbai doingud
  "0x4137cF37598EE871d1F4A6DEE9188217Ed40c649"
);

export default TicketToken;
