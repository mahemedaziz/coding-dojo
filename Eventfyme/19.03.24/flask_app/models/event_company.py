from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class EventCompany:
    def __init__(self, data) -> None:
        self.id = data["id"]
        self.name = data["name"]
        self.legal_representative = data["legal_representative"]
        self.identity_number = data["identity_number"]
        self.email = data["email"]
        self.phone_number = data["phone_number"]
        self.depositor_name = data["depositor_name"]
        self.statut = data["statut"]  # Nouvelle colonne "status"
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO event_company (name, legal_representative, identity_number, email, phone_number, depositor_name, statut, user_id) 
                VALUES(%(name)s, %(legal_representative)s, %(identity_number)s, %(email)s, %(phone_number)s, %(depositor_name)s, "pending", %(user_id)s);
                """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = """
                    SELECT * FROM event_company
                    WHERE id = %(id)s;
            """
        result = connectToMySQL(DATABASE).query_db(query, data)

        if len(result) < 1:
            return False
        return EventCompany(result[0])
    
    @classmethod
    def get_user_events(cls, user_id):
        query = """
            SELECT ec.*
            FROM event_company ec
            JOIN users u ON ec.user_id = u.id
            WHERE u.id = %(user_id)s;
        """
        data = {"user_id": user_id}
        results = connectToMySQL(DATABASE).query_db(query, data)
        list_of_companies = [cls(row) for row in results]
        return list_of_companies
    
    @classmethod
    def get_all_companies(cls):
        query = "SELECT * FROM event_company;"
        results = connectToMySQL(DATABASE).query_db(query)
        return results
    
    @classmethod
    def get_pending(cls):
        query = """SELECT *,event_company.id AS eventid FROM users
                JOIN event_company ON users.id=event_company.user_id
                WHERE event_company.statut="pending";"""
        results = connectToMySQL(DATABASE).query_db(query)
        return results
    
    
    @classmethod
    def get_active(cls):
        query = """SELECT *,event_company.id AS eventid FROM users
                JOIN event_company ON users.id=event_company.user_id
                WHERE event_company.statut="active";"""
        results = connectToMySQL(DATABASE).query_db(query)
        return results
    
    @classmethod
    def get_retricted(cls):
        query = """SELECT *,event_company.id AS eventid FROM users
                JOIN event_company ON users.id=event_company.user_id
                WHERE event_company.statut="restricted";"""
        results = connectToMySQL(DATABASE).query_db(query)
        return results
    

    
    
    @classmethod
    def delete_company(cls, data):
        query = "DELETE FROM event_company WHERE id = %(id)s;"
        connectToMySQL(DATABASE).query_db(query, data)
        
    @classmethod
    def accept_company(cls, data):
        query = """
            UPDATE event_company
            SET statut = "active"
            WHERE id = %(id)s;
                """
        connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def restrict_company(cls, data):
        query = """
            UPDATE event_company
            SET statut = "restricted"
            WHERE id = %(id)s;
                """
        connectToMySQL(DATABASE).query_db(query, data)
    
    @staticmethod
    def validate_company(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("Company name is required!", "company")

        if len(data["legal_representative"]) < 1:
            is_valid = False
            flash("Legal representative is required!", "company")

        if len(data["email"]) < 1:
            is_valid = False
            flash("Email is required!", "company")

        if len(data["phone_number"]) < 1:
            is_valid = False
            flash("Phone number is required!", "company")

        if len(data["depositor_name"]) < 1:
            is_valid = False
            flash("Depositor name is required!", "company")

        # if len(data["user_id"]) < 1:
        #     is_valid = False
        #     flash("User ID is required!", "company")

        return is_valid
