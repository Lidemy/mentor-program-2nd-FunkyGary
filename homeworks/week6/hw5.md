## 請說明 SQL Injection 的攻擊原理以及防範方法
攻擊者會將一些惡意資料庫查詢語法，輸入到開發者使用的程式碼中。然後透過各種方式
將該字串傳遞到如 MS SQL Server 資料庫的查詢命列中進行分析和執行。只要這個惡意字元或語法符合 SQL
查詢語法的規則，在應用系統的編譯與執行階段時，就不會被編譯工具或執行階段工具發現。資料庫伺服器則
會直接執行被竄改過的攻擊語法，對資料庫系統或儲存的資料，造成極大的威脅。

採用參數化（Parameterized）查詢語法

一般 SQL Injection 資料隱碼攻擊，是利用傳統習慣使用動態字串結合的方式，來組合成查詢語法，並將查詢
語法結合程式碼，針對資料庫系統進行查詢或操作。因此，就給了駭客一個竄改資料並植入攻擊字串的機會。
若能在撰寫 SQL 查詢語法時，使用者輸入的變數不是直接動態結合到 SQL 查詢語法，而是通過參數來傳遞這
個變數的話，那麼就可以有效的避免 SQL Injection 資料隱碼攻擊。

## 請說明 XSS 的攻擊原理以及防範方法

XSS 全稱為 Cross-Site Scripting，可中譯為跨網站指令碼攻擊，以下分為三種方式：
1.Stored XSS (儲存型)
2.Reflected XSS (反射型)
3.DOM-Based XSS (基於 DOM 的類型)

1. Stored XSS (儲存型)
會被保存在伺服器資料庫中的 JavaScript 代碼引起的攻擊即為 Stored XSS，最常見的就是論壇文章、留言板等等，因為使用者可以輸入任意內容，若沒有確實檢查，那使用者輸入如 <script> 等關鍵字就會被當成正常的 HTML 執行，標籤的內容也會被正常的作為 JavaScript 代碼執行。

2. Reflected XSS (反射型)
Reflected 是指不會被儲存在資料庫中，而是由網頁後端直接嵌入由前端使用者所傳送過來的內容造成的，最常見的就是以 GET 方法傳送資料給伺服器時，伺服器未檢查就將內容回應到網頁上所產生的漏洞。

3. DOM-Based XSS
了解此種 XSS 類型時，務必事先了解 DOM 是什麼，DOM 全稱為 Document Object Model，用以描述 HTML 文件的表示法，它讓我們可以使用 JavaScript 動態產生完整的網頁，而不必透過伺服器。

因此 DOM-Based XSS 就是指網頁上的 JavaScript 在執行過程中，沒有詳細檢查資料使得操作 DOM 的過程代入了惡意指令。但這樣除非攻擊者親自到受害者電腦前輸入，否則不可能讓受害者輸入這種惡意代碼。因此通常需要搭配前兩個手法。讓內容保存在伺服器資料庫中、或是以反射型的方式製造出內容，再藉由JavaScript 動態產生有效的 DOM 物件來運行惡意代碼。

如何防範 XSS 攻擊？

1. Stored、Reflected 防範
前兩種 Stored、Reflected 的類型都必須由後端進行防範，除了必要的 HTML 代碼，任何允許使用者輸入的內容都需要檢查，刪除所有「<script>」、「 onerror=」及其他任何可能執行代碼的字串。或是將字串改成跳脫字元，例如<改成&lt;

2. DOM-Based 防範
其他兩種類型必須由後端來防範，而 DOM-Based 則必須由前端來防範，但基本上還是跟前面的原則相同。

另外不同的一點就是應該選擇正確的方法、屬性來操作 DOM，譬如前面的示範中會產生漏洞的主要原因是「 document.getElementById('show_name').innerHTML = name; 」中的「 innerHTML 」屬性，此屬性代表插入的內容是合法的 HTML 字串，所以字串會解析成 DOM 物件。

