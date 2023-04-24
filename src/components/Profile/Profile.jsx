import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Avatar>
      <Description>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{followers}</SpanQuantity>
        </StatsItem>
        <StatsItem>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{views}</SpanQuantity>
        </StatsItem>
        <StatsItem>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{likes}</SpanQuantity>
        </StatsItem>
      </Stats>
    </Avatar>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
