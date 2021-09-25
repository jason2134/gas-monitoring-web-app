import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
import math
from pymongo import MongoClient

myClient = pymongo.MongoClient("mongodb://localhost:27017/")

# Define empty lists to store history data of H2, NO2, FA, Toluene, Temp, Humid from Nodex Database: H2, NO2, FA, Toluene, Temp, Humid collections
extH1_val = []
extN1_val = []
extFA1_val = []
extT1_val = []
extTemp1_val = []
extHumid1_val = []

# tempDate = []
# Should Define empty lists store history corresponding timestamps of H2, NO2, FA, Toluene, Temp, Humid from Nodex Database: H2, NO2, FA, Toluene, Temp, Humid collections
h1Date = []
n1Date = []
fa1Date = []
t1Date = []
temp1Date = []
humid1Date = []



# selectimeArr = [20, 10, 20]
# targetHour = 0
# targetMin = 0
# targetSec=0

# def selecttimehour():
#     global targetHour
#     targetHour = selectimeArr[0]
#     return targetHour


# def selecttimemin():
#     global targetMin
#     targetMin = selectimeArr[1]
#     return targetMin

# def selecttimesec():
#     global targetSec
#     targetSec = selectimeArr[2]
#     return targetSec

# Target Hour, Minute,Second
targetHour = 0
targetMin = 0
targetSec = 3
# Node_1 Database Hydrogen_1 collection data extraction
# get time_from and time_to from histPost.js, webtest.py

# print out the actual timeStamp in Mongod db to debug


def histH1(time_from, time_to):
    global extH1_val
    histH1_localVal = []
    mydb = myClient["Node_1"]
    mycol = mydb["Hydrogen_1"]
    gtDate = time_from
    tempValue = []
    averageVal = 0
    while(gtDate <= time_to):
        # element array
        tempValue = []
        tempValueFilter = []
        averageVal = 0
        query = mycol.find({"$and": [
            {"time": {"$gte":  gtDate + targetHour*60*60
                      + targetMin*60 + targetSec}}, {
                "time": {"$lt": gtDate + targetHour*60*60
                         + (targetMin+1)*60 + targetSec}}]})
        for element in query:
            tempValue.append(element['value'])
            removeNoneH1 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneH1)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histH1_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histH1_localVal.append(0)
            gtDate = gtDate + 86400
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
    # print(len(histH1_localVal))
    extH1_val = histH1_localVal
    return extH1_val

# Node_1 Database NO2_1 collection data extraction


def histNOT1(time_from, time_to):
    global extN1_val
    histN1_localVal = []
    mydb = myClient["Node_1"]
    mycol = mydb["NO2_1"]
    checkLast = time_to
    gtDate = time_from
    tempValue = []
    averageVal = 0
    while(gtDate <= time_to):
        # element array
        tempValue = []
        tempValueFilter = []
        averageVal = 0
        query = mycol.find({"$and": [
            {"time": {"$gte":  gtDate + targetHour*60*60
                      + targetMin*60 + targetSec}}, {
                "time": {"$lt": gtDate + targetHour*60*60
                         + (targetMin+1)*60 + targetSec}}]})
        for element in query:
            tempValue.append(element['value'])
            removeNoneN1 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneN1)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histN1_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histN1_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histN1_localVal))
    extN1_val = histN1_localVal
    return extN1_val

# Node_1 Database FA_1 collection data extraction


def histFA1(time_from, time_to):
    global extFA1_val
    mydb = myClient["Node_1"]
    mycol = mydb["FA_1"]
    histFA1_localVal = []
    checkLast = time_to
    gtDate = time_from
    tempValue = []
    averageVal = 0
    while(gtDate <= time_to):
        # element array
        tempValue = []
        tempValueFilter = []
        averageVal = 0
        query = mycol.find({"$and": [
            {"time": {"$gte":  gtDate + targetHour*60*60
                      + targetMin*60 + targetSec}}, {
                "time": {"$lt": gtDate + targetHour*60*60
                         + (targetMin+1)*60 + targetSec}}]})
        for element in query:
            tempValue.append(element['value'])
            removeNoneFA1 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneFA1)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histFA1_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histFA1_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histFA1_localVal))
    extFA1_val = histFA1_localVal
    return extFA1_val

# Node_1 Database Toluene_1 collection data extraction


def histTol1(time_from, time_to):
    global extT1_val
    mydb = myClient["Node_1"]
    mycol = mydb["Toluene_1"]
    histT1_localVal = []
    checkLast = time_to
    gtDate = time_from
    tempValue = []
    averageVal = 0
    while(gtDate <= time_to):
        # element array
        tempValue = []
        tempValueFilter = []
        averageVal = 0
        query = mycol.find({"$and": [
            {"time": {"$gte":  gtDate + targetHour*60*60
                      + targetMin*60 + targetSec}}, {
                "time": {"$lt": gtDate + targetHour*60*60
                         + (targetMin+1)*60 + targetSec}}]})
        for element in query:
            tempValue.append(element['value'])
            removeNoneT1 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneT1)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histT1_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histT1_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histT1_localVal))
    extT1_val = histT1_localVal
    return extT1_val

