import mysql.connector;
from mysql.connector import errorcode;

config = {
    'user': 'eagle-user',
    'password': 'eagle123',
    'database': 'eagle_db',
    'host': '127.0.0.1',
    'unix_socket': '/tmp/mysql.sock'
}

def test_connection():
    try:
        cnx = mysql.connector.connect(**config)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    cnx.close()
