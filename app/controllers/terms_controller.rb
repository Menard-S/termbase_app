class TermsController < ApplicationController
  before_action :set_term, only: [:show, :edit, :update, :destroy]

  def new
    @term = Term.new
  end

  def create
    @term = Term.new(term_params)
    if @term.save
      redirect_to terms_path, notice: 'Term was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    
  end

  def update
    if @term.update(term_params)
      redirect_to terms_path, notice: 'Term was successfully edited.'
    else
        render :edit, status: :unprocessable_entity
    end
  end

  def index
    @terms = Term.order(:source_term)
  end

  def show
    
  end

  def destroy
    @term.destroy
    redirect_to terms_path, notice: 'Term was successfully deleted.'
  end

  private

  def term_params
    params.require(:term).permit(:source_term, :target_term, :definition, :term_type, :geographical_usage)
  end

  def set_term
    @term = Term.find(params[:id])
  end
end

