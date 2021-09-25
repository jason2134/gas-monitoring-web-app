import os
import pymongo
import struct
import json
from datetime import datetime
import time
import random
from pymongo import MongoClient

# Define empty lists
extnode1time = [0]
extnode1h2 = [0, 0]
extnode1no2 = [0, 0]
extnode1fa = [0, 0]
extnode1tolu = [0, 0]
extnode1temp = [0, 0]
extnode1humid = [0, 0]

# for connection between python client and local database server(ip: 127.0.0.1 port:27017)
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

# insert a real time node1 H2 data into MongoDB


def node1insertH2():
    node1db = myClient["Node_1"]  # create a Node_1 DB
    node1h2col = node1db["Hydrogen_1"]  # create a collection in Node_1 DB
    randNum = random.randint(0, 100)+2000
    node1h2data = {'type': "h2", 'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}  # create a py dict format
    # insert a py dict format into mongodb which can be recognized as json by pymongo
    node1h2col.insert_one(node1h2data)


def node1sortLastH2():
    global extnode1h2
    global extnode1time
    node1insertH2()
    node1db = myClient["Node_1"]
    node1h2col = node1db["Hydrogen_1"]
    # according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
    node1h2new = node1h2col.find().sort('_id', -1).limit(1)
    # This is a cursor command, it is used for describing operation.
    # print the dict in node1h2new
    # for element in node1h2new:
    #    print(element)
    # create a list, using dict method to access the dict and pass the dict value into list.
    for element in node1h2new:
        extnode1h2[0] = element['_id']
        extnode1h2[1] = element['value']
        extnode1time[0] = element['time']
    # print(extnode1h2)
    # print(extnode1h2[1])
    return extnode1h2[1], extnode1time[0]


def node1insertNO2():
    node1db = myClient["Node_1"]
    node1no2col = node1db["NO2_1"]
    randNum = random.randint(0, 100)
    node1no2data = {'type': "no2", 'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node1no2col.insert_one(node1no2data)
    # myClient.close()  //pls dont close during accessing


def node1sortLastNO2():
    global extnode1no2
    node1insertNO2()
    node1db = myClient["Node_1"]
    node1no2col = node1db["NO2_1"]
    # according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
    node1no2new = node1no2col.find().sort('_id', -1).limit(1)
    # print the dict in node1no2new
    # for element in node1no2new:
    #    print(element)
    for element in node1no2new:
        extnode1no2[0] = element['_id']
        extnode1no2[1] = element['value']
    return extnode1no2[1]


def node1insertFA():
    node1db = myClient["Node_1"]
    node1facol = node1db["FA_1"]
    randNum = random.randint(0, 100)
    node1fadata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node1facol.insert_one(node1fadata)


def node1sortLastFA():
    global extnode1fa
    node1insertFA()
    node1db = myClient["Node_1"]
    node1facol = node1db["FA_1"]
    node1fanew = node1facol.find().sort('_id', -1).limit(1)
    # print the dict in node1fanew
    # for element in node1fanew:
    #    print(element)
    for element in node1fanew:
        extnode1fa[0] = element['_id']
        extnode1fa[1] = element['value']
    return extnode1fa[1]


def node1insertTOLU():
    node1db = myClient["Node_1"]
    node1tolucol = node1db["Toluene_1"]
    randNum = random.randint(0, 100)
    node1toludata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node1tolucol.insert_one(node1toludata)


def node1sortLastTOLU():
    global extnode1tolu
    node1insertTOLU()
    node1db = myClient["Node_1"]
    node1tolucol = node1db["Toluene_1"]
    node1tolunew = node1tolucol.find().sort('_id', -1).limit(1)
    # print the dict in node1tolunew
    # for element in node1tolunew:
    #    print(element)
    for element in node1tolunew:
        extnode1tolu[0] = element['_id']
        extnode1tolu[1] = element['value']
    return extnode1tolu[1]


def node1insertTemp():
    node1db = myClient["Node_1"]
    node1tempcol = node1db["Temperature_1"]
    randNum = random.randint(15, 40)
    data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node1tempcol.insert_one(data)


def node1sortLastTemp():
    global extnode1temp
    node1insertTemp()
    node1db = myClient["Node_1"]
    node1tempcol = node1db["Temperature_1"]
    node1tempnew = node1tempcol.find().sort('_id', -1).limit(1)
    # print the dict in node1tempnew
    # for element in node1tempnew:
    #    print(element)
    for element in node1tempnew:
        extnode1temp[0] = element['_id']
        extnode1temp[1] = element['value']
    return extnode1temp[1]


def node1insertHumid():
    node1db = myClient["Node_1"]
    node1humidcol = node1db["Humidity_1"]
    randNum = random.randint(0, 100)
    node1humiddata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node1humidcol.insert_one(node1humiddata)


def node1sortLastHumid():
    global extnode1humid
    node1insertHumid()
    node1db = myClient["Node_1"]
    node1humidcol = node1db["Humidity_1"]
    node1humidnew = node1humidcol.find().sort('_id', -1).limit(1)
    # print the dict in node1humidnew
    # for element in node1humidnew:
    #    print(element)
    for element in node1humidnew:
        extnode1humid[0] = element['_id']
        extnode1humid[1] = element['value']
    return extnode1humid[1]
