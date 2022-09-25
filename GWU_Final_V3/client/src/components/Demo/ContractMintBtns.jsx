import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractMintBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const getMinter = async () => {
    const minter = await contract.methods.getMinter().call({ from: accounts[0] });
    setValue(minter);
  };

  const setMinter = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a number");
      return;
    }
    const newMinter = parseFloat(inputValue);
    await contract.methods.setMinter(newMinter).send({ from: accounts[0] });
  };

  return (
    <div className="btns">

      <button onClick={getMinter}>
        getMinter()
      </button>

      <div onClick={setMinter} className="input-btn">
        setMinter(<input
          type="String"
          placeholder="address"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractMintBtns;
