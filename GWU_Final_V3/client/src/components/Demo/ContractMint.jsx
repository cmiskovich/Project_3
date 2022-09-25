import { useRef, useEffect } from "react";

function ContractMint ({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`contract DCWeedToken {
  uint256 tokenId = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;

  function mint(
    address _owner, 
    uint256 tokenPrice, 
    string memory name, 
    string memory artist, 
    string memory _tokenURI
  ) public view returns (uint256) {
    
    uint256 tokenId = totalSupply();
    _mint(_owner, tokenId);
    _setTokenURI(tokenId, _tokenURI);
    artCollection[tokenId] = ArtToken(name, artist, tokenPrice);

    return tokenId;
  }
}`}
    </code>
  );
}

export default ContractMint;