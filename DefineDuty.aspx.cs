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
        //string userMail = sessionStorage.getItem("UserMail");
        ////למשוך את האימייל של היוזר שיש בסשן סטורג'
        //string myUserId = "select ID from Users where Email = '" + userMail + "'";

        ////להזין את האיי די של המשתמש ואת השם של הרכיב לטבלת התקדמות
        //string myQuery = "insert into Progress (ID, CompoID) values ('"+ myUserId + "','defineDuty')";

        //mySQLClass.SQLChange(myQuery);


    }
}