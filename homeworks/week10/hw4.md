## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
Gulp，是一套前端的任務管理工具，它可以幫助工程師將一些前端檔案的處理做成自動化程序，然後佈署在開發環境，讓前端工程師專注在開發上面，無須費心於環境設定等瑣事。但是它沒發解決的是js module 的問題，是你寫代碼時候如何組織代碼結構的問題。

WebPack可以看做是模塊打包機：它做的事情是，分析你的項目結構，找到JavaScript模塊以及其它的一些瀏覽器不能直接運行的拓展語言（Scss，TypeScript等），並將其轉換和打包為合適的格式供瀏覽器使用。

WebPack和Grunt以及Gulp相比有什麼特性
其實Webpack和另外兩個並沒有太多的可比性，Gulp/Grunt是一種能夠優化前端的開發流程的工具，而WebPack是一種模塊化的解決方案，不過Webpack的優點使得Webpack在很多場景下可以替代Gulp/Grunt類的工具。
Grunt和Gulp的工作方式是：在一個配置文件中，指明對某些文件進行類似編譯，組合，壓縮等任務的具體步驟，工具之後可以自動替你完成這些任務。

Webpack的工作方式是：把你的項目當做一個整體，通過一個給定的主文件（如：index.js），Webpack將從這個文件開始找到你的項目的所有依賴文件，使用loaders處理它們，最後打包為一個（或多個）瀏覽器可識別的JavaScript文件。

由於預處理器的使用增加，現代不使用 gulp 跟 webpack 對於前端會更花精力，工具開發都是為了節省時間。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？
效能不彰，每次都要重新形成 DOM 中的物件。

## CSS Sprites 與 Data URI 的優缺點是什麼？

CSS Sprite 是將頁面中所使用到的小圖片整合到一張大圖上去。大家都知道，客戶端向伺服器傳送請求是很有代價的，特別是在移動端，所以，sprite 的提出是為了減少 http 請求數，從而加快頁面載入速度。

使用方式
先將小圖片整合到一張大圖上，css 引入背景圖片，然後依據圖示的位置使用 background-position 進行定位

使用技巧
切圖的時候就構思拼接好圖片
排序有序，便於後期維護(個人建議圖示從上到下排列)。有利於 background-position 定位
定位時避免使用 right, bottom 等（後期圖片尺寸變化後就不一定了好不）
合理預留空白位置（空太多檔案變大，太小引起圖示重疊）

優點
1. 減少圖片的體積，因為每個圖片都有一個頭部信息，把多個圖片放到一個圖片里，就會共用同一個頭部信息，從而減少了字節數。
2. 減少了網頁的http請求次數，從而加快了網頁加載速度，提高用戶體驗。
3. 解決了網頁設計師在圖片命名上的困擾，只需對一張集合的圖片上命名就可以了，不需要對每一個小元素進行命名，從而提高了網頁的製作效率。
4. 更換風格方便，只需要在一張或少張圖片上修改圖片的顏色或樣式，整個網頁的風格就可以改變。維護起來更加方便。

缺點
1. 在圖片合併的時候，你要把多張圖片有序的合理的合併成一張圖片，還要留好足夠的空間，防止板塊內出現不必要的背景；這些還好，最痛苦的是在寬屏，高解析度的螢幕下的自適應頁面，你的圖片如果不夠寬，很容易出現背景斷裂；
2. 在開發的時候比較麻煩，你要通過photoshop或其他工具測量計算每一個背景單元的精確位置，這是針線活，沒什麼難度，但是很繁瑣；
3. 在維護的時候比較麻煩，如果頁面背景有少許改動，一般就要改這張合併的圖片，無需改的地方最好不要動，這樣避免改動更多的css，如果在原來的地方放不下，又只能（最好）往下加圖片，這樣圖片的字節就增加了，還要改動css。
4. 精靈圖不能隨意改變大小和顏色。精靈圖改變大小會失真模糊，降低用戶體驗，css3新屬性可以改變精靈圖顏色，但是比較麻煩，並且新屬性有兼容問題。現在一般都是用web字體(圖標字體)來代替精靈圖



原文網址：https://kknews.cc/zh-tw/other/aaaxopj.html


原文網址：https://kknews.cc/zh-tw/other/aaaxopj.html
image data URI

將圖片轉為編碼字串，讓開發者能將圖檔嵌入 HTML、CSS 或 JavaScript 程式碼，以減少 HTTP Request。適合較少更新的小圖，例如 icon 等。如：

使用方式
/** 資料格式 **/
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAE1JREFUKJHV0MEOwCAIA9DW7MP983pymUaweluv8IAABJFUJdWonqEeD0/IwwHK8QatsYlGfIhezM9WOc8jSQAoTvMqTzY1u Z6449gA9r24D4iZ6wwAAAAAElFTkSuQmCC
/** 樣式引用 **/
.icon{
width: 30px; height: 30px;
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAE1JREFUKJHV0MEOwCAIA9DW7MP983pymUaweluv8IAABJFUJdWonqEeD0/IwwHK8QatsYlGfIhezM9WOc8jSQAoTvMqTzY1u Z6449gA9r24D4iZ6wwAAAAAElFTkSuQmCC);
}

標籤語法：
data : 取得資料協議
image/png : 取得資料的協議名稱（注意這裡也圖片資源也可以使用字型等）
base64 : 資料編碼方式
iVBOR… : 編碼後資料

優點

由於網頁每次同時能發出的 HTTP Request 數量有限，且下載需等待時間，若圖片使用 Base64 編碼就不需要 HTTP Request 來請求檔案和等待，讓使用者早點看到畫面。

缺點
使用 Base64 編碼的圖檔可能比原二進位檔案來得大，平均比原檔案大 33%。
在更新圖檔方面，若能直接更新檔案或連結是較容易的，至於更新 Base64 編碼的圖檔需要使用工具先將圖片轉碼，維護較困難。解法是使用自動化工具並安裝 plugin，像是 css-base64-images 和 postcss-base64。
增加文件檔案大小。由於 Base64 編碼的圖檔會產生大量字串，因此若圖片太大，字串就會非常長而導致文件太大，那麼這個圖檔就不適合使用 Base64 編碼了，但可使用 Gzip 壓縮和檔案快取來改善。
由於並非圖檔，因此無法做 Image Caching。
因此是否要使用 Base64 Images 主要就是看要省 (1) HTTP Request 或 (2) Gzip 壓縮後的檔案大小 或 (3) 快取 的時間了。

