## React Router 背後的原理你猜是怎麼實作的？
history 猜測用 HTML5 的 window.history 功能
Route 等 URL 猜測用 window location 來判斷呈現哪個 componant 

參考：http://zhenhua-lee.github.io/react/history.html
## SDK 與 API 的差別是什麼？
SDK (Software Development Kit) "軟體開發工具組" 
是用來幫一個產品或平台開發應用程式的工具組，由產品的廠商提供給開發者使用的。通常是某一家廠商針對某一平台或系統或硬體所發佈出來用以開發應用程式的工具組，在這個工具包裡面，可能包含了各式各樣的開發工具，模擬器等。例如：給Android平台使用的Android SDK就是用來開發Android系統上面的應用程式。

API (Application Programming Interface) "程式溝通介面"
翻譯為介面，顧名思義就要溝通兩個不同的東西用的，通常由一組函式庫所組成。在一個同一個平台下的兩個不同東西(程式or系統)，為了能取用對方的功能等等，所以一個X程式寫了一組函式，讓同一平台的其他程式取用X程式的功能，那組函式就可以說是那個X程式對外開放的API。例如：我要在自己的網頁上加入google map網頁的功能，就使用"google map API"有時候SDK(開發者工具包)裡也會帶有些許API用來調用一些系統平台程式提供的功能例如說：視窗顯示，圖形特效等等。以下舉一個實際例子來說明，調用系統程式功能的API是怎麽一回事開發Windows應用程式的SDK(開發者工具包)裡就包含Win32 API 說明： Win32 API是一個函式庫，可以給Windows應用程式調用Windows系統的功能

SDK 是開發者的工具包，API 則是讓其他程式與其溝通的接口

## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？
1、當傳送ajax請求時，檢視瀏覽器除錯資訊中Headers和Cookies，發現傳送到後端的跨域請求並沒有攜帶 cookie 資訊，可見Request Headers不包含Cookie屬性，Response Headers中也不包含Set-Cookie屬性，導致無法得到後臺業務系統的認證。

解決：在ajax裡新增withCredentials的配置，允許其請求攜帶cookie資訊。通過設定withCredentials=true，傳送Ajax時，Request header中便會帶上 Cookie 資訊。

2、伺服器server端要配置Access-Control-Allow-Credentials
我們在客戶端設定了withCredentials=true 引數，對應著，伺服器端要通過在響應 header 中設定Access-Control-Allow-Credentials = true來執行客戶端攜帶證書式的訪問。通過對Credentials引數的設定，就可以保持跨域Ajax時傳遞的Cookie。

3、伺服器server端要配置Access-Control-Allow-Origin

到以上配置為止，傳送ajax請求，我們發現還會出現一個錯誤，提示我們 Access-Control-Allow-Origin 不能用 * 萬用字元。原因是：當伺服器端 Access-Control-Allow-Credentials = true時，引數Access-Control-Allow-Origin 的值不能為 '*' 。
我們重新設定Access-Control-Allow-Origin的值，當伺服器端接收到請求後，在返回響應時，把請求的域Origin填寫到響應的Header資訊裡（即誰訪問我，我允許誰），程式碼如下：response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));

參考：https://blog.csdn.net/qq_29845761/article/details/51897705