import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

node4H4Import = "../backUp/node4/node4H2Export.json"
node4NOT4Import = "../backUp/node4/node4NOTExport.json"
node4FA4Import = "../backUp/node4/node4FAExport.json"
node4Tol4Import = "../backUp/node4/node4TolExport.json"
node4Temp4Import = "../backUp/node4/node4TempExport.json"
node4Humid4Import = "../backUp/node4/node4HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")


def importH4():
    mydb = myClient["Node_4"]
    mycol = mydb["test_4"]
    with open(node4H4Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importN4():
    mydb = myClient["Node_4"]
    mycol = mydb["test_4"]
    with open(node4NOT4Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importFA4():
    mydb = myClient["Node_4"]
    mycol = mydb["test_4"]
    with open(node4FA4Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTol4():
    mydb = myClient["Node_4"]
    mycol = mydb["test_4"]
    with open(node4Tol4Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTemp4():
    mydb = myClient["Node_4"]
    mycol = mydb["test_4"]
    with open(node4Temp4Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importHumid4():
    mydb = myClient["Node_4"]
    mycol = mydb["test_4"]
    with open(node4Humid4Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)
