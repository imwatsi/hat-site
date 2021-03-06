import { useContext, useEffect } from "react";
import { AppContext } from "../Context/appContext";
import Block from "../Components/Block";
import Props from "../Components/Properties";

import Loader from "react-loaders";

export default function Home() {
  const { blocks, blockNum, getBlock, convertedDate, loading } = useContext(
    AppContext
  );

  useEffect(() => {
    getBlock(blockNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNum]);

  const transactions = blocks && blocks.transactions;

  const Data = () => {
    return !transactions
      ? null
      : transactions &&
          transactions.map((t) => (
            <Block
              from={t.from_account}
              to={t.to_account}
              type={t.type}
              amount={t.amount}
              currency={"HAT"}
              time={convertedDate}
              key={t.transaction_id}
            />
          ));
  };

  return (
    <div className="p-5">
      <div className="grid md:grid-flow-row gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="font-bold text-lg mb-2">Recent transactions:</h1>
          {loading ? (
            <Loader type="ball-scale-ripple-multiple" />
          ) : transactions && transactions.length > 0 ? (
            <Data />
          ) : (
            <h1>No data available.</h1>
          )}
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-lg mb-2">Properties:</h1>
          <Props />
        </div>
      </div>
    </div>
  );
}
