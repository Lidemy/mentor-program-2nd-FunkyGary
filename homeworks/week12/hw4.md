## 為什麼我們需要 React？可以不用嗎？
React 是工具，是否使用取決於個人，但工具創造出來有絕對好處，我們必須先了解 react 的優勢：
1. virtual dom 虛擬DOM概念
它並不直接對DOM進行操作，引入了一個叫做virtual dom的概念，安插在javascript邏輯和實際的DOM之間，好處是減少DOM操作，減少DOM操作的目的是提高瀏覽器的渲染性能。
虛擬dom就中小型項目而言，的確從表像上看不出太多的優勢，因為它解決的是底層的dom渲染，IO開銷問題。但是想想facebook的體量，不難猜出react的誕生是為了解決更複雜更大型的項目開發和管理的。

2. unidirectional data flow 單向數據流
單向數據流的好處是與之前angularJS提出的two-way data binding相比較而言，因為單向，所以各種變化都是可預計、可控制的。不像two-way data binding那樣，變化一但複雜起來，大家都互相觸髮變化，到最後一個地方變了，你根本猜不出來她還會導致其他什麼地方跟著一起變。

3. react項目結構更加清晰
分資料夾放不同的文件，方便檢查代碼

4. 組件化
代碼更加模塊化，重用代碼更容易，可維護性高。




## React 的思考模式跟以前的思考模式有什麼不一樣？
jQuery 直接操作 DOM， React 則是重新渲染，jQuery 需要思考現在要怎麼把舊資料改成新資料， React 只要在 state 把資料改完以後傳到 component 中用 props 呈現即可。

## state 跟 props 的差別在哪裡？
state
改變state來重新render UI，因此只要改變state狀態，等於改變前端頁面的呈現狀態
props
props為父元件所傳來的資料內容，可以為任何型態，陣列or字串甚至是一個方法( function)。子元素不能改變自身的props，必須使用上層傳遞的 props function 來 setsate。

## 請列出 React 的 lifecycle 以及其代表的意義

我們可以為class 組件聲明一些特殊的方法（lifecycle），當組件掛載或卸載時就會去執行這些方法：
componentWillMount()，在组件首次渲染(render)之前调用。
componentDidMount()，一旦组件首次加载完成，便会调用
shouldComponentUpdate(nextProps, nextState)，要不要更新(重新渲染)组件？
    1.返回true，重新渲染。紧接着，继续执行 componentWillUpdate() → render() → componentDidUpdate()。
    2.false，不重新渲染。不再执行任何生命周期函数函数（亦不执行该组件的 render( ) 函数）。但是，并不妨碍其子组件。也就是说，如果其子组件的 props 或 state 发生改变时，只会取决于那个组件的 shouleComponentUpdate ( ) 方法的返回值。
componentWillUpdate(nextProps, nextState)，当 shouldComponentUpdate( ) 方法返回 true 后调用。
componentDidUpdate(prevProps, preState)，一旦组件首次更新（重新渲染）完成时调用。
componentWillUnmount()，在组件即将被卸载(或销毁)之前调用。





