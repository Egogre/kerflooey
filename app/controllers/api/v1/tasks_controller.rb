class Api::V1::TasksController < ApplicationController
  respond_to :json

  def index
    respond_with Task.all
  end

  def create
    params["task"]["user_id"] = current_user.id
    respond_with :api, :v1, Task.create(task_params)
  end

  def update
    task = Task.find(params[:id])
    if current_user.id == task.user_id
      respond_with :api, :v1, Task.update(params[:id], task_params)
    end
  end

  def destroy
    task = Task.find(params[:id])
    if current_user.id == list.user_id
      respond_with :api, :v1, Task.destroy(params[:id])
    end
  end

  private

  def task_params
    params.require(:task).permit(:title,
                                 :notes,
                                 :start,
                                 :due,
                                 :task_list_id,
                                 :user_id)
  end

end
