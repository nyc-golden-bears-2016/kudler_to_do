class DeleteButton extends React.Component{

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
      console.log(response)
      this.props.onAddTask(response);
      textArea.value = '';
    })
  }


  render() {
    return (

        <form id="task-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="_method" value="DELETE"/>
          <input type = "submit" value="Delete Task"/>
        </form>
    );
  }


}
