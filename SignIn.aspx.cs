using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class _Default : System.Web.UI.Page
{
    SQLClass mySQLClass = new SQLClass();
    

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        string UserName = TextBox1.Text;
        string UserEmail = TextBox2.Text;

        //קריאה לג'אבה סקריפט ושליחת נתונים
        string script = "window.onload = function() { Mystorage('" + UserName + "', '"+ UserEmail + "'); };";
        ClientScript.RegisterStartupScript(this.GetType(), "Mystorage", script, true);

 
        //הזנה לבסיס נתונים
        string SignInQuery = "INSERT INTO Users (FullName, Email) VALUES ('" + UserName + "', '"+ UserEmail + "' )";
        mySQLClass.SQLChange(SignInQuery);

        Response.Redirect("Home.html");
   
    }
}