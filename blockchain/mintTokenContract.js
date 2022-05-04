import '../src/abis/PandoNFT.json'

const mintTokenContract = web3 => {
    return new web3.eth.Contract(
        abi, "0xd9145CCE52D386f254917e481eB44e9943F39138"
    )
}


export default mintTokenContract

