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

      protected void Page_Init (object sender, EventArgs e)

    {
        string UserMail = Session["Usermail"].ToString();

        //קריאה לג'אבה סקריפט ושליחת נתונים
        string script = "window.onload = function() { UserSign('" + UserMail+"'); };";
        ClientScript.RegisterStartupScript(this.GetType(), "UserSign", script, true);

    }
    protected void Page_Load(object sender, EventArgs e)
    {
    
    }



    protected void DoneDefineDuty_Click(object sender, EventArgs e)

    {
        string UserMail = Session["Usermail"].ToString();

        Page.Response.Write("<script>console.log('gotusermail');</script>");

        Page.Response.Write("<script>console.log('"+ UserMail + "');</script>");

        ////למשוך את האימייל של היוזר שיש בסשן סטורג
        string myUserName = "select FullName from Users where Email = '" + UserMail + "'";
        DataSet mySQLAnswer = mySQLClass.SQLSelect(myUserName);
     
        string SqlAnswer = mySQLAnswer.Tables[0].Rows[0][0].ToString();

        ////////להזין את האיי די של המשתמש ואת השם של הרכיב לטבלת התקדמות
        string myQuery = "insert into Progress (UserName, CompoID) values ('" + SqlAnswer + "','defineDuty')";

        mySQLClass.SQLChange(myQuery);
    }
}