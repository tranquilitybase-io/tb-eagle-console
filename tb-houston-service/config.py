import os
import connexion
import pymysql
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

basedir = os.path.abspath(os.path.dirname(__file__))

# Create the connexion application instance
connex_app = connexion.App(__name__, specification_dir=basedir)

# Get the underlying Flask app instance
app = connex_app.app

# Configure the SqlAlchemy part of the app instance
app.config["SQLALCHEMY_ECHO"] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://xxxxx:xxxxxx@localhost/xxxxxxx'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Create the SqlAlchemy db instance
db = SQLAlchemy(app)

# Initialize Marshmallow
#ma = Marshmallow(app)
