class TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    task = Task.new(task_params)
    task.save
    render json: task.to_json
  end

  def update
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: task.to_json
  end


  private

  def task_params
    params.require(:task).permit(:name)
  end

end
