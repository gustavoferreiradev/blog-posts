import propTypes from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div key={id} className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};