# Node_1 Database Temperature_1 collection data extraction


def histTemp1(time_from, time_to):
    global extTemp1_val
    mydb = myClient["Node_1"]
    mycol = mydb["Temperature_1"]
    histTemp1_localVal = []
    checkLast = time_to
    gtDate = time_from
    tempValue = []
    averageVal = 0
    while(gtDate <= time_to):
        # element array
        tempValue = []
        tempValueFilter = []
        averageVal = 0
        query = mycol.find({"$and": [
            {"time": {"$gte":  gtDate + targetHour*60*60
                      + targetMin*60 + targetSec}}, {
                "time": {"$lt": gtDate + targetHour*60*60
                         + (targetMin+1)*60 + targetSec}}]})
        for element in query:
            tempValue.append(element['value'])
            removeNoneTemp1 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneTemp1)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histTemp1_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histTemp1_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histTemp1_localVal))
    extTemp1_val = histTemp1_localVal
    return extTemp1_val

# Node_1 Database Humidity_1 collection data extraction


def histHumid1(time_from, time_to):
    global extHumid1_val
    mydb = myClient["Node_1"]
    mycol = mydb["Humidity_1"]
    histHumid1_localVal = []
    checkLast = time_to
    gtDate = time_from
    tempValue = []
    averageVal = 0
    while(gtDate <= time_to):
        # element array
        tempValue = []
        tempValueFilter = []
        averageVal = 0
        query = mycol.find({"$and": [
            {"time": {"$gte":  gtDate + targetHour*60*60
                      + targetMin*60 + targetSec}}, {
                "time": {"$lt": gtDate + targetHour*60*60
                         + (targetMin+1)*60 + targetSec}}]})
        for element in query:
            tempValue.append(element['value'])
            removeNoneHumid1 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneHumid1)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histHumid1_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histHumid1_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histHumid1_localVal))
    extHumid1_val = histHumid1_localVal
    return extHumid1_val


def histH1Date(time_from, time_to):
    global h1Date
    histH1Date_localVal = []
    mydb = myClient["Node_1"]
    mycol = mydb["Hydrogen_1"]
    gtDate = time_from
    while (gtDate <= time_to):
        histH1Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    h1Date = histH1Date_localVal
    # print(len(histH1Date_localVal))
    return h1Date


def histNOT1Date(time_from, time_to):
    global n1Date
    mydb = myClient["Node_1"]
    mycol = mydb["NO2_1"]
    gtDate = time_from
    histN1Date_localVal = []
    while (gtDate <= time_to):
        histN1Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    n1Date = histN1Date_localVal
    # print(len(histN1Date_localVal))
    return n1Date


def histFA1Date(time_from, time_to):
    global fa1Date
    mydb = myClient["Node_1"]
    mycol = mydb["FA_1"]
    gtDate = time_from
    histFA1Date_localVal = []
    while (gtDate <= time_to):
        histFA1Date_localVal.append(gtDate + targetHour*60*60
                                    + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    fa1Date = histFA1Date_localVal
    # print(histFA1Date_localVal)
    # print(len(histFA1Date_localVal))
    return fa1Date


def histTol1Date(time_from, time_to):
    global t1Date
    mydb = myClient["Node_1"]
    mycol = mydb["Toluene_1"]
    gtDate = time_from
    histT1Date_localVal = []
    while (gtDate <= time_to):
        histT1Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    t1Date = histT1Date_localVal
    #print(len(histT1Date_localVal))
    return t1Date


def histTemp1Date(time_from, time_to):
    global temp1Date
    mydb = myClient["Node_1"]
    mycol = mydb["Temperature_1"]
    gtDate = time_from
    histTemp1Date_localVal = []
    while (gtDate <= time_to):
        histTemp1Date_localVal.append(gtDate + targetHour*60*60
                                      + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    temp1Date = histTemp1Date_localVal
    #print(len(histTemp1Date_localVal))
    return temp1Date


def histHumid1Date(time_from, time_to):
    global humid1Date
    mydb = myClient["Node_1"]
    mycol = mydb["Humidity_1"]
    gtDate = time_from
    histHumid1Date_localVal = []
    while (gtDate <= time_to):
        histHumid1Date_localVal.append(gtDate + targetHour*60*60
                                       + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    # print(len(histHumid1Date_localVal))
    humid1Date = histHumid1Date_localVal
    return humid1Date


# print(histH1FirstDate(1616630400, 1618844750))
# print(histH1(1616284800, 1619012726))1616942707.0
#print(histHumid1(1616989490.0, 1623142544.0))
#histHumid1FirstDate(1616989490.0, 1623142544.0)
