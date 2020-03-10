"""
This is the deployments module and supports all the ReST actions for the
deployments collection
"""

# System modules
from datetime import datetime

# 3rd party modules
from flask import make_response, abort
from config import db
from models import Deployments, DeploymentsSchema
from marshmallow import pprint

def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))


def read_all():
    """
    This function responds to a request for /api/deployment
    with the complete lists of deployments

    :return:        json string of list of deployments
    """

    # Create the list of people from our data
    deployments = Deployments.query.order_by(Deployments.deploymentId).all()
    pprint(deployments)
    # Serialize the data for the response
    deployments_schema = DeploymentsSchema(many=True)
    data = deployments_schema.dump(deployments)
    return data


def read_one(deploymentId):
    """
    This function responds to a request for /api/deployments/{deploymentId}
    with one matching deployment from deployments

    :param application:   deploymentId of deployment to find
    :return:              deployment matching deploymentId
    """

    deployment = (Deployments.query.filter(Deployments.deploymentId == deploymentId).one_or_none())

    if deployment is not None:
        # Serialize the data for the response
        deployments_schema = DeploymentsSchema()
        data = deployments_schema.dump(deployment)
        return data
    else:
        abort(
            404, "Deployment with deploymentId {deploymentId} not found".format(deploymentId=deploymentId)
        )


def create(deployment):
    """
    This function creates a new deployment in the deployment structure
    based on the passed in deployment data

    :param deployment:  deployment to create in deployments structure
    :return:        201 on success, 406 on deployment exists
    """
    application = deployment.get("application", None)
    env = deployment.get("env", None)
    status = deployment.get("status", None)
    notes = deployment.get("notes", None)

    # Does the person exist already?
    existing_deployment = (
        Deployments.query.filter(Deployments.application == application).one_or_none()
    )

    if existing_deployment is None:
        schema = DeploymentsSchema()
        new_deployment = schema.load(deployment, session=db.session)
        db.session.add(new_deployment)
        db.session.commit()

        # Serialize and return the newly created deployment
        # in the response
        data = schema.dump(new_deployment)

        return data, 201

    # Otherwise, it already exists, that's an error
    else:
        abort(409, f"Deployment already exists")


def update(deploymentId, deployment):
    """
    This function updates an existing deployment in the deployment list

    :param deploymentId: deploymentId of the deployment to update in the deployment list
    :param deployment:   deployment to update
    :return:             updated deployment
    """

    pprint(deployment)

    # Does the deployment exist in deployments?
    existing_deployment = Deployments.query.filter(
            Deployments.deploymentId == deploymentId
    ).one_or_none()

    # Does deployment exist?

    if existing_deployment is not None:
        schema = DeploymentsSchema()
        update_deployment = schema.load(deployment, session=db.session)
        update_deployment.deploymentId = existing_deployment.deploymentId

        db.session.merge(update_deployment)
        db.session.commit()

        # return the updted deployment in the response
        data = schema.dump(update_deployment)
        return data, 200

    # otherwise, nope, deployment doesn't exist, so that's an error
    else:
        abort(404, f"Deployment not found")


def delete(deploymentId):
    """
    This function deletes a deployment from the deployments list

    :param deploymentId: deploymentId of the deployment to delete
    :return:             200 on successful delete, 404 if not found
    """
    # Does the deployment to delete exist?
    existing_deployment = Deployments.query.filter(Deployments.deploymentId == deploymentId).one_or_none()

    # if found?
    if existing_deployment is not None:
        db.session.delete(existing_deployment)
        db.session.commit()

        return make_response(f"Deployment {deploymentId} successfully deleted", 200)

    # Otherwise, nope, deployment to delete not found
    else:
        abort(404, f"Deployment {deploymentId} not found")