此處的話應該使用「 innerText 」，使用此屬性插入字串時，會被保證作為純粹的文字，也就不可能被插入惡意代碼執行了。


## 請說明 CSRF 的攻擊原理以及防範方法

CSRF 是一種 Web 上的攻擊手法，全稱是 Cross Site Request Forgery，跨站請求偽造：在不同的 domain 底下卻能夠偽造出「使用者本人發出的 request」。

1.使用者的防禦
CSRF 攻擊之所以能成立，是因為使用者在被攻擊的網頁是處於已經登入的狀態，所以才能做出一些行為。雖然說這些攻擊應該由網頁那邊負責處理，但如果你真的很怕，怕網頁會處理不好的話，你可以在每次使用完網站就登出，就可以避免掉 CSRF。

2.Server 的防禦
CSRF 之所以可怕是因為 CS 兩個字：Cross Site，你可以在任何一個網址底下發動攻擊。CSRF 的防禦就可以從這個方向思考，簡單來說就是：「我要怎麼擋掉從別的 domain 來的 request」

A.加上圖形驗證碼、簡訊驗證碼等等
就跟網路銀行轉帳的時候一樣，都會要你收簡訊驗證碼，多了這一道檢查就可以確保不會被 CSRF 攻擊。圖形驗證碼也是，攻擊者並不知道圖形驗證碼的答案是什麼，所以就不可能攻擊了。這是一個很完善的解決方法，但如果使用者每次刪除 blog 都要打一次圖形驗證碼，他們應該會煩死吧！

B.加上 CSRF token
要防止 CSRF 攻擊，我們其實只要確保有些資訊「只有使用者知道」即可。那該怎麼做呢？我們在 form 裡面加上一個 hidden 的欄位，叫做csrftoken，這裡面填的值由 server 隨機產生，並且存在 server 的 session 中。按下 submit 之後，server 比對表單中的csrftoken與自己 session 裡面存的是不是一樣的，是的話就代表這的確是由使用者本人發出的 request。這個 csrftoken 由 server 產生，並且每一段不同的 session 就應該要更換一次。

那這個為什麼可以防禦呢？因為攻擊者並不知道 csrftoken 的值是什麼，也猜不出來，所以自然就無法進行攻擊了。可是有另外一種狀況，假設你的 server 支持 cross origin 的 request，會發生什麼事呢？攻擊者就可以在他的頁面發起一個 request，順利拿到這個 csrf token 並且進行攻擊。不過前提是你的 server 接受這個 domain 的 request。

B + Double Submit Cookie
上一種解法需要 server 的 state，亦即 csrf token 必須被保存在 server 當中，才能驗證正確性。而現在這個解法的好處就是完全不需要 server 儲存東西。這個解法的前半段與剛剛的相似，由 server 產生一組隨機的 token 並且加在 form 上面。但不同的點在於，除了不用把這個值寫在 session 以外，同時也讓 client side 設定一個名叫 csrftoken 的 cookie，值也是同一組 token。

仔細思考一下 CSRF 攻擊的 request 與使用者本人發出的 request 有什麼不一樣？不一樣的點就在於，前者來自不同的 domain，後者來自相同的 domain。所以我們只要有辦法區分出這個 request 是不是從同樣的 domain 來，我們就勝利了。而 Double Submit Cookie 這個解法正是從這個想法出發。當使用者按下 submit 的時候，server 比對 cookie 內的 csrftoken 與 form 裡面的 csrftoken，檢查是否有值並且相等，就知道是不是使用者發的了。

為什麼呢？假設現在攻擊者想要攻擊，他可以隨便在 form 裡面寫一個 csrf token，這當然沒問題，可是因為瀏覽器的限制，他並不能在他的 domain 設定 small-min.blog.com 的 cookie 啊！所以他發上來的 request 的 cookie 裡面就沒有 csrftoken，就會被擋下來。當然，這個方法看似好用，但也是有缺點的，可以參考：Double Submit Cookies vulnerabilities，攻擊者如果掌握了你底下任何一個 subdomain，就可以幫你來寫 cookie，並且順利攻擊了。

3.browser 本身的防禦
你原本設置 Cookie 的 header 長這樣：
Set-Cookie: session_id=ewfewjf23o1;
你只要在後面多加一個 SameSite 就好：
Set-Cookie: session_id=ewfewjf23o1; SameSite
但其實 SameSite 有兩種模式，Lax跟Strict，默認是後者，你也可以自己指定模式：
Set-Cookie: session_id=ewfewjf23o1; SameSite=Strict
Set-Cookie: foo=bar; SameSite=Lax

我們先來談談默認的 Strict模式，當你加上 SameSite 這個關鍵字之後，就代表說「我這個 cookie 只允許 same site 使用，不應該在任何的 cross site request 被加上去」。意思就是你加上去之後，我們上面所講的<a href="">, <form>, new XMLHttpRequest，只要是瀏覽器驗證不是在同一個 site 底下發出的 request，全部都不會帶上這個 cookie。

Lax 模式放寬了一些限制，例如說<a>, <link rel="prerender">, <form method="GET"> 這些都還是會帶上 cookie。但是 POST 方法 的 form，或是只要是 POST, PUT, DELETE 這些方法，就不會帶上 cookie。所以一方面你可以保有彈性，讓使用者從其他網站連進你的網站時還能夠維持登入狀態，一方面也可以防止掉 CSRF 攻擊。但 Lax 模式之下就沒辦法擋掉 GET 形式的 CSRF，這點要特別注意一下。

## 請舉出三種不同的雜湊函數

一個理想的密碼雜湊函式應該有四個主要的特性：

1.對於任何一個給定的訊息，它都很容易就能運算出雜湊數值。
2.難以由一個已知的雜湊數值，去推算出原始的訊息。
3.在不更動雜湊數值的前提下，修改訊息內容是不可行的。
4.對於兩個不同的訊息，它不能給與相同的雜湊數值。

<table class="wikitable sortable" style="text-align: center">

