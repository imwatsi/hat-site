import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import Block from "../Components/Blocks";
import Prop from "../Components/Properties";

import Loader from "react-loaders";

export default function Home() {
  const { blocks } = useContext(AppContext);
  const transactions = blocks && blocks.transactions;
  const blockHash = blocks && blocks.block.block_hash;
  const blockNum = blocks && blocks.block.block_num;
  let timestamp = blocks && blocks.block.timestamp;

  const fixDate = (date) => {
    let dateLocal = new Date(date);
    let newDate = new Date(
      dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  };

  let convertedDate = fixDate(timestamp);

  return (
    <div className="p-5">
      <div className="grid md:grid-flow-row gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="font-bold text-lg mb-2">Recent transactions:</h1>
          {transactions && transactions.length > 0 ? (
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
            ))
          ) : (
            <Loader type="ball-scale-ripple-multiple" />
          )}
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-lg mb-2">Properties:</h1>
          <Prop
            blockNum={blockNum}
            blockHash={blockHash}
            timestamp={timestamp}
          />
        </div>
      </div>
    </div>
  );
}
