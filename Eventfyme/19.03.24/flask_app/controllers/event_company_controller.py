from flask import redirect, render_template, session , request , flash
from flask_app import app
from flask_app.models.event_company import EventCompany
from flask_app.models.users import User
from flask_app.models.events import Event



@app.route("/event_companies/new")
def display_create_company_form():  
    return render_template("add_company.html")



# !Action Route (Créer une nouvelle entreprise)
@app.route("/event_companies/process", methods=["POST"])
def process_new_event_company():
    
    # Valider les données du formulaire
    if not EventCompany.validate_company(request.form):
        # Si la validation échoue, rediriger vers la page précédente
        return redirect("/event_companies/new")
    
    # Récupérer les données du formulaire
    company_data = {**request.form, "user_id": session["user_id"]}
    
    # Créer une nouvelle entreprise avec les données du formulaire
    new_company = EventCompany.create(company_data)
    user_role = session.get("role")
    if user_role == "admin" or user_role == "company":
            return redirect("/events/companies")
    else:
            # Si l'utilisateur n'est ni un admin ni une entreprise, rediriger vers la page de confirmation de création de l'entreprise
            return render_template("Company Creation Confirmation.html")



@app.route("/admin/validate_companies")
def admin_validate_companies():
    # Vérifier si l'utilisateur est un admin
    if "user_id" not in session or session["role"] != "admin":
        return redirect("/")
    
    # Récupérer la liste des entreprises d'événements en attente de validation
    pending_companies = EventCompany.get_pending_validation()

    return render_template("admin_validate_companies.html", pending_companies=pending_companies)

# *View Route (display the company dashboard)
@app.route("/events/companies")
def display_company_dashboard():
    # Vérifier si l'utilisateur est connecté
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
    events_by_company = {}

    # Pour chaque entreprise, récupérer ses événements et les stocker dans le dictionnaire
    for company in all_companies:
        company_events = Event.get_company_events_by_user_id(company.user_id)
        events_by_company[company.name] = company_events

    return render_template("events_by_company.html", events_by_company=events_by_company, current_user=current_user)


# *View Route (display the admin dashboard)
@app.route("/admin/dashboard")
def display_admin_dashboard():
    # Vérifier si l'utilisateur est connecté
    if "user_id" not in session:
        return redirect("/")

    user_id = session["user_id"]
    current_user = User.get_by_id({"id": user_id})
    
    # Vérifier si l'utilisateur a le rôle d'administrateur
    if current_user.role != "admin":
        flash("You are not authorized to view events for each company.")
        return redirect("/")

    pending_cmp = EventCompany.get_pending()
    #* ici pour ajouter accepted company (commpe pending company)
    active_cmp = EventCompany.get_active()
    #* ici pour ajouter restreint company (commpe pending company)
    retricted_cmp = EventCompany.get_retricted()
    # print("/////////////////////////////////************",retricted_cmp)
    all_users = User.get_all_users()
    restricted_users = User.get_denied()
    return render_template("admin_validate_companies.html",restricted_users=restricted_users, pending_cmp=pending_cmp, active_cmp=active_cmp,retricted_cmp=retricted_cmp , all_users=all_users)



# Action Route (Process Delete Company)
@app.route("/admin/dashboard/delete_company/<int:id>")
def delete_one_company(id):
    if "user_id" not in session:
        return redirect("/")
    
    company_dict = {"id": id}
    EventCompany.delete_company(company_dict)

    return redirect("/admin/dashboard")

@app.route("/admin/dashboard/accept_company/<int:id>")
def accept_company(id):
    if "user_id" not in session:
        return redirect("/")

    id_dict = {"id": id}
    EventCompany.accept_company(id_dict)
    company = EventCompany.get_by_id(id_dict)
    User.accept_role_company({'id':company.user_id})

    return redirect("/admin/dashboard")


@app.route("/admin/dashboard/rest_company/<int:id>")
def rest_company(id):
    if "user_id" not in session:
        return redirect("/")

    company_dict = {"id": id}
    EventCompany.restrict_company(company_dict)

    return redirect("/admin/dashboard")


#! Action Route (Deny Access to a User)
@app.route("/admin/dashboard/deny_access/<int:id>")
def deny_access(id):
    if "user_id" not in session:
        return redirect("/")
    
    # Perform action to deny access to the user (you'll implement this in the User model)
    users_dict = {"id": id}
    User.deny_access(users_dict)

    return redirect("/admin/dashboard")  # Redirect to the admin dashboard after denying access

# Action Route (Reactivate a User)
@app.route("/admin/dashboard/reactivate/<int:id>")
def reactivate(id):
    if "user_id" not in session:
        return redirect("/")
    
    # Perform action to reactivate the user (you'll implement this in the User model)
    users_dict = {"id": id}
    User.reactivate(users_dict)
    return redirect("/admin/dashboard")  # Redirect to the admin dashboard after reactivating the user

# Action Route (Delete a User)
@app.route("/admin/dashboard/delete_user/<int:id>")
def delete_user(id):
    if "user_id" not in session:
        return redirect("/")
    
    # Perform action to delete the user (you'll implement this in the User model)
    users_dict = {"id": id}
    User.delete_user(users_dict)
    return redirect("/admin/dashboard")  # Redirect to the admin dashboard after deleting the user
