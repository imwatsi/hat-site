export default function Properties(props) {
  const { blockNum, blockHash, timestamp } = props;
  return (
    <div className="mt-4 p-4">
      <ul>
        <li className="mb-10">
          <h1 className="text-black text-2xl mb-1">Head block:</h1>
          <span className="prop text-yellow-600 text-xl">{blockNum}</span>
        </li>
        <li className="mb-10">
          <h1 className="text-black text-2xl mb-1">Timestamp:</h1>
          <span className="prop text-yellow-600 text-xl">{timestamp}</span>
        </li>
        <li className="mb-10">
          <h1 className="text-black text-2xl mb-1">Hash:</h1>
          <span
            className="prop text-yellow-600 text-xl"
            style={{ width: "20px" }}
          >
            {blockHash}
          </span>
        </li>
      </ul>
    </div>
  );
}
