import React from "react";
import { MdSend } from "react-icons/md";
const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlfor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
          />
        </div>
        <div className="form-group">
          <label htmlfor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        submit <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
