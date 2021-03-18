import UserButton from "../UserButton";

export default function Transfer(props) {
  const { from, to, amount, currency } = props;
  return (
    <div>
      <div>
        <p className="text-lg space-x-1.5">
          <UserButton className="user">{from}</UserButton>
          <span>has transferred</span>
          <span className="text-black">
            {amount} {currency}
          </span>
          <span>to</span>
          <UserButton className="user">{to}</UserButton>
        </p>
      </div>
    </div>
  );
}
