import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

node2H2Import = "../backUp/node2/node2H2Export.json"
node2NOT2Import = "../backUp/node2/node2NOTExport.json"
node2FA2Import = "../backUp/node2/node2FAExport.json"
node2Tol2Import = "../backUp/node2/node2TolExport.json"
node2Temp2Import = "../backUp/node2/node2TempExport.json"
node2Humid2Import = "../backUp/node2/node2HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")


def importH2():
    mydb = myClient["Node_2"]
    mycol = mydb["test_2"]
    with open(node2H2Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importN2():
    mydb = myClient["Node_2"]
    mycol = mydb["test_2"]
    with open(node2NOT2Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importFA2():
    mydb = myClient["Node_2"]
    mycol = mydb["test_2"]
    with open(node2FA2Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTol2():
    mydb = myClient["Node_2"]
    mycol = mydb["test_2"]
    with open(node2Tol2Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTemp2():
    mydb = myClient["Node_2"]
    mycol = mydb["test_2"]
    with open(node2Temp2Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importHumid2():
    mydb = myClient["Node_2"]
    mycol = mydb["test_2"]
    with open(node2Humid2Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)
