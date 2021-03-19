import { useContext, useEffect } from "react";
import Blocks from "../Components/Block";
import Props from "../Components/Properties";
import { AppContext } from "../Context/appContext";
import { useParams } from "react-router-dom";
import Loader from "react-loaders";

export default function Block() {
  const {
    convertedDate,
    loading,
    searchResults,
    searchBlock,
    fixDate,
  } = useContext(AppContext);
  const { blocknum } = useParams();

  useEffect(() => {
    searchBlock(parseInt(blocknum));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transactions = searchResults && searchResults.transactions;
  const time = fixDate(searchResults && searchResults.block.timestamp);

  const Data = () => {
    return !transactions
      ? null
      : transactions.map((t) => (
          <Blocks
            from={t.from_account}
            to={t.to_account}
            type={t.type}
            amount={t.amount}
            currency={"HAT"}
            time={time}
            key={t.transaction_id}
          />
        ));
  };
  return (
    <div className="p-5">
      <div className="grid md:grid-flow-row gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="font-bold text-lg mb-2">Block number: {blocknum}</h1>
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
