import PropTypes from 'prop-types';
// import css from '../Statistics/Statistics.module.css';
import {
  List,
  Section,
  Title,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: randomHexColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 12777215).toString(16)}`;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
