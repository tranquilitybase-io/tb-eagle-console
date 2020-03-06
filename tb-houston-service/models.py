from datetime import datetime
from config import db #, ma
#from marshmallow import fields


class Deployments(db.Model):
    __tablename__ = "deployments"
    id = db.Column(db.Integer, primary_key=True)
    application = db.Column(db.String(32))
    env = db.Column(db.String(32))
    status = db.Column(db.String(32))
    notes = db.Column(db.String(32))

