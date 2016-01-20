class Api::V1::TaskListsController < ApplicationController
  respond_to :json

  def index
    respond_with TaskList.where(user_id: current_user.id)
  end

  def create
    params["task_list"]["user_id"] = current_user.id
    respond_with :api, :v1, TaskList.create(link_params)
  end

  def update
    respond_with :api, :v1, TaskList.update(params[:id], link_params)
  end

  def destroy
    respond_with :api, :v1, TaskList.destroy(params[:id])
  end

  private

  def link_params
    params.require(:link).permit(:title, :url, :read, :user_id)
  end

end
