export default function Transfer(props) {
  const { from, to, amount, currency } = props;

  return (
    <div>
      <div>
        <p className="text-lg space-x-1.5">
          <span className="user">{from}</span>
          <span>has transferred</span>
          <span className="text-black">
            {amount} {currency}
          </span>
          <span>to</span>
          <span className="user">{to}</span>
        </p>
      </div>
    </div>
  );
}
