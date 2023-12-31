import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/store';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterChangeHandler = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterChangeHandler}
          className={css.input}
          placeholder="Filter by name.."
        />
        <button type="button" onClick={() => dispatch(changeFilter(''))}>
          x
        </button>
      </div>
    </div>
  );
}