<tbody><tr>
<th>密碼雜湊函數
</th>
<th>年份
</th>
<th>輸出位數
</th>
<th>內部狀態位數
</th>
<th>圈數
</th>
<th>參考
</th></tr>
<tr>
<td><a href="/w/index.php?title=HAVAL&amp;action=edit&amp;redlink=1" class="new" title="HAVAL (無呢版)">HAVAL</a>
</td>
<td>1992
</td>
<td>256/224/192/160/128
</td>
<td>256
</td>
<td>160/128/96
</td>
<td><a rel="nofollow" class="external text" href="http://labs.calyptix.com/haval.php">網站</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=MD2_(%E5%AF%86%E7%A2%BC%E5%AD%B8)&amp;action=edit&amp;redlink=1" class="new" title="MD2 (密碼學) (無呢版)">MD2</a>
</td>
<td>1989
</td>
<td>128
</td>
<td>384
</td>
<td>864
</td>
<td><a class="external mw-magiclink-rfc" rel="nofollow" href="https://tools.ietf.org/html/rfc1319">RFC 1319</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=MD4&amp;action=edit&amp;redlink=1" class="new" title="MD4 (無呢版)">MD4</a>
</td>
<td>1990
</td>
<td>128
</td>
<td>128
</td>
<td>48
</td>
<td><a class="external mw-magiclink-rfc" rel="nofollow" href="https://tools.ietf.org/html/rfc1320">RFC 1320</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=MD5&amp;action=edit&amp;redlink=1" class="new" title="MD5 (無呢版)">MD5</a>
</td>
<td>1992
</td>
<td>128
</td>
<td>128
</td>
<td>64
</td>
<td><a class="external mw-magiclink-rfc" rel="nofollow" href="https://tools.ietf.org/html/rfc1321">RFC 1321</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=MD6&amp;action=edit&amp;redlink=1" class="new" title="MD6 (無呢版)">MD6</a>
</td>
<td>2008
</td>
<td colspan="3">睇參考
</td>
<td><a rel="nofollow" class="external text" href="http://groups.csail.mit.edu/cis/md6/submitted-2008-10-27/Supporting_Documentation/md6_report.pdf">md6_report.pdf</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=RIPEMD&amp;action=edit&amp;redlink=1" class="new" title="RIPEMD (無呢版)">RIPEMD</a>
</td>
<td>1990
</td>
<td>128
</td>
<td>128
</td>
<td>48
</td>
<td>
</td></tr>
<tr>
<td><a href="/w/index.php?title=RIPEMD-128&amp;action=edit&amp;redlink=1" class="new" title="RIPEMD-128 (無呢版)">RIPEMD-128</a><br /><a href="/w/index.php?title=RIPEMD-256&amp;action=edit&amp;redlink=1" class="new" title="RIPEMD-256 (無呢版)">RIPEMD-256</a><br /><a href="/w/index.php?title=RIPEMD-160&amp;action=edit&amp;redlink=1" class="new" title="RIPEMD-160 (無呢版)">RIPEMD-160</a><br /><a href="/w/index.php?title=RIPEMD-320&amp;action=edit&amp;redlink=1" class="new" title="RIPEMD-320 (無呢版)">RIPEMD-320</a>
</td>
<td>1996
</td>
<td>128<br />256<br />160<br />320
</td>
<td>128<br />256<br />160<br />320
</td>
<td>48<br />64<br />80<br />
</td>
<td><a rel="nofollow" class="external text" href="http://homes.esat.kuleuven.be/~bosselae/ripemd160.html">網站</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=SHA-0&amp;action=edit&amp;redlink=1" class="new" title="SHA-0 (無呢版)">SHA-0</a>
</td>
<td>1993
</td>
<td>160
</td>
<td>160
</td>
<td>80
</td>
<td><a rel="nofollow" class="external text" href="http://w2.eff.org/Privacy/Digital_signature/?f=fips_sha_shs.info.txt">SHA-0</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=SHA-1&amp;action=edit&amp;redlink=1" class="new" title="SHA-1 (無呢版)">SHA-1</a>
</td>
<td>1995
</td>
<td>160
</td>
<td>160
</td>
<td>80
</td>
<td rowspan="3"><a rel="nofollow" class="external autonumber" href="http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf">[1]</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=SHA-256&amp;action=edit&amp;redlink=1" class="new" title="SHA-256 (無呢版)">SHA-256</a><br /><a href="/w/index.php?title=SHA-512&amp;action=edit&amp;redlink=1" class="new" title="SHA-512 (無呢版)">SHA-512</a><br /><a href="/w/index.php?title=SHA-384&amp;action=edit&amp;redlink=1" class="new" title="SHA-384 (無呢版)">SHA-384</a>
</td>
<td>2002
</td>
<td>256<br />512<br />384
</td>
<td>256<br />512<br />512
</td>
<td>64<br />80<br />80
</td></tr>
<tr>
<td><a href="/w/index.php?title=SHA-224&amp;action=edit&amp;redlink=1" class="new" title="SHA-224 (無呢版)">SHA-224</a>
</td>
<td>2004
</td>
<td>224
</td>
<td>256
</td>
<td>64
</td></tr>
<tr>
<td><a href="/w/index.php?title=GOST_(%E9%9B%9C%E6%B9%8A%E5%87%BD%E6%95%B8)&amp;action=edit&amp;redlink=1" class="new" title="GOST (雜湊函數) (無呢版)">GOST R 34.11-94</a>
</td>
<td>1994
</td>
<td>256
</td>
<td>256
</td>
<td>256
</td>
<td><a class="external mw-magiclink-rfc" rel="nofollow" href="https://tools.ietf.org/html/rfc5831">RFC 5831</a>, <a class="external mw-magiclink-rfc" rel="nofollow" href="https://tools.ietf.org/html/rfc4357">RFC 4357</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=Tiger_(%E5%AF%86%E7%A2%BC%E5%AD%B8)&amp;action=edit&amp;redlink=1" class="new" title="Tiger (密碼學) (無呢版)">Tiger</a>
</td>
<td>1995
</td>
<td>192/160/128
</td>
<td>192
</td>
<td>24
</td>
<td><a rel="nofollow" class="external text" href="http://www.cs.technion.ac.il/~biham/Reports/Tiger/">網站</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=Whirlpool_(%E5%AF%86%E7%A2%BC%E5%AD%B8)&amp;action=edit&amp;redlink=1" class="new" title="Whirlpool (密碼學) (無呢版)">Whirlpool</a>
</td>
<td>2004
</td>
<td>512
</td>
<td>512
</td>
<td>10
</td>
<td><a rel="nofollow" class="external text" href="http://www.larc.usp.br/~pbarreto/WhirlpoolPage.html">網站</a>
</td></tr>
<tr>
<td><a href="/w/index.php?title=SHA-3&amp;action=edit&amp;redlink=1" class="new" title="SHA-3 (無呢版)">SHA-3</a> (Keccak)
</td>
<td>2008
</td>
<td>224/256/384/512
</td>
<td>1600
</td>
<td>24
</td>
<td><a rel="nofollow" class="external text" href="http://keccak.noekeon.org">網站</a>
</td></tr></tbody></table>

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別

