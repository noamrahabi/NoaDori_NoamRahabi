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



    protected void DoneDefineDuty_Click(object sender, EventArgs e)

    {
        var userMail = Session["usermail"];
        ////למשוך את האימייל של היוזר שיש בסשן סטורג'
        string myUserName = "select FullName from Users where Email = '" + userMail + "'";
        DataSet mySQLAnswer = mySQLClass.SQLSelect(myUserName);        string SqlAnswer = mySQLAnswer.Tables[0].Rows[0][0].ToString();


        ////להזין את האיי די של המשתמש ואת השם של הרכיב לטבלת התקדמות
        string myQuery = "insert into Progress (UserName, CompoID) values ('" + SqlAnswer + "','defineDuty')";

        mySQLClass.SQLChange(myQuery);
    }
}