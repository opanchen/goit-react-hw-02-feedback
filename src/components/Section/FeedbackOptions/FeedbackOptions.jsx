import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul className={css['option-list']}>
        {options.map((option) => {
            return (
                <li key={option}>
                <button 
                className={css['option-list__btn']} type="button" 
                onClick={() => onLeaveFeedback(option)} >{option}</button>
                </li>
            )
        })}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
}