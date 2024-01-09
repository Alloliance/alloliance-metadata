const sdk = require("./index");

async function test() {
    sdk.init("PRIVATE_KEY", "LIGHTHOUSE_API_KEY");
    const metadata = await sdk.createKYCMetadata("alloliance_kyc", "0x12356", true)
    console.log("Metadata: ", metadata);
}

test()