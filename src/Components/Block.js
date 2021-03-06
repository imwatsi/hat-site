import Transfer from "./TransactionTypes/Transfer";
import Airdrop from "./TransactionTypes/Airdrop";
import Genesis from "./TransactionTypes/Genesis";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');

export default function Blocks(props) {
  const { from, to, type, amount, currency, time, token, owner } = props;
  function renderType() {
    switch (type) {
      case "transfer":
        return (
          <Transfer
            from={from}
            to={to}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      case "airdrop":
        return (
          <Airdrop
            from={from}
            to={to}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      case "genesis":
        return (
          <Genesis
            from={from}
            to={to}
            type={type}
            token={token}
            amount={amount}
            owner={owner}
            currency={currency}
          />
        );
      default:
        return "No type";
    }
  }
  return (
    <div className="bg-white rounded-md shadow-md m-3">
      <div className="p-4">
        {renderType()}
        <p className="text-sm font-light">
          <TimeAgo datetime={time} live={false} opts={{ minInterval: 120 }} />
        </p>
      </div>
    </div>
  );
}
