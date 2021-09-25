import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient
node1H2Export = "../backUp/node1/node1H2Export.json"
node1NOTExport = "../backUp/node1/node1NOTExport.json"
node1FAExport = "../backUp/node1/node1FAExport.json"
node1TolExport = "../backUp/node1/node1TolExport.json"
node1TempExport = "../backUp/node1/node1TempExport.json"
node1HumidExport = "../backUp/node1/node1HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

#Define time_from string and time_to string as export function input
#time_from and time_to are HK local timestamp
time_from = '21/6/21 15:0:0'
time_to = '22/6/21 16:0:0'


def exportH1(time_from, time_to):
    #use datetime.strptime function to convert time_from and time_to into a struct_time(which is a data structure in datetime module) 
    #'format' needs to be the same as input string
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    #use the result to convert again into timestamp for export criteria
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_1"]
    mycol = mydb["Hydrogen_1"]
    #create an empty list to temperarily store JSON data from the database
    tempArr = []
    # print(time_fromStamp)
    query = mycol.find({"$and": [
        {"time": {"$gte": time_fromStamp}}, {
            "time": {"$lt": time_toStamp}}]})
    for element in query:
        element['_id'] = re.findall(
            "'(.*)'", element.get('_id').__repr__())[0]
        result = element.pop('_id', None) #this is used to remove all the '_id' into result list, so that in this tempArr wont have '_id' value
        tempArr.append(element)
    with open(node1H2Export, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))
    #1 indent means 1 space, if we type "tab", it equals to 4 space 


def exportNOT1(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_1"]
    mycol = mydb["NO2_1"]
    tempArr = []
    # print(time_fromStamp)
    query = mycol.find({"$and": [
        {"time": {"$gte": time_fromStamp}}, {
            "time": {"$lt": time_toStamp}}]})
    for element in query:
        element['_id'] = re.findall(
            "'(.*)'", element.get('_id').__repr__())[0]
        result = element.pop('_id', None)
        tempArr.append(element)
    with open(node1NOTExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportFA1(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_1"]
    mycol = mydb["FA_1"]
    tempArr = []
    # print(time_fromStamp)
    query = mycol.find({"$and": [
        {"time": {"$gte": time_fromStamp}}, {
            "time": {"$lt": time_toStamp}}]})
    for element in query:
        element['_id'] = re.findall(
            "'(.*)'", element.get('_id').__repr__())[0]
        result = element.pop('_id', None)
        tempArr.append(element)
    with open(node1FAExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTol1(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_1"]
    mycol = mydb["Toluene_1"]
    tempArr = []
    # print(time_fromStamp)
    query = mycol.find({"$and": [
        {"time": {"$gte": time_fromStamp}}, {
            "time": {"$lt": time_toStamp}}]})
    for element in query:
        element['_id'] = re.findall(
            "'(.*)'", element.get('_id').__repr__())[0]
        result = element.pop('_id', None)
        tempArr.append(element)
    with open(node1TolExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTemp1(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_1"]
    mycol = mydb["Temperature_1"]
    tempArr = []
    # print(time_fromStamp)
    query = mycol.find({"$and": [
        {"time": {"$gte": time_fromStamp}}, {
            "time": {"$lt": time_toStamp}}]})
    for element in query:
        element['_id'] = re.findall(
            "'(.*)'", element.get('_id').__repr__())[0]
        result = element.pop('_id', None)
        tempArr.append(element)
    with open(node1TempExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportHumid1(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_1"]
    mycol = mydb["Humidity_1"]
    tempArr = []
    # print(time_fromStamp)
    query = mycol.find({"$and": [
        {"time": {"$gte": time_fromStamp}}, {
            "time": {"$lt": time_toStamp}}]})
    for element in query:
        element['_id'] = re.findall(
            "'(.*)'", element.get('_id').__repr__())[0]
        result = element.pop('_id', None)
        tempArr.append(element)
    with open(node1HumidExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


exportH1(time_from, time_to)