Cookie
最常見到的 Cookie 應用是在表單填寫：假設現在頁面上的資料填到一半，不小心把網頁關掉，這時再重新打開發現先前填的內容還在的話，靠的就是 cookie。實作原理很簡單，client 端的程式在一旦填寫的資料有變動時，就把該資訊寫入 cookie。Cookie 由瀏覽器處理，具有兩個特性：

1.Domain specific：只針對原本的 domain 起作用。舉例，在 *.example.com 存入的 cookie，不會出現在 *.not-example.com。到了所設定的生命期限之後會失效。（如果是在 server-side 設定的話，預設是在關閉瀏覽器後失效，後面會詳述）。

2.有生命期限：
// 在 www.example.com 的頁面中
function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+d.toUTCString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}
執行 setCookie('name', 'jcc', 1) 後，會在只有 www.example.com 作用的 cookie 中加入 name=jcc 字串，並於一天後刪除。而下次瀏覽器造訪 www.example.com 時，就可以從 cookie 去取得裡面有存的資料，

伺服器端的 Cookie
Cookie 的規範中定義了：伺服器端從 request 中接受到 cookie 的訊息，在產生 response 的時候，也會一起回覆給用戶端。這個行為也告訴我們：在伺服器這邊也可以設定 cookie。由伺服器這邊設定給 cookie 的訊息，可能就會有關身分驗證，因此稍微中斷一下，接下來先來介紹 session。

Signed Cookie
所以當伺服器端在產生 cookie 時，都會加上 secret 來作 hash，來保證回來的資料沒有被更動過。
假設現在的 cookie 資料是：

{ dotcom_user: 'jcc' }
搭配上一段秘密字串 this_is_my_secret_and_fuck_you_all，來作 sha1：
var r = sha1('this_is_my_secret_and_fuck_you_all' + 'jcc')
// d01a3d595af33625be4159de07a20b79a1540e54
最後回傳到用戶端的 cookie 為
{ dotcom_user: 'jcc',
'dotcom_user.sig': 'd01a3d595af33625be4159de07a20b79a1540e54' }
這時如果用戶端更改了 cookie，因為他不知道秘密字串是什麼，所以無法產生正確的 hash 值，因此在校對時就會出錯。這樣就可以避免掉被竄改 cookie 的可能了！

## `include`、`require`、`include_once`、`require_once` 的差別

include 和 include_once
都是用來引入檔案，後者可避免重複引入，故建議用後者。引不到檔案會出現錯誤息，但程式不會停止。
require 和 require_once
都是用來引入檔案，後者可避免重複引入，故建議用後者。引不到檔案會出現錯誤息，而且程式會停止執行。