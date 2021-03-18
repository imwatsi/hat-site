import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {
  /* State and data returned from API requests */
  const [globalProps, setGlobalProps] = useState();
  const [blocks, setBlocks] = useState();
  const [loading, setLoading] = useState(true);
  const [accountHistory, setHistory] = useState();
  const [accountProps, setProps] = useState();
  const [accountName, setName] = useState();
  const [searchResults, setResults] = useState();

  const url = "https://hat-testnet.imwatsi.com/";

  /* Global requests */
  const getInfo = async () => {
    const res = await axios({
      method: "post",
      url: url,
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "chain_api.get_info",
        params: {},
        id: 1,
      }),
    });
    setGlobalProps(res.data.result);
    setLoading(false);
    return res;
  };

  const getBlock = async () => {
    const res = await axios({
      method: "post",
      url: url,
      params: { block_num: blockNum },
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "chain_api.get_block",
        params: { block_num: blockNum },
        id: 1,
      }),
    });
    setBlocks(res.data.result);
    setLoading(false);
    return res;
  };

  /* Search requests requests */
  const searchBlock = async (e) => {
    const res = await axios({
      method: "post",
      url: url,
      params: { block_num: e },
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "chain_api.get_block",
        params: { block_num: e },
        id: 1,
      }),
    });
    setResults(res.data.result);
    setLoading(false);
    return res;
  };

  const searchAccount = async (e) => {
    const res = await axios({
      method: "post",
      url: url,
      params: { account: e },
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "accounts_api.get_account",
        params: { account: e },
        id: 1,
      }),
    });
    setResults(res.data.result);
    setLoading(false);
    return res;
  };

  /* Account page requests */
  const getAccountHistory = async (e) => {
    const res = await axios({
      method: "post",
      url: url,
      params: { account: e },
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "accounts_api.get_account_history",
        params: { account: e },
        id: 1,
      }),
    });
    setHistory(res.data.result);
    setLoading(false);
    return res;
  };

  const getAccountProps = async (e) => {
    const res = await axios({
      method: "post",
      url: url,
      params: { account: e },
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "accounts_api.get_account",
        params: { account: e },
        id: 1,
      }),
    });
    setProps(res.data.result);
    setLoading(false);
    return res;
  };

  /* Convert date from UTC to whatever zone the user has on their system */
  const fixDate = (date) => {
    let dateLocal = new Date(date);
    let newDate = new Date(
      dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  };

  /* Global variables that are used all over the site */
  let timestamp = blocks && blocks.block.timestamp;
  let convertedDate = fixDate(timestamp && timestamp);
  const blockNum = globalProps && globalProps.head_block_num;

  /* Showing the loading bar and show an error message if it doesn't get any results in 5 seconds */
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  return (
    <AppContext.Provider
      value={{
        blocks,
        getInfo: getInfo,
        getBlock: getBlock,
        globalProps,
        blockNum,
        fixDate: fixDate,
        setLoading: setLoading,
        convertedDate,
        timestamp,
        loading,
        getAccountHistory: getAccountHistory,
        accountHistory,
        accountName,
        setName: setName,
        searchBlock: searchBlock,
        searchAccount: searchAccount,
        getAccountProps: getAccountProps,
        accountProps,
        searchResults,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
