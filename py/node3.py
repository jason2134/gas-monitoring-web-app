import os
import pymongo
import struct
import json
from datetime import datetime
import time
import random
from pymongo import MongoClient

#Define empty lists
extnode3h2 = [0,0]
extnode3no2 = [0,0]
extnode3fa = [0,0]
extnode3tolu = [0,0]
extnode3temp = [0,0]
extnode3humid = [0,0]

#for connection between python client and local database server(ip: 127.0.0.1 port:27017)
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

#insert a real time node3 H2 data into MongoDB
def node3insertH2():
    node3db = myClient["Node_3"] #create a Node_3 DB
    node3h2col = node3db["Hydrogen_3"] #create a collection in Node_3 DB
    randNum = random.randint(0, 100)
    node3h2data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum} #create a py dict format
    node3h2col.insert_one(node3h2data) #insert a py dict format into mongodb which can be recognized as json by pymongo
    
def node3sortLastH2():
    global extnode3h2
    node3insertH2()
    node3db = myClient["Node_3"]
    node3h2col = node3db["Hydrogen_3"]
    node3h2new = node3h2col.find().sort('_id', -1).limit(1) #according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
                                                            #This is a cursor command, it is used for describing operation.
    #print the dict in node3h2new
    #for element in node3h2new:
    #    print(element)
    #create a list, using append method to append the list, the element is accessed by using dict method.
    for element in node3h2new:
        extnode3h2[0]=element['_id']
        extnode3h2[1]=element['value']
    #print(extnode3temp)
    #print(extnode3temp[1])
    return extnode3h2[1]

def node3insertNO2():
    node3db = myClient["Node_3"]
    node3no2col = node3db["NO2_3"]
    randNum = random.randint(0, 100)
    node3no2data = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node3no2col.insert_one(node3no2data)
    #myClient.close()  //pls dont close during accessing


def node3sortLastNO2():
    global extnode3no2
    node3insertNO2()
    node3db = myClient["Node_3"]
    node3no2col = node3db["NO2_3"]
    node3no2new = node3no2col.find().sort('_id', -1).limit(1) #according to _id, conduct reverse order ranking. limit(1) means return 1 element in dict
    #print the dict in node3no2new
    #for element in node3no2new:
    #    print(element)
    for element in node3no2new:
        extnode3no2[0]=element['_id']
        extnode3no2[1]=element['value']
    #print(extnode3no2)
    #print(extnode3no2[1])
    return extnode3no2[1]


def node3insertFA():
    node3db = myClient["Node_3"]
    node3facol = node3db["FA_3"]
    randNum = random.randint(0, 100)
    node3fadata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node3facol.insert_one(node3fadata)


def node3sortLastFA():
    global extnode3fa
    node3insertFA()
    node3db = myClient["Node_3"]
    node3facol = node3db["FA_3"]
    node3fanew = node3facol.find().sort('_id', -1).limit(1)
    #print the dict in node3fanew
    #for element in node3fanew:
    #    print(element)
    for element in node3fanew:
        extnode3fa[0]=element['_id']
        extnode3fa[1]=element['value']
    #print(extnode3fa)
    #print(extnode3fa[1])
    return extnode3fa[1]



def node3insertTOLU():
    node3db= myClient["Node_3"]
    node3tolucol = node3db["Toluene_3"]
    randNum = random.randint(0, 100)
    node3toludata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node3tolucol.insert_one(node3toludata)



def node3sortLastTOLU():
    global extnode3tolu
    node3insertTOLU()
    node3db = myClient["Node_3"]
    node3tolucol = node3db["Toluene_3"]
    node3tolunew = node3tolucol.find().sort('_id', -1).limit(1)
    #print the dict in node3tolunew
    #for element in node3tolunew:
    #    print(element)
    for element in node3tolunew:
        extnode3tolu[0]=element['_id']
        extnode3tolu[1]=element['value']
    #print(extnode3tolu)
    #print(extnode3tolu[1])
    return extnode3tolu[1]


def node3insertTemp():
    node3db = myClient["Node_3"]
    node3tempcol = node3db["Temperature_3"]
    randNum = random.randint(15, 40)
    node3tempdata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node3tempcol.insert_one(node3tempdata)
    


def node3sortLastTemp():
    global extnode3temp
    node3insertTemp()
    node3db = myClient["Node_3"]
    node3tempcol = node3db["Temperature_3"]
    node3tempnew = node3tempcol.find().sort('_id', -1).limit(1)
    #print the dict in node3tempnew
    #for element in node3tempnew:
    #    print(element)
    for element in node3tempnew:
        extnode3temp[0]=element['_id']
        extnode3temp[1]=element['value']
    #print(extnode3temp)
    #print(extnode3temp[1])
    return extnode3temp[1]


def node3insertHumid():
    node3db = myClient["Node_3"]
    node3humidcol = node3db["Humidity_3"]
    randNum = random.randint(0, 100)
    node3humiddata = {'time': datetime.timestamp(
        datetime.now().replace(microsecond=0)), 'value': randNum}
    node3humidcol.insert_one(node3humiddata)


def node3sortLastHumid():
    global extnode3humid
    node3insertHumid()
    node3db = myClient["Node_3"]
    node3humidcol = node3db["Humidity_3"]
    node3humidnew = node3humidcol.find().sort('_id', -1).limit(1)
     #print the dict in node3tempnew
    #for element in node3humidnew:
    #    print(element)
    for element in node3humidnew:
        extnode3humid[0]=element['_id']
        extnode3humid[1]=element['value']
    #print(extnode3temp)
    #print(extnode3temp[1])
    return extnode3humid[1]
