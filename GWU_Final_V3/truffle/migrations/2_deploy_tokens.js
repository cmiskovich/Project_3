const DcWeedToken = artifacts.require("DCWeedToken");

module.exports = function (deployer) {
  deployer.deploy(DcWeedToken);
};
