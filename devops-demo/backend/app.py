from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route('/')
def home():
    try:
        db = mysql.connector.connect(
            host="db",
            user="root",
            password="root"
        )

        return "Backend + Database Connected Successfully!"

    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)