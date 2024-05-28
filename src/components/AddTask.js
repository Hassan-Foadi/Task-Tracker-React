const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <lable>Task</lable>
        <input type="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <lable>Day and Time</lable>
        <input type="text" placeholder="Add Day and Time" />
      </div>
      <div className="form-control">
        <lable>Set Reminder</lable>
        <input type="checkbox" />
      </div>

      <input type="submit" value="Save Task"></input>
    </form>
  );
};

export default AddTask;
