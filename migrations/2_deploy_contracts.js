var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Clubisti =  artifacts.require("./Clubisti.sol");
module.exports = function(deployer) {
  deployer.deploy(Clubisti);
};
