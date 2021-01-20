import PropTypes from 'prop-types';
import defaultImg from '../default.jpg'
import s from './FriendList.module.css';

export default function FriendListItem(props) {
  const { avatar = defaultImg, name, isOnline } = props;

  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className = {s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};