import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

node2H2Export = "../backUp/node2/node2H2Export.json"
node2NOTExport = "../backUp/node2/node2NOTExport.json"
node2FAExport = "../backUp/node2/node2FAExport.json"
node2TolExport = "../backUp/node2/node2TolExport.json"
node2TempExport = "../backUp/node2/node2TempExport.json"
node2HumidExport = "../backUp/node2/node2HumidExport.json"
myClient = pymongo.MongoClient("mongodb://localhost:27017/")
time_from = '21/6/21 15:0:0'
time_to = '22/6/21 16:0:0'


def exportH2(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_2"]
    mycol = mydb["Hydrogen_2"]
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
    with open(node2H2Export, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportNOT2(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_2"]
    mycol = mydb["NO2_2"]
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
    with open(node2NOTExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportFA2(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_2"]
    mycol = mydb["FA_2"]
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
    with open(node2FAExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTol2(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_2"]
    mycol = mydb["Toluene_2"]
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
    with open(node2TolExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportTemp2(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_2"]
    mycol = mydb["Temperature_2"]
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
    with open(node2TempExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))


def exportHumid2(time_from, time_to):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    mydb = myClient["Node_2"]
    mycol = mydb["Humidity_2"]
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
    with open(node2HumidExport, 'w', encoding="UTF-8") as f:
        f.write(json.dumps(tempArr, indent=2, sort_keys=True, default=str))
