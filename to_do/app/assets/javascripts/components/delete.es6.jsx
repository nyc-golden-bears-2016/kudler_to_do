class DeleteButton extends React.Component{

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    var id = this.props.id
    $.ajax({
      url: `/tasks/${id}`,
      method: 'DELETE'
    })
    .done((response) => {
      this.props.onRemoveTask(response);
    })
  }


  render() {
    return (

        <form id="delete-form" onSubmit={this.handleDelete}>
          <input type = "submit" value="Delete Task"/>
        </form>
    );
  }


}

