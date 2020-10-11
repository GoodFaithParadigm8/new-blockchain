const Shipping = artifacts.require("ShippingStatus");
module.exports = function (deployer) {
  deployer.deploy(Shipping);
};