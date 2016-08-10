class TasksController < ApplicationController

  def index
    tasks = Task.all
    respond_to do |format|
      format.html
      format.json { render json: tasks }
    end
  end

  def create
    task = Task.new(task_params)
    task.save
    render json: task.to_json
  end

  def update
  end

  def destroy
  end


  private

  def task_params
    params.require(:task).permit(:name)
  end

end
