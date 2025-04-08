# AI Powered Real Time Monitoring Dashboard

## 📝 Table of Contents

- [About](#about)
- [How does it work](#work)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

A web application project developed by me and Dr.Ye Wenhao(William) when studying in HKUST. 

This web applciation is designed for gas sensor monitoring.  
This dashboard features the following in history and real time:
- Gases: Hydrogren / Formaldehyde / Toluene / Nitrogen Dioxide
- Temperature
- Humidity

### How does it look like:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/70568099/134768464-5831683c-028d-4bf9-8017-691a58813f3e.gif)
1. After getting into the console, you can see the 3D monitored floor plan in the middle, with four orange blocks representing the gas sensor nodes.
2. After clicking on one of the nodes, real time gas concentration, tempaerature and humidity detected by that node is streamed to the dashboard
   - The six panels on the side will show the real time changes for each individual parameter
   - The panel on the bottom shows a ranking of the parameters among the four nodes, clicking the parameter bar above it will allow you to view the leaderboard for that certain metric

## 🚀 How does it work <a name = "work"></a>:
This full project is consisted of two parts: hardware layer and web application layer.
- Hardware Layer: Gas Sensor, Arduino Gateway
- Web Application Layer: Frontend Webpage, Backend Server, Database
- Remarks: This respostory only stores the web application layer of the whole project
### 🖥️ **Architecture**
<img src="https://github.com/jason2134/gas-monitoring-web-app/blob/master/web-app-process-flow.jpg">


- Step 1: Gas sensor detects raw data related to type of gas and its concentration. Raw data is being sent to backend for ML processing
- Step 2: The raw data is processed through PCA and fitted into neural network for classifying type of gas and predict its concentration
- Step 3: Predicted results are passed into MongoDB database
- Step 4: User accesses the dashboard, and send a request to the backend
- Step 5: Backend API processes the request
- Step 6: Backend script is executed, send a request to the database
- Step 7: The requested data is sent back to backend
- Step 8: Requested data is sent back to the frontend, and being displayed on the dashboard 

### 📥 **Components** 
- Fronend
  - HTML5
  - CSS
    - [LESS](https://lesscss.org/)
  - JavaScript
    - [EChart.js](https://echarts.apache.org/en/index.html)
    - [three.js](https://threejs.org/)
    - [flexible.js](https://github.com/amfe/lib-flexible)
    - [jQuery](https://jquery.com/)
 - Backend
   - Python
     - [Tornado Web Server](https://www.tornadoweb.org/en/stable/)
     - [PyMongo](https://pymongo.readthedocs.io/en/stable/)
 - Database
   - [MongoDB](https://www.mongodb.com/)
    

## ✍️ Authors <a name = "authors"></a>

- [@William Ye](https://github.com/William-ywh)
- [@Jason Wong](https://github.com/jason2134)

