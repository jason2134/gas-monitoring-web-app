import json
import py.node4
import py.node3
import py.node2
import py.node1
import os
import sys
sys.path.append("/Users/jasonwong/Desktop/STP_SystemV4.5_UpdateVersion_Local_Revising/py")

# Define an empty list which only has 25 elements
#alldata = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
alldata = [0]*25
covfinaldata = [0]*25
tepnode1h2 = [0]*2


# print(alldata) //check the empty list whether has been successfully defined

# Assign the data in node1.py,...,node4.py into the alldata list
def finaldata():
    global covfinaldata
    # node 1 datas
    tepnode1h2 = py.node1.node1sortLastH2()
    alldata[0] = tepnode1h2[0]
    alldata[1] = py.node1.node1sortLastNO2()
    alldata[2] = py.node1.node1sortLastFA()
    alldata[3] = py.node1.node1sortLastTOLU()
    alldata[4] = py.node1.node1sortLastTemp()
    alldata[5] = py.node1.node1sortLastHumid()

    # node 2 datas
    alldata[6] = py.node2.node2sortLastH2()
    alldata[7] = py.node2.node2sortLastNO2()
    alldata[8] = py.node2.node2sortLastFA()
    alldata[9] = py.node2.node2sortLastTOLU()
    alldata[10] = py.node2.node2sortLastTemp()
    alldata[11] = py.node2.node2sortLastHumid()

    # node 3 datas
    alldata[12] = py.node3.node3sortLastH2()
    alldata[13] = py.node3.node3sortLastNO2()
    alldata[14] = py.node3.node3sortLastFA()
    alldata[15] = py.node3.node3sortLastTOLU()
    alldata[16] = py.node3.node3sortLastTemp()
    alldata[17] = py.node3.node3sortLastHumid()

    # node 4 datas
    alldata[18] = py.node4.node4sortLastH2()
    alldata[19] = py.node4.node4sortLastNO2()
    alldata[20] = py.node4.node4sortLastFA()
    alldata[21] = py.node4.node4sortLastTOLU()
    alldata[22] = py.node4.node4sortLastTemp()
    alldata[23] = py.node4.node4sortLastHumid()

    # timestamp of all nodes
    alldata[24] = tepnode1h2[1]

    # turn the raw data into json format
    # Since tornado doesnt accept list for security reasons, self.write only accepts
    # bytes, unicode, json, and dict objects
    covfinaldata = json.dumps(alldata)
    return covfinaldata

# check if this function has return from the alldata from 4 nodes
# print(finaldata())
# print(len(alldata))
# print(len(covfinaldata))
