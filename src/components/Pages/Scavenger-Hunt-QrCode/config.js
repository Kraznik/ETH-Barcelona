export const scavhunt = {
  1: "able",
  2: "aged",
  3: "area",
  4: "away",
  5: "back",
  6: "band",
  7: "base",
  8: "bear",
};

const creatorTypeIdMainnet = {
  part1: 8,
  part2: 7,
  part3: 6,
  part4: 5,
  part5: 4,
  part6: 3,
  part7: 2,
  part8: 1,
};

const creatorTypeIdTest = {
  part1: 11,
  part2: 12,
  part3: 13,
  part4: 14,
  part5: 15,
  part6: 16,
  part7: 17,
  part8: 18,
};

export const creatorTypeId =
  process.env.REACT_APP_NETWORK === "testnet"
    ? creatorTypeIdTest
    : creatorTypeIdMainnet;
