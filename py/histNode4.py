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

extH4_val = []
extN4_val = []
extFA4_val = []
extT4_val = []
extTemp4_val = []
extHumid4_val = []

h4Date = []
n4Date = []
fa4Date = []
t4Date = []
temp4Date = []
humid4Date = []
# Target Hour, Minute,Second
targetHour = 0
targetMin = 0
targetSec = 3


def histH4(time_from, time_to):
    # h4
    global extH4_val
    mydb = myClient["Node_4"]
    mycol = mydb["Hydrogen_4"]
    histH4_localVal = []
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
            removeNoneH4 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneH4)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histH4_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histH4_localVal.append(0)
            gtDate = gtDate + 86400
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
    # print(len(histH1_localVal))
    extH4_val = histH4_localVal
    return extH4_val


def histNOT4(time_from, time_to):
    global extN4_val
    mydb = myClient["Node_4"]
    mycol = mydb["NO2_4"]
    histN4_localVal = []
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
            removeNoneN4 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneN4)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histN4_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histN4_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histN1_localVal))
    extN4_val = histN4_localVal
    return extN4_val


def histFA4(time_from, time_to):
    global extFA4_val
    mydb = myClient["Node_4"]
    mycol = mydb["FA_4"]
    histFA4_localVal = []
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
            removeNoneFA4 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneFA4)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histFA4_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histFA4_localVal.append(0)
            gtDate = gtDate + 86400
    extFA4_val = histFA4_localVal
    return extFA4_val


def histTol4(time_from, time_to):
    global extT4_val
    mydb = myClient["Node_4"]
    mycol = mydb["Toluene_4"]
    histT4_localVal = []
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
            removeNoneT4 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneT4)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histT4_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histT4_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histT1_localVal))
    extT4_val = histT4_localVal
    return extT4_val


def histTemp4(time_from, time_to):
    global extTemp4_val
    mydb = myClient["Node_4"]
    mycol = mydb["Temperature_4"]
    checkLast = time_to
    histTemp4_localVal = []
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
            removeNoneTemp4 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneTemp4)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histTemp4_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histTemp4_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histTemp1_localVal))
    extTemp4_val = histTemp4_localVal
    return extTemp4_val


def histHumid4(time_from, time_to):
    global extHumid4_val
    mydb = myClient["Node_4"]
    mycol = mydb["Humidity_4"]
    histHumid4_localVal = []
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
            removeNoneHumid4 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneHumid4)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histHumid4_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histHumid4_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histHumid1_localVal))
    extHumid4_val = histHumid4_localVal
    return extHumid4_val


def histH4Date(time_from, time_to):
    global h4Date
    mydb = myClient["Node_4"]
    mycol = mydb["Hydrogen_4"]
    histH4Date_localVal = []
    gtDate = time_from
    while (gtDate <= time_to):
        histH4Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    h4Date = histH4Date_localVal
    return h4Date


def histNOT4Date(time_from, time_to):
    global n4Date
    mydb = myClient["Node_4"]
    mycol = mydb["NO2_4"]
    gtDate = time_from
    histN4Date_localVal = []
    while (gtDate <= time_to):
        histN4Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    n4Date = histN4Date_localVal
    return n4Date


def histFA4Date(time_from, time_to):
    global fa4Date
    mydb = myClient["Node_4"]
    mycol = mydb["FA_4"]
    gtDate = time_from
    histFA4Date_localVal = []
    while (gtDate <= time_to):
        histFA4Date_localVal.append(gtDate + targetHour*60*60
                                    + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    fa4Date = histFA4Date_localVal
    return fa4Date


def histTol4Date(time_from, time_to):
    global t4Date
    mydb = myClient["Node_4"]
    mycol = mydb["Toluene_4"]
    gtDate = time_from
    histT4Date_localVal = []
    while (gtDate <= time_to):
        histT4Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    t4Date = histT4Date_localVal
    return t4Date


def histTemp4Date(time_from, time_to):
    global temp4Date
    mydb = myClient["Node_4"]
    mycol = mydb["Temperature_4"]
    gtDate = time_from
    histTemp4Date_localVal = []
    while (gtDate <= time_to):
        histTemp4Date_localVal.append(gtDate + targetHour*60*60
                                      + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    temp4Date = histTemp4Date_localVal
    return temp4Date


def histHumid4Date(time_from, time_to):
    global humid4Date
    mydb = myClient["Node_4"]
    mycol = mydb["Humidity_4"]
    gtDate = time_from
    histHumid4Date_localVal = []
    while (gtDate <= time_to):
        histHumid4Date_localVal.append(gtDate + targetHour*60*60
                                       + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    # print(len(histHumid1Date_localVal))
    humid4Date = histHumid4Date_localVal
    return humid4Date


#print(histHumid4FirstDate(1616630400, 1618844750))
