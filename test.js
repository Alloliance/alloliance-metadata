const sdk = require("./index");

async function test() {
    sdk.init("", "");
    const metadata = await sdk.createKYCMetadata("alloliance_kyc", "0xa683e8391d84307ab334d15c13d352849cf11ebde465fa4c3c9afa7a3aeafc94", true)
    console.log("Metadata: ", metadata);
    const hash = await sdk.uploadMetadataToIpfs(metadata);
    console.log(hash)
}

test()