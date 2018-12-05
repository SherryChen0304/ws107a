const page = {}
page.home = `
    <link rel="stylesheet" href="drop_list_search.css"/>
    <div id="rcorners6" style="margin-top:50px; position:absolute; left:310px; top:130px">
            <p>Hello everyone！</p>
            <p>希望大家會喜歡這的心理測驗網站，玩得開心！</p>
            <p>貼心小建議：網頁的視窗縮放調至100%，最為適宜操作介面。</p>
    </div>
`

page.purpose = `
    <link rel="stylesheet" href="forms_table.css"/>
    <link rel="stylesheet" href="drop_list_search.css"/>
    <div id="rcorners1">
        <p class="z">
            <h2 style="font-family:'微軟正黑體'">創站動機</h2>
            <p class="x" style="font-family:'微軟正黑體';font-size: 14pt">如何更認識自己一點？也許是藉由與自己的獨處，也許是聽從別人口中的自己。又或許，我們可以藉由一些小測驗，來了解自己。這裡都能為大家一一解惑！適合在繁忙間的歇息時間瀏覽的網頁，讓疲累的身心放輕鬆一下！</p>
        </p>
    </div>
    <div id="rcorners2">
        <div class="z">
            <h3>參考資料(元件素材)</h3>
            <p class="y">
                ColorHexa
                <a href="https://www.colorhexa.com">https://www.colorhexa.com</a>
            </p>
            <p class="y">
                CaseIf
                <a href="http://www.caself.me/products">http://www.caself.me/products</a>
            </p>
            <p class="y">
                ZhenHaoTV
                <a href="http://www.zhenhaotv.com">http://www.zhenhaotv.com</a>
            </p>
            <p class="y">
                履歷表
                <a href="https://www.webdesignerdepot.com/2016/11/free-download-free-resume-template/">https://www.webdesignerdepot.com/2016/11/free-download-free-resume-template/</a>
            </p>
            <p class="y">
                CakeResume
                <a href="https://www.cakeresume.com/resumes">https://www.cakeresume.com/resumes</a>
            </p>
        </div>
        <div class="z">
            <h3>w3school:</h3>
            <p class="y">
                Dropdowns
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar">https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar</a>
            </p>
            <p class="y">
                Lists
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_list-style-type_ex">https://www.w3schools.com/css/tryit.asp?filename=trycss_list-style-type_ex</a>
            </p>
            <p class="y">
                Forms_search
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_form_search_anim">https://www.w3schools.com/css/tryit.asp?filename=trycss_form_search_anim</a>
            </p>
            <p class="y">
                Forms_login_signin
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_forms">https://www.w3schools.com/css/tryit.asp?filename=trycss_forms</a>
            </p>
            <p class="y">
                Image Gallery
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery">https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery</a>
            </p>
        </div>
        <div class="z">
            <h3>菜鳥教程:</h3>
            <p class="y">
                CSS3分頁
                <a href="http://www.runoob.com/try/try.php?filename=trycss_ex_pagination_active_round">http://www.runoob.com/try/try.php?filename=trycss_ex_pagination_active_round</a>
            </p>
            <p class="y">
                CSS Table表格
                <a href="http://www.runoob.com/css/css-table.html">http://www.runoob.com/css/css-table.html</a>
            </p>
            <p class="y">
                CSS 圓角
                <a href="http://www.runoob.com/css3/css3-border-radius.html">http://www.runoob.com/css3/css3-border-radius.html</a>
            </p>
            <p class="y">
                CSS 過渡（滑動）
                <a href="http://www.runoob.com/try/try.php?filename=trycss3_transition">http://www.runoob.com/try/try.php?filename=trycss3_transition</a>
            </p>
            <p class="y">
                Highcharts 基本條形圖
                <a href="http://www.runoob.com/try/try.php?filename=highcharts_bar_basic">http://www.runoob.com/try/try.php?filename=highcharts_bar_basic</a>
            </p>
        </div>
    </div>
`

page.login = `
    <link rel="stylesheet" href="forms_table.css"/>
    <div class="y">
        <h2>會員登入</h2>
        <form>
            <label for="name">使用者名稱</label>
            <input type="text" id="name" name="name" placeholder="Your name..">
            <label for="possword">密碼</label>
            <input type="text" id="possword" name="possword" placeholder="Your possword..">
        
            <input type="submit" value="登入">
            <Button onclick="ui.show(page.signin)">加入會員</Button>
        </form>
    </div>
`

page.logout = `
    <link rel="stylesheet" href="forms_table.css"/>
    <div class="y">
        <h2>確認登出</h2>
        <form>
            <input type="submit" value="登出">
        </form>
    </div>
`

page.signin = `
    <link rel="stylesheet" href="forms_table.css"/>
    <div class="y">
        <h2>建立你的帳戶</h2>
    <form>
        <label for="name">使用者名稱</label>
        <input type="text" id="name" name="name" placeholder="Your name..">
        <label for="possword">密碼</label>
        <input type="text" id="possword" name="possword" placeholder="Your possword..">
        
        <label for="email">電子信箱</label>
        <input type="text" id="email" name="email" placeholder="Your email address..">
    
        <input type="submit" value="註冊">
    </form>
    </div>
`

// page.story = `
// <h1>這是註冊頁！</h1>
// <Button>Signin</Button>
// `

// page.emotion = `
// <h1>這是註冊頁！</h1>
// <Button>Signin</Button>
// `

// page.encourage = `
// <h1>這是註冊頁！</h1>
// <Button>Signin</Button>
// `
