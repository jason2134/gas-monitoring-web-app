import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

node4H2Export = "../backUp/node4/node4H2Export.json"
node4NOTExport = "../backUp/node4/node4NOTExport.json"
node4FAExport = "../backUp/node4/node4FAExport.json"
node4TolExport = "../backUp/node4/node4TolExport.json"
node4TempExport = "../backUp/node4/node4TempExport.json"
node4HumidExport = "../backUp/node4/node4HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")
time_from = '21/6/21 15:0:0'
time_to = '22/6/21 16:0:0'


def exportH4(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_4"]
    mycol = mydb["Hydrogen_4"]
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
    with open(node4H2Export, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportNOT4(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_4"]
    mycol = mydb["NO2_4"]
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
    with open(node4NOTExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportFA4(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_4"]
    mycol = mydb["FA_4"]
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
    with open(node4FAExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTol4(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_4"]
    mycol = mydb["Toluene_4"]
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
    with open(node4TolExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTemp4(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_4"]
    mycol = mydb["Temperature_4"]
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
    with open(node4TempExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportHumid4(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_4"]
    mycol = mydb["Humidity_4"]
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
    with open(node4HumidExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))
