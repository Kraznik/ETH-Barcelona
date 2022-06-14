import ABI from "@doingud/contracts/abi/DoinGudDiamondFull.json";
import { DOINGUD_DIAMOND_ADDRESS } from "@doingud/contracts/dist/adresses";
// import { DoinGudDiamondFull } from "@doingud/contracts/types/diamond/DoinGudDiamondFull";

import { useContract } from "./useContract";

export const useDiamond = () => {
  return useContract(DOINGUD_DIAMOND_ADDRESS, ABI, true);
};
