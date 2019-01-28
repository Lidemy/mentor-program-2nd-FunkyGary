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
## GET跟POST有哪些區別，可以試著舉幾個例子嗎？
## 什麼是RESTful API？
## JSON 是什麼？
## JSONP 是什麼？
## 要如何存取跨網域的API？