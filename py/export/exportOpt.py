import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient
import exportNode1
import exportNode2
import exportNode3
import exportNode4
mydb = 0
mycol = 0

time_from = '21/6/21 15:0:0'
time_to = '22/6/21 16:0:0'


def exportNode(time_from, time_to, node):
    if (node == 1):
        exportNode1.exportH2(time_from, time_to)
        exportNode1.exportNOT(time_from, time_to)
        exportNode1.exportFA(time_from, time_to)
        exportNode1.exportTol(time_from, time_to)
        exportNode1.exportTemp(time_from, time_to)
        exportNode1.exportHumid(time_from, time_to)
    elif (node == 2):
        exportNode2.exportH2(time_from, time_to)
        exportNode2.exportNOT(time_from, time_to)
        exportNode2.exportFA(time_from, time_to)
        exportNode2.exportTol(time_from, time_to)
        exportNode2.exportTemp(time_from, time_to)
        exportNode2.exportHumid(time_from, time_to)
    elif (node == 3):
        exportNode3.exportH2(time_from, time_to)
        exportNode3.exportNOT(time_from, time_to)
        exportNode3.exportFA(time_from, time_to)
        exportNode3.exportTol(time_from, time_to)
        exportNode3.exportTemp(time_from, time_to)
        exportNode3.exportHumid(time_from, time_to)
    elif (node == 4):
        exportNode4.exportH2(time_from, time_to)
        exportNode4.exportNOT(time_from, time_to)
        exportNode4.exportFA(time_from, time_to)
        exportNode4.exportTol(time_from, time_to)
        exportNode4.exportTemp(time_from, time_to)
        exportNode4.exportHumid(time_from, time_to)
    else:
        print('Invalid Input')


exportNode(time_from, time_to, 4)
