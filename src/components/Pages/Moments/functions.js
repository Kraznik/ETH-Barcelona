import axios from "axios";
import { useState } from "react";
import { ethers } from "ethers";

import { CID } from "multiformats/cid";
import { arrayify } from "ethers/lib/utils";

import imageDimensions from "./utils/getImageDimensions";
import { getTypeOfMedia } from "./utils/upload";
import { buildFormData } from "./utils/buildFormData";
import Diamond from "../../../ethereum/Diamond";
import web3 from "../../../ethereum/web3";

const baseUrl = `https://api-main.doingud.work`;

// let library;

export function useUploadArtwork() {
  //   const [uploadSumitted, hasUploadSumitted] = useState(false);

  const uploadFile = async (file, AccessToken, library) => {
    // library = library;
    console.log("library: ", library);
    // hasUploadSumitted(true);
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

      const editRes = await submitEditForm({
        nftTypeId,
        valuesForm: {
          title: "Moments Test",
          description: "Testing",
        },
        AccessToken,
      });
      console.log("editFormRes: ", editRes.data);

      // const nftTypeId =
      //   "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000024";

      // const saleRes = await submitSaleSettingsForm({
      //   nftTypeId,
      //   valuesForm: {
      //     //   title: "Moments Test",
      //     //   description: "Testing",
      //   },
      //   AccessToken,
      //   library,
      // });
      // console.log("saleFormRes: ", saleRes);

      return;
    } catch (error) {
      //   hasUploadSumitted(false);
      console.log("error while uploading artwork", error);
      throw error;
    }
  };
  return {
    // uploadSumitted,
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

  const saleSetting = await getSalesSettings(valuesForm, creatorTypeId);
  console.log("sale setting: ", saleSetting);

  const model = {
    // tags,
    title,
    description,
    // collection,
    sioId: "2402b5bd-a955-495b-8f27-7ab614171ef5", // sio.id | // Hope for Justice Sio ig
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

// saleSettingReqForm = {
//   publicProfileSale: false,
//   primaryMarket: {
//     creatorsProfit: 95,
//     socialCauseProfit: 5,
//     distribution: { "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c": 100 },
//   },
//   secondaryMarket: { creatorsRoyalties: 10, socialCauseRoyalties: 3.5 },
// };

const getSalesSettings = async (valuesForm, creatorTypeId, library) => {
  const price = 0,
    editionCount = 10,
    sellOnProfile = true,
    creatorProfits = 95,
    // creatorShares = [
    //   {
    //     id: "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c",
    //     username: "banatisanchit",
    //     profit: 10000,
    //     isLocked: "true",
    //   },
    // ],
    sioProfits = 5,
    secondarySioProfits = 3.5,
    secondaryCreatorProfits = 10,
    signedAt = new Date();

  const values = {
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
    metadataCID: "bafybeidqo7kkxr6vqawwdym37zx76qycbsbzhwl7b4urqhgvdov6lcc4fy",
    expirationTime: 0,
  };

  const signature = await getLazyMintSignature(values, creatorTypeId, library);

  //    = valuesForm;

  //   const distribution = getDistributionProfit(creatorShares);

  //   console.log("distribution: ", distribution);

  return {
    ...(sellOnProfile && {
      price,
      //
      signature,
      // "0xd2321d57c2a4633c71963d9399d1529160e985fc91b04905652ba3ac6c7808cc505bf58fa577755860b7ef872dba7326a03a2df8a831b45c5d1e641bb77e8bad1c",

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
  // if (account !== artwork.creator.address) {
  //   handleError({ messageMap: "web3.error.wrongSigner" });
  //   return;
  // }

  const params = getLazyMintParams({
    // artwork,
    valuesForm: values,
    creatorTypeId,
  });
  console.log("Lazy mint params: ", params);
  // console.log(Diamond);

  let signature = "";

  try {
    const hash = await Diamond.methods.hashLazyMint(params).call(); //.call();
    console.log("sig hash: ", hash);

    // const sign = await ethereum.request({
    //   method: "personal_sign",
    //   params: [hash],
    // });

    // const sign = async (message) =>
    //   await library
    //     .getSigner()
    //     .signMessage(arrayify(message))
    //     .then((signature) => fixSignatureV(signature));

    // signature = await sign(hash);

    console.log("arrayify : ", arrayify(hash));

    signature = await web3.eth.sign(
      // arrayify(hash).toString(),
      hash,
      "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c"
    );
    signature = fixSignatureV(signature);
    console.log("signature: ", signature);
  } catch (err) {
    console.error(err);
  }

  // if (!hash) {
  //   return;
  // }

  // const signature = await sign(hash); // sign message with creator wallet // use ethers js lib
  // if (!signature) {
  //   return;
  // }

  // // Now that we have new signature, revoke previous hash if exist
  // if (initialValues && initialValues.signature) {
  //   const initialLazyMintParams = getLazyMintParams({
  //     // artwork,
  //     valuesForm: initialValues,
  //   });
  //   if (!(await revokeSignature(initialLazyMintParams))) {
  //     return;
  //   }
  // }

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
      sioId: 107, // sio.decentralizedId, // 107 // For Hope of Justice
      maxEditions: editionCount,
      maxMintsPerAddress: editionCount,
      mintPortionSio: Math.floor(sioProfits * 100),
      resalePortionSio: Math.floor(secondarySioProfits * 100),
      resalePortionCreator: Math.floor(secondaryCreatorProfits * 100),
      ipfsCid: CID.parse(metadataCID).toV1().bytes, //"QmfS9KJXxkKLNy8k8aEbJzZQn64WN1CjPphdsp3dPUT2gM", // ,
    },
    buyer: ZERO_ADDRESS,
    gallery: ZERO_ADDRESS,
    numOffered: editionCount,
    price, // parseUnits(getPriceWithDGFee(price), 6),
    expirationTime,
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

export const Claim = async () => {
  const nftTypeId = "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c000000000028";

  const values = {
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
    metadataCID: "bafybeidqo7kkxr6vqawwdym37zx76qycbsbzhwl7b4urqhgvdov6lcc4fy",
    expirationTime: 0,
  };
  let creatorSignature = "";

  const creatorTypeId = parseInt(nftTypeId.slice(-12), 16);

  const params = getLazyMintParams({
    // artwork,
    valuesForm: values,
    creatorTypeId,
  });

  try {
    const url = `https://api-main.doingud.work/creation/artwork/${nftTypeId}`;
    const { data } = await axios.get(url);
    creatorSignature = data.saleSetting.signature;
  } catch (err) {
    console.error(err);
  }
  const BYTES_ZERO = ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(["uint256"], [0])
  );

  console.log("BYTES_ZERO: ", BYTES_ZERO);
  const donation = 0,
    amount = 1, // number of editions to be minted
    dummyPaymentPermit = {
      amount: 0,
      deadline: 0,
      r: BYTES_ZERO,
      s: BYTES_ZERO,
      v: 0,
    };
  try {
    console.log("claim params: ", params);
    console.log("creatorSignature: ", creatorSignature);

    const txn = await Diamond.methods
      .buyLazyMint(
        params, //lazy mint params
        amount, //
        donation, //Optional extra SIO donation
        creatorSignature, // signature that's passed to sale settings
        dummyPaymentPermit // paymentPermit // Optional EIP-2612 permit
      )
      .send({ from: "0x70c1EA05E2A54DfFE1088D4A54CB1a6C25c9077c" });
  } catch (err) {
    console.error(err);
  }
};

//valuesForm
// export interface SubmissionArtworkForm {
//     title: string;
//     isMandatoryThumbnail?: boolean;
//     description: string;
//     unlockableContent?: string;
//     sio: RegisteredSio;
//     collection?: Collection;
//     tags: string[];
//     sellOnProfile: boolean;
//     thumbnailFile?: File[];
//     collaborators: IUserPublicProfile[];
//     price: number;
//     editionCount: number;
//     creatorProfits: number;
//     sioProfits: number;
//     creatorShares: CreatorProfitForm[];
//     secondaryCreatorProfits: number;
//     secondarySioProfits: number;
//     expirationTime: number;
//     signature?: string;
//     signedAt?: Date;
//     metadataCID?: string;
//   }

// export interface RegisteredSio extends Web3ID {
//   id: string;
//   slug: string;
//   name: string;
//   countriesImpacted: string[];
//   sdgSolved: number[];
//   registrationCountry: string;
//   recipient: string;
//   registeredAt: string;
//   socialMediaLinks?: SocialMediaLink[];
//   description?: string;
//   legalName?: string;
//   admins?: string[];
//   profilePicture?: string;
//   headerImage?: string;
//   decentralizedId: number;
//   totalDonationsReceived?: string;
//   selectable: boolean;
// }

// export interface Web3ID {
//   artworkId?: string;
//   didKey: string;
//   address: string;
//   relatedId: string;
// }

// export interface CreatorProfitForm {
//   id: string;
//   username: string;
//   profit: number;
//   isLocked: boolean;
// }

// const diamond = useDiamond();
