class Api::V1::TaskListsController < ApplicationController
  respond_to :json

  def index
    respond_with TaskList.all
  end

  def create
    params["task_list"]["user_id"] = current_user.id
    respond_with :api, :v1, TaskList.create(task_list_params)
  end

  def update
    list = TaskList.find(params[:id])
    if current_user.id == list.user_id
      respond_with :api, :v1, TaskList.update(params[:id], task_list_params)
    end
  end

  def destroy
    list = TaskList.find(params[:id])
    if current_user.id == list.user_id
      respond_with :api, :v1, TaskList.destroy(params[:id])
    end
  end

  private

  def task_list_params
    params.require(:task_list).permit(:title, :description, :user_id)
  end

end
