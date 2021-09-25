import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

node3H3Import = "../backUp/node3/node3H2Export.json"
node3NOT3Import = "../backUp/node3/node3NOTExport.json"
node3FA3Import = "../backUp/node3/node3FAExport.json"
node3Tol3Import = "../backUp/node3/node3TolExport.json"
node3Temp3Import = "../backUp/node3/node3TempExport.json"
node3Humid3Import = "../backUp/node3/node3HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")


def importH3():
    mydb = myClient["Node_3"]
    mycol = mydb["test_3"]
    with open(node3H3Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importN3():
    mydb = myClient["Node_3"]
    mycol = mydb["test_3"]
    with open(node3NOT3Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importFA3():
    mydb = myClient["Node_3"]
    mycol = mydb["test_3"]
    with open(node3FA3Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTol3():
    mydb = myClient["Node_3"]
    mycol = mydb["test_3"]
    with open(node3Tol3Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTemp3():
    mydb = myClient["Node_3"]
    mycol = mydb["test_3"]
    with open(node3Temp3Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importHumid3():
    mydb = myClient["Node_3"]
    mycol = mydb["test_3"]
    with open(node3Humid3Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)
