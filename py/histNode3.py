
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

extH3_val = []
extN3_val = []
extFA3_val = []
extT3_val = []
extTemp3_val = []
extHumid3_val = []

h3Date = []
n3Date = []
fa3Date = []
t3Date = []
temp3Date = []
humid3Date = []
# Target Hour, Minute,Second
targetHour = 0
targetMin = 0
targetSec = 3


def histH3(time_from, time_to):
    # h2
    global extH3_val
    mydb = myClient["Node_3"]
    mycol = mydb["Hydrogen_3"]
    histH3_localVal = []
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
            removeNoneH3 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneH3)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histH3_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histH3_localVal.append(0)
            gtDate = gtDate + 86400
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
    # print(len(histH1_localVal))
    extH3_val = histH3_localVal
    return extH3_val


def histNOT3(time_from, time_to):
    global extN3_val
    mydb = myClient["Node_3"]
    mycol = mydb["NO2_3"]
    histN3_localVal = []
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
            removeNoneN3 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneN3)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histN3_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histN3_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histN1_localVal))
    extN3_val = histN3_localVal
    return extN3_val


def histFA3(time_from, time_to):
    global extFA3_val
    mydb = myClient["Node_3"]
    mycol = mydb["FA_3"]
    histFA3_localVal = []
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
            removeNoneFA3 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneFA3)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histFA3_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histFA3_localVal.append(0)
            gtDate = gtDate + 86400
    extFA3_val = histFA3_localVal
    return extFA3_val


def histTol3(time_from, time_to):
    global extT3_val
    mydb = myClient["Node_3"]
    mycol = mydb["Toluene_3"]
    histT3_localVal = []
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
            removeNoneT3 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneT3)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histT3_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histT3_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histT1_localVal))
    extT3_val = histT3_localVal
    return extT3_val


def histTemp3(time_from, time_to):
    global extTemp3_val
    mydb = myClient["Node_3"]
    mycol = mydb["Temperature_3"]
    histTemp3_localVal = []
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
            removeNoneTemp3 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneTemp3)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histTemp3_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histTemp3_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histTemp1_localVal))
    extTemp3_val = histTemp3_localVal
    return extTemp3_val


def histHumid3(time_from, time_to):
    global extHumid3_val
    mydb = myClient["Node_3"]
    mycol = mydb["Humidity_3"]
    histHumid3_localVal = []
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
            removeNoneHumid3 = filter(None.__ne__, tempValue)
            tempValueFilter = list(removeNoneHumid3)
            # print(element)
        # print filtered array
        # print(tempValueFilter)
        if (len(tempValueFilter) != 0):
            # print length of the list of tempValueFilter if is not 0
            # print(len(tempValueFilter))
            averageVal = sum(tempValueFilter)/len(tempValueFilter)
            histHumid3_localVal.append(round(averageVal))
            gtDate = gtDate + 86400
        else:
            # print length of the list of tempValueFilter if is 0
            # print(len(tempValueFilter))
            histHumid3_localVal.append(0)
            gtDate = gtDate + 86400
    # print(len(histHumid1_localVal))
    extHumid3_val = histHumid3_localVal
    return extHumid3_val


def histH3Date(time_from, time_to):
    global h3Date
    mydb = myClient["Node_3"]
    mycol = mydb["Hydrogen_3"]
    histH3Date_localVal = []
    gtDate = time_from
    while (gtDate <= time_to):
        histH3Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    h3Date = histH3Date_localVal
    return h3Date


def histNOT3Date(time_from, time_to):
    global n3Date
    mydb = myClient["Node_3"]
    mycol = mydb["NO2_3"]
    gtDate = time_from
    histN3Date_localVal = []
    while (gtDate <= time_to):
        histN3Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    n3Date = histN3Date_localVal
    return n3Date


def histFA3Date(time_from, time_to):
    global fa3Date
    mydb = myClient["Node_3"]
    mycol = mydb["FA_3"]
    gtDate = time_from
    histFA3Date_localVal = []
    while (gtDate <= time_to):
        histFA3Date_localVal.append(gtDate + targetHour*60*60
                                    + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    fa3Date = histFA3Date_localVal
    return fa3Date


def histTol3Date(time_from, time_to):
    global t3Date
    mydb = myClient["Node_3"]
    mycol = mydb["Toluene_3"]
    gtDate = time_from
    histT3Date_localVal = []
    while (gtDate <= time_to):
        histT3Date_localVal.append(gtDate + targetHour*60*60
                                   + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    t3Date = histT3Date_localVal
    return t3Date


def histTemp3Date(time_from, time_to):
    global temp3Date
    mydb = myClient["Node_3"]
    mycol = mydb["Temperature_3"]
    gtDate = time_from
    histTemp3Date_localVal = []
    while (gtDate <= time_to):
        histTemp3Date_localVal.append(gtDate + targetHour*60*60
                                      + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    temp3Date = histTemp3Date_localVal
    return temp3Date


def histHumid3Date(time_from, time_to):
    global humid3Date
    mydb = myClient["Node_3"]
    mycol = mydb["Humidity_3"]
    gtDate = time_from
    histHumid3Date_localVal = []
    while (gtDate <= time_to):
        histHumid3Date_localVal.append(gtDate + targetHour*60*60
                                       + (targetMin+1)*60 + targetSec)
    # print the list array of every average value inside one query search of the loop, must be outside of while loop
    # print(histH1_localVal)
        gtDate = gtDate + 86400
    # print(len(histHumid1Date_localVal))
    humid3Date = histHumid3Date_localVal
    return humid3Date
