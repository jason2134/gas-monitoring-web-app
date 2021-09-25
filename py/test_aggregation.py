import os
import pymongo
import struct
import json
from datetime import datetime
import time
import random
from pymongo import MongoClient

# for connection between python client and local database server(ip: 127.0.0.1 port:27017)
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

testARR=[]

node1db = myClient["Node_1"]
node1h2col = node1db["Hydrogen_1"]


targetmin = 1
targetsecond = 0
result = node1h2col.find({"$and": [{"type":"h2"}, {"time":{"$gte":1623657929.0}}, {"time":{"$lt":1623657929.0 + targetmin*2}}]})
for x in result:
    testARR.append(x)

print(testARR)

# node1h2col.aggregate(

# )

