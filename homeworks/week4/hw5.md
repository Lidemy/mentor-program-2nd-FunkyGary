## 什麼是DOM？
DOM的內容其實可以分為三個部份：DOM core、HTML DOM與XML DOM。其中DOM Core是最基本的底層架構(核心)，主要是將Document架構為一個樹(Tree)的概念，
Tree的組成成份就是節點(Node)，每個DOM必須要有一個document的根節。每個元素在DOM裡面就是一個節點。

當一個.html檔被以瀏覽器開啟的時候，瀏覽器就會去解析該檔案的DOM。由於瀏覽器可以處理html跟XML的DOM，所以也有人稱DOM檔案樹為html檔案樹或者XML檔案樹。事實上就是指 document 中元素，對應到的 JavaScript 物件，我們就統稱為 dom。

var img = document.getElementById("img2");這個 img 就是範例中 img 標籤對應到 JS 世界的 dom 元素。

不管是什麼DOM，都有對應的物件架構，每個物件有其屬性、方法(Method)與界面(Interface)，讓外界可以讀寫其內容；對外界程式設計人員而言，這些方法界面，統稱API (Application Programming Interface)
## 什麼是Ajax？
AJAX即「Asynchronous JavaScript and XML」（非同步的JavaScript與XML技術），指的是一套綜合了多項技術的瀏覽器端網頁開發技術。Ajax的概念由傑西·詹姆士·賈瑞特所提出。

傳統的Web應用允許用戶端填寫表單（form），當送出表單時就向網頁伺服器傳送一個請求。伺服器接收並處理傳來的表單，然後送回一個新的網頁，但這個做法浪費了許多頻寬，因為在前後兩個頁面中的大部分HTML碼往往是相同的。由於每次應用的溝通都需要向伺服器傳送請求，應用的回應時間依賴於伺服器的回應時間。這導致了使用者介面的回應比本機應用慢得多。

與此不同，AJAX應用可以僅向伺服器傳送並取回必須的資料，並在用戶端採用JavaScript處理來自伺服器的回應。因為在伺服器和瀏覽器之間交換的資料大量減少，伺服器回應更快了。同時，很多的處理工作可以在發出請求的用戶端機器上完成，因此Web伺服器的負荷也減少了。

類似於DHTML或LAMP，AJAX不是指一種單一的技術，而是有機地利用了一系列相關的技術。雖然其名稱包含XML，但實際上資料格式可以由JSON代替，進一步減少資料量，形成所謂的AJAJ。而用戶端與伺服器也並不需要異步。一些基於AJAX的「衍生／合成」式（derivative/composite）的技術也正在出現，如AFLAX
## HTTP method 有哪幾個？有什麼不一樣？
HTTP Method的歷史：

HTTP 0.9 這個版本只有GET方法
HTTP 1.0 這個版本有GET HEAD POST這三個方法
HTTP 1.1 這個版本是當前版本，包含GET、HEAD、POST、OPTIONS、PUT、DELETE、TRACE、CONNECT、PATCH這8個方法

GET
GET 方法請求展示指定資源。使用 GET 的請求只應用於取得資料。
HEAD
HEAD 方法請求與 GET 方法相同的回應，但它沒有回應主體（response body）。
POST
POST 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。
PUT
PUT 方法會取代指定資源所酬載請求（request payload）的所有表現。
DELETE
DELETE 方法會刪除指定資源.
CONNECT
CONNECT 方法會和指定資源標明的伺服器之間，建立隧道（tunnel）。
OPTIONS
OPTIONS 方法描述指定資源的溝通方法（communication option）。
TRACE
TRACE 方法會與指定資源標明的伺服器之間，執行迴路返回測試（loop-back test）。
PATCH
PATCH 方法套用指定資源的部份修改。

## GET跟POST有哪些區別，可以試著舉幾個例子嗎？
HTML Form 表單有兩種資料傳遞方式，分別為 GET 與 PSOT 這兩種，當網有填好表單資料並按下送出表單的按鈕之後，必須透過這兩種方式將資料送出到伺服器（Web Server），以下為兩種方式的 HTML Code 寫法。

