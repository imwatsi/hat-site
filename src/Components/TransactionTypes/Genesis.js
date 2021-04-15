import UserButton from "../UserButton";

export default function Genesis(props) {
  const { token, owner } = props;
  return (
    <div>
      <div>
        <p className="text-lg space-x-1.5">
          <UserButton className="user">{owner}</UserButton>
          <span>has created a new token</span>
          {token === "AA0000000000" ? (
            <span className="text-black">HAT</span>
          ) : (
            <span className="text-black">{token}</span>
          )}
        </p>
      </div>
    </div>
  );
}
