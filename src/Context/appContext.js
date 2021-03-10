import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [blockNum, setBlockNum] = useState();
  const [blocks, setBlocks] = useState();

  const url = "https://hat-testnet.imwatsi.com/";
  const infoBody = {
    jsonrpc: "2.0",
    method: "chain_api.get_info",
    params: {},
    id: 1,
  };
  const blockBody = {
    jsonrpc: "2.0",
    method: "chain_api.get_block",
    params: { block_num: blockNum },
    id: 1,
  };

  const getInfo = async () => {
    const res = await axios({
      method: "post",
      url: url,
      data: JSON.stringify(infoBody),
    });
    setBlockNum(res.data.result.head_block_num);
    return res;
  };

  const getBlock = async () => {
    const res = await axios({
      method: "post",
      url: url,
      params: JSON.stringify({ block_num: blockNum }),
      data: JSON.stringify(blockBody),
    });
    setBlocks(res.data.result);
    return res;
  };

  useEffect(() => {
    getInfo();
    if (blockNum) {
      getBlock();
    }
  }, [blockNum]);

  return (
    <AppContext.Provider
      value={{
        blocks: blocks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
