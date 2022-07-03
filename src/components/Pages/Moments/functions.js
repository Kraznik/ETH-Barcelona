import axios from "axios";
import { CID } from "multiformats/cid";

import imageDimensions from "./utils/getImageDimensions";
import { getTypeOfMedia } from "./utils/upload";
import { buildFormData } from "./utils/buildFormData";
import Diamond from "../../../ethereum/Diamond";

const baseUrl = `https://api-main.doingud.work`;

export function useUploadArtwork() {
  const uploadFile = async (file, AccessToken, library, title, description) => {
    console.log("uploading...");
    // try {
    const fileExtension = file.name.split(".").pop();
    const fileType = getTypeOfMedia(file);

    const dimensions =
      fileType === "image" ? await imageDimensions(file) : undefined;
    try {
      const uploadLink = await axios({
        url: `${baseUrl}/creation/storage/upload-link`,
        data: {
          mimetype: file.type,
          fileExtension,
        },
        method: "POST",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      });

      console.log("upload link: ", uploadLink.data);

      const formData = new FormData();
      if (file.type) {
        formData.append("Content-Type", file.type);
      }
      Object.entries(uploadLink.data.fields).forEach(([k, v]) => {
        formData.append(k, v);
      });
      formData.append("file", file);

      const res = await axios({
        url: uploadLink.data.url,
        method: "POST",
        data: formData,
        // ...requestConfig,
      });

      console.log("upload result: ", res);

      const createArtworkRes = await createArtwork(
        {
          type: file.type,
          fileExtension: fileExtension,
          fileKey: uploadLink.data.fields["key"],
          dimensions: dimensions || undefined,
        },
        AccessToken
      );

      console.log("createArtworkRes: ", createArtworkRes.data);

      const nftTypeId = createArtworkRes.data.nftTypeId;
      console.log("nftTypeId: ", nftTypeId);

      const editRes = await submitEditForm({
        nftTypeId,
        valuesForm: {
          title,
          description,
        },
        AccessToken,
        library,
      });
      console.log("editFormRes: ", editRes.data);

      const saleRes = await submitSaleSettingsForm({
        nftTypeId,
        valuesForm: {
          //   title: "Moments Test",
          //   description: "Testing",
        },
        AccessToken,
        library,
      });
      console.log("saleFormRes: ", saleRes);

      await Claim(nftTypeId);

      return;
    } catch (error) {
      console.log("error while uploading artwork", error);
      throw error;
    }
  };
  return {
    uploadFile,
  };
}

