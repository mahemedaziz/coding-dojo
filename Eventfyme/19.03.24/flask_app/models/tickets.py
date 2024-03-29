from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from pprint import pprint
from flask_app.models.users import User
from flask_app.models.events import Event



class Ticket:
    def __init__(self, data):
        self.id = data["id"]
        self.user_id = data["user_id"]
        self.event_id = data["event_id"]
        self.reference = data["reference"]
        # self.created_at = data["created_at"]
        # self.updated_at = data["updated_at"]
        self.event = Event.get_by_id({"id":self.event_id})

    
    #*  le nombre des ticket vendu par un evenement 
    @classmethod
    def get_ticket_sum_by_event(cls, data):
        query = """
                SELECT COUNT(*) AS ticket_count
                FROM tickets
                WHERE event_id = %(id)s
                GROUP BY event_id;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return result[0]['ticket_count']
        return 0
    
    @classmethod
    def create(cls,data):
        query =""" INSERT INTO tickets (event_id,user_id,reference)
        VALUES (%(event_id)s,%(user_id)s,%(reference)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    


    @classmethod
    def get_tickets_by_user(cls, data):
        query = """
            SELECT * FROM tickets
            WHERE user_id = %(id)s;
        """
        result = connectToMySQL(DATABASE).query_db(query, data)
        tickets=[]
        for row in result:
            tickets.append(cls(row))
        return tickets


    #*  la somme tickets vendu par un evenement 
    # @classmethod
    # def get_ticket_sum_by_event(cls, event_id):
    #     query = """
    #             SELECT SUM(ticket_price) AS total_price
    #             FROM tickets
    #             JOIN events ON tickets.event_id = events.id
    #             WHERE events.id = %(event_id)s;
    #             """
    #     data = {"event_id": event_id}
    #     result = connectToMySQL(DATABASE).query_db(query, data)
    #     if result and result[0]["total_price"]:
    #         return result[0]["total_price"]
    #     return 0


    @classmethod
    def get_tickets(cls, user_id):
        query = """
            SELECT * FROM tickets WHERE user_id IN 
            (SELECT property_id FROM favorites WHERE user_id = %s)
        """
        data = (user_id,)
        results = connectToMySQL(DATABASE).query_db(query, data)
        favorite_properties = []
        if results:
            for row in results:
                favorite_properties.append(Ticket(row))  # Assuming Property class with appropriate constructor
        return favorite_properties