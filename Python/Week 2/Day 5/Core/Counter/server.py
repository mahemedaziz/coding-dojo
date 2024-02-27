from flask import Flask, render_template, redirect, session

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' 

@app.route('/')
def hello():
    if "num" not in session:
        session['num'] = 1
    else:
        session['num'] += 1
    return render_template("index.html") 

@app.route('/home', methods=['POST'])
def home():
    return redirect('/')

@app.route('/destroy_session', methods=['POST'])
def destroy():
    session.pop('num', None)
    return redirect('/')

@app.route('/plus2', methods=['POST'])
def plus2():
    session['num'] += 2
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