export const createArtwork = async (
  data,
  //   onSuccess,
  //   requestCookies,
  AccessToken
) => {
  //   const cookies = new Cookies(requestCookies);
  const response = await axios({
    data,
    method: "post",
    url: `${baseUrl}/creation/artwork`,
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  //   onSuccess?.(response);
  return response;
};

export const submitArtwork = async (nftTypeId, artwork, AccessToken) => {
  const formData = new FormData();
  buildFormData(formData, artwork);

  return axios({
    method: "put",
    data: formData,
    url: `${baseUrl}/creation/artwork/${nftTypeId}`,
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  });
};

export const submitArtworkSaleSettings = async (
  nftTypeId,
  saleSettings,
  AccessToken
) => {
  return axios({
    method: "put",
    data: saleSettings,
    url: `${baseUrl}/creation/artwork/${nftTypeId}/sale-settings`,
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  });
};

const submitEditForm = async ({
  nftTypeId,
  valuesForm,
  AccessToken,
  library,
  isPublished = true,
  includeSale = true,
}) => {
  const {
    // sio,
    // tags,
    title,
    description,
    // collection,
    // thumbnailFile,
    // collaborators,
    // unlockableContent,
  } = valuesForm;

  const creatorTypeId = parseInt(nftTypeId.slice(-12), 16);

  const saleSetting = await getSalesSettings(
    valuesForm,
    nftTypeId,
    creatorTypeId,
    library
  );
  console.log("sale setting: ", saleSetting);

  const model = {
    // tags,
    title,
    description,
    // collection,
    sioId: "05dd4c3b-6635-4694-a4f4-11740b82df65", // "2402b5bd-a955-495b-8f27-7ab614171ef5", // sio.id | // Hope for Justice Sio ig
    // collaborators: collaborators.map((collaborator) => ({
    //   address: collaborator.address,
    //   name: collaborator.username,
    // })),
    // thumbnailFile:
    //   thumbnailFile && thumbnailFile?.length > 0 ? thumbnailFile[0] : undefined,
    // unlockableContent,
    publish: isPublished,
    ...(includeSale && { saleSetting }),
  };

  return await submitArtwork(nftTypeId, model, AccessToken).catch((err) => {
    console.error(err);
  });
};

const submitSaleSettingsForm = async ({
  nftTypeId,
  valuesForm,
  AccessToken,
  library,
}) => {
  const creatorTypeId = parseInt(nftTypeId.slice(-12), 16);
  const saleSetting = await getSalesSettings(
    valuesForm,
    nftTypeId,
    creatorTypeId,
    library
  );
  console.log("sale setting form: ", saleSetting);
  return await submitArtworkSaleSettings(
    nftTypeId,
    saleSetting,
    AccessToken
  ).catch((err) => {
    console.error(err);
  });
};

const getSalesSettings = async (
  valuesForm,
  nftTypeId,
  creatorTypeId,
  library
) => {
  const price = 0,
    editionCount = 10,
    sellOnProfile = true,
    creatorProfits = 95,
    sioProfits = 5,
    secondarySioProfits = 3.5,
    secondaryCreatorProfits = 10,
    signedAt = new Date();

  let values = {
    // sio: "2402b5bd-a955-495b-8f27-7ab614171ef5",
    creatorShares: [
      {
        id: "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c",
        username: "banatisanchit",
        profit: 10000,
        isLocked: true,
      },
    ],
    editionCount: 10,
    price: 0,
    secondaryCreatorProfits,
    secondarySioProfits,
    sioProfits,
    signedAt,
    metadataCID: "bafybeier5ddletuco4b7tdv5dl336j6vvw27agivuablaibgjuvtqnir4a",
    expirationTime: Math.floor(+Date.UTC(2099, 0, 1) / 1000),
  };

  try {
    const url = `https://api-main.doingud.work/creation/artwork/${nftTypeId}`;
    const { data } = await axios.get(url);
    // creatorSignature = data.saleSetting.signature;
    if (data) {
      values.metadataCID = data?.metadataCID;
    }
  } catch (err) {
    console.error(err);
  }

  const signature = await getLazyMintSignature(values, creatorTypeId, library);

  //    = valuesForm;

  //   const distribution = getDistributionProfit(creatorShares);

  //   console.log("distribution: ", distribution);

  return {
    ...(sellOnProfile && {
      price,
      signature,
      signedAt: signedAt?.toISOString(),
      editionNumber: editionCount,
    }),
    publicProfileSale: sellOnProfile, // sellOnProfile,
    primaryMarket: {
      creatorsProfit: creatorProfits,
      socialCauseProfit: sioProfits,
      distribution: {
        "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c": 10000, // 100%
      },
    },
    secondaryMarket: {
      creatorsRoyalties: secondaryCreatorProfits,
      socialCauseRoyalties: secondarySioProfits,
    },
  };
};

export const getDistributionProfit = (creatorShares) => {
  const sharing = {};
  creatorShares.forEach((share) => {
    sharing[share.id] = share.profit;
  });

  return sharing;
};

const getLazyMintSignature = async (values, creatorTypeId, library) => {
  const params = getLazyMintParams({
    // artwork,
    valuesForm: values,
    creatorTypeId,
  });
  console.log("Lazy mint params: ", params);

  let signature = "";

  try {
    const hash = await Diamond.methods.hashLazyMint(params).call(); //.call();
    console.log("sig hash: ", hash);

    try {
      const url =
        "https://eth-barcelona.kraznikunderverse.com/getLazyMintSignature";
      const post_data = {
        hash,
      };
      const { data } = await axios.post(url, post_data, {
        headers: {
          validate: "alpha romeo tango",
        },
      });
      signature = data.signature;

      console.log("signature data from api: ", data);
    } catch (err) {
      throw err;
      console.error(err);
    }

    console.log("signature: ", signature);
  } catch (err) {
    console.error(err);
    throw err;
  }
  return signature;
};

const getLazyMintParams = ({
  // artwork,
  valuesForm,
  creatorTypeId,
}) => {
  const {
    // sio, // RegisteredSio
    creatorShares, // CreatorProfitForm[]
    editionCount,
    price,
    secondaryCreatorProfits,
    secondarySioProfits,
    sioProfits,
    signedAt, // Date
    metadataCID,
    expirationTime,
  } = valuesForm;

  const coCreators = [...creatorShares]; //as CreatorProfitForm[]; // equal arrays
  // const creator = coCreators.shift(); // remove the zeroth element and returns it

  // const collabs = coCreators.map((collaborator) => collaborator.id);
  // const collabPortions = coCreators.map(
  //   (collaboratorShare) => collaboratorShare.profit
  // );

  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

  console.log("ipfsCid: ", CID.parse(metadataCID).toV1().bytes);

  return {
    nftTypeDefinition: {
      creator: "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c", // creator.id, // id of CreatorProfitForm // that was probably eth address
      creatorTypeId, // artwork.creatorArtworkNumber, // number
      collabs: [], // [] // array of eth addresses of the collaborators // other than the creator
      collabPortions: [], // [] // array of profits of collabs
      sioId: 111, // 111, // sio.decentralizedId, // 107 // For Hope of Justice
      maxEditions: editionCount,
      // maxMintsPerAddress: editionCount,
      mintPortionSio: Math.floor(sioProfits * 100),
      resalePortionSio: Math.floor(secondarySioProfits * 100),
      resalePortionCreator: Math.floor(secondaryCreatorProfits * 100),
      ipfsCid: CID.parse(metadataCID).toV1().bytes, //"QmfS9KJXxkKLNy8k8aEbJzZQn64WN1CjPphdsp3dPUT2gM", // ,
    },
    buyer: ZERO_ADDRESS,
    gallery: ZERO_ADDRESS, // "0xAEde54862c0BE447Fcac57c6cAb0EDfaa6f6697e", //
    numOffered: editionCount,
    price, // parseUnits(getPriceWithDGFee(price), 6),
    expirationTime: Math.floor(+Date.UTC(2099, 0, 1) / 1000),
    nonce: signedAt.getTime(), // "1000000000000",
  };
};

const fixSignatureV = (signature) => {
  const vVal = signature.substring(130, 132).toLowerCase();
  if (!["1b", "1c"].includes(vVal)) {
    if (vVal == "00") {
      signature = signature.substring(0, 130) + "1b";
    } else if (vVal == "01") {
      signature = signature.substring(0, 130) + "1c";
    } else {
      throw new Error(`Invalid signature v value: 0x${vVal}`);
    }
  }
  return signature;
};

export const Claim = async (nftTypeId) => {
  console.log("nft type id: ", nftTypeId);

  let values = {
    // sio: "2402b5bd-a955-495b-8f27-7ab614171ef5",
    creatorShares: [
      {
        id: "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c",
        username: "banatisanchit",
        profit: 10000,
        isLocked: true,
      },
    ],
    editionCount: 10,
    price: 0,
    secondaryCreatorProfits: 10,
    secondarySioProfits: 3.5,
    sioProfits: 5,
    signedAt: new Date(),
    metadataCID: "",
    expirationTime: Math.floor(+Date.UTC(2099, 0, 1) / 1000),
  };
  let creatorSignature = "";

  const creatorTypeId = parseInt(nftTypeId.slice(-12), 16);

  try {
    const url = `https://api-main.doingud.work/creation/artwork/${nftTypeId}`;
    const { data } = await axios.get(url);
    creatorSignature = data.saleSetting.signature;
    values.metadataCID = data.metadataCID;
    values.signedAt = new Date(data.saleSetting.signedAt);
  } catch (err) {
    console.error(err);
  }

  console.log("params values in claim: ", values);

  const params = getLazyMintParams({
    // artwork,
    valuesForm: values,
    creatorTypeId,
  });

  console.log(params);

  try {
    const url = "https://eth-barcelona.kraznikunderverse.com/mintMoments";
    const post_data = {
      ticketIds: [1, 2],
      nftTypeId,
      params,
    };
    const { data } = await axios.post(url, post_data, {
      headers: {
        validate: "alpha romeo tango",
      },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};