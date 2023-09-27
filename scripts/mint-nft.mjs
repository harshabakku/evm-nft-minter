const CONTRACT_ADDRESS = "0xeAd6BfFFcd543C1B251Cc446Ae3e58C1f4061E9F"
const META_DATA_URL = "ipfs://bafyreib5hoxfxr5wjcp6oy3utcj7rzcqy2l4gzel5xttzutxalk553gw7y/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
