﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Data.OleDb;
using Microsoft.SqlServer;
using System.IO;

public class SQLClass
{
    //////////////////SQL ACTIONS////////////////

    string connStr = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + HttpContext.Current.Server.MapPath("/App_Data/myData.accdb") + ";";

    /* SELECT */
    public DataSet SQLSelect(string myQuery)
    {
        OleDbDataAdapter oda = new OleDbDataAdapter(myQuery, connStr);
        DataSet ds = new DataSet();
        oda.Fill(ds);
        return ds;
    }

    /* Update . Delete . Insert */
    public void SQLChange(string myQuery)
    {
        OleDbConnection dbconn = new OleDbConnection(connStr);
        dbconn.Open();
        OleDbCommand mySqlCommand = new OleDbCommand(myQuery, dbconn);
        mySqlCommand.ExecuteNonQuery();
        dbconn.Close();
    }
    

}