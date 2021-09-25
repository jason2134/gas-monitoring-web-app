import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

myClient = pymongo.MongoClient("mongodb://localhost:27017/")

extH2_val = []
extN2_val = []
extFA2_val = []
extT2_val = []
extTemp2_val = []
extHumid2_val = []

h2Date = []
n2Date = []
fa2Date = []
t2Date = []
temp2Date = []
humid2Date = []
# Target Hour, Minute,Second
targetHour = 0
targetMin = 0
targetSec = 3


def histH2(time_from, time_to):
    # h2
    global extH2_val
    histH2_localVal = []
    mydb = myClient["Node_2"]
    mycol = mydb["Hydrogen_2"]
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
            removeNoneH2 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneH2)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histH2_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histH2_localVal.append(0)
            gtDate = gtDate + 86400
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
    # print(len(histH1_localVal))
    extH2_val = histH2_localVal
    return extH2_val


def histNOT2(time_from, time_to):
    global extN2_val
    histN2_localVal = []
    mydb = myClient["Node_2"]
    mycol = mydb["NO2_2"]
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
            removeNoneN2 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneN2)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histN2_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histN2_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histN1_localVal))
    extN2_val = histN2_localVal
    return extN2_val


def histFA2(time_from, time_to):
    global extFA2_val
    mydb = myClient["Node_2"]
    mycol = mydb["FA_2"]
    histFA2_localVal = []
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
            removeNoneFA2 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneFA2)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histFA2_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histFA2_localVal.append(0)
            gtDate = gtDate + 86400
    extFA2_val = histFA2_localVal
    return extFA2_val


def histTol2(time_from, time_to):
    global extT2_val
    mydb = myClient["Node_2"]
    mycol = mydb["Toluene_2"]
    histT2_localVal = []
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
            removeNoneT2 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneT2)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histT2_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histT2_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histT1_localVal))
    extT2_val = histT2_localVal
    return extT2_val


def histTemp2(time_from, time_to):
    global extTemp2_val
    mydb = myClient["Node_2"]
    mycol = mydb["Temperature_2"]
    histTemp2_localVal = []
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
            removeNoneTemp2 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneTemp2)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histTemp2_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histTemp2_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histTemp1_localVal))
    extTemp2_val = histTemp2_localVal
    return extTemp2_val


def histHumid2(time_from, time_to):
    global extHumid2_val
    mydb = myClient["Node_2"]
    mycol = mydb["Humidity_2"]
    histHumid2_localVal = []
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
            removeNoneHumid2 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneHumid2)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histHumid2_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histHumid2_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histHumid1_localVal))
    extHumid2_val = histHumid2_localVal
    return extHumid2_val


def histH2Date(time_from, time_to):
    global h2Date
    mydb = myClient["Node_2"]
    mycol = mydb["Hydrogen_2"]
    histH2Date_localVal = []
    gtDate = time_from
    while (gtDate <= time_to):
        histH2Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    h2Date = histH2Date_localVal
    return h2Date


def histNOT2Date(time_from, time_to):
    global n2Date
    mydb = myClient["Node_2"]
    mycol = mydb["NO2_2"]
    gtDate = time_from
    histN2Date_localVal = []
    while (gtDate <= time_to):
        histN2Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    n2Date = histN2Date_localVal
    return n2Date


def histFA2Date(time_from, time_to):
    global fa2Date
    mydb = myClient["Node_2"]
    mycol = mydb["FA_2"]
    gtDate = time_from
    histFA2Date_localVal = []
    while (gtDate <= time_to):
        histFA2Date_localVal.append(gtDate + targetHour*60*60
                                    + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    fa2Date = histFA2Date_localVal
    return fa2Date


def histTol2Date(time_from, time_to):
    global t2Date
    mydb = myClient["Node_2"]
    mycol = mydb["Toluene_2"]
    gtDate = time_from
    histT2Date_localVal = []
    while (gtDate <= time_to):
        histT2Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    t2Date = histT2Date_localVal
    return t2Date


def histTemp2Date(time_from, time_to):
    global temp2Date
    mydb = myClient["Node_2"]
    mycol = mydb["Temperature_2"]
    gtDate = time_from
    histTemp2Date_localVal = []
    while (gtDate <= time_to):
        histTemp2Date_localVal.append(gtDate + targetHour*60*60
                                      + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    temp2Date = histTemp2Date_localVal
    return temp2Date


def histHumid2Date(time_from, time_to):
    global humid2Date
    mydb = myClient["Node_2"]
    mycol = mydb["Humidity_2"]
    gtDate = time_from
    histHumid2Date_localVal = []
    while (gtDate <= time_to):
        histHumid2Date_localVal.append(gtDate + targetHour*60*60
                                       + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    # print(len(histHumid1Date_localVal))
    humid2Date = histHumid2Date_localVal
    return humid2Date


#print(histH2FirstDate(1616630400, 1618844750))
