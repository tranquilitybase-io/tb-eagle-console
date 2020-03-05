import config

# If we're running in stand alone mode, run the application
if __name__ == '__main__':
    config.db.create_all()
