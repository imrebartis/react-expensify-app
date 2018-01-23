import React from 'react';
import { connect } from 'react-redux'; // connecting the component to the store
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, id, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
        dispatch(removeExpense({ id }));
      }}>Remove</button>
  </div>
);

// filters will have access to props.text
const mapStateToProps = (state) => {
    return {
      filters: state.expenses
    };
  };
  
export default connect()(ExpenseListItem);

