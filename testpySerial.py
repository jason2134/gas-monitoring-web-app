import serial
import requests
import time
from datetime import datetime
import json
import re
import sys
formatSte = '00,01,00,0A,00,64,03,E8,14,5A,"\0"'
testStr = '00,01,00,0A,00,64,03,E8,14,5A'
testStr = testStr.encode('UTF-8', 'strict')
a = '0001000A'

element = '145A'

# print(num)

# pls write packet loss handling part


def dataProc(testStr):
    convStr = testStr.decode('UTF-8', 'strict')
    convStr = convStr.replace(',', '')
    index = 0
    hexArr = []
    decArr = []
    while index < len(convStr):
        arrVal = convStr[index: index + 4]
        # print(arrVal)
        hexArr.append(arrVal)
        index = index + 4
    for i in range(0, len(hexArr)):
        element = int(hexArr[i], 16)
        decArr.append(element)
    return decArr


def data2Json(arr):
    obj = {"time":  datetime.timestamp(
        datetime.now().replace(microsecond=0)), "value": arr}
    convData = json.dumps(obj)
    # print(obj)
    return convData


def data_to_server(data):
    # http setting
    url = 'http://192.168.1.24:80/hwinfo'
    headers = {'Content-Type': 'application/json'}
    try:
        response = requests.request("POST", url, headers=headers, data=data)
        print(response)
        return response
    except Exception as e:
        print(str(Exception))
    return


# print(dataProc(testStr))
data_to_server(data2Json(dataProc(testStr)))

# print(convStr)
# print(len(convStr))
# print(len(testStr))
