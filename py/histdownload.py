import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient
import sys
myClient = pymongo.MongoClient("mongodb://localhost:27017/")


def histExportData(time_from, time_to, dbName, colName):
    temp = []
    finalArr = []
    mydb = myClient[dbName]
    mycol = mydb[colName]
    query = mycol.find({"$and": [
        {"time": {"$gte":  time_from}}, {
            "time": {"$lt": time_to}}]})
    for element in query:
        temp.append(element['value'])
    removeNone = filter(None.__ne__, temp)
    tempFilter = list(removeNone)
    finalArr = tempFilter
    return finalArr


def histExportDate(time_from, time_to, dbName, colName):
    tempDate = []
    finalArrDate = []
    mydb = myClient[dbName]
    mycol = mydb[colName]
    query = mycol.find({"$and": [
        {"time": {"$gte":  time_from}}, {
            "time": {"$lt": time_to}}]})
    for element in query:
        tempDate.append(element['time'])
    removeNone = filter(None.__ne__, tempDate)
    tempFilter = list(removeNone)
    finalArrDate = tempFilter
    return finalArrDate


#print(histExportData(1616740660.0, 1616741655.0, 'Node_1', 'Hydrogen_1'))