一、GET 傳遞方式
<form action="接收資料的程式" method="get">
二、POST 傳遞方式
<form action="接收資料的程式" method="post">
無論是 GET 或 POST 都可以傳遞資料，但兩者在應用方面需要做選擇，先來看看他們的差異，就知道要怎麼選擇。

|         | GET	    |  POST  |
| -------- | -----:   | :----: |
| 網址差異  | 網址會帶有 HTML Form 表單的參數與資料。   |   	資料傳遞時，網址並不會改變。    |
| 資料傳遞量| 由於是透過 URL 帶資料，所以有長度限制。    |   由於不透過 URL 帶參數，所以不受限於 URL 長度限制。    |
| 安全性    | 表單參數與填寫內容可在 URL 看到。        |   透過 HTTP Request 方式，故參數與填寫內容不會顯示於 URL。    |

嚴格來說一般的表單可以用 GET 直接傳遞，而需要保密的資料必須用 POST 來處理，像是會員登入的帳號密碼。以下圖片為透過 GET 方式傳遞資料的 URL 呈現結果範例，可以由網址看出表單中的參數為 name，傳遞的值為 My name is Jef.。

所以如果不希望網友登入的時候，帳號與密碼顯示於網址欄，最好是使用 POST 的方式處理。
## 什麼是RESTful API？
REST指的是網路中Client端和Server端的一種呼叫服務形式，透過既定的規則，滿足約束條件和原則的應用程式設計，對資源的操作包括獲取、創建、修改和刪除資源，這些操作就是依照我們前面所提到的HTTP Method: GET、POST、PUT、PATCH和DELETE。這正好會對應到資料庫基本操作CRUD。CRUD 為 Create(新增)、Read(讀取)、Update(更新)與Delete(刪除)的縮寫。

如果我們在寫一隻商品的WebAPI，讓工程師隨便寫可能會有以下方式來作interface：
獲得商品資料 GET   /getAllItems
獲得商品資料 GET   /getItem/11
新增商品資料 POST /createItem
更新商品資料 POST  /updateItem/
刪除商品資料 POST  /deleteItem/
 
若是以使用 RESTful API 開發的話:
獲取商品資料 /GET     /items
獲取商品資料 /GET     /items/1
新增商品資料 /POST   /items
更新商品資料 /PATCH /items/1 
刪除商品資料 /DELETE /items/1

兩者差異是在於 RESTful API 充分地使用了 HTTP protocol (GET/POST/PUT/DELETE)，達到:
1.以直觀簡潔的資源 URI
2.並且善用 HTTP Verb
3.達到對資源的操作
4.並使用 Web 所接受的資料類型: JSON, XML, YAML 等，最常見的是 JSON
通常是使用 HTTP, URI, JSON, HTML 這些現有廣泛流行的協議和標準，且使用 HTTP status code 來代表該資源的狀態。框架中強制使用 REST 風格的最有名的應該就是 Ruby on Rails 了!
## JSON 是什麼？
JSON用於描述資料結構，有兩種結構存在：

物件（object）：一個物件包含一系列非排序的名稱／值對(pair)，一個物件以{開始，並以}結束。每個名稱／值對之間使用:分割。
陣列 (array)：一個陣列是一個值(value)的集合，一個陣列以[開始，並以]結束。陣列成員之間使用,分割。
具體的格式如下：

名稱／值（pair）：名稱和值之間使用：隔開，一般的形式是：
{name:value}
一個名稱是一個字串； 一個值(value)可以是一個字串(string)，一個數值(number)，一個物件(object)，一個布林值(bool)，一個有序列表(array)，或者一個null值。

字串：以""括起來的一串字元。
數值：一系列0-9的數字組合，可以為負數或者小數。還可以用e或者E表示為指數形式。
布林值：表示為true或者false。
值的有序列表（array）：一個或者多個值用,分割後，使用[，]括起來就形成了這樣的列表，形如：
[value, value]
## JSONP 是什麼？
JSONP（JSON with Padding）是資料格式JSON的一種「使用模式」，可以讓網頁從別的網域要資料。另一個解決這個問題的新方法是跨來源資源共用。

