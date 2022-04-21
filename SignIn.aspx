<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SignIn.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <!-- Scripts -->
    <script src="jScripts/jquery-1.12.0.min.js"></script>
    <script src="jScripts/bootstrap.bundle.js"></script>
    <script src="jScripts/JavaScript.js"></script>
    </head>
<body>
    <form id="form1" runat="server">
        <div>

            <asp:Label ID="UserName" runat="server" Text="שם משתמש"></asp:Label>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br/>
            <asp:Label ID="mail" runat="server" Text="מייל"></asp:Label>
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>

       <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click"/>
         

        </div>
    </form>
</body>
</html>
