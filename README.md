# Alloliance SDK   

Usage: 
```javascript
let privKey = ETHEREUM_PRIVATE_KEY
let lighthouseApiKey = LIGHTHOUSE_API_KEY
allolianceSdk.init(privKey, lighthouseApiKey)

const metadata = await allolianceSdk.createKYCMetadata(issuerId, targetProfileId, kycOk);
await uploadMetadataToIpfs(metadata);
```
