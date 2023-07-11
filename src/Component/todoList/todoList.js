import { useReducer } from "react";

const TodoList = () => {
  const initState = {
    job: "",
    jobs: [],
  };

  const SET_JOB = "set_job";
  const ADD_JOB = "add_job";
  const DELETE_JOB = "delete_job";

  const reducer = (state, action) => {};
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const handleSetJob = (payload) => {
    console.log(payload);
    return {
      type: SET_JOB,
      payload,
    };
  };

  const handleSubmit = (payload) => {
    return {};
  };

  const handleDeleteJob = (payload) => {};

  return (
    <div className="main-reducer">
      <input
        value={job}
        onChange={(e) => dispatch(handleSetJob(e.target.value))}
      />
      <button className="submit" onClick={() => handleSubmit()}>
        Add
      </button>

      {jobs.map((job, index) => {
        return (
          <>
            <li className="job" key={index}>
              {job}
            </li>
            <button
              type="button"
              className="delete-job"
              onClick={() => handleDeleteJob(index)}
            >
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
