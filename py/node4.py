import os
import pymongo
import struct
import json
from datetime import datetime
import time
import random
from pymongo import MongoClient

# Define empty lists
extnode4h2 = [0, 0]
extnode4no2 = [0, 0]
extnode4fa = [0, 0]
extnode4tolu = [0, 0]
extnode4temp = [0, 0]
extnode4humid = [0, 0]

# for connection between python client and local database server(ip: 127.0.0.1 port:27017)
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

# insert a real time node1 H2 data into MongoDB


def node4insertH2():
    node4db = myClient["Node_4"]  # create a Node_4 DB
    node4h2col = node4db["Hydrogen_4"]  # create a collection in Node_4 DB
    randNum = random.randint(0, 100)
    node4h2data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}  # create a py dict format
    # insert a py dict format into mongodb which can be recognized as json by pymongo
    node4h2col.insert_one(node4h2data)


def node4sortLastH2():
    global extnode4h2
    node4insertH2()
    node4db = myClient["Node_4"]
    node4h2col = node4db["Hydrogen_4"]
    # according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
    node4h2new = node4h2col.find().sort('_id', -1).limit(1)
    # This is a cursor command, it is used for describing operation.
    # print the dict in node4h2new
    # for element in node4h2new:
    #    print(element)
    for element in node4h2new:
        extnode4h2[0] = element['_id']
        extnode4h2[1] = element['value']
    # print(extnode4h2)
    # print(extnode4h2[1])
    return extnode4h2[1]


def node4insertNO2():
    node4db = myClient["Node_4"]
    node4no2col = node4db["NO2_4"]
    randNum = random.randint(0, 100)
    node4no2data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node4no2col.insert_one(node4no2data)
    # myClient.close()  //pls dont close during accessing


def node4sortLastNO2():
    global extnode4no2
    node4insertNO2()
    node4db = myClient["Node_4"]
    node4no2col = node4db["NO2_4"]
    # according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
    node4no2new = node4no2col.find().sort('_id', -1).limit(1)
    # print the dict in node4no2new
    # for element in node4no2new:
    #    print(element)
    for element in node4no2new:
        extnode4no2[0] = element['_id']
        extnode4no2[1] = element['value']
    # print(extnode4no2)
    # print(extnode4no2[1])
    return extnode4no2[1]


def node4insertFA():
    node4db = myClient["Node_4"]
    node4facol = node4db["FA_4"]
    randNum = random.randint(0, 100)
    node4fadata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node4facol.insert_one(node4fadata)


def node4sortLastFA():
    global extnode4fa
    node4insertFA()
    node4db = myClient["Node_4"]
    node4facol = node4db["FA_4"]
    node4fanew = node4facol.find().sort('_id', -1).limit(1)
    # print the dict in node4fanew
    # for element in node4fanew:
    #    print(element)
    for element in node4fanew:
        extnode4fa[0] = element['_id']
        extnode4fa[1] = element['value']
    # print(extnode4fa)
    # print(extnode4fa[1])
    return extnode4fa[1]


def node4insertTOLU():
    node4db = myClient["Node_4"]
    node4tolucol = node4db["Toluene_4"]
    randNum = random.randint(0, 100)
    node4toludata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node4tolucol.insert_one(node4toludata)


def node4sortLastTOLU():
    global extnode4tolu
    node4insertTOLU()
    node4db = myClient["Node_4"]
    node4tolucol = node4db["Toluene_4"]
    node4tolunew = node4tolucol.find().sort('_id', -1).limit(1)
    # print the dict in node4tolunew
    # for element in node4tolunew:
    #    print(element)
    for element in node4tolunew:
        extnode4tolu[0] = element['_id']
        extnode4tolu[1] = element['value']
    # print(extnode4tolu)
    # print(extnode4tolu[1])
    return extnode4tolu[1]


def node4insertTemp():
    node4db = myClient["Node_4"]
    node4tempcol = node4db["Temperature_4"]
    randNum = random.randint(15, 40)
    node4tempdata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node4tempcol.insert_one(node4tempdata)


def node4sortLastTemp():
    global extnode4temp
    node4insertTemp()
    node4db = myClient["Node_4"]
    node4tempcol = node4db["Temperature_4"]
    node4tempnew = node4tempcol.find().sort('_id', -1).limit(1)
    # print the dict in node1tempnew
    # for element in node4tempnew:
    #    print(element)
    for element in node4tempnew:
        extnode4temp[0] = element['_id']
        extnode4temp[1] = element['value']
    # print(extnode4temp)
    # print(extnode4temp[1])
    return extnode4temp[1]


def node4insertHumid():
    node4db = myClient["Node_4"]
    node4humidcol = node4db["Humidity_4"]
    randNum = random.randint(0, 100)
    node4humiddata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node4humidcol.insert_one(node4humiddata)


def node4sortLastHumid():
    global extnode4humid
    node4insertHumid()
    node4db = myClient["Node_4"]
    node4humidcol = node4db["Humidity_4"]
    node4humidnew = node4humidcol.find().sort('_id', -1).limit(1)
    # print the dict in node4humidnew
    # for element in node4humidnew:
    #    print(element)
    for element in node4humidnew:
        extnode4humid[0] = element['_id']
        extnode4humid[1] = element['value']
    # print(extnode4humid)
    # print(extnode4humid[1])
    return extnode4humid[1]
