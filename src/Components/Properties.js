import { useContext, useEffect } from "react";
import { AppContext } from "../Context/appContext";
import Loader from "react-loaders";

export default function Properties(props) {
  const {
    blocks,
    blockNum,
    globalProps,
    getInfo,
    timestamp,
    getBlock,
    loading,
  } = useContext(AppContext);
  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!timestamp) {
      getBlock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNum]);

  const blockHash = blocks && blocks.block.block_hash;

  const hat = globalProps && globalProps.hat_supply;

  const Data = () => {
    return (
      <div>
        <ul>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Head block:</h1>
            <span className="prop text-yellow-600 text-xl">{blockNum}</span>
          </li>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Timestamp:</h1>
            <span className="prop text-yellow-600 text-xl">{timestamp}</span>
          </li>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Hash:</h1>
            <span
              className="prop text-yellow-600 text-xl"
              style={{ width: "20px" }}
            >
              {blockHash}
            </span>
          </li>
        </ul>
        <ul className="mt-10">
          <h1 className="text-black text-2xl mb-3">HAT Supply:</h1>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Liquid:</h1>
            <span className="prop text-yellow-600 text-xl">{hat.liquid}</span>
          </li>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Savings:</h1>
            <span className="prop text-yellow-600 text-xl">{hat.savings}</span>
          </li>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Staked:</h1>
            <span className="prop text-yellow-600 text-xl">{hat.staked}</span>
          </li>
          <li className="mb-5">
            <h1 className="text-black text-2xl mb-1">Total:</h1>
            <span className="prop text-yellow-600 text-xl">{hat.total}</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="mt-4 p-4">
      {loading ? (
        <Loader type="ball-scale-ripple-multiple" />
      ) : blockNum && blockHash && timestamp ? (
        <Data />
      ) : (
        <h1>No data available.</h1>
      )}{" "}
    </div>
  );
}
