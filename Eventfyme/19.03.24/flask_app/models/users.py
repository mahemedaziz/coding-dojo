from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re
from flask_app.models.events import Event

# regular expression for the email format
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")


class User:
    def __init__(self, data) -> None:
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.role = data["role"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.events = []

    # Autres méthodes de classe restent inchangées...

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO users (first_name, last_name, email, password,role ) 
                VALUES(%(first_name)s, %(last_name)s, %(email)s, %(password)s,"user");
                """
        return connectToMySQL(DATABASE).query_db(query, data)
    


    @classmethod
    def get_by_email(cls, data):
        query = """
                    SELECT * FROM users
                    WHERE email = %(email)s;
            """
        result = connectToMySQL(DATABASE).query_db(query, data)

        if len(result) < 1:
            return False
        return User(result[0])
    

    @classmethod
    def accept_role_company(cls, data):
        query = """
            UPDATE users
            SET role = "company"
            WHERE id = %(id)s;
                """
        connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = """
                    SELECT * FROM users
                    WHERE id = %(id)s;
            """
        result = connectToMySQL(DATABASE).query_db(query, data)
        if len(result) < 1:
            return False
        return User(result[0])
    
    @classmethod
    def get_all_users(cls):
        query = """select * from eventyfyme.users
                    where role = "user";"""
        results = connectToMySQL(DATABASE).query_db(query)
        return results
    
    @classmethod
    def deny_access(cls,data):
        query = "UPDATE users SET role='denied' WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def reactivate(cls,data):
        query = "UPDATE users SET role='user' WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def delete_user(cls, data):
        query = "DELETE FROM users WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_denied(cls):
        query = """select * from eventyfyme.users
                    where role = "denied";"""
        results = connectToMySQL(DATABASE).query_db(query)
        return results
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    @staticmethod
    def validate_user(data):
        is_valid = True

        if len(data["first_name"]) < 1:
            is_valid = False
            flash("first_name is required !", "register")

        if len(data["last_name"]) < 1:
            is_valid = False
            flash("last_name is required !", "register") 

        if len(data["email"]) < 1:
            is_valid = False
            flash("email is required !")
        # test whether a field matches the pattern
        elif not EMAIL_REGEX.match(data["email"]):
            flash("Invalid email address!", "register")
            is_valid = False
        else:
            email_dict = {"email": data["email"]}
            potential_user = User.get_by_email(email_dict)
            if potential_user:
                is_valid = False
                flash("This email is already taken; Hopefully by you !", "register")

        if len(data["password"]) < 1:
            is_valid = False
            flash("password required", "register")

        elif not data["password"] == data["confirm_password"]:
            is_valid = False
            flash("passwords don't match !", "register")

        return is_valid

    @staticmethod
    def validate_login_user(data):
        is_valid = True

        if len(data["email"]) < 1:
            is_valid = False
            flash("email is required !", "login")
        # test whether a field matches the pattern
        elif not EMAIL_REGEX.match(data["email"]):
            flash("Invalid email address!", "login")
            is_valid = False

        if len(data["password"]) < 1:
            is_valid = False
            flash("password is required !", "login")

        return is_valid
    

    @classmethod
    def get_user_with_his_events(cls,data):
        query = """
                select * from users
                left join events on users.id = events.user_id
                where users.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query,data)
        user = cls(result[0])
        for row in result:
            event = {
                **row,
                'id': row['events.id'],
                'created_at': row['events.created_at'],
                'updated_at': row['events.updated_at']
            }
            user.events.append(Event(event))
        return user