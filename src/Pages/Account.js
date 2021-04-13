import { useContext, useEffect } from "react";
import Blocks from "../Components/Block";
import { AppContext } from "../Context/appContext";
import { useParams } from "react-router-dom";
import Loader from "react-loaders";

export default function Account() {
  const {
    getAccountHistory,
    loading,
    accountHistory,
    getAccountProps,
    accountProps,
    fixDate,
  } = useContext(AppContext);
  const { account } = useParams();

  const transactions = accountHistory && accountHistory.transactions;
  const auths = accountProps && accountProps.properties.authorities;
  const tokens = accountProps && accountProps.token_balances;

  useEffect(() => {
    getAccountHistory(account);
    getAccountProps(account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const Data = () => {
    return !transactions
      ? null
      : transactions.map((t) => (
          <Blocks
            from={t.from_account}
            to={t.to_account}
            type={t.type}
            token={t.token}
            owner={t.owner}
            amount={t.amount}
            currency={"HAT"}
            time={fixDate(t.timestamp)}
            key={t.transaction_id}
          />
        ));
  };

  const Auths = () => {
    return (
      <div>
        <h1 className="text-black font-light rounded-t-md p-3 text-lg mb-1 bg-gray-200">
          Authorities
        </h1>
        <ul className="bg-white rounded-md shadow-md p-5">
          <li className="mb-3">
            <h1 className="font-md text-md mb-1">Owner:</h1>
            <span className="prop text-yellow-600 text-sm">
              {auths && auths.owner}
            </span>
          </li>
          <li className="mb-3">
            <h1 className="font-md text-md mb-1">Active:</h1>
            <span className="prop text-yellow-600 text-sm">
              {auths && auths.active}
            </span>
          </li>
          <li className="mb-3">
            <h1 className="font-md text-md mb-1">Posting:</h1>
            <span className="prop text-yellow-600 text-sm">
              {auths && auths.posting}
            </span>
          </li>
          <li className="mb-3">
            <h1 className="font-md text-md mb-1">Memo:</h1>
            <span className="prop text-yellow-600 text-sm">
              {auths && auths.memo}
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const Toks = () => {
    return (
      <div className="bg-white rounded-md shadow-md w-full mt-5">
        <h1 className="text-black font-light rounded-t-md p-3 text-lg mb-1 bg-gray-200">
          Tokens
        </h1>
        {tokens &&
          tokens.map((t) => (
            <div className="mb-3 p-3" key={t.token}>
              <h1 className="font-md text-md">{t.token} HAT</h1>
              <div className="flex justify-between p-1">
                <span className="font-light text-sm">Liquid</span>
                <span className="font-light text-sm prop text-yellow-600">
                  {t.liquid}
                </span>
              </div>
              <div className="flex justify-between p-1">
                <span className="font-light text-sm">Staked</span>
                <span className="font-light text-sm prop text-yellow-600">
                  {t.staked}
                </span>
              </div>
              <div className="flex justify-between p-1">
                <span className="font-light text-sm">Savings</span>
                <span className="font-light text-sm prop text-yellow-600">
                  {t.savings}
                </span>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="md:p-5">
      <div className="grid md:grid-flow-row gap-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-1">
          <h1
            className="font-light text-3xl m-2 text-blue-900"
            style={{ wordBreak: "break-all" }}
          >
            @{account}
          </h1>
          {loading ? (
            <Loader type="ball-scale-ripple-multiple" />
          ) : auths && tokens ? (
            <div className="p-4">
              <Auths />
              <Toks />
            </div>
          ) : (
            <h1 className="p-5">No data available.</h1>
          )}
        </div>
        <div className="md:col-span-3 sm:col-span-1">
          {loading ? (
            <Loader type="ball-scale-ripple-multiple" />
          ) : transactions && transactions.length > 0 ? (
            <Data />
          ) : (
            <h1 className="p-5">This user has no transactions history.</h1>
          )}
        </div>
      </div>
    </div>
  );
}
