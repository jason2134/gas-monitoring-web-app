import os
import pymongo
import struct
import json
import csv
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient

#Define saved file path in the computer, use relative path when they are all in a folder
# Node1
node1H1Export = "../backUp/node1/node1H1Export.json"
node1NOT1Export = "../backUp/node1/node1NOT1Export.json"
node1FA1Export = "../backUp/node1/node1FA1Export.json"
node1Tol1Export = "../backUp/node1/node1Tol1Export.json"
node1Temp1Export = "../backUp/node1/node1Temp1Export.json"
node1Humid1Export = "../backUp/node1/node1Humid1Export.json"
# Node 2
node2H2Export = "../backUp/node2/node2H2Export.json"
node2NOT2Export = "../backUp/node2/node2NOT2Export.json"
node2FA2Export = "../backUp/node2/node2FA2Export.json"
node2Tol2Export = "../backUp/node2/node2Tol2Export.json"
node2Temp2Export = "../backUp/node2/node2Temp2Export.json"
node2Humid2Export = "../backUp/node2/node2Humid2Export.json"
# Node 3
node3H3Export = "../backUp/node3/node3H3Export.json"
node3NOT3Export = "../backUp/node3/node3NOT3Export.json"
node3FA3Export = "../backUp/node3/node3FA3Export.json"
node3Tol3Export = "../backUp/node3/node3Tol3Export.json"
node3Temp3Export = "../backUp/node3/node3Temp3Export.json"
node3Humid3Export = "../backUp/node3/node3Humid3Export.json"
# Node 4
node4H4Export = "../backUp/node4/node4H4Export.json"
node4NOT4Export = "../backUp/node4/node4NOT4Export.json"
node4FA4Export = "../backUp/node4/node4FA4Export.json"
node4Tol4Export = "../backUp/node4/node4Tol4Export.json"
node4Temp4Export = "../backUp/node4/node4Temp4Export.json"
node4Humid4Export = "../backUp/node4/node4Humid4Export.json"

#Processed file path
#in .json
processfilejson = "../processJson/savefile.json"
#in .csv
processfilecsv = "../processJson/savefile.csv"

time_from = '21/6/21 15:20:0'
time_to = '21/6/21 15:45:0'


def processJson(time_from, time_to, file):
    time_fromDT = datetime.strptime(time_from, '%d/%m/%y %H:%M:%S')
    time_toDT = datetime.strptime(time_to, '%d/%m/%y %H:%M:%S')
    time_fromStamp = datetime.timestamp(time_fromDT)
    time_toStamp = datetime.timestamp(time_toDT)
    processedFile = []
    with open(file) as resultFile:
        file_data = json.load(resultFile)   #json.load is to load the file content, while json.loads is to convert json in python format
        print(type(file_data)) #the file_data should a list since the JSON is stored in a list

    for element in file_data:
        if(element['time'] >= time_fromStamp and element['time'] < time_toStamp):
            processedFile.append(element)
    #print(processedFile)
    #write into json file
    # with open(processfilejson, 'w', encoding="UTF-8") as f:
    #     f.write(json.dumps(processedFile))
    #write into csv file
    with open(processfilecsv, 'w', newline ='',encoding="UTF-8") as g:
        test=csv.writer(processedFile,quoting=csv.QUOTE_ALL)
        test.writerow(["time","value"])

processJson(time_from, time_to, node1H1Export)
