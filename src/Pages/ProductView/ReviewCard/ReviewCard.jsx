
export const ReviewCard = ({ name, time, text, avatar }) => {

  return (
    <div className="Review__Card">
      <img src={avatar} alt={name} className="Review__Avatar" />

      <div className="Review__Content">
        <div className="Review__Header">
          <h6>{name}</h6>
          <span>{time}</span>
        </div>

        <p className="Review__Text">{text}</p>
      </div>
    </div>
  );
};
