doc

<h1>alarm-box.js</h1>
<p>this is the alarm box of welcome page</p>
<p>
To init the alarm box:<br/>
var box = $(".alarm-box").alarmInit();<br/>
function alarm can accpet two kinds of parameter:string,array<br/>
box.alarm("test1");<br/>
var testlist = new Array();<br/>
testlist.push("test2");<br/>
testlist.push("test3");<br/>
box.alarm(testlist);<br/>
we can hide the alarm by destory it,the message that you alarmed will be gone<br/>
box.destroy();<br/>
</p>
