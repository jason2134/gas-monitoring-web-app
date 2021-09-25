import tornado.ioloop
import tornado.web
import tornado.httpserver
from tornado.web import authenticated
import json
import time
import pymongo
import struct
import json
import re
from pymongo import MongoClient
from py.node1 import *
from py.node2 import *
from py.node3 import *
from py.node4 import *
import py.opt
from py.histNode1 import *
from py.histNode2 import *
from py.histNode3 import *
from py.histNode4 import *
from py.histdownload import *
from py.histdownloadOpt import *
from py.recvOpt import *
#import pyautogui as pag
import tkinter
from tkinter import messagebox
import py.histopt
isSuccess = False


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("template/dataVis.html")


class RealTimeApi(tornado.web.RequestHandler):
    def post(self):
        # args = self.request.body
        self.write(py.opt.finaldata())


class SubHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("template/historyData.html")


class LoginHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("template/login.html")

    def post(self):
        usrName = self.get_argument("username", None)
        password = self.get_argument('password', None)
        if (usrName == "stpAdmin" and password == "1234"):
            isSuccess = True
            expireT = time.time() + 60
            print(isSuccess)
            self.set_cookie("auth", "1", expires=expireT)
            self.redirect("/admin")
        else:
            print("wrong usrname or password")
            #pag.alert(text="Wrong Username or Password", title="Login Error")
            root = tkinter.Tk()
            root.withdraw()
            messagebox.showinfo("Login Failed", "Wrong username or password")
            # Message Box
            # messagebox.showinfo("Title", "Message")
            self.render("template/login.html")


class AdminHandler(tornado.web.RequestHandler):
    global isSuccess

    def get(self):
        co = self.get_cookie("auth")
        if (co == "1"):
            self.render('template/admin.html')
        else:
            self.redirect("/login")


class HistoryApi(tornado.web.RequestHandler):
    def post(self):
        # 这里把postHist.js中通过ajax请求发送的data:timeRange的request.body给通过json.loads解析成python可以使用的数据，并且传递给args
        args = json.loads(self.request.body)
        time_from = args["from"]
        time_to = args["to"]
        self.write({
            "histdata": py.histopt.histfinalData(time_from, time_to),
            "histtime": py.histopt.histfinalTimeStamp(time_from, time_to),
            "histExtData": py.histdownloadOpt.histExportFinalData(time_from, time_to),
            'histExtTime': py.histdownloadOpt.histExportFinalDate(time_from, time_to)
        })


class hwInfo(tornado.web.RequestHandler):
    def post(self):
        args = json.loads(self.request.body)
        print(args)
        data = args["value"]
        time = args["time"]

        self.write({
            'data': data,
            'time': time,
            'status': 200,
            'message': "Request send successfully"
        })


# class LoginAPI(tornado.web.RequestHandler):
    # settings = {'ui_methods': uimethod}
    # 被用于非模板基础的输 出; 它接受字符串, 字节, 和字典(字典会被编码成JSON).
    # self.render('s1.html')  #渲染模板文件，默认在当前目录下找
    # self.render('template/s1.html')#html文件集中放在template文件夹中，让其在该文件夹下找
    # self.render('s1.html')  # 如果我们不想每次都写template的话，我们可以配置一下它，让其默认就是在该路径下查找
    # self.get_argument('xxx', None)  # 获取用户提交的数据
    # class TestHandler(tornado.web.RequestHandler):
application = tornado.web.Application([
    # RealTime Html Webpage address
    (r"/", MainHandler),
    # Realtime Webapi
    (r"/RealTimeApi", RealTimeApi),
    # History Html Webpage address
    (r"/his", SubHandler),
    # Admin html webpage address
    (r"/login", LoginHandler),
    (r"/admin", AdminHandler),
    # History Webapi
    (r"/HistoryApi", HistoryApi),
    (r"/hwinfo", hwInfo),
    (r"/(.*)", tornado.web.StaticFileHandler, {"path": "./"})
])  # , **settings)  # 应用到tornado中，使其生效


if __name__ == "__main__":
    # tornado.options.parse_command_line()  # sys.argv
    # http_server = tornado.httpserver.HTTPServer()
    # code above: modified V
    application.listen(80)
    tornado.ioloop.IOLoop.instance().start()
