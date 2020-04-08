!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t){var e=t.trim().match(/^(-?[0-9]*\.?[0-9]*)(px|%)$/);return e?{value:e[1],unit:e[2]}:null}var i=new WeakMap;function r(t){return t===document.scrollingElement?document:t}function o(t){return Infinity===t.iterationCount?Infinity:Math.max((t.startDelay||0)+(t.duration||0)*(t.iterationCount||1)+(t.endDelay||0),0)}var l=[];function a(t,e,i,r,o){if(o&&"function"==typeof o)return o(e,i,r,"0%"===t?"start":"end");"block"===i?i="vertical":"inline"===i&&(i="horizontal");var l="vertical"===i?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,a=n("auto"===r?t:r);return"%"===a.unit?parseFloat(a.value)*l/100:parseFloat(a.value)}function s(){var t=i.get(this).animations;if(0!==t.length)for(var e=this.currentTime,n=0;n<t.length;n++)null==e?"paused"===t[n].playState&&t[n].cancel():t[n].currentTime=e}function c(t,e,n){var r=i.get(t).animations,o=i.get(t).animationOptions;r.push(e),o.push(n),s.apply(t)}var h=function(){function t(t){i.set(this,{scrollSource:null,orientation:"block",startScrollOffset:"auto",endScrollOffset:"auto",timeRange:"auto",fill:"none",animations:[],animationOptions:[],updateFunction:s.bind(this)}),this.scrollSource=t&&t.scrollSource||document.scrollingElement,this.orientation=t&&t.orientation||"block",this.startScrollOffset=t&&t.startScrollOffset||"auto",this.endScrollOffset=t&&t.endScrollOffset||"auto",this.timeRange=t&&t.timeRange||"auto",this.fill=t&&t.fill||"none"}return e(t,[{key:"scrollSource",set:function(t){var e=i.get(this);this.scrollSource&&r(this.scrollSource).removeEventListener("scroll",e.updateFunction),t instanceof Element||(t=document.scrollingElement),i.get(this).scrollSource=t,r(t).addEventListener("scroll",e.updateFunction),s.apply(this)},get:function(){return i.get(this).scrollSource}},{key:"orientation",set:function(t){-1==["block","inline","horizontal","vertical"].indexOf(t)&&(t="block"),i.get(this).orientation=t,s.apply(this)},get:function(){return i.get(this).orientation}},{key:"startScrollOffset",set:function(t){i.get(this).startScrollOffsetFunction=null;for(var e=0;e<l.length;e++){var n=l[e][0](t);if(void 0!==n){t=n,i.get(this).startScrollOffsetFunction=l[e][1];break}}i.get(this).startScrollOffset=t,s.apply(this)},get:function(){return i.get(this).startScrollOffset}},{key:"endScrollOffset",set:function(t){i.get(this).endScrollOffsetFunction=null;for(var e=0;e<l.length;e++){var n=l[e][0](t);if(void 0!==n){t=n,i.get(this).endScrollOffsetFunction=l[e][1];break}}i.get(this).endScrollOffset=t,s.apply(this)},get:function(){return i.get(this).endScrollOffset}},{key:"timeRange",set:function(t){i.get(this).timeRange=t,s.apply(this)},get:function(){return i.get(this).timeRange}},{key:"currentTime",get:function(){if(!this.scrollSource)return null;var t,e,n=a("0%",this.scrollSource,this.orientation,this.startScrollOffset,i.get(this).startScrollOffsetFunction),r=a("100%",this.scrollSource,this.orientation,this.endScrollOffset,i.get(this).endScrollOffsetFunction),l=function(t){var e=t.timeRange;if("auto"===e){e=0;for(var n=i.get(t).animationOptions,r=0;r<n.length;r++)e=Math.max(e,o(n[r]));Infinity===e&&(e=0)}return e}(this),s=this.scrollSource.scrollTop;return s<n?"none"===this.fill||"forwards"===this.fill?null:0:s>=r?r<(t=this.scrollSource,"block"===(e=this.orientation)?e="vertical":"inline"===e&&(e="horizontal"),"vertical"===e?t.scrollHeight-t.clientHeight:"horizontal"===e?t.scrollWidth-t.clientWidth:void 0)&&("none"===this.fill||"backwards"===this.fill)?null:l:(s-n)/(r-n)*l}}]),t}(),u=new WeakMap,f=[[[0,1,2,3]],[[0,2],[1,3]],[[0],[1,3],[2]],[[0],[1],[2],[3]]],g=function(){function t(t){u.set(this,{target:null,edge:"start",threshold:0,rootMargin:[[0,"px"],[0,"px"],[0,"px"],[0,"px"]]}),this.target=t.target,this.edge=t.edge||"start",this.threshold=t.threshold||0,this.rootMargin=t.rootMargin||"0px 0px 0px 0px",this.clamp=t.clamp||!1}return e(t,[{key:"target",set:function(t){if(!(t instanceof Element))throw u.get(this).target=null,Error("Intersection target must be an element.");u.get(this).target=t},get:function(){return u.get(this).target}},{key:"edge",set:function(t){-1!=["start","end"].indexOf(t)&&(u.get(this).edge=t)},get:function(){return u.get(this).edge}},{key:"threshold",set:function(t){var e=parseFloat(t);if(e<0||e>1)throw RangeError("threshold must be in the range [0, 1]");u.get(this).threshold=e},get:function(){return u.get(this).threshold}},{key:"rootMargin",set:function(t){var e=t.split(/ +/);if(e.length<1||e.length>4)throw TypeError("rootMargin must contain between 1 and 4 length components");for(var i=[[],[],[],[]],r=0;r<e.length;r++){var o=n(e[r]);if(!o)throw TypeError("Unrecognized rootMargin length");for(var l=f[e.length-1][r],a=0;a<l.length;a++)i[l[a]]=[parseFloat(o.value),o.unit]}u.get(this).rootMargin=i},get:function(){return u.get(this).rootMargin.map(function(t){return t.join("")}).join(" ")}},{key:"clamp",set:function(t){u.get(this).clamp=!!t}}]),t}(),d=window.Element.prototype.animate;if(l.push([function(t){if(t.target)return new g(t)},function(t,e,n,i){"block"==e?e="vertical":"inline"==e&&(e="horizontal");for(var r,o=t==document.scrollingElement?{left:0,right:t.clientWidth,top:0,bottom:t.clientHeight,width:t.clientWidth,height:t.clientHeight}:t.getBoundingClientRect(),l=u.get(n).rootMargin,a=[],s=0;s<4;s++)a.push("%"==(r=l[s])[1]?r[0]*(s%2==0?o.height:o.width)/100:r[0]);var c=o.left-a[3],h=o.right-o.left+a[3]+a[1],f=o.top-a[0],g=o.bottom-o.top+a[0]+a[2],d=u.get(n).clamp,p=n.target.getBoundingClientRect(),m=n.threshold;if("start"==n.edge&&(m=1-m),"vertical"==e){var v=p.top+p.height*m-f+t.scrollTop;return d?"end"==n.edge?Math.max(0,v-g):Math.min(v,t.scrollHeight-g):"end"==n.edge?v-g:v}var S=p.left+p.width*m-c+t.scrollLeft;return d?"end"==n.edge?Math.max(0,S-h):Math.min(S,t.scrollWidth-h):"end"==n.edge?S-h:S}]),!Reflect.defineProperty(window,"ScrollTimeline",{value:h}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(t,e){var n=e.timeline;if(!(n&&n instanceof h))return d.apply(this,arguments);delete e.timeline;var i=d.apply(this,arguments);return i.pause(),c(n,i,e),i}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element")}();
//# sourceMappingURL=scroll-timeline.js.map
