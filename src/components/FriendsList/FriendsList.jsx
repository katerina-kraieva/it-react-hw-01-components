import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  
  return (
    <ul className={s.friendList}>
      {friends.map(el => (
        <FriendsListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
