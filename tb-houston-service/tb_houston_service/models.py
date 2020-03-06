from datetime import datetime
from marshmallow import fields
from config import db, ma


class Deployments(db.Model):
    __tablename__ = "deployments"
    deploymentId = db.Column(db.Integer, primary_key=True)
    application = db.Column(db.String(255))
    env = db.Column(db.String(32))
    status = db.Column(db.Boolean)
    notes = db.Column(db.String(255))


class DeploymentsSchema(ma.ModelSchema):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    class Meta:
        model = Deployments
        sqla_session = db.session
