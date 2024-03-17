import PropTypes from "prop-types";
import { FriendListStyle } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  const randomColor = () => {
    const colors = ["#f1c40f", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <FriendListStyle>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <li
          key={id}
          className="item"
          style={{ backgroundColor: randomColor() }}>
          <span className={`status ${isOnline ? "online" : "offline"}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
