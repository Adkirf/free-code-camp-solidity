const { developmentChains } = require("../helper-hardhat-config.js")

const BASE_FEE = "250000000000000000" // 0.25 is this the premium in LINK?
const GAS_PRICE_LINK = 1e9

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local network detected. Deploying mocks")

        await deploy("VRFCoordinatorV2Mock",{
            from:  deployer,
            log: true,
            args: args
        })
        log("Mocks Deployed")
        log("---------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
