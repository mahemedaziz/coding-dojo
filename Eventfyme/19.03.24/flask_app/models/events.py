from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from pprint import pprint
from flask_app.models import users , event_company
from flask_app.models.locations import Location


class Event:
    def __init__(self, data):
        self.id = data["id"]
        self.event_name = data["event_name"]
        self.event_type = data["event_type"]
        self.event_features = data["event_features"]
        self.event_date = data["event_date"]
        self.event_duration = data["event_duration"]
        self.event_places = data["event_places"]
        self.event_location = data["event_location"]
        self.event_artists = data["event_artists"]
        self.ticket_price = data["ticket_price"]
        self.is_approved = data["is_approved"]
        self.image = data["image"]  
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
        self.location_id=data["location_id"]
        self.location=Location.get_by_id({"id":self.location_id})

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO events (event_name, event_type, event_features, event_date, event_duration, event_places, event_location, event_artists, ticket_price,image, user_id,location_id)
                VALUES (%(event_name)s, %(event_type)s, %(event_features)s, %(event_date)s, %(event_duration)s, %(event_places)s, %(event_location)s, %(event_artists)s, %(ticket_price)s, %(image)s, %(user_id)s, %(location_id)s);
                """
        return connectToMySQL(DATABASE).query_db(query, data)
    
    
    @classmethod
    def get_all_events(cls):
        query = """
                SELECT * FROM events;
                """
        results = connectToMySQL(DATABASE).query_db(query)
        list_of_events = []
        for row in results:
            list_of_events.append(cls(row))
        return list_of_events

    @classmethod
    def get_all_with_users(cls):
        query = """
                SELECT * FROM events
                JOIN users ON events.user_id = users.id;
                """
        results = connectToMySQL(DATABASE).query_db(query)
        list_of_events = []
        for row in results:
            user_fixed = {
                **row,
                "id": row["users.id"],
                "created_at": row["users.created_at"],
                "updated_at": row["users.updated_at"]
            }
            current_event = Event(row)
            current_event.organized_by = users.User(user_fixed)
            list_of_events.append(current_event)
        return list_of_events

    @classmethod
    def get_by_user_id(cls, data):
        query = """
                SELECT * FROM events
                WHERE user_id = %(id)s;
                """
        results = connectToMySQL(DATABASE).query_db(query,data)
        list_of_events = []
        for row in results:
            list_of_events.append(cls(row))
        return list_of_events

    @classmethod
    def get_one_with_user(cls, data):
        query = """
                SELECT * FROM events
                JOIN users ON events.user_id = users.id
                WHERE events.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            row = result[0]
            current_event = Event(row)
            user_fixed = {
                **row,
                "created_at": row["users.created_at"],
                "updated_at": row["users.updated_at"]
            }
            current_event.organized_by = users.User(user_fixed)
            return current_event
        return None

    @classmethod
    def update(cls, data):
        query = """
                UPDATE events
                SET event_name = %(event_name)s, event_type = %(event_type)s, event_features = %(event_features)s, event_date = %(event_date)s, event_duration = %(event_duration)s, event_places = %(event_places)s, event_location = %(event_location)s, event_artists = %(event_artists)s, ticket_price = %(ticket_price)s, user_id = %(user_id)s
                WHERE id = %(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query, data)
    


    @classmethod
    def update_profile(cls,data):
        query = """
                UPDATE users
                SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s
                WHERE id = %(user_id)s;
                """
        # data = {
        #     'first_name': first_name,
        #     'last_name': last_name,
        #     'email': email,
        #     'user_id': user_id
        # }
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def approve(cls, data):
        query = """
                UPDATE events
                SET is_approved = 1
                WHERE id = %(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
                DELETE FROM events WHERE id = %(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_user_events(cls, user_id):
        query = """
            SELECT e.*, u.*, ec.*
            FROM events e
            JOIN users u ON e.user_id = u.id
            JOIN event_company ec ON u.id = ec.user_id
            WHERE u.id = %(user_id)s;
        """
        data = {"user_id": user_id}
        results = connectToMySQL(DATABASE).query_db(query, data)

        # Vérifier si aucun résultat n'a été retourné
        if not results:
            return []

        # Si des résultats ont été retournés, les traiter normalement
        list_of_events = [cls(row) for row in results]
        return list_of_events

    @classmethod
    def get_company_events_by_user_id(cls, user_id):
        query = """
            SELECT e.* 
            FROM events e
            JOIN users u ON e.user_id = u.id
            WHERE u.id = %(user_id)s
        """
        data = {"user_id": user_id}
        results = connectToMySQL(DATABASE).query_db(query, data)
        list_of_events = [cls(row) for row in results]
        return list_of_events




# ! Validation for Event
    @staticmethod
    def validate_event(data):
        is_valid = True
    
        if len(data["event_name"]) < 1:
            is_valid = False
            flash("Event name is required!", "event_name")

        if len(data["event_type"]) < 1:
            is_valid = False
            flash("Event type is required!", "event_type")

        if len(data["event_features"]) < 1:
            is_valid = False
            flash("Event features are required!", "event_features")

        if not data["event_date"]:
            is_valid = False
            flash("Event date is required!", "event_date")


        if len(data["event_duration"]) < 1:
            is_valid = False
            flash("Event duration must be greater than 0!", "event_duration")
        elif int(data["event_duration"]) <= 1:
            is_valid = False
            flash("Event duration must be greater than 0!", "event_duration")




        if len(data["event_places"]) <= 0:
            is_valid = False
            flash("Event places must be greater than 0!", "event_places")
        elif int(data["event_places"]) <= 0:
            is_valid = False
            flash("Event places must be greater than 0!", "event_places")
            

        if len(data["event_location"]) < 1:
            is_valid = False
            flash("Event location is required!", "event_location")

        if len(data["event_artists"]) < 1:
            is_valid = False
            flash("Event artists are required!", "event_artists")

        if len(data["ticket_price"]) < 1:
            is_valid = False
            flash("Ticket price must be greater than 0!", "ticket_price")
        elif int(data["ticket_price"]) < 1:
            is_valid = False
            flash("Ticket price must be greater than 0!", "ticket_price")

        if len(data["user_id"]) < 1:
            is_valid = False
            flash("User ID is required!", "event")
        
        # if len(data["image"]) < 1:
        #     is_valid = False
        #     flash("Image is required!", "event")

        return is_valid



# ---------------------------------------------------------
    @classmethod
    def get_by_id(cls,data):
        query="""SELECT * FROM events WHERE id= %(id)s"""
        result=connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return None
    
    
    @classmethod
    def get_all(cls):
        query = """ SELECT * FROM events;"""
        results = connectToMySQL(DATABASE).query_db(query)
        all_events=[]
        for row in results:
            all_events.append(cls(row))
        return all_events


    @classmethod
    def create(cls,data):
        query =""" INSERT INTO events (event_name,event_description,event_image_url,location_id)
        VALUES (%(event_name)s,%(event_description)s,%(event_image_url)s,%(location_id)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all_one_location(cls,data):
        query ="""SELECT * from events join locations
            on locations.location_id=events.location_id where locations.location_id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        all_events=[]
        for event in results:
            all_events.append(cls(event))
        return all_events