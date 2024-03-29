from flask import render_template, redirect, session, flash
from flask_app import app
from flask_app.models.tickets import Ticket
from flask_app.models.events import Event
import random

# @app.route("/tickets")
# def display_all_tickets():
#     # Vérifie si l'utilisateur est connecté
#     if "user_id" not in session:
#         flash("Vous devez être connecté pour voir vos billets.", "error")
#         return redirect("/")
    
   
    
#     # Récupère tous les billets de l'utilisateur connecté
#     user_id = session["user_id"]

#     # Récupérer tous les événements


#     tickets = Ticket.get_tickets_by_user({"id":user_id})
    
#     return render_template("tickets.html", tickets=tickets)

@app.route("/tickets/<int:id>")
def display_ticket_details(id):
    # Vérifie si l'utilisateur est connecté
    if "user_id" not in session:
        flash("Vous devez être connecté pour voir vos billets.", "error")
        return redirect("/")
    
    # Récupère les détails du billet spécifié
    ticket = Ticket.get_by_id(id)
    
    if not ticket:
        flash("Ce billet n'existe pas.", "error")
        return redirect("/tickets")
    
    return render_template("ticket_details.html", ticket=ticket)


@app.route("/tickets/new/<int:id>")
def create_ticket(id):
    # Vérifie si l'utilisateur est connecté
    if "user_id" not in session:
        flash("Vous devez être connecté pour voir vos billets.", "error")
        return redirect("/")
    
    # Récupère tous les billets de l'utilisateur connecté
    user_id = session["user_id"]
    ticket= {
        "event_id":id,
        "user_id":user_id,
        "reference":random.randint(100000, 999999)
    }

    Ticket.create(ticket)
    
    return redirect("/")