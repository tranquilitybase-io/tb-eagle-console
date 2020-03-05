"""
This is the deployments module and supports all the ReST actions for the
deployments collection
"""

# System modules
from datetime import datetime

# 3rd party modules
from flask import make_response, abort
from config import db
from models import Deployments

def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))


# Data to serve with our API
DEPLOYMENTS = {
    1: {
        "id": 1,
        "application": "app1",
        "env": "PROD",
        "status": False,
        "notes": "Notes1"
    },
    2: {
        "id": 2,
        "application": "app2",
        "env": "PROD",
        "status": False,
        "notes": "Notes2"
    },
    3: {
        "id": 3,
        "application": "app3",
        "env": "PROD",
        "status": False,
        "notes": "Notes3"
    },
}


def read_all():
    """
    This function responds to a request for /api/deployment
    with the complete lists of deployments

    :return:        json string of list of deployments
    """

    # Create the list of people from our data
    #deployments = Deployments.query.order_by(Deployments.id).all()
    #print(deployments)


    # Create the list of deployments from our data
    return [DEPLOYMENTS[key] for key in sorted(DEPLOYMENTS.keys())]


def read_one(id):
    """
    This function responds to a request for /api/deployments/{id}
    with one matching deployment from deployments

    :param application:   id of deployment to find
    :return:              deployment matching id
    """
    # Does the deployment exist in deployments?
    if id in DEPLOYMENTS:
        deployment = DEPLOYMENTS.get(id)

    # otherwise, nope, not found
    else:
        abort(
            404, "Deployment with id {id} not found".format(id=id)
        )

    return deployment


def create(deployment):
    """
    This function creates a new deployment in the deployment structure
    based on the passed in deployment data

    :param deployment:  deployment to create in deployments structure
    :return:        201 on success, 406 on deployment exists
    """
    id = deployment.get("id", None)
    application = deployment.get("application", None)
    env = deployment.get("env", None)
    status = deployment.get("status", None)
    notes = deployment.get("notes", None)

    # Does the person exist already?
    if id not in DEPLOYMENTS and application is not None:
        DEPLOYMENTS[id] = {
            "id": id,
            "application": application,
            "env": env,
            "status": status,
            "notes": notes,
        }
        return make_response(
            "{id} successfully created".format(id=id), 201
        )

    # Otherwise, they exist, that's an error
    else:
        abort(
            406,
            "Deployment with id {id} already exists".format(id=id),
        )


def update(id, deployment):
    """
    This function updates an existing deployment in the deployment list

    :param id:          id of the deployment to update in the deployment list
    :param deployment:  deployment to update
    :return:        updated deployment
    """
    # Does the deployment exist in deployments?
    if id in DEPLOYMENTS:
        DEPLOYMENTS[id]["id"] = id
        DEPLOYMENTS[id]["application"] = deployment.get("application")
        DEPLOYMENTS[id]["env"] = deployment.get("env")
        DEPLOYMENTS[id]["status"] = deployment.get("status")
        DEPLOYMENTS[id]["notes"] = deployment.get("notes")

        return DEPLOYMENTS[id]

    # otherwise, nope, that's an error
    else:
        abort(
            404, "Deployment with id {id} not found".format(id=id)
        )


def delete(id):
    """
    This function deletes a deployment from the deployments list

    :param id:      id of the deployment to delete
    :return:        200 on successful delete, 404 if not found
    """
    # Does the person to delete exist?
    if id in DEPLOYMENTS:
        del DEPLOYMENTS[id]
        return make_response(
            "{id} successfully deleted".format(id=id), 200
        )

    # Otherwise, nope, deployment to delete not found
    else:
        abort(
            404, "Deployment with last id {id} not found".format(id=id)
        )
