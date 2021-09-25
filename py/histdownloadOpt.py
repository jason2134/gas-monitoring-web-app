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
import py.histdownload
sys.path.append(
    "/Users/jasonwong/Desktop/STP_SystemV4.5_UpdateVersion_Local_Revising/py")

exportData = {}
exportTime = {}


def histExportFinalData(time_from, time_to):
    global exportData
    data = {
        'histExtH1': py.histdownload.histExportData(time_from, time_to, "Node_1", "Hydrogen_1"),
        'histExtNOT1': py.histdownload.histExportData(time_from, time_to, "Node_1", "NO2_1"),
        'histExtFA1': py.histdownload.histExportData(time_from, time_to, "Node_1", "FA_1"),
        'histExtTol1': py.histdownload.histExportData(time_from, time_to, "Node_1", "Toluene_1"),
        'histExtTemp1': py.histdownload.histExportData(time_from, time_to, "Node_1", "Temperature_1"),
        'histExtHumid1': py.histdownload.histExportData(time_from, time_to, "Node_1", "Humidity_1"),

        'histExtH2': py.histdownload.histExportData(time_from, time_to, "Node_2", "Hydrogen_2"),
        'histExtNOT2': py.histdownload.histExportData(time_from, time_to, "Node_2", "NO2_2"),
        'histExtFA2': py.histdownload.histExportData(time_from, time_to, "Node_2", "FA_2"),
        'histExtTol2': py.histdownload.histExportData(time_from, time_to, "Node_2", "Toluene_2"),
        'histExtTemp2': py.histdownload.histExportData(time_from, time_to, "Node_2", "Temperature_2"),
        'histExtHumid2': py.histdownload.histExportData(time_from, time_to, "Node_2", "Humidity_2"),

        'histExtH3': py.histdownload.histExportData(time_from, time_to, "Node_3", "Hydrogen_3"),
        'histExtNOT3': py.histdownload.histExportData(time_from, time_to, "Node_3", "NO2_3"),
        'histExtFA3': py.histdownload.histExportData(time_from, time_to, "Node_3", "FA_3"),
        'histExtTol3': py.histdownload.histExportData(time_from, time_to, "Node_3", "Toluene_3"),
        'histExtTemp3': py.histdownload.histExportData(time_from, time_to, "Node_3", "Temperature_3"),
        'histExtHumid3': py.histdownload.histExportData(time_from, time_to, "Node_3", "Humidity_3"),

        'histExtH4': py.histdownload.histExportData(time_from, time_to, "Node_4", "Hydrogen_4"),
        'histExtNOT4': py.histdownload.histExportData(time_from, time_to, "Node_4", "NO2_4"),
        'histExtFA4': py.histdownload.histExportData(time_from, time_to, "Node_4", "FA_4"),
        'histExtTol4': py.histdownload.histExportData(time_from, time_to, "Node_4", "Toluene_4"),
        'histExtTemp4': py.histdownload.histExportData(time_from, time_to, "Node_4", "Temperature_4"),
        'histExtHumid4': py.histdownload.histExportData(time_from, time_to, "Node_4", "Humidity_4"),
    }
    exportData = json.dumps(data)
    return exportData


def histExportFinalDate(time_from, time_to):
    global exportTime
    time = {
        'histExtTimeH1': py.histdownload.histExportDate(time_from, time_to, "Node_1", "Hydrogen_1"),
        'histExtTimeNOT1': py.histdownload.histExportDate(time_from, time_to, "Node_1", "NO2_1"),
        'histExtTimeFA1': py.histdownload.histExportDate(time_from, time_to, "Node_1", "FA_1"),
        'histExtTimeTol1': py.histdownload.histExportDate(time_from, time_to, "Node_1", "Toluene_1"),
        'histExtTimeTemp1': py.histdownload.histExportDate(time_from, time_to, "Node_1", "Temperature_1"),
        'histExtTimeHumid1': py.histdownload.histExportDate(time_from, time_to, "Node_1", "Humidity_1"),

        'histExtTimeH2': py.histdownload.histExportDate(time_from, time_to, "Node_2", "Hydrogen_2"),
        'histExtTimeNOT2': py.histdownload.histExportDate(time_from, time_to, "Node_2", "NO2_2"),
        'histExtTimeFA2': py.histdownload.histExportDate(time_from, time_to, "Node_2", "FA_2"),
        'histExtTimeTol2': py.histdownload.histExportDate(time_from, time_to, "Node_2", "Toluene_2"),
        'histExtTimeTemp2': py.histdownload.histExportDate(time_from, time_to, "Node_2", "Temperature_2"),
        'histExtTimeHumid2': py.histdownload.histExportDate(time_from, time_to, "Node_2", "Humidity_2"),

        'histExtTimeH3': py.histdownload.histExportDate(time_from, time_to, "Node_3", "Hydrogen_3"),
        'histExtTimeNOT3': py.histdownload.histExportDate(time_from, time_to, "Node_3", "NO2_3"),
        'histExtTimeFA3': py.histdownload.histExportDate(time_from, time_to, "Node_3", "FA_3"),
        'histExtTimeTol3': py.histdownload.histExportDate(time_from, time_to, "Node_3", "Toluene_3"),
        'histExtTimeTemp3': py.histdownload.histExportDate(time_from, time_to, "Node_3", "Temperature_3"),
        'histExtTimeHumid3': py.histdownload.histExportDate(time_from, time_to, "Node_3", "Humidity_3"),

        'histExtTimeH4': py.histdownload.histExportDate(time_from, time_to, "Node_4", "Hydrogen_4"),
        'histExtTimeNOT4': py.histdownload.histExportDate(time_from, time_to, "Node_4", "NO2_4"),
        'histExtTimeFA4': py.histdownload.histExportDate(time_from, time_to, "Node_4", "FA_4"),
        'histExtTimeTol4': py.histdownload.histExportDate(time_from, time_to, "Node_4", "Toluene_4"),
        'histExtTimeTemp4': py.histdownload.histExportDate(time_from, time_to, "Node_4", "Temperature_4"),
        'histExtTimeHumid4': py.histdownload.histExportDate(time_from, time_to, "Node_4", "Humidity_4"),
    }
    exportTime = json.dumps(time)
    return exportTime
