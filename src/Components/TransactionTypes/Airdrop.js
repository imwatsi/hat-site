export default function Airdrop(props) {
  const { to, amount, currency } = props;
  return (
    <div>
      <div>
        <p className="text-lg space-x-1.5">
          <span className="user">{to}</span>
          <span>has received an airdrop of</span>
          <span className="text-black">
            {amount} {currency}
          </span>
        </p>
      </div>
    </div>
  );
}
