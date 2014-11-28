/**
 * Created by pc on 2014/11/10.
 */
"use strict";

var sqlite3 = require('sqlite3').verbose();
var db;
exports.createDB=createDb;
exports.readAllRows=readAllRows;
function createDb() {
    console.log("createDb chain");
    db = new sqlite3.Database('chain.sqlite3', createTable);
}


function createTable() {
    console.log("createTable lorem");
    db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)", insertRows);
}

function insertRows() {
    console.log("insertRows Ipsum i");
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");

    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }

    stmt.finalize(readAllRows);
}

function readAllRows(callback) {
    db = new sqlite3.Database('chain.sqlite3');
    db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
        //var result=[];
        var i=1;
        rows.forEach(function (row) {
            //console.log(row.id + ": " + row.info);
            //result.push(row);
            //npm install dateformat
            //var day=dateFormat(result.request_date, "yyyy-mm-dd h:MM:ss");
            row.date=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
            i++;
        });
        if(callback){
            callback(rows);
        }
        closeDb();
    });
}

function closeDb() {
    console.log("closeDb");
    db.close();
}

/*function runChainExample() {
    createDb();
}

runChainExample();*/
module.exports.closeDb=closeDb