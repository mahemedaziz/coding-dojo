from flask_app import app
from flask import redirect, render_template, request, flash, session
from flask_bcrypt import Bcrypt

from flask_app.models.tickets import Ticket
from flask_app.models.users import User
from flask_app.models.events import Event
from flask_app.models.event_company import EventCompany

bcrypt = Bcrypt(app)

# View Route
@app.route("/")
def home():
    current_user = None
    if "user_id" in session:
        current_user = User.get_by_id({"id": session["user_id"]})
        if current_user:
            if current_user.role == "admin":
                return render_template("home_page.html", current_user=current_user)
            elif current_user.role == "organizer":
                return render_template("organizer_dashboard.html", current_user=current_user)
            else:
                return render_template("home_page.html", current_user=current_user)
    return render_template("home_page.html", current_user=current_user)

@app.route("/login")
def show_login():
    return render_template("login.html")



@app.route("/update_profile")
def show_update_profile():
    return render_template("update_profile.html")






@app.route("/register")
def show_register():
    return render_template("register.html")

# Register Action Route
@app.route("/register", methods=["POST"])
def process_register():
    if not User.validate_user(request.form):
        return redirect("/login")

    pw_hash = bcrypt.generate_password_hash(request.form["password"])

    data = {**request.form, "password": pw_hash}
    user_id = User.create(data)
    session["user_id"] = user_id
    return redirect("/")

# Login Action Route
@app.route("/login", methods=["POST"])
def process_login():
    if not User.validate_login_user(request.form):
        return redirect("/login")

    data = {"email": request.form["email"]}
    user_in_db = User.get_by_email(data)

    if not user_in_db:
        flash("Invalid Email/Password", "login")
        return redirect("/login")

    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("Invalid Email/Password", "login")
        return redirect("/login")

    session["user_id"] = user_in_db.id
    
    if user_in_db.role == "admin":
        return redirect("/")
    
    elif user_in_db.role == "company":
        
        return redirect("/")
    else:
        return redirect("/")



# Logout
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")



# ------------------------
@app.route('/user_profile', methods=['GET'])
def profile():
    data = {
        "id": session["user_id"]
    }
    user_data = User.get_by_id(data)

        # Récupère tous les billets de l'utilisateur connecté
    user_id = session["user_id"]

    # Récupérer tous les événements
    
    tickets = Ticket.get_tickets_by_user({"id":user_id})

    return render_template('profile.html',user=user_data, tickets = tickets )