from flask import Flask, render_template

app = Flask(__name__)    

# @app.route("/home")
# def home():
#     full_name = "James Bond"
#     return render_template("home.html", username = full_name ,age = 25)  

@app.route("/home/<int:x>/<color>")
def play_x_times(x,color):
    return render_template("home.html" , times = x ,box_color = color)


if __name__=="__main__":  
    app.run(debug=True)    # Run the app in debug mode.