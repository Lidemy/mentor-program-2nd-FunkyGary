## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS
全名叫 Domain Name Server，在說明 DNS Server 前，可能要先說明什麼叫 Domain Name，在網路上辨別一台電腦的方式是利用 IP，但是一組 IP 數字很不容易記，且沒有什麼聯想的意義，因此，我們會為網路上的伺服器取一個有意義又容易記的名字，這個名字我們就叫它「Domain Name」。 

但由於在 Internet 上真實在辨識機器的還是 IP，所以當使用者輸入Domain Name 後，瀏覽器必須要先去一台有 Domain Name 和 IP 對應資料的主機去查詢這台電腦的 IP，而這台被查詣的主機，我們稱它為 Domain Name Server，簡稱 DNS，例如：當你輸入 www.pchome.com.tw時，瀏覽器會將 www.pchome.com.tw這個名字傳送到離他最近的 DNS Server 去做辨識，如果詢找到，則會傳回這台主機的 IP，進而跟它索取資料，但如果沒查到，就會發生類似 DNS NOT FOUND 的情形，所以一旦DNS Server 當機，就像是路標完全被毀壞，沒有人知道該把資料送到那裡。 

Google Public DNS 
Google於2009年12月5日起提供的一個免費域名解析服務（DNS）。
以下為此服務的DNS位址：
IPv4 位址
8.8.8.8 (google-public-dns-a.google.com)
8.8.4.4 (google-public-dns-b.google.com)
IPv6 位址 [1]
2001:4860:4860::8888
2001:4860:4860::8844
對大眾而言：免費DNS服務的主要目的就是為了改進網路瀏覽速度、改善網路用戶的瀏覽體驗
對Google來說：獲得用戶搜尋數據

## 什麼是資料庫的 lock？為什麼我們需要 lock？
談到鎖定，就不得不談到交易處理(transaction)。所謂交易處理是指在一個工作單元中，執行的一系列資料操作。ATM跨行轉帳就是一個很典型的例子，這個工作單元中包含從轉出帳戶扣款與將金額存入轉入帳號兩個操作，這兩個操作必須有一致的結果，不是全部成功，確認最終狀態；就是全部失敗，回復原始狀態，沒有部分成功，部分失敗的情況，只有轉出沒有轉入或只有轉入沒有轉出都是不允許的。也就是交易處理具有不可分割性(Atomicity)、一致性(Consistency)、隔離性(Isolation)以及持久性(Durability)等特性。而鎖定機制便是為了實現交易的隔離性，好像此時資料庫系統是專屬你一個人的。

## NoSQL 跟 SQL 的差別在哪裡？
SQL (Structured Query Language) 數據庫，指關係型數據庫- 主要代表：SQL Server，Oracle，MySQL(開源)，PostgreSQL(開源)。NoSQL（Not Only SQL）泛指非關係型數據庫- 主要代表：MongoDB，Redis，CouchDB。主要區別1.存儲方式：SQL數據存在特定結構的表中；而NoSQL則更加靈活和可擴展，存儲方式可以省是JSON文檔、哈希表或者其他方式。SQL通常以數據庫表形式存儲數據。而NoSQL存儲方式比較靈活，比如使用類JSON文件存儲借閱數據。

## 資料庫的 ACID 是什麼？

在關聯式資料庫 (Relational Database) 裡，Transaction 是一個極為重要的特性，或許也可以稱為功能．若我印象沒記錯，Transaction 在台灣的書藉裡普遍翻譯成 "交易"．雖然覺得用 "交易" 來表示蠻奇怪的，但也只能將就這情況，畢竟這翻譯詞已存在很久了．基本上而言，一個 Transaction 是指用戶端傳送給資料庫引擎所要執行的動作．這些動作通常是以 SQL 語法組成，然後再由資料庫引擎來解析語法，轉成各式各樣的動作來執行．比如，用戶端傳來了一個 Update Table1 set Column1='some word'，這個語法是告訴資料庫引擎去尋找 Table1 的表格，然後將這個表格裡 Column1 欄位的內容改成 'some word'．這個語法本身就是一個 Transaction，其本身的特性需要有足夠的單獨性，一致性，持續性以及不被干擾的特質，也就是市面上書藉裡常提到的 ACID．這些特性是在 1980 年代一位著名的學者 Jim Gray 所提出，後來再經由其他學者加以擴展而成現在所看到的 ACID．

Atomicity: 這指的是單獨性．比如，一個 Transaction 裡有一個 Update command，一個 Delete command．如果 Update command 成功了而 Delete command 失敗了，則這個 Transaction 便是失敗的，所以 Update command 必須回復修改過的資料．
Consistency: 一致性代表的是在 Transaction 執行前後，資料皆處於合乎所有規則的狀態．例如，某個欄位具有 foreign key 的關係，其資料的內容不是能隨意產生的，必乎符合 foreign key 的關係，所以 transaction 在執行後，這樣的關係必需持續下去．
Isolation: 這指的是不同的 Transaction 之間執行時不能被彼此干擾．假設有兩個 Transaction 在同一時間對相同的一百筆資料進行更新動作，而其中一個 Transaction 在更新到一半時產生錯誤，於是進行資料回復．然而，另一個 Transaction 是完成的．可想而知最後的資料狀態一定是無法預測，因為不清楚那些資料是失敗的 Transaction 做資料回復的，還是成功的 Transaction 所更新完成的．
Durability: 我將它稱之為資料的耐力．資料庫引擎必須要保證一旦 Transaction 完成後，不論發生任何事情，如系統當機或電力中斷等，運作後的資料都必須存在於儲存媒介中，也就是在硬碟裡．