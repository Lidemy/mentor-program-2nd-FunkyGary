## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<audio> 音訊
<strong> 重要的文字，加粗體
<video> 影片

## 請問什麼是盒模型（box modal）
每個element都有width, height,padding,border,margin需要加入考慮整個元件的尺寸

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline
兩個 display : inline 的元素連在一起會在同一行，不會換行。
block
不管 display : block 元素的前面後面是什麼，碰到 display : block 元素就是會換行，而 display : block 元素的寬度預設會撐到最大。
inline-block
外面是 inline ，裡面是 block 。所以碰到 display : inline-block 元素不會換行，但是又可以設定 padding-top 、 padding-bottom 、 width 、 height 、 background-image 。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
static
static 是預設值。任何套用 position: static; 的元素「不會被特別定位」在頁面上特定位置，而是照著瀏覽器預設的配置自動排版在頁面上，所有其他的屬性值都代表該元素會被定位在頁面上。
relative
relative 表現的和 static 一樣，除非你增加了一些額外的屬性。在一個設定為 position: relative 的元素內設定 top 、 right 、 bottom 和 left 屬性，會使其元素「相對地」調整其原本該出現的所在位置，而不管這些「相對定位」過的元素如何在頁面上移動位置或增加了多少空間，都不會影響到原本其他元素所在的位置。
fixed
固定定位（position: fixed）的元素會相對於瀏覽器視窗來定位，這意味著即便頁面捲動，它還是會固定在相同的位置。和 relative 一樣，我們會使用 top 、 right 、 bottom 和 left 屬性來定位。固定定位元素不會保留它原本在頁面應有的空間，不會跟其他元素的配置互相干擾。
absolute
absolute 應該是最弔詭的 position 屬性值。absolute 與 fixed 的行為很像，不一樣的地方在於 absolute 元素的定位是在他所處上層容器的相對位置。如果這個套用 position: absolute 的元素，其上層容器並沒有「可以被定位」的元素的話，那麼這個元素的定位就是相對於該網頁所有內容（也就是 <body> 元素）最左上角的絕對位置，看起來就是這張網頁的絕對位置一樣，所以當你的畫面在捲動時，該元素還是會隨著頁面捲動。請記得，只有套用 position: static 的元素屬於「不會被特別定位」的元素，套用 static 以外的屬性值都算是「可以被定位」的元素。





