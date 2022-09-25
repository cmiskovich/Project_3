import { EthProvider } from "./contexts/EthContext";
import React, { Component } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";


class App extends Component {
  
  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  
  async loadWeb3() {
    // first, detect ethereum provider (like metamask)
    const provider = await detectEthereumProvider();

    // second, check for modern browser
    // if provider is detected,
    // log to console successful detection
    // Access the window to set Web3 == provider

    if(provider) {
        console.log('ethereum wallet is connected!')
        window.web3 = new Web3(provider)
    } else {
        // if no ethereum provider detected
        // log to console failed detection
        console.log('no ethereum wallet detected')
    }
  } 

  async loadBlockchainData() {
    const accounts = await window.web3.eth.getAccounts()
    console.log(accounts)
  }

  constructor(props) {
    super(props);
    this.state = {
      account: ''
    }
  }
  
  render() {
    return (
      <EthProvider>
        <div id="App" >
          <div className="container">
            <Intro />
            <hr />
            <Setup />
            <hr />
            <Demo />
            <hr />
            <Footer />
          </div>
        </div>
      </EthProvider>
    );
  }
}

export default App;
