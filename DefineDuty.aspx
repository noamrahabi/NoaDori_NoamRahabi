<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DefineDuty.aspx.cs" Inherits="_Default" %>

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
<body id="defineDutyHomeP">
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
                                <li><a class="dropdown-item" href="temporal.html">הגדרת חובות</a></li>
                                <li><a class="dropdown-item" href="temporal.html">חיפוש חובות</a></li>
                                <li><a class="dropdown-item" href="temporal.html">הגדרת משימות</a></li>
                                <li><a class="dropdown-item" href="temporal.html">ניהול משימות</a></li>
                                <li><a class="dropdown-item" href="temporal.html">מסמכים</a></li>
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

    <h1>הגדרת חובות</h1>
    <h2>איך להגיע לעמוד ההגדרה של הצ'קליסט?</h2>

    <div id="mainContent">
        <iframe src="EntreDefPage - Storyline output/story.html" width="100" height="300" style="overflow: visible; width: 60%; margin: 0 auto"></iframe>

        <h2>עמוד החובה</h2>
        <p class="pil-text">
           את הגדרת החובה מבצעים בלשונית 'אופן היישום'.
            <br />
            לפני שתעשו את זה, היכנסו לעמוד החובה והכירו את לשונית מידע כללי
        </p>

        <video width="720" height="500" controls="controls">
            <source src="videos/generalInfoTab.mp4" type="video/mp4" />
        </video>

        <p class="pil-text" style="top: 25px;">
            הבטחנו שהמערכת תתחיל לעבוד בשבילכם, רק כמה צעדים פשוטים וזה יקרה. התשובה בסרטון
        </p>

        <video width="720" height="500" controls="controls">
            <source src="videos/defineDuty.mp4" type="video/mp4" />
        </video>

          <h2>שינויים בעמוד החובה</h2>

        <p class="pil-text">
            עברו לקטע הבא כדי לראות את השינויים שחלו בעמוד החובה לאחר הגדרתה.<br />
            לאחר לחיצה על 'התחלה', לחצו על כפתור השמירה
      
        </p>
  
        <iframe src="BeforeAndAfterDef - Storyline output/story.html" width="100" height="300" style="overflow: visible; width: 60%; margin: 0 auto; margin-top: 30px; margin-bottom: 30px;"></iframe>


        <form runat="server">
            <asp:Button ID="DoneDefineDuty" class="DoneSectionBTN" runat="server" Text="סיימתי את המקטע" OnClick="DoneDefineDuty_Click" OnClientClick="return false;" />

            <div class="DoneBlock definDutyMapHide">

                <p class="inThePopUp">
                    כל הכבוד!
                    <br />
                    סיימת מקטע חשוב בדרך אל היעד -<br />
                    ניהול רגולציה ...
                </p>
                <asp:Button ID="NextPartBtn" class="nextPart" runat="server" Text="למקטע הבא" />
                <iframe src="images/flag.html" style="position: relative; width: 300px; height: 300px; right: 411px; top: 3px;"></iframe>

            </div>

        </form>
    </div>
</body>
</html>
