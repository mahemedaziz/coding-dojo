from flask_app import app
from flask import redirect, render_template, request,session 
from flask_app.models.events import Event
from flask_app.models.locations import Location


# @app.route('/')
# def locations():
#     # if not 'user_id' in session:
#     #     return redirect('/')
#     all_location=Location.get_all()
#     return render_template('location.html',all_location=all_location)


@app.route('/location/<int:location_id>')
def events(location_id):
    all_events=Event.get_all_one_location({"id":location_id})
    all_location=Location.get_all()
    return render_template('all_events.html', all_events=all_events,all_location=all_location)



@app.route('/aboutus')
def about_us():
    return render_template ('about_us.html')