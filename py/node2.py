import os
import pymongo
import struct
import json
from datetime import datetime
import time
import random
from pymongo import MongoClient

#Define empty lists
extnode2h2 = [0,0]
extnode2no2 = [0,0]
extnode2fa = [0,0]
extnode2tolu = [0,0]
extnode2temp = [0,0]
extnode2humid = [0,0]

#for connection between python client and local database server(ip: 127.0.0.1 port:27017)
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

#insert a real time node2 H2 data into MongoDB
def node2insertH2():
    node2db = myClient["Node_2"] #create a Node_2 DB
    node2h2col = node2db["Hydrogen_2"] #create a collection in Node_2 DB
    randNum = random.randint(0, 100)
    node2h2data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum} #create a py dict format
    node2h2col.insert_one(node2h2data) #insert a py dict format into mongodb which can be recognized as json by pymongo
    
def node2sortLastH2():
    global extnode2h2
    node2insertH2()
    node2db = myClient["Node_2"]
    node2h2col = node2db["Hydrogen_2"]
    node2h2new = node2h2col.find().sort('_id', -1).limit(1) #according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
                                                            #This is a cursor command, it is used for describing operation.
    #print the dict in node1h2new
    #for element in node2h2new:
    #    print(element)
    for element in node2h2new:
        extnode2h2[0]=element['_id']
        extnode2h2[1]=element['value']
    #print(extnode2h2)
    #print(extnode2h2[1])
    return extnode2h2[1]

def node2insertNO2():
    node2db = myClient["Node_2"]
    node2no2col = node2db["NO2_2"]
    randNum = random.randint(0, 100)
    node2no2data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node2no2col.insert_one(node2no2data)
    #myClient.close()  //pls dont close during accessing


def node2sortLastNO2():
    global extnode2no2
    node2insertNO2()
    node2db = myClient["Node_2"]
    node2no2col = node2db["NO2_2"]
    node2no2new = node2no2col.find().sort('_id', -1).limit(1) #according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
    #print the dict in node2no2new
    #for element in node2no2new:
    #    print(element)
    for element in node2no2new:
        extnode2no2[0]=element['_id']
        extnode2no2[1]=element['value']
    #print(extnode1h2)
    #print(extnode1h2[1])
    return extnode2no2[1]


def node2insertFA():
    node2db = myClient["Node_2"]
    node2facol = node2db["FA_2"]
    randNum = random.randint(0, 100)
    node2fadata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node2facol.insert_one(node2fadata)


def node2sortLastFA():
    global extnode2fa
    node2insertFA()
    node2db = myClient["Node_2"]
    node2facol = node2db["FA_2"]
    node2fanew = node2facol.find().sort('_id', -1).limit(1)
    #print the dict in node2fanew
    #for element in node2fanew:
    #    print(element)
    for element in node2fanew:
        extnode2fa[0]=element['_id']
        extnode2fa[1]=element['value']
    #print(extnode2fa)
    #print(extnode2fa[1])
    return extnode2fa[1]



def node2insertTOLU():
    node2db= myClient["Node_2"]
    node2tolucol = node2db["Toluene_2"]
    randNum = random.randint(0, 100)
    node2toludata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node2tolucol.insert_one(node2toludata)
    


def node2sortLastTOLU():
    global extnode2tolu
    node2insertTOLU()
    node2db = myClient["Node_2"]
    node2tolucol = node2db["Toluene_2"]
    node2tolunew = node2tolucol.find().sort('_id', -1).limit(1)
    #print the dict in node2tolunew
    #for element in node2tolunew:
    #    print(element)
    for element in node2tolunew:
        extnode2tolu[0]=element['_id']
        extnode2tolu[1]=element['value']
    #print(extnode2tolu)
    #print(extnode2tolu[1])
    return extnode2tolu[1]


def node2insertTemp():
    node2db = myClient["Node_2"]
    node2tempcol = node2db["Temperature_2"]
    randNum = random.randint(15, 40)
    node2tempdata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node2tempcol.insert_one(node2tempdata)
    


def node2sortLastTemp():
    global extnode2temp
    node2insertTemp()
    node2db = myClient["Node_2"]
    node2tempcol = node2db["Temperature_2"]
    node2tempnew = node2tempcol.find().sort('_id', -1).limit(1)
    #print the dict in node2tempnew
    #for element in node2tempnew:
    #    print(element)
    for element in node2tempnew:
        extnode2temp[0]=element['_id']
        extnode2temp[1]=element['value']
    #print(extnode2temp)
    #print(extnode2temp[1])
    return extnode2temp[1]


def node2insertHumid():
    node2db = myClient["Node_2"]
    node2humidcol = node2db["Humidity_2"]
    randNum = random.randint(0, 100)
    node2humiddata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node2humidcol.insert_one(node2humiddata)


def node2sortLastHumid():
    global extnode2humid
    node2insertHumid()
    node2db = myClient["Node_2"]
    node2humidcol = node2db["Humidity_2"]
    node2humidnew = node2humidcol.find().sort('_id', -1).limit(1)
    #print the dict in node2humidnew
    #for element in node2humidnew:
    #    print(element)
    for element in node2humidnew:
        extnode2humid[0]=element['_id']
        extnode2humid[1]=element['value']
    #print(extnode2humid)
    #print(extnode2humid[1])
    return extnode2humid[1]
