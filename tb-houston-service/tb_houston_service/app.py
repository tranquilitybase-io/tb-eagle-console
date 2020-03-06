import config

def run(debug):
    # Get theapplication instance
    connex_app = config.connex_app

    # Read the swagger.yml file to configure the endpoints
    connex_app.add_api('swagger.yml')
    connex_app.run(debug=debug)
