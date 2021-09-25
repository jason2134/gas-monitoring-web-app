print("I am albert shao in the script1.js")

conn = new Mongo("127.0.0.1:27017");

db = conn.getDB("Node_1");

printjson(db.Hydrogen_1.findOne());
