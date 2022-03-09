async function main() {
  const [owner, somebodyElse] = await hre.ethers.getSigners();

  // deploy the contract
  const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  // create a new keyboard and log the list of keyboards
  const keyboardTxn1 = await keyboardsContract.create(0, true, "sepia");
  await keyboardTxn1.wait();

  const tipTxn = await keyboardsContract.connect(somebodyElse).tip(0, {value: hre.ethers.utils.parseEther("1")})
  const tipTxnReceipt = await tipTxn.wait();
  console.log(tipTxnReceipt.events);

  // await keyboardTxn1.wait();
  // const balanceBefore = await keyboardsContract.provider.getBalance(somebodyElse.address);
  // console.log('somebodyElse has balance before:', hre.ethers.utils.formatEther(balanceBefore));

  // // tip somebodyElse
  // const tipTxn = await keyboardsContract.tip(1, { value: hre.ethers.utils.parseEther("1000") });
  // await tipTxn.wait();

  // const balanceAfter = await keyboardsContract.provider.getBalance(somebodyElse.address);
  // console.log('somebodyElse has balance after:', hre.ethers.utils.formatEther(balanceAfter));
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });