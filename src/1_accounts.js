
const linkAccount = () => {

const { ethers } = require("ethers");

const provider = new ethers.providers.Web3Provider(window.ethereum);

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'
 
const main = async () => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    
    const balance = await provider.getBalance()
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

}



echo "# Aloka" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add push1 https://github.com/shreyan001/Aloka.git
git push -u push1 main

export default linkAccount ;