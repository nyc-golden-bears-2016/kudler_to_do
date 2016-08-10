class TaskBox extends React.Component{

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let textArea = this.refs.taskTextarea,
        name = textArea.value;
    $.ajax({
      url: '/tasks',
      method: 'POST',
      data: { task: { name: name } }
    })
    .done((response) => {
      this.props.onAddTask(response);
      textArea.value = '';
    })
  }


  render() {
    return (
      <section id="task-box">
        <p id="add-task-title">Add A Task</p>
        <form id="task-form" onSubmit={this.handleSubmit}>
          <textarea ref='taskTextarea'
            id="new-task"
            cols="18"
            rows="1"
            name="task"
          />
          <input
            type="submit"
            value="Add"
          />
        </form>
      </section>
    );
  }


}
