(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6635)}])},6635:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return B}});var r=t(5893),n=t(7294);let a=(e,o,t)=>{let r=[];for(let n=0;n<o;n++){let o=[];for(let r=0;r<e;r++)o.push(t);r.push(o)}return r},l=[{type:1,shape:[[0,1,1],[0,1,1],[0,0,0]],color:"#fbdb43"},{type:2,shape:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],color:"#37bcec"},{type:3,shape:[[0,1,0],[1,1,1],[0,0,0]],color:"#93338f"},{type:4,shape:[[0,0,1],[1,1,1],[0,0,0]],color:"#e98e30"},{type:5,shape:[[1,0,0],[1,1,1],[0,0,0]],color:"#1c76bb"},{type:6,shape:[[0,1,1],[1,1,0],[0,0,0]],color:"#7dba50"},{type:7,shape:[[1,1,0],[0,1,1],[0,0,0]],color:"#cc2828"}],s=(e,o)=>{let t=[...e],r=t[0].length;for(let e=0;e<o/90%4;e++)t=t[0].map((e,o)=>t.map(e=>e[r-o-1]));return t},c=()=>{let[e,o]=(0,n.useState)(Date.now()),[t,r]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let o=setTimeout(()=>{r(Math.floor((Date.now()-e)/1e3))},1e3);return()=>clearTimeout(o)},[t,e]),t},i=()=>{let[e,o]=(0,n.useState)(a(10,24,0)),[t,r]=(0,n.useState)({...l[0],startTurn:0,position:{top:1,left:3},rotate:0}),i=c(),p=(0,n.useMemo)(()=>i-t.startTurn+t.position.top,[t,i]),_=(0,n.useMemo)(()=>{let o=a(10,21,0).map((o,t)=>o.map((o,r)=>e[t+3][r])),r=t.shape.length;for(let e=0;e<r**2;e++){let n=e%r,a=Math.floor(e/r);void 0===o[a+p]||o[a+p][n+t.position.left]||(o[a+p][n+t.position.left]=s(t.shape,t.rotate)[a][n]*t.type)}return o},[e,t,p]),u=(0,n.useCallback)((o,r)=>{let n=s(t.shape,t.rotate),a=n.map((e,t)=>e.map((e,a)=>{let l=[1===n[t][a],void 0!==n[t+r]&&1===n[t+r][a+o]];return l.every(e=>e)||!n[t][a]?0:1}));return a.map((n,a)=>n.filter((n,l)=>{if(0!==n){let n=[void 0===e[a+p+r+3],void 0!==e[a+p+r+3]&&0!==e[a+p+r+3][l+t.position.left+o]];return n.some(e=>e)}})).every(e=>!e.length)},[t,e,p]),f=(0,n.useCallback)(()=>{let r=t.shape.length,n=s(t.shape,t.rotate),a=[...e];for(let e=0;e<r**2;e++){let o=e%r,l=Math.floor(e/r);void 0!==a[l+p+3]&&n[l][o]&&(a[l+p+3][o+t.position.left]=t.type)}o(a)},[t,e,p]);return(0,n.useEffect)(()=>{let e=()=>{u(0,1)||(r({...l[t.type%7],position:{top:1,left:3},startTurn:i,rotate:0}),f())};e();let o=o=>{let n=(e,o)=>{r({...t,position:{top:t.position.top+o,left:t.position.left+e}})};e(),"ArrowRight"===o.key&&u(1,0)&&n(1,0),"ArrowLeft"===o.key&&u(-1,0)&&n(-1,0),"ArrowDown"===o.key&&u(0,1)&&n(0,1),"ArrowUp"===o.key&&u(0,-1)&&r({...t,rotate:t.rotate+90})};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t,u,f,i]),{board:_,floatingBlock:t}};var p=t(6619),_=t.n(p);let u=()=>{let{board:e}=i();return(0,r.jsx)("div",{className:_().board,children:e.map((o,t)=>o.map((o,n)=>(0,r.jsx)("div",{className:_()["color-".concat(e[t][n])]},"".concat(n,"_").concat(t))))})};var f=t(6542),d=t.n(f);let h=()=>(0,r.jsx)("div",{className:d().hover});var v=t(1642),m=t.n(v);let x=()=>(0,r.jsx)("div",{className:m().information});var w=t(8042),y=t.n(w);let k=()=>(0,r.jsx)("div",{className:y().next});var b=t(2729),N=t.n(b);let j=()=>(0,r.jsxs)("div",{className:N().container,children:[(0,r.jsx)(h,{}),(0,r.jsx)(x,{}),(0,r.jsx)(u,{}),(0,r.jsx)(k,{})]});var B=j},6619:function(e){e.exports={board:"Board_board__O2hAA",cell:"Board_cell__peFpG","color-1":"Board_color-1__IwXYC","color-2":"Board_color-2__CIi8b","color-3":"Board_color-3__RkO8c","color-4":"Board_color-4__jYUkj","color-5":"Board_color-5__04rYI","color-6":"Board_color-6__axP73","color-7":"Board_color-7__s1OS7","color-0":"Board_color-0__0k18d"}},6542:function(e){e.exports={hover:"Hover_hover__58yN1"}},1642:function(e){e.exports={information:"Information_information__cadY9"}},8042:function(e){e.exports={next:"Next_next__zAIzZ"}},2729:function(e){e.exports={container:"index_container__gnN1f"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);