const { ethers } = require('ethers');

let pk;
let apiKey;

module.exports = {
    init: function(privKey, lighthouseApiKey) {
        pk = privKey;
        apiKey = lighthouseApiKey;
    },

    createKYCMetadata: async function(issuerId, targetProfileId, kycOk) {
        const metadataBody = {
            target_profile_id: targetProfileId,
            kyc_ok: kycOk
        };
        
        const signature = await this.signMetadataBody(JSON.stringify(metadataBody));
        const metadata = {
            [issuerId]: {
                body: metadataBody
            },
            signature: signature,
        };

        const metadataJson = JSON.stringify(metadata);
        return metadataJson;
    },

    signMetadataBody: async function(metadataBody) {
        const wallet = new ethers.Wallet(pk);
        const signature = await wallet.signMessage(metadataBody);
        return signature;
    },

    uploadMetadataToIpfs: async function(metadata) {
        const response = await lighthouse.uploadText(metadata, apiKey);
        console.log(response);
        return response.data.Hash;
    }
};