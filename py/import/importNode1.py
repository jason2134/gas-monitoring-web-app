import os
import pymongo
import struct
import json
from datetime import datetime
import time
import re
import random
from pymongo import MongoClient
node1H1Import = "../backUp/node1/node1H2Export.json"
node1NOT1Import = "../backUp/node1/node1NOTExport.json"
node1FA1Import = "../backUp/node1/node1FAExport.json"
node1Tol1Import = "../backUp/node1/node1TolExport.json"
node1Temp1Import = "../backUp/node1/node1TempExport.json"
node1Humid1Import = "../backUp/node1/node1HumidExport.json"

myClient = pymongo.MongoClient("mongodb://localhost:27017/")


def importH1():
    mydb = myClient["Node_1"]
    mycol = mydb["test_1"]
    with open(node1H1Import) as file:
        file_data = json.load(file)
    #isinstance() 函数来判断一个对象是否是一个已知的类型,这里的file都是存在一个list里，所以就是判断加载的这个文件是不是list
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importN1():
    mydb = myClient["Node_1"]
    mycol = mydb["test_1"]
    with open(node1NOT1Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importFA1():
    mydb = myClient["Node_1"]
    mycol = mydb["test_1"]
    with open(node1FA1Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTol1():
    mydb = myClient["Node_1"]
    mycol = mydb["test_1"]
    with open(node1Tol1Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importTemp1():
    mydb = myClient["Node_1"]
    mycol = mydb["test_1"]
    with open(node1Temp1Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


def importHumid1():
    mydb = myClient["Node_1"]
    mycol = mydb["test_1"]
    with open(node1Humid1Import) as file:
        file_data = json.load(file)
    if isinstance(file_data, list):
        mycol.insert_many(file_data)


# importH1()
