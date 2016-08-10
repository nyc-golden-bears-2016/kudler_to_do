class App extends React.Component{

  constructor(){
    super();
    this.state ={
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }


  componentDidMount(){
    $.ajax({
      url: '/tasks.json',
    })//end of ajax
    .done((response) => {
      this.setState({
        tasks: response
      })

    });
  }

  addTask(task){
    const tasks = this.state.tasks;
    this.setState({tasks: [...tasks, task]});
   }

   removeTask(task){
    const tasks = this.state.tasks;
    this.setState({tasks: [...tasks, task]});
   }

    render(){
      return(
        <div>
            <ul>
              {this.state.tasks.map((task,i)=>{
                return <Task key={task.id} data={task}/>
              })}
            </ul>
            <div>
              <TaskBox onAddTask={this.addTask}/>
            </div>
        </div>



     )//end of return
  }//end of render



}


