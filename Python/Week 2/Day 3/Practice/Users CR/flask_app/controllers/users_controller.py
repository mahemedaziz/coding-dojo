from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.users import User



@app.route('/users')
def home():
    all_users = User.get_all()
    return render_template("users.html",all_users = all_users)


@app.route('/users/create')
def display_form():
    return render_template("new.html")

# ! Action Route

@app.route("/users/new", methods=["POST"])

def create_users():
    User.save(request.form)
    
    return redirect("/users")

#* veiw route update
@app.route("/users/edit/<int:id>")
def display_update_form(id):
    
    user_dict = {"id" : id}
    one_user =User.get_one_by_id(user_dict)
    print("=====>",one_user)
    return render_template("edit.html",user = one_user)

#! Action Route 
@app.route("/users/update/<int:id>",methods=["POST"])
def update_user(id):
    # updated_user = {
    #     "id" : id ,
    #     "first_name" : request.form["first_name"],
    #     "last_name" : request.form["last_name"],
    #     "email" : request.form["email"],
    # }
    updated_user = {
        **request.form,"id" : id
    }
    User.update(updated_user)
    return redirect("/users")

#* veiw route DELETE
@app.route("/users/<int:id>")
def display_one_user(id):
    
    user_dict = {"id" : id}
    one_user =User.get_one_by_id(user_dict)
    return render_template("oneUser.html",user = one_user)

@app.route('/users/delete/<int:user_id>')
def delete(user_id):
    User.delete(user_id)
    return redirect('/users')