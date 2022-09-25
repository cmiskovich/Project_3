function Setup() {

  return (
    <>
      <h2>What do you need to make our app work?</h2>

      <details>
        <summary>Install the MetaMask Browser Extension</summary>
          <button>
            <a style={{color:"black"}} href="https://metamask.io/download/">
              Download Metamask
            </a>
          </button>
      </details>

      <details>
        <summary>Connect MetaMask to the Webpage</summary>
        <button>Click Here to Connect</button>
      </details>

      <details>
        <summary>Fund your wallet with some ETH</summary>
          <button>
            <a style={{color:"black"}} href='https://global.transak.com/'>
              Buy ETH
            </a>
          </button>
      </details>
    </>
  );
}

export default Setup;
