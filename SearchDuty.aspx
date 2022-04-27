<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SearchDuty.aspx.cs" Inherits="SearchDutyt" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS -->
    <link href="styles/bootstrap.rtl.css" rel="stylesheet" />
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <link href="styles/myStyle.css" rel="stylesheet" />

    <!-- Scripts -->
    <script src="jScripts/jquery-1.12.0.min.js"></script>
    <script src="jScripts/bootstrap.bundle.js"></script>
    <script src="jScripts/JavaScript.js"></script>

</head>
<body>
   <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a aria-current="page" class="nav-link navHeadcolor" href="temporal.html">היכרות עם פיל</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link navHeadcolor" id="navbarDropdownMenuLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">צ'קליסטים ומשימות</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="DefineDuty.aspx">הגדרת חובות</a></li>
                                <li><a class="dropdown-item" href="SearchDuty.aspx">חיפוש חובות</a></li>
                                <li><a class="dropdown-item" href="DefineTasks.aspx">הגדרת משימות</a></li>
                                <li><a class="dropdown-item" href="TaskManage.aspx">ניהול משימות</a></li>
                                <li><a class="dropdown-item" href="SearchDocuments.aspx">מסמכים</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link navHeadcolor" href="temporal.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">דירקטוריון
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="temporal.html">הקמת משתתפים</a></li>
                                <li><a class="dropdown-item" href="temporal.html">הקמת ישיבות</a></li>
                                <li><a class="dropdown-item" href="temporal.html">ייבוא נושא לסדר היום</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</body>
</html>
