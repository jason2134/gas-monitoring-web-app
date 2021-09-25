import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

node3H2Export = "../backUp/node3/node3H2Export.json"
node3NOTExport = "../backUp/node3/node3NOTExport.json"
node3FAExport = "../backUp/node3/node3FAExport.json"
node3TolExport = "../backUp/node3/node3TolExport.json"
node3TempExport = "../backUp/node3/node3TempExport.json"
node3HumidExport = "../backUp/node3/node3HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")
time_from = '21/6/21 15:0:0'
time_to = '22/6/21 16:0:0'


def exportH3(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_3"]
    mycol = mydb["Hydrogen_3"]
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
    with open(node3H2Export, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportNOT3(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_3"]
    mycol = mydb["NO2_3"]
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
    with open(node3NOTExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportFA3(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_3"]
    mycol = mydb["FA_3"]
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
    with open(node3FAExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTol3(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_3"]
    mycol = mydb["Toluene_3"]
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
    with open(node3TolExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTemp3(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_3"]
    mycol = mydb["Temperature_3"]
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
    with open(node3TempExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportHumid3(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_3"]
    mycol = mydb["Humidity_3"]
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
    with open(node3HumidExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))
