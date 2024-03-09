from flask_app import app
from flask import render_template , request , redirect , session
from flask_app.models.recipes import Recipe
from flask_app.models.users import User

# # * View Route (display the create recipe form)

@app.route("/recipes/new")
def display_create_form():
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    return render_template("recipe_form.html")


# #! Action Route (Create new recipe)


@app.route("/recipes/process",methods=["POST"])
def process_new_recipe():
    
    
    
    print("=============>",request.form)
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    # # ! check if a recipe is valid
    if not Recipe.validate_recipe(request.form):
        return redirect("/recipes/new")
    
    # # ! grab the user_id from session
    data = {**request.form,
            "under": 1 if request.form.get("under") == "yes" else 0,
            "user_id":session["user_id"]}
    
    # # ! save the recipe to BD
    Recipe.save(data)
    
    return redirect("/recipes")


# # * View Route (display all Recipes)


@app.route("/recipes")
def display_all_recipes():
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    # grab the user id from session and put in a dictionary
    
    data = {"id": session["user_id"]}
    
    # grab the user by id from DB
    
    current_user = User.get_by_id(data)
    
    all_recipes_users = Recipe.get_all_with_users()
    
    return render_template("recipes.html",all_recipes = all_recipes_users,current_user=current_user)

    
# * View Route (Show one Recipe)


@app.route("/recipes/<int:id>")
def show_one_recipe(id):
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    recipe_id = {"id":id} 
    
    # avant de faire la methode join et pour afficher les livres
    one_recipe = Recipe.get_one_with_user(recipe_id)
    
    # grab the user id from session and put in a dictionary
    
    data = {"id": session["user_id"]}
    
    # grab the user by id from DB
    
    current_user = User.get_by_id(data)
    
    return render_template("one_recipe.html",recipe=one_recipe,current_user=current_user)
    
    
    
    # * View Route (Show The Edit Form)
    
    
@app.route("/recipes/edit/<int:id>")
def display_edit_form(id):
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    recipe_dict = {"id" : id}
    selected_recipe = Recipe.get_by_id(recipe_dict)
    # print(selected_recipe)
    return render_template("update_recipe.html",recipe = selected_recipe)    




# ! Action Route (Process the updated recipe)


@app.route("/recipes/edit/<int:id>",methods=["POST"])
def process_updated_recipe(id):
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    # ! check if a recipe is valid
    
    if not Recipe.validate_recipe(request.form):
        return redirect(f"/recipes/edit/{id}")
    
    # ! grab the user_id from session
    
    data = {**request.form,"user_id":session["user_id"], "id":id}
    
    # ! save the recipe to BD
    
    Recipe.update(data)
    
    return redirect("/recipes")
    
    
# ! Action Route (Process Delete recipe)
@app.route("/recipes/delete/<int:id>",methods=["POST"])
def delete_one_recipe(id):
    
    # Gard Route (tres important pour la securité)
    if "user_id" not in session:
        return redirect("/")
    
    recipe_dict = {"id" : id}
    Recipe.delete(recipe_dict)
    
    return redirect("/recipes")