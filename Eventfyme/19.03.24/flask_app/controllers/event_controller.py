from flask_app import app
from flask import render_template, request, redirect, session , flash
from werkzeug.utils import secure_filename
import os
from flask_app.models.events import Event
from flask_app.models.users import User
from flask_app.models.event_company import EventCompany
from flask_app.models.locations import Location


UPLOAD_FOLDER = './flask_app/static/img/imageFolder'
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'gif', 'bmp' , 'tiff' }

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


# *View Route (display the create event form)
@app.route("/events/new")
def display_create_form():
    # Guard Route (très important pour la sécurité)
    if "user_id" not in session:
        return redirect("/")
    
    current_user = User.get_by_id({"id": session["user_id"]})
    
    # Vérifier si l'utilisateur a le rôle d'entreprise ou d'administrateur
    if current_user.role not in ["company", "admin"]:
        flash("You are not authorized to create events.")
        return redirect("/")
    all_loc=Location.get_all()
    return render_template("event_form.html", current_user=current_user , all_loc=all_loc)

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# !Action Route (Create new event)
@app.route("/events/process", methods=["POST"])
def process_new_event():
    if "user_id" not in session:
        return redirect("/")
    
    # Vérifier si l'utilisateur a le rôle d'entreprise ou d'administrateur
    current_user = User.get_by_id({"id": session["user_id"]})
    if current_user.role not in ["company", "admin"]:
        flash("You are not authorized to create events.")
        return redirect("/")
    
    file = request.files['file']
    # if user does not select file, browser also
    # submit an empty part without filename
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    if not Event.validate_event(request.form):
        return redirect("/events/new")
    if file.filename=='':
        data = {
        **request.form,
        "user_id": session["user_id"],
        "image": "autzfetdyfzd.jpg"
        }
        Event.save(data)
        return redirect("/events/companies")
    data = {
        **request.form,
        "user_id": session["user_id"],
        "image": filename
    }
    Event.save(data)
    
    return redirect("/events/companies")

@app.route("/payment/<int:id>")
def payment(id):
    event=Event.get_by_id({"id":id})
    return render_template ("payment.html",event=event)



# *View Route (display all events for the current user's company)
@app.route("/events/companies")
def display_events_for_each_company():
    if "user_id" not in session:
        return redirect("/")

    current_user = User.get_by_id({"id": session["user_id"]})
    
    # Vérifier si l'utilisateur a le rôle d'administrateur
    if current_user.role != "company":
        flash("You are not authorized to view events for each company.")
        return redirect("/")

    # Récupérer l'ID de l'utilisateur actuel
    user_id = session["user_id"]

    # Récupérer toutes les entreprises associées à l'utilisateur actuel
    all_companies = EventCompany.get_user_events(user_id)

    # Créer un dictionnaire pour stocker les événements de chaque entreprise
    
    company_events = Event.get_by_user_id({"id": session["user_id"]})
    

    return render_template("events_by_company.html", company_events=company_events, current_user=current_user,all_companies=all_companies)



# *View Route (display all events from all companies)
@app.route("/events", methods=["POST"])
def display_all_events_route():
    if "user_id" not in session:
        return redirect("/")

    current_user = User.get_by_id({"id": session["user_id"]})
    
    # Vérifier si l'utilisateur a le rôle d'entreprise ou d'administrateur
    if current_user.role not in ["company", "admin"]:
        flash("You are not authorized to view events.")
        return redirect("/")

    # Récupérer tous les événements
    all_events = Event.get_all_events()

    return render_template("all_events.html", all_events=all_events, current_user=current_user)



# *View Route (Show one event)
@app.route("/events/<int:id>")
def show_one_event(id):
    if "user_id" not in session:
        return redirect("/")
    
    event_id = {"id": id}
    one_event = Event.get_one_with_user(event_id)
    
    current_user = User.get_by_id({"id": session["user_id"]})
    
    return render_template("one_event.html", event=one_event, current_user=current_user)

# *View Route (Show the Edit Form)
@app.route("/events/edit/<int:id>")
def display_edit_form(id):
    if "user_id" not in session:
        return redirect("/")
    
    event_dict = {"id": id}
    selected_event = Event.get_one_with_user(event_dict)
    
    return render_template("update_event.html", event=selected_event)

# !Action Route (Process the updated event)
@app.route("/events/edit/<int:id>", methods=["POST"])
def process_updated_event(id):
    if "user_id" not in session:
        return redirect("/")
    
    if not Event.validate_event(request.form):
        return redirect(f"/events/edit/{id}")
    
    data = {
        **request.form,
        "user_id": session["user_id"],
        "id": id
    }
    
    Event.update(data)
    
    return redirect("/events/companies")

# !Action Route (Process Delete event)
@app.route("/events/delete/<int:id>")
def delete_one_event(id):
    if "user_id" not in session:
        return redirect("/")
    
    event_dict = {"id": id}
    Event.delete(event_dict)
    
    return redirect("/events/companies")
# ------------------




@app.route('/events', methods=['GET'])
def display_events():

    
    # events = Event.get_all() 
    all_location=Location.get_all()
    return render_template('location.html',all_location=all_location)

    return render_template('events.html', events = events)