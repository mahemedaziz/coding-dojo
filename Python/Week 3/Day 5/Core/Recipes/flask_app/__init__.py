from flask import Flask

app = Flask(__name__)
DATABASE = "recipes_schema"
app.secret_key = "SHHH, don't share this with anyone or push it into github"