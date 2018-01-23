import React from 'react';
import { connect } from 'react-redux'; // connecting the component to the store
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }} />
  </div>
);

// filters will have access to props.text
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
