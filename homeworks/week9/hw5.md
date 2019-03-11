## CSS 預處理器是什麼？我們可以不用它嗎？
CSS 預處理器是個能透過該預處理器語法產生 CSS 的程式。CSS 預處理器有很多選擇，不過大多數的 CSS 預處理器都會添加純 CSS 所沒有的功能，例如：mixin、巢狀選擇器、繼承選擇器等。這些功能會令 CSS 結構的可讀性更高、也更容易維護。

不一定需要使用，可以寫純CSS。
## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
在 HTTP Response Header 裡面加上一個Expires的字段，裡面就是這個 Cache 到期的時間，例如說：

Expires: Wed, 21 Oct 2017 07:28:00 GMT
瀏覽器收到這個 Response 之後就會把這個資源給快取起來，當下一次使用者再度造訪這個頁面或是要求這個圖片的資源的時候，瀏覽器會檢視「現在的時間」是否有超過這個 Expires。如果沒有超過的話，那瀏覽器「不會發送任何 Request」，而是直接從電腦裡面已經存好的 Cache 拿資料。

若是打開 Chrome dev tool，就會看到它寫著：「Status code 200 (from disk cache)」，代表這個 Request 其實沒有發出去，Response 是直接從 disk cache 裡面拿的。
## Stack 跟 Queue 的差別是什麼？
當我們碰到大量資料的時候，通常都會用陣列來處理，資料結構中處理陣列有兩種較常見的方式：堆疊(stack)與佇列(queue)。
堆疊(stack)是先進後出(FILO First In Last Out)的資料結構，意思是，先進去的資料最後出來。
佇列(queue)是先進先出(FIFO First In First Out)的資料結構，意思是，先進去的資料先出來。
## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
權重大小
!important > inline style > Id > Class / psuedo-class / attribute > Element > *
* 為 0-0-0-0，所以只要權重超過就可以覆蓋過它的預設。
Element 的權重都是 0-0-0-0-1。
Class 的權重都是 0-0-0-1-0。
psuedo-class(偽類) 如：:nth-child() 、 :link 、 :hover 、 :focus 等
attribute（屬性選擇器）如：[type:checkbox]、[attr] 等
這兩個的權重跟 class 是一樣的，都是 0-0-0-1-0 。
Id 的權重都是 0-0-1-0-0。
Inline Style Attribute 的權重為 0-1-0-0-0 。
!important 可以蓋過所有的權重 1-0-0-0-0 。若需要更改 !important 值，必須在 !important 後面的 css 加上 !important 


舉例：
ul>li 都是 element 所以加起來是 0-0-0-2
body div ul li a span 總共 6 個 element 所以加起來是 0-0-0-6
li.myclass 一個 element 加上一個 class ，所以是 0-0-1-1
li.myclass ~ li 兩個 element 加上一個 class ，所以是 0-0-1-2
form input[type=email] 兩個 element 、一個 attribute，所以是 0-0-1-2
.box{
    background-color: #f00;!important // 權重 1-0-0-0-0
}


