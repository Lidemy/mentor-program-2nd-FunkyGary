console . log ( 1 )
 setTimeout (() => {
   console . log ( 2 )
}, 0 )
 console . log ( 3 )
 setTimeout (() => {
   console . log ( 4 )
}, 0 )
 console . log ( 5 )

結果：
 console 順序 13524

解釋：
 在 JavaScript 中的執行堆疊（called stack）會記錄目前執行到程式的哪個部分，如果進入了某一個函式（step into），便把這個函式添加到堆疊（stack）當中的最上方；如果在函式中執行了 return ，則會將此函式從堆疊（stack）的最上方中抽離（pop off）。

 當執行程式碼片段需要等待很長一段時間，或好像「卡住」的這種現象，被稱作 阻塞（blocking），假設請求資料的 AJAX Request 變成同步（Synchronous）處理的話，那麼每 request 一次，因為必需等這個函式執行完畢從堆疊（stack）中跳離開後才能往下繼續走，進而導致阻塞的情形產生

 為了要理解 JavaScript 之所以能夠透過非同步的方式（asynchronous）「看起來」一次處理很多事情，我們需要進一步瞭解 Event Loop。
我們之所以可以在瀏覽器中同時（concurrently）處理多個事情，是因為瀏覽器並非只是一個 JavaScript Runtime。

JavaScript 的執行時期（Runtime）一次只能做一件事，但瀏覽器提供了更多不同的 API 讓我們使用，進而讓我們可以透過 event loop 搭配非同步的方式同時處理多個事項。

當我們在堆疊中執行 setTimeout 這個 function 時，setTimeout 實際上是一個瀏覽器提供的 API ，而不是 JS 引擎本身的功能；於是瀏覽器提供一個計時器給我們使用， setTimeout 中的 callback function（簡稱 cb）會被放到 WebAPIs 中，這時候，setTimeout 這個 function 就已經執行結束，並從堆疊中脫離。
當計時器的時間到時，會把要執行的 cb 放到一個叫做工作佇列（task queue）的地方。

這時候就輪到事件循環（event loop）的功能，它的作用很簡單—如果堆疊（stack）是空的，它便把佇列（queue）中的第一個項目放到堆疊當中；堆疊（stack）便會去執行這個項目。

因此，

console . log ( 1 ) 
放到 stack 中並且執行
 setTimeout (() => {
   console . log ( 2 )
}, 0 ) 
放到 stack 中並且執行，cb（console.log ( 2 ) 放到 WebAPIs 中
setTimeout 時間到達，console.log ( 2 ) 放到 task queue 中
console . log ( 3 ) 
放到 stack 中並且執行
 setTimeout (() => {
   console . log ( 4 )
}, 0 ) 
放到 stack 中並且執行，cb（console.log ( 4 ) 放到 WebAPIs 中
setTimeout 時間到達，console.log ( 4 ) 放到 task queue 中
console . log ( 5 ) 
放到 stack 中並且執行
依據 task queue 先進先出的原則
console.log ( 2 )放到 stack 中並且執行
console.log ( 4 )放到 stack 中並且執行

和 setTimeout 一樣，AJAX Request 的功能並不在 JavaScript 引擎中，而是屬於 Web APIs（XHR）。
當執行 AJAX 請求的時候，cb 的內容會被放在 Web APIs 中，因此原本的堆疊（stack）將可以繼續往下執行。
直到 AJAX Request 給予回應後（不論成功或失敗），便把 cb 放到工作佇列（queue）當中，當堆疊（stack）被清空的時候，event loop 便會把 cb 拉到堆疊中加以執行。

一般來說，瀏覽器會在每 16.6 毫秒（也就是每秒 60 個 frames）的時候重新渲染（render）畫面，而渲染的優先權高於回呼函數（callback function）。當我們在堆疊（stack）中執行一個耗時的函式時，畫面的渲染會被阻塞住，這時你並沒辦法選取瀏覽器上的文字、沒辦法點擊瀏覽器上的元件。

但是如果我們是透過非同步的方式執行這些函式的時候，在每一個 cb 從工作佇列（task queue）到堆疊（stack）的過程中，提供了瀏覽器重新渲染的機會。
而這也就是為什麼不要把耗時的程式碼放入堆疊（stack）當中，因為當堆疊在運作的時候，瀏覽器並沒有辦法重新渲染畫面。