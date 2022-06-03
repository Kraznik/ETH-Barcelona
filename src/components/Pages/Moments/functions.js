import axios from "axios";
import { useState } from "react";

import imageDimensions from "./utils/getImageDimensions";
import { getTypeOfMedia } from "./utils/upload";
import { buildFormData } from "./utils/buildFormData";

const baseUrl = `https://api-main.doingud.work`;

export function useUploadArtwork() {
  //   const [uploadSumitted, hasUploadSumitted] = useState(false);

  const uploadFile = async (file, AccessToken) => {
    // hasUploadSumitted(true);
    console.log("uploading...");

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
      //   const nftTypeId =
      //     "0x70c1ea05e2a54dffe1088d4a54cb1a6c25c9077c00000000001a";
      const editRes = await submitEditForm({
        nftTypeId,
        valuesForm: {
          title: "Moments Test",
          description: "Testing",
        },
        AccessToken,
      });
      console.log("editFormRes: ", editRes.data);

      const saleRes = await submitSaleSettingsForm({
        nftTypeId,
        valuesForm: {
          //   title: "Moments Test",
          //   description: "Testing",
        },
        AccessToken,
      });
      console.log("saleFormRes: ", saleRes);

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

  //   const saleSetting = {
  //     editionNumber: 1,
  //     price: 0,
  //     signature:
  //       "0xd2321d57c2a4633c71963d9399d1529160e985fc91b04905652ba3ac6c7808cc505bf58fa577755860b7ef872dba7326a03a2df8a831b45c5d1e641bb77e8bad1c",
  //     publicProfileSale: false,
  //     primaryMarket: {
  //       creatorsProfit: 95,
  //       socialCauseProfit: 5,
  //       distribution: {
  //         "0xcb80C829E7F68Df0e36c10e84FFa306382Bc37C8": 10000,
  //       },
  //     },
  //     secondaryMarket: {
  //       creatorsRoyalties: 10,
  //       socialCauseRoyalties: 3.5,
  //     },
  //   };

  const saleSetting = getSalesSettings(valuesForm);
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
}) => {
  const saleSetting = getSalesSettings(valuesForm);
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

const getSalesSettings = (valuesForm) => {
  const price = 0,
    editionCount = 1,
    sellOnProfile = false,
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
    signature = "",
    signedAt = "";
  //    = valuesForm;

  //   const distribution = getDistributionProfit(creatorShares);

  //   console.log("distribution: ", distribution);

  return {
    ...(sellOnProfile && {
      price,
      signature:
        "0xd2321d57c2a4633c71963d9399d1529160e985fc91b04905652ba3ac6c7808cc505bf58fa577755860b7ef872dba7326a03a2df8a831b45c5d1e641bb77e8bad1c",
      //   signedAt: "", //  signedAt?.toISOString(),
      editionNumber: editionCount,
    }),
    publicProfileSale: sellOnProfile,
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

    // editionNumber: 1,
    // price: 0,
    // signature:
    //   "0xd2321d57c2a4633c71963d9399d1529160e985fc91b04905652ba3ac6c7808cc505bf58fa577755860b7ef872dba7326a03a2df8a831b45c5d1e641bb77e8bad1c",
    // publicProfileSale: false,
    // primaryMarket: {
    //   creatorsProfit: 95,
    //   socialCauseProfit: 5,
    //   distribution: {
    //     "0xcb80C829E7F68Df0e36c10e84FFa306382Bc37C8": 10000,
    //   },
    // },
    // secondaryMarket: {
    //   creatorsRoyalties: 10,
    //   socialCauseRoyalties: 3.5,
    // },
  };
};

export const getDistributionProfit = (creatorShares) => {
  const sharing = {};
  creatorShares.forEach((share) => {
    sharing[share.id] = share.profit;
  });

  return sharing;
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

// export interface CreatorProfitForm {
//   id: string;
//   username: string;
//   profit: number;
//   isLocked: boolean;
// }
