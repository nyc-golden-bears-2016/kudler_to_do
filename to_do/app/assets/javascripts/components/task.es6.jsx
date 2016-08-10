class Task extends React.Component{

  render(){
    return (
      <div>
        <li className="task">
            <span className="task-name">{this.props.data.name}</span>
              <span className="delete-button"><DeleteButton/></span>
        </li>
      </div>


    )//end of return
  }//end of render





}
