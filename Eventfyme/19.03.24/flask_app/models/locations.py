from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE




class Location:
    def __init__(self,data):
        self.location_id=data["location_id"]
        self.location_name=data["location_name"]
        self.location_description=data["location_description"]
        self.location_image_url=data["location_image_url"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.events=[]

    @classmethod
    def create(cls,data):
        query =""" INSERT INTO locations (location_name,location_description,location_image_url)
        VALUES (%(location_name)s,%(location_description)s,%(location_image_url)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query = """ SELECT * FROM locations;"""
        results = connectToMySQL(DATABASE).query_db(query)
        all_locations=[]
        for row in results:
            all_locations.append(cls(row))
        return all_locations
    


    @classmethod
    def get_by_id(cls,data):
        query=""" select * from locations where location_id=%(id)s;
                """
        results = connectToMySQL(DATABASE).query_db(query,data)
        return cls(results[0])
    