from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "user_cr"
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # =============READ ALL ==================
    @classmethod 
    def get_all(cls):
        
        query = "SELECT * FROM users;"
        
        results = connectToMySQL(DATABASE).query_db(query)
        
        # print(results)
        users_instances = []
        if results :
            for row in results:
                # print("====>",row)
                this_user = cls(row)
                users_instances.append(this_user)
        # print("*****",users_instances)
            return users_instances
        return[]
    
    # =============CREATE ==================
    @classmethod
    def save(cls , data):
        query = """
                insert into users (first_name , last_name , email)
                values (%(first_name)s,%(last_name)s,%(email)s);
                """
        result = connectToMySQL(DATABASE).query_db(query,data)
        
        return result
    
    # =============READ ONE ==================
    @classmethod
    def get_one_by_id(cls,data):
        query = """select * from	users
                    where id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query,data)
        # print ('************',one_user)
        return User(result[0])
        
        
        
    # =============UPDATE ==================
    @classmethod
    def update(cls,data):
        query = """
                update users
                set first_name = %(first_name)s,
                last_name = %(last_name)s,
                email = %(email)s
                where id=%(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
        # =============UPDATE ==================
    @classmethod
    def delete(cls,user_id) :
        query = """
                DELETE FROM users WHERE id = %(id)s;
                """
        data = {"id" :user_id }
        return connectToMySQL(DATABASE).query_db(query,data)