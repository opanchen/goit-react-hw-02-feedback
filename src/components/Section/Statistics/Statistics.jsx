import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

return (
<ul className={css['stat-list']}>
    <li><p><span className={css['stat-name']}>Good:</span> {good}</p></li>
    <li><p><span className={css['stat-name']}>Neutral:</span> {neutral}</p></li>
    <li><p><span className={css['stat-name']}>Bad:</span> {bad}</p></li>
    <li><p><span className={css['stat-name']}>Total:</span> {total}</p></li>
    <li><p><span className={css['stat-name']}>Positive feedback:</span> {positivePercentage}</p></li>
</ul> )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}