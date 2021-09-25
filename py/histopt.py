import json
from datetime import datetime
import time
import re
import py.histNode1
import py.histNode2
import py.histNode3
import py.histNode4
import os
import sys
sys.path.append(
    "/Users/jasonwong/Desktop/STP_SystemV4.5_UpdateVersion_Local_Revising/py")

# Create two empty dicts in python, to store history data and corresponding timestamp
convData = {}
convTime = {}

# function hisfinalData() is used to include all the history data of H2, NO2, FA, Toluene, Temp, and Humidity returned from NodeX in the database


def histfinalData(time_from, time_to):
    global convData
    data = {
        # Node 1 history data, py.histNode1.histxx() returns a JSON array(defined in python list), and this JSON array is assigned with a corresponding key
        # six keys for Node 1 history data: h, n, fa, t, temp, humid
        'histh1': py.histNode1.histH1(time_from, time_to),
        'histnot1': py.histNode1.histNOT1(time_from, time_to),
        'histfa1': py.histNode1.histFA1(time_from, time_to),
        'histtol1': py.histNode1.histTol1(time_from, time_to),
        'histtemp1': py.histNode1.histTemp1(time_from, time_to),
        'histhumid1': py.histNode1.histHumid1(time_from, time_to),

        # Node 2 history data, py.histNode2.histxx() returns a JSON array(defined in python list), and this JSON array is assigned with a corresponding key
        # six keys for Node 2 history data: h, n, fa, t, temp, humid
        'histh2': py.histNode2.histH2(time_from, time_to),
        'histnot2': py.histNode2.histNOT2(time_from, time_to),
        'histfa2': py.histNode2.histFA2(time_from, time_to),
        'histtol2': py.histNode2.histTol2(time_from, time_to),
        'histtemp2': py.histNode2.histTemp2(time_from, time_to),
        'histhumid2': py.histNode2.histHumid2(time_from, time_to),

        # Node 3 history data, py.histNode3.histxx() returns a JSON array(defined in python list), and this JSON array is assigned with a corresponding key
        # six keys for Node 3 history data: h, n, fa, t, temp, humid
        'histh3': py.histNode3.histH3(time_from, time_to),
        'histnot3': py.histNode3.histNOT3(time_from, time_to),
        'histfa3': py.histNode3.histFA3(time_from, time_to),
        'histtol3': py.histNode3.histTol3(time_from, time_to),
        'histtemp3': py.histNode3.histTemp3(time_from, time_to),
        'histhumid3': py.histNode3.histHumid3(time_from, time_to),

        # Node 4 history data, py.histNode4.histxx() returns a JSON array(defined in python list), and this JSON array is assigned with a corresponding key
        # six keys for Node 4 history data: h, n, fa, t, temp, humid
        'histh4': py.histNode4.histH4(time_from, time_to),
        'histnot4': py.histNode4.histNOT4(time_from, time_to),
        'histfa4': py.histNode4.histFA4(time_from, time_to),
        'histtol4': py.histNode4.histTol4(time_from, time_to),
        'histtemp4': py.histNode4.histTemp4(time_from, time_to),
        'histhumid4': py.histNode4.histHumid4(time_from, time_to)
    }
    convData = json.dumps(data)
    return convData


def histfinalTimeStamp(time_from, time_to):
    global convTime
    time = {
        # Node 1 history data starting timestamp stored in database which is closest to time_from,
        # py.histNode1.histxx() returns a JSON number(defined in python as a variable only), and this JSON number is assigned with a corresponding key
        # six keys for Node 1 history data starting timestamp: h, n, fa, t, temp, humid
        'histTimeh1': py.histNode1.histH1Date(time_from, time_to),
        'histTimenot1': py.histNode1.histNOT1Date(time_from, time_to),
        'histTimefa1': py.histNode1.histFA1Date(time_from, time_to),
        'histTimetol1': py.histNode1.histTol1Date(time_from, time_to),
        'histTimetemp1': py.histNode1.histTemp1Date(time_from, time_to),
        'histTimehumid1': py.histNode1.histHumid1Date(time_from, time_to),

        # Node 2 history data starting timestamp stored in database which is closest to time_from,
        # py.histNode2.histxx() returns a JSON number(defined in python as a variable only), and this JSON number is assigned with a corresponding key
        # six keys for Node 2 history data starting timestamp: h, n, fa, t, temp, humid
        'histTimeh2': py.histNode2.histH2Date(time_from, time_to),
        'histTimenot2': py.histNode2.histNOT2Date(time_from, time_to),
        'histTimefa2': py.histNode2.histFA2Date(time_from, time_to),
        'histTimetol2': py.histNode2.histTol2Date(time_from, time_to),
        'histTimetemp2': py.histNode2.histTemp2Date(time_from, time_to),
        'histTimehumid2': py.histNode2.histHumid2Date(time_from, time_to),

        # Node 3 history data starting timestamp stored in database which is closest to time_from,
        # py.histNode3.histxx() returns a JSON number(defined in python as a variable only), and this JSON number is assigned with a corresponding key
        # six keys for Node 3 history data starting timestamp: h, n, fa, t, temp, humid
        'histTimeh3': py.histNode3.histH3Date(time_from, time_to),
        'histTimenot3': py.histNode3.histNOT3Date(time_from, time_to),
        'histTimefa3': py.histNode3.histFA3Date(time_from, time_to),
        'histTimetol3': py.histNode3.histTol3Date(time_from, time_to),
        'histTimetemp3': py.histNode3.histTemp3Date(time_from, time_to),
        'histTimehumid3': py.histNode3.histHumid3Date(time_from, time_to),

        # Node 4 history data starting timestamp stored in database which is closest to time_from,
        # py.histNode4.histxx() returns a JSON number(defined in python as a variable only), and this JSON number is assigned with a corresponding key
        # six keys for Node 4 history data starting timestamp: h, n, fa, t, temp, humid
        'histTimeh4': py.histNode4.histH4Date(time_from, time_to),
        'histTimenot4': py.histNode4.histNOT4Date(time_from, time_to),
        'histTimefa4': py.histNode4.histFA4Date(time_from, time_to),
        'histTimetol4': py.histNode4.histTol4Date(time_from, time_to),
        'histTimetem4': py.histNode4.histTemp4Date(time_from, time_to),
        'histTimehumid4': py.histNode4.histHumid4Date(time_from, time_to)
    }
    convTime = json.dumps(time)
    return convTime