由於同源策略，一般來說位於server1.example.com的網頁無法與 server2.example.com的伺服器溝通，而HTML的 <script>元素是一個例外。利用 <script>元素的這個開放策略，網頁可以得到從其他來源動態產生的JSON資料，而這種使用模式就是所謂的 JSONP。用JSONP抓到的資料並不是JSON，而是任意的JavaScript，用 JavaScript直譯器執行而不是用JSON解析器解析。
為了理解這種模式的原理，先想像有一個回傳JSON檔案的URL，而JavaScript 程式可以用XMLHttpRequest跟這個URL要資料。假設我們的URL是 http://server2.example.com/RetrieveUser?UserId=xxx 。假設小明的UserId 是1823，且當瀏覽器透過URL傳小明的UserId，也就是抓取http://server2.example.com/RetrieveUser?UserId=1823，得到：

   {"Name": "小明", "Id" : 1823, "Rank": 7}
這個JSON資料可能是依據傳過去URL的查詢參數動態產生的。

這個時候，把 <script>元素的src屬性設成一個回傳JSON的URL是可以想像的，這也代表從HTML頁面透過script元素抓取 JSON是可能的。

然而，一份JSON檔案並不是一個JavaScript程式。為了讓瀏覽器可以在 <script>元素執行，從src裡URL 回傳的必須是可執行的JavaScript。在JSONP的使用模式裡，該URL回傳的是由函式呼叫包起來的動態生成JSON，這就是JSONP的「填充（padding）」或是「前輟（prefix）」的由來。

慣例上瀏覽器提供回調函式的名稱當作送至伺服器的請求中命名查詢參數的一部份，例如：

 <script type="text/javascript"
         src="http://server2.example.com/RetrieveUser?UserId=1823&jsonp=parseResponse">
 </script>
伺服器會在傳給瀏覽器前將JSON資料填充到回呼函式（parseResponse）中。瀏覽器得到的回應已不是單純的資料敘述而是一個指令碼。在本例中，瀏覽器得到的是：

   parseResponse({"Name": "小明", "Id" : 1823, "Rank": 7})
## 要如何存取跨網域的API？

瀏覽器因為安全性的考量，有一個東西叫做同源政策，Same-origin policy。意思就是說如果你現在這個網站的跟你要呼叫的 API 的網站「不同源」的時候，瀏覽器一樣會幫你發 Request，但是會把 Response 給擋下來，不讓你的 JavaScript 拿到並且傳回錯誤。

什麼是不同源呢？其實你想簡單一點，只要是 Domain 不一樣就是不同源，或者是一個用http一個用https也是不同源，端口號不一樣也是不同源。所以如果你是接別人 API 的話，大多數情形都是不同源的。

CORS，全名為 Cross-Origin Resource Sharing，跨來源資源共享。這套規範跟你說，如果你想開啟跨來源 HTTP 請求的話，Server 必須在 Response 的 Header 裡面加上Access-Control-Allow-Origin。

當瀏覽器收到 Response 之後，會先檢查Access-Control-Allow-Origin裡面的內容，如果裡面有包含現在這個發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。

CORS 把 Request 分成兩種，一種是簡單請求（simple requests）。什麼是簡單請求呢？其實定義有滿長一串的，我認為有需要用到的時候再看就好，但總之如果你沒有加任何自定義的 Header，而且又是 GET 的話，絕對是簡單請求（這個夠簡單了吧）

這一個 Request 叫做 Preflight Request，中文翻作「預檢請求」，因為非簡單請求可能會帶有一些使用者資料，因此會先透過 Preflight Request 去確認後續的請求能否送出。如果這個 Preflight Request 沒有過的話，真的 Request 也就不會發送了，這就是預檢請求的目的。

我舉一個例子，你就會知道為什麼需要這個 Preflight Request 了。

假設今天某個 Server 提供了一個 API 網址叫做：https://example.com/data/16，你只要對它發送 GET，就能夠拿到 id 是 16 的資料，只要對它發送 DELETE，就可以把這筆資料刪除。

如果今天沒有 Preflight Request 這個機制的話，我就可以在隨便一個 Domain 的網頁上面發送一個 DELETE 的 Request 給這個 API。剛剛我有強調說瀏覽器的 CORS 機制，還是會幫你發送 Request，但只是 Response 被瀏覽器擋住而已。

JSONP，這是跨來源請求除了 CORS 以外的另外一種方法，全名叫做：JSON with Padding。