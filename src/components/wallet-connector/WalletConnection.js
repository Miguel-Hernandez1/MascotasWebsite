import { useEffect, useState } from "react";
import contract from "../../NFTcontract/contractABI.json";
import { ethers } from "ethers";

const contractAddress = "0x24d9BC40f5909d686202a1d8CcE7295aE6D0132d";
const abi = contract.abi;

function Apps() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.mint(currentAccount, 1);

        console.log("Mining... please wait");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className="cta-button mint-nft-button">
        Mint NFT
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className="main-app">
      <div>{currentAccount ? mintNftButton() : connectWalletButton()}</div>
    </div>
  );
}

export default Apps;