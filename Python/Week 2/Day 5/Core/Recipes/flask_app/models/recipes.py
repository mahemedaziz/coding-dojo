from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from pprint import pprint
from flask_app.models import users

class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        self.date = data["date"]
        self.under = data["under"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
    
        # *CREATE a RECIPE
    
    @classmethod
    def save(cls, data):
        query = """
                insert into recipes (name, description, instructions, date, under, user_id)
                values (%(name)s,%(description)s,"%(instructions)s",%(date)s, %(under)s,%(user_id)s);
                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    
    
    # *Get all recipes with thier creators
    
    
    @classmethod
    def get_all_with_users(cls):
        
        query = """
                select * from recipes 
                join users on recipes.user_id = users.id;
                """
        results = connectToMySQL(DATABASE).query_db(query)
        
        # pprint (results)
        
        
        list_of_recipes = []
        for row in results:
            user_fixed = {
                **row,
                "id": row["users.id"],
                "created_at": row["users.created_at"],
                "updated_at": row["users.updated_at"]
            }
            current_recipe = Recipe(row)
            current_recipe.posted_by = users.User(user_fixed)
            list_of_recipes.append(current_recipe)

        return list_of_recipes
    
        # *Get one recipe by ID
    
    @classmethod
    def get_by_id(cls,data):
        
        query = """
                    select * from recipes
                    where recipes.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        # pprint(result)
        
        # return Recipe(result[0])
        
        # pprint(result)
        return Recipe(result[0])
    
        #* Get one recipe and its user
    
    
    @classmethod
    def get_one_with_user(cls , data):
        
        query ="""
                    select * from recipes
                    join users on recipes.user_id = users.id
                    where recipes.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query,data)
        # pprint(result)
        
        row = result [0]
        
        current_recipe = Recipe(row)
        
        user_fixed = {
                **row,
                "created_at" : row["users.created_at"],
                "updated_at" : row["users.updated_at"]
                
            }
        current_recipe.posted_by = users.User(user_fixed)
        
        return current_recipe
    
        #* Update book by ID
    
    
    @classmethod
    def update(cls , data):
        data['under'] = 1 if data['under'] == 'yes' else 0
    
        query ="""
                    update recipes
                    set name = %(name)s,
                    description = %(description)s ,
                    instructions = %(instructions)s,
                    date = %(date)s ,
                    under = %(under)s,
                    user_id = %(user_id)s
                    where recipes.id = %(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls , data):
    
        query ="""
                    delete from recipes where recipes.id = %(id)s;

                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    
    
    
    
    
    # ! Validation for Recipe
    @staticmethod
    def validate_recipe(data):
        is_valid = True
        
        if len(data["name"]) < 1:
            is_valid = False
            flash("Name is required !", "recipe")
            
        if len(data["description"]) < 1:
            is_valid = False
            flash("Description is required !", "recipe")
            
        if len(data["instructions"]) < 1:
            is_valid = False
            flash("Instructions is required !", "recipe")
        
        return is_valid