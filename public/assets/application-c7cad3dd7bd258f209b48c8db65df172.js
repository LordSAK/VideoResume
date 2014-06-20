/*!
 * jQuery JavaScript Library v1.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Jan 13 15:23:05 2010 -0500
 */

(function(A,w){function oa(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(oa,1);return}c.ready()}}function La(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function $(a,b,d,f,e,i){var j=a.length;if(typeof b==="object"){for(var o in b)$(a,o,b[o],f,e,d);return a}if(d!==w){f=!i&&f&&c.isFunction(d);for(o=0;o<j;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,i);return a}return j?
e(a[0],b):null}function K(){return(new Date).getTime()}function aa(){return false}function ba(){return true}function pa(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function qa(a){var b=true,d=[],f=[],e=arguments,i,j,o,p,n,t=c.extend({},c.data(this,"events").live);for(p in t){j=t[p];if(j.live===a.type||j.altLive&&c.inArray(a.type,j.altLive)>-1){i=j.data;i.beforeFilter&&i.beforeFilter[a.type]&&!i.beforeFilter[a.type](a)||f.push(j.selector)}else delete t[p]}i=c(a.target).closest(f,a.currentTarget);
n=0;for(l=i.length;n<l;n++)for(p in t){j=t[p];o=i[n].elem;f=null;if(i[n].selector===j.selector){if(j.live==="mouseenter"||j.live==="mouseleave")f=c(a.relatedTarget).closest(j.selector)[0];if(!f||f!==o)d.push({elem:o,fn:j})}}n=0;for(l=d.length;n<l;n++){i=d[n];a.currentTarget=i.elem;a.data=i.fn.data;if(i.fn.apply(i.elem,e)===false){b=false;break}}return b}function ra(a,b){return["live",a,b.replace(/\./g,"`").replace(/ /g,"&")].join(".")}function sa(a){return!a||!a.parentNode||a.parentNode.nodeType===
11}function ta(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var i in f)for(var j in f[i])c.event.add(this,i,f[i][j],f[i][j].data)}}})}function ua(a,b,d){var f,e,i;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&a[0].indexOf("<option")<0){e=true;if(i=c.fragments[a[0]])if(i!==1)f=i}if(!f){b=b&&b[0]?b[0].ownerDocument||b[0]:s;f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=
i?f:1;return{fragment:f,cacheable:e}}function T(a){for(var b=0,d,f;(d=a[b])!=null;b++)if(!c.noData[d.nodeName.toLowerCase()]&&(f=d[H]))delete c.cache[f]}function L(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ma=A.jQuery,Na=A.$,s=A.document,U,Oa=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Pa=/^.[^:#\[\.,]*$/,Qa=/\S/,
Ra=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Sa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],M,ca=Object.prototype.toString,da=Object.prototype.hasOwnProperty,ea=Array.prototype.push,R=Array.prototype.slice,V=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(typeof a==="string")if((d=Oa.exec(a))&&(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Sa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];
c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=ua([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return U.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a)}else return!b||b.jquery?(b||U).find(a):c(b).find(a);else if(c.isFunction(a))return U.ready(a);if(a.selector!==w){this.selector=a.selector;
this.context=a.context}return c.isArray(a)?this.setArray(a):c.makeArray(a,this)},selector:"",jquery:"1.4",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){a=c(a||null);a.prevObject=this;a.context=this.context;if(b==="find")a.selector=this.selector+(this.selector?" ":"")+d;else if(b)a.selector=this.selector+"."+b+"("+d+")";return a},setArray:function(a){this.length=
0;ea.apply(this,a);return this},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||
c(null)},push:ea,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,i,j,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(i in e){j=a[i];o=e[i];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){j=j&&(c.isPlainObject(j)||c.isArray(j))?j:c.isArray(o)?[]:{};a[i]=c.extend(f,j,o)}else if(o!==w)a[i]=
o}return a};c.extend({noConflict:function(a){A.$=Na;if(a)A.jQuery=Ma;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",M,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",
M);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&oa()}}},isFunction:function(a){return ca.call(a)==="[object Function]"},isArray:function(a){return ca.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||ca.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!da.call(a,"constructor")&&!da.call(a.constructor.prototype,"isPrototypeOf"))return false;var b;for(b in a);return b===w||da.call(a,b)},
isEmptyObject:function(a){for(var b in a)return false;return true},noop:function(){},globalEval:function(a){if(a&&Qa.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,i=a.length,j=i===w||c.isFunction(a);
if(d)if(j)for(f in a){if(b.apply(a[f],d)===false)break}else for(;e<i;){if(b.apply(a[e++],d)===false)break}else if(j)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<i&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Ra,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ea.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=
0,f=b.length;d<f;d++)if(b[d]===a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,i=a.length;e<i;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,i=0,j=a.length;i<j;i++){e=b(a[i],i,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b===
"string"){d=a;a=d[b];b=w}else if(b&&!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){var b={browser:""};a=a.toLowerCase();if(/webkit/.test(a))b={browser:"webkit",version:/webkit[\/ ]([\w.]+)/};else if(/opera/.test(a))b={browser:"opera",version:/version/.test(a)?/version[\/ ]([\w.]+)/:/opera[\/ ]([\w.]+)/};else if(/msie/.test(a))b={browser:"msie",version:/msie ([\w.]+)/};else if(/mozilla/.test(a)&&
!/compatible/.test(a))b={browser:"mozilla",version:/rv:([\w.]+)/};b.version=(b.version&&b.version.exec(a)||[0,"0"])[1];return b},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=true;if(V)c.inArray=function(a,b){return V.call(b,a)};U=c(s);if(s.addEventListener)M=function(){s.removeEventListener("DOMContentLoaded",M,false);c.ready()};else if(s.attachEvent)M=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",
M);c.ready()}};if(V)c.inArray=function(a,b){return V.call(b,a)};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+K();d.style.display="none";d.innerHTML="   <link/><table></table><a href='#' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=d.getElementsByTagName("*"),i=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!i)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,
htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(i.getAttribute("style")),hrefNormalized:i.getAttribute("href")==="/a",opacity:/^0.55$/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(j){}a.insertBefore(b,
a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function o(){c.support.noCloneEvent=false;d.detachEvent("onclick",o)});d.cloneNode(true).fireEvent("onclick")}c(function(){var o=s.createElement("div");o.style.width=o.style.paddingLeft="1px";s.body.appendChild(o);c.boxModel=c.support.boxModel=o.offsetWidth===2;s.body.removeChild(o).style.display="none"});a=function(o){var p=s.createElement("div");o="on"+o;var n=o in
p;if(!n){p.setAttribute(o,"return;");n=typeof p[o]==="function"}return n};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=i=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var H="jQuery"+K(),Ta=0,ya={},Ua={};c.extend({cache:{},expando:H,noData:{embed:true,object:true,applet:true},data:function(a,
b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?ya:a;var f=a[H],e=c.cache;if(!b&&!f)return null;f||(f=++Ta);if(typeof b==="object"){a[H]=f;e=e[f]=c.extend(true,{},b)}else e=e[f]?e[f]:typeof d==="undefined"?Ua:(e[f]={});if(d!==w){a[H]=f;e[b]=d}return typeof b==="string"?e[b]:e}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?ya:a;var d=a[H],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{try{delete a[H]}catch(i){a.removeAttribute&&
a.removeAttribute(H)}delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,
a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,
a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var za=/[\n\t]/g,fa=/\s+/,Va=/\r/g,Wa=/href|src|style/,Xa=/(button|input)/i,Ya=/(button|input|object|select|textarea)/i,Za=/^(a|area)$/i,Aa=/radio|checkbox/;c.fn.extend({attr:function(a,
b){return $(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(p){var n=c(this);n.addClass(a.call(this,p,n.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(fa),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className)for(var i=" "+e.className+" ",j=0,o=b.length;j<o;j++){if(i.indexOf(" "+b[j]+" ")<0)e.className+=
" "+b[j]}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(p){var n=c(this);n.removeClass(a.call(this,p,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(fa),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var i=(" "+e.className+" ").replace(za," "),j=0,o=b.length;j<o;j++)i=i.replace(" "+b[j]+" "," ");e.className=i.substring(1,i.length-1)}else e.className=""}return this},toggleClass:function(a,
b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var i=c(this);i.toggleClass(a.call(this,e,i.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,i=0,j=c(this),o=b,p=a.split(fa);e=p[i++];){o=f?o:!j.hasClass(e);j[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=
" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(za," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var i=b?d:0;for(d=b?d+1:e.length;i<d;i++){var j=e[i];if(j.selected){a=c(j).val();if(b)return a;f.push(a)}}return f}if(Aa.test(b.type)&&
!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Va,"")}return w}var o=c.isFunction(a);return this.each(function(p){var n=c(this),t=a;if(this.nodeType===1){if(o)t=a.call(this,p,n.val());if(typeof t==="number")t+="";if(c.isArray(t)&&Aa.test(this.type))this.checked=c.inArray(n.val(),t)>=0;else if(c.nodeName(this,"select")){var z=c.makeArray(t);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),z)>=0});if(!z.length)this.selectedIndex=
-1}else this.value=t}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var i=Wa.test(b);if(b in a&&f&&!i){if(e){if(b==="type"&&Xa.test(a.nodeName)&&a.parentNode)throw"type property can't be changed";a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;
if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:Ya.test(a.nodeName)||Za.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&i?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var $a=function(a){return a.replace(/[^\w\s\.\|`]/g,function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===
3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;if(!d.guid)d.guid=c.guid++;if(f!==w){d=c.proxy(d);d.data=f}var e=c.data(a,"events")||c.data(a,"events",{}),i=c.data(a,"handle"),j;if(!i){j=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(j.elem,arguments):w};i=c.data(a,"handle",j)}if(i){i.elem=a;b=b.split(/\s+/);for(var o,p=0;o=b[p++];){var n=o.split(".");o=n.shift();d.type=n.slice(0).sort().join(".");var t=e[o],z=this.special[o]||{};if(!t){t=e[o]={};
if(!z.setup||z.setup.call(a,f,n,d)===false)if(a.addEventListener)a.addEventListener(o,i,false);else a.attachEvent&&a.attachEvent("on"+o,i)}if(z.add)if((n=z.add.call(a,d,f,n,t))&&c.isFunction(n)){n.guid=n.guid||d.guid;d=n}t[d.guid]=d;this.global[o]=true}a=null}}},global:{},remove:function(a,b,d){if(!(a.nodeType===3||a.nodeType===8)){var f=c.data(a,"events"),e,i,j;if(f){if(b===w||typeof b==="string"&&b.charAt(0)===".")for(i in f)this.remove(a,i+(b||""));else{if(b.type){d=b.handler;b=b.type}b=b.split(/\s+/);
for(var o=0;i=b[o++];){var p=i.split(".");i=p.shift();var n=!p.length,t=c.map(p.slice(0).sort(),$a);t=new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.)?")+"(\\.|$)");var z=this.special[i]||{};if(f[i]){if(d){j=f[i][d.guid];delete f[i][d.guid]}else for(var B in f[i])if(n||t.test(f[i][B].type))delete f[i][B];z.remove&&z.remove.call(a,p,j);for(e in f[i])break;if(!e){if(!z.teardown||z.teardown.call(a,p)===false)if(a.removeEventListener)a.removeEventListener(i,c.data(a,"handle"),false);else a.detachEvent&&a.detachEvent("on"+
i,c.data(a,"handle"));e=null;delete f[i]}}}}for(e in f)break;if(!e){if(B=c.data(a,"handle"))B.elem=null;c.removeData(a,"events");c.removeData(a,"handle")}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[H]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();this.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;var i=c.data(d,"handle");i&&i.apply(d,b);var j,o;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()])){j=d[e];o=d["on"+e]}}catch(p){}i=c.nodeName(d,"a")&&e==="click";if(!f&&j&&!a.isDefaultPrevented()&&!i){this.triggered=true;try{d[e]()}catch(n){}}else if(o&&d["on"+e].apply(d,b)===false)a.result=false;this.triggered=false;if(!a.isPropagationStopped())(d=d.parentNode||d.ownerDocument)&&c.event.trigger(a,b,d,true)},
handle:function(a){var b,d;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;d=a.type.split(".");a.type=d.shift();b=!d.length&&!a.exclusive;var f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)");d=(c.data(this,"events")||{})[a.type];for(var e in d){var i=d[e];if(b||f.test(i.type)){a.handler=i;a.data=i.data;i=i.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}return a.result},
props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[H])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||
s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&
a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a,b){c.extend(a,b||{});a.guid+=b.selector+b.live;c.event.add(this,b.live,qa,b)},remove:function(a){if(a.length){var b=0,d=new RegExp("(^|\\.)"+a[0]+"(\\.|$)");c.each(c.data(this,"events").live||{},function(){d.test(this.type)&&b++});b<1&&c.event.remove(this,a[0],qa)}},special:{}},beforeunload:{setup:function(a,
b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=K();this[H]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ba;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=
ba;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ba;this.stopPropagation()},isDefaultPrevented:aa,isPropagationStopped:aa,isImmediatePropagationStopped:aa};var Ba=function(a){for(var b=a.relatedTarget;b&&b!==this;)try{b=b.parentNode}catch(d){break}if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}},Ca=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",
mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ca:Ba,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ca:Ba)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(a,b,d){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit."+d.guid,function(f){var e=f.target,i=e.type;if((i==="submit"||i==="image")&&c(e).closest("form").length)return pa("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit."+
d.guid,function(f){var e=f.target,i=e.type;if((i==="text"||i==="password")&&c(e).closest("form").length&&f.keyCode===13)return pa("submit",this,arguments)})}else return false},remove:function(a,b){c.event.remove(this,"click.specialSubmit"+(b?"."+b.guid:""));c.event.remove(this,"keypress.specialSubmit"+(b?"."+b.guid:""))}};if(!c.support.changeBubbles){var ga=/textarea|input|select/i;function Da(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>
-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d}function ha(a,b){var d=a.target,f,e;if(!(!ga.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Da(d);if(e!==f){if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",e);if(d.type!=="select"&&(f!=null||e)){a.type="change";return c.event.trigger(a,b,this)}}}}c.event.special.change={filters:{focusout:ha,click:function(a){var b=a.target,d=b.type;if(d===
"radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return ha.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return ha.call(this,a)},beforeactivate:function(a){a=a.target;a.nodeName.toLowerCase()==="input"&&a.type==="radio"&&c.data(a,"_change_data",Da(a))}},setup:function(a,b,d){for(var f in W)c.event.add(this,f+".specialChange."+d.guid,W[f]);return ga.test(this.nodeName)},
remove:function(a,b){for(var d in W)c.event.remove(this,d+".specialChange"+(b?"."+b.guid:""),W[d]);return ga.test(this.nodeName)}};var W=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,
f,e){if(typeof d==="object"){for(var i in d)this[b](i,f,d[i],e);return this}if(c.isFunction(f)){thisObject=e;e=f;f=w}var j=b==="one"?c.proxy(e,function(o){c(this).unbind(o,j);return e.apply(this,arguments)}):e;return d==="unload"&&b!=="one"?this.one(d,f,e,thisObject):this.each(function(){c.event.add(this,d,j,f)})}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault){for(var d in a)this.unbind(d,a[d]);return this}return this.each(function(){c.event.remove(this,a,b)})},trigger:function(a,
b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||
a)},live:function(a,b,d){if(c.isFunction(b)){d=b;b=w}c(this.context).bind(ra(a,this.selector),{data:b,selector:this.selector,live:a},d);return this},die:function(a,b){c(this.context).unbind(ra(a,this.selector),b?{guid:b.guid+this.selector+a}:null);return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d){return d?
this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",k,m=0;g[m];m++){k=g[m];if(k.nodeType===3||k.nodeType===4)h+=k.nodeValue;else if(k.nodeType!==8)h+=a(k.childNodes)}return h}function b(g,h,k,m,r,q){r=0;for(var v=m.length;r<v;r++){var u=m[r];if(u){u=u[g];for(var y=false;u;){if(u.sizcache===
k){y=m[u.sizset];break}if(u.nodeType===1&&!q){u.sizcache=k;u.sizset=r}if(u.nodeName.toLowerCase()===h){y=u;break}u=u[g]}m[r]=y}}}function d(g,h,k,m,r,q){r=0;for(var v=m.length;r<v;r++){var u=m[r];if(u){u=u[g];for(var y=false;u;){if(u.sizcache===k){y=m[u.sizset];break}if(u.nodeType===1){if(!q){u.sizcache=k;u.sizset=r}if(typeof h!=="string"){if(u===h){y=true;break}}else if(p.filter(h,[u]).length>0){y=u;break}}u=u[g]}m[r]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,i=Object.prototype.toString,j=false,o=true;[0,0].sort(function(){o=false;return 0});var p=function(g,h,k,m){k=k||[];var r=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return k;for(var q=[],v,u,y,S,I=true,N=x(h),J=g;(f.exec(""),v=f.exec(J))!==null;){J=v[3];q.push(v[1]);if(v[2]){S=v[3];break}}if(q.length>1&&t.exec(g))if(q.length===2&&n.relative[q[0]])u=ia(q[0]+q[1],h);else for(u=n.relative[q[0]]?[h]:p(q.shift(),h);q.length;){g=q.shift();if(n.relative[g])g+=q.shift();
u=ia(g,u)}else{if(!m&&q.length>1&&h.nodeType===9&&!N&&n.match.ID.test(q[0])&&!n.match.ID.test(q[q.length-1])){v=p.find(q.shift(),h,N);h=v.expr?p.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:q.pop(),set:B(m)}:p.find(q.pop(),q.length===1&&(q[0]==="~"||q[0]==="+")&&h.parentNode?h.parentNode:h,N);u=v.expr?p.filter(v.expr,v.set):v.set;if(q.length>0)y=B(u);else I=false;for(;q.length;){var E=q.pop();v=E;if(n.relative[E])v=q.pop();else E="";if(v==null)v=h;n.relative[E](y,v,N)}}else y=[]}y||(y=u);if(!y)throw"Syntax error, unrecognized expression: "+
(E||g);if(i.call(y)==="[object Array]")if(I)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&F(h,y[g])))k.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&k.push(u[g]);else k.push.apply(k,y);else B(y,k);if(S){p(S,r,k,m);p.uniqueSort(k)}return k};p.uniqueSort=function(g){if(D){j=o;g.sort(D);if(j)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};p.matches=function(g,h){return p(g,null,null,h)};p.find=function(g,h,k){var m,r;if(!g)return[];
for(var q=0,v=n.order.length;q<v;q++){var u=n.order[q];if(r=n.leftMatch[u].exec(g)){var y=r[1];r.splice(1,1);if(y.substr(y.length-1)!=="\\"){r[1]=(r[1]||"").replace(/\\/g,"");m=n.find[u](r,h,k);if(m!=null){g=g.replace(n.match[u],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};p.filter=function(g,h,k,m){for(var r=g,q=[],v=h,u,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var I in n.filter)if((u=n.leftMatch[I].exec(g))!=null&&u[2]){var N=n.filter[I],J,E;E=u[1];y=false;u.splice(1,1);if(E.substr(E.length-
1)!=="\\"){if(v===q)q=[];if(n.preFilter[I])if(u=n.preFilter[I](u,v,k,q,m,S)){if(u===true)continue}else y=J=true;if(u)for(var X=0;(E=v[X])!=null;X++)if(E){J=N(E,u,X,v);var Ea=m^!!J;if(k&&J!=null)if(Ea)y=true;else v[X]=false;else if(Ea){q.push(E);y=true}}if(J!==w){k||(v=q);g=g.replace(n.match[I],"");if(!y)return[];break}}}if(g===r)if(y==null)throw"Syntax error, unrecognized expression: "+g;else break;r=g}return v};var n=p.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var k=typeof h==="string",m=k&&!/\W/.test(h);k=k&&!m;if(m)h=h.toLowerCase();m=0;for(var r=g.length,q;m<r;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=k||q&&q.nodeName.toLowerCase()===h?q||false:q===h}k&&p.filter(h,g,true)},">":function(g,h){var k=typeof h==="string";if(k&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,r=g.length;m<r;m++){var q=g[m];if(q){k=q.parentNode;g[m]=k.nodeName.toLowerCase()===h?k:false}}}else{m=0;for(r=g.length;m<r;m++)if(q=g[m])g[m]=
k?q.parentNode:q.parentNode===h;k&&p.filter(h,g,true)}},"":function(g,h,k){var m=e++,r=d;if(typeof h==="string"&&!/\W/.test(h)){var q=h=h.toLowerCase();r=b}r("parentNode",h,m,g,q,k)},"~":function(g,h,k){var m=e++,r=d;if(typeof h==="string"&&!/\W/.test(h)){var q=h=h.toLowerCase();r=b}r("previousSibling",h,m,g,q,k)}},find:{ID:function(g,h,k){if(typeof h.getElementById!=="undefined"&&!k)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var k=[];
h=h.getElementsByName(g[1]);for(var m=0,r=h.length;m<r;m++)h[m].getAttribute("name")===g[1]&&k.push(h[m]);return k.length===0?null:k}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,k,m,r,q){g=" "+g[1].replace(/\\/g,"")+" ";if(q)return g;q=0;for(var v;(v=h[q])!=null;q++)if(v)if(r^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))k||m.push(v);else if(k)h[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,k,m,r,q){h=g[1].replace(/\\/g,"");if(!q&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,k,m,r){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=p(g[3],null,null,h);else{g=p.filter(g[3],h,k,true^r);k||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,k){return!!p(k[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,k,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,k){return h<k[3]-0},gt:function(g,h,k){return h>k[3]-0},nth:function(g,h,k){return k[3]-0===h},eq:function(g,h,k){return k[3]-0===h}},filter:{PSEUDO:function(g,h,k,m){var r=h[1],q=n.filters[r];if(q)return q(g,k,h,m);else if(r==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(r==="not"){h=
h[3];k=0;for(m=h.length;k<m;k++)if(h[k]===g)return false;return true}else throw"Syntax error, unrecognized expression: "+r;},CHILD:function(g,h){var k=h[1],m=g;switch(k){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(k==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":k=h[2];var r=h[3];if(k===1&&r===0)return true;h=h[0];var q=g.parentNode;if(q&&(q.sizcache!==h||!g.nodeIndex)){var v=0;for(m=q.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;q.sizcache=h}g=g.nodeIndex-r;return k===0?g===0:g%k===0&&g/k>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var k=h[1];g=n.attrHandle[k]?n.attrHandle[k](g):g[k]!=null?g[k]:g.getAttribute(k);k=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?k===h:m==="*="?k.indexOf(h)>=0:m==="~="?(" "+k+" ").indexOf(h)>=0:!h?k&&g!==false:m==="!="?k!==h:m==="^="?k.indexOf(h)===0:m==="$="?k.substr(k.length-h.length)===h:m==="|="?k===h||k.substr(0,h.length+1)===h+"-":false},POS:function(g,h,k,m){var r=n.setFilters[h[2]];if(r)return r(g,k,h,m)}}},t=n.match.POS;for(var z in n.match){n.match[z]=new RegExp(n.match[z].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[z]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[z].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var B=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){B=function(g,h){h=h||[];if(i.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var k=0,m=g.length;k<m;k++)h.push(g[k]);else for(k=0;g[k];k++)h.push(g[k]);return h}}var D;if(s.documentElement.compareDocumentPosition)D=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)j=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)j=true;return g};else if("sourceIndex"in s.documentElement)D=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)j=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)j=true;return g};else if(s.createRange)D=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)j=true;return g.ownerDocument?-1:1}var k=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();k.setStart(g,0);k.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=k.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)j=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var k=s.documentElement;k.insertBefore(g,k.firstChild);if(s.getElementById(h)){n.find.ID=function(m,r,q){if(typeof r.getElementById!=="undefined"&&!q)return(r=r.getElementById(m[1]))?r.id===m[1]||typeof r.getAttributeNode!=="undefined"&&
r.getAttributeNode("id").nodeValue===m[1]?[r]:w:[]};n.filter.ID=function(m,r){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===r}}k.removeChild(g);k=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,k){k=k.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;k[m];m++)k[m].nodeType===1&&h.push(k[m]);k=h}return k};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=p,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){p=function(m,r,q,v){r=r||s;if(!v&&r.nodeType===9&&!x(r))try{return B(r.querySelectorAll(m),q)}catch(u){}return g(m,r,q,v)};for(var k in g)p[k]=g[k];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,k,m){if(typeof k.getElementsByClassName!=="undefined"&&!m)return k.getElementsByClassName(h[1])};g=null}}})();var F=s.compareDocumentPosition?function(g,h){return g.compareDocumentPosition(h)&16}:function(g,
h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ia=function(g,h){var k=[],m="",r;for(h=h.nodeType?[h]:h;r=n.match.PSEUDO.exec(g);){m+=r[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;r=0;for(var q=h.length;r<q;r++)p(g,h[r],k);return p.filter(m,k)};c.find=p;c.expr=p.selectors;c.expr[":"]=c.expr.filters;c.unique=p.uniqueSort;c.getText=a;c.isXMLDoc=x;c.contains=F})();var ab=/Until$/,bb=/^(?:parents|prevUntil|prevAll)/,
cb=/,/;R=Array.prototype.slice;var Fa=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,i){return!!b.call(e,i,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Pa.test(b))return c.filter(b,f,!d);else b=c.filter(b,a)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var i=d;i<b.length;i++)for(var j=0;j<d;j++)if(b[j]===b[i]){b.splice(i--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Fa(this,a,false),"not",a)},filter:function(a){return this.pushStack(Fa(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,i=
{},j;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){j=a[e];i[j]||(i[j]=c.expr.match.POS.test(j)?c(j,b||this.context):j)}for(;f&&f.ownerDocument&&f!==b;){for(j in i){e=i[j];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:j,elem:f});delete i[j]}}f=f.parentNode}}return d}var p=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,t){for(;t&&t.ownerDocument&&t!==b;){if(p?p.index(t)>-1:c(t).is(a))return t;t=t.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(sa(a[0])||sa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);ab.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||cb.test(f))&&bb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ga=/ jQuery\d+="(?:\d+|null)"/g,Y=/^\s+/,db=/(<([\w:]+)[^>]*?)\/>/g,eb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,Ha=/<([\w:]+)/,fb=/<tbody/i,gb=/<|&\w+;/,hb=function(a,b,d){return eb.test(d)?a:b+"></"+d+">"},G={option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};G.optgroup=G.option;G.tbody=G.tfoot=G.colgroup=G.caption=G.thead;G.th=G.td;if(!c.support.htmlSerialize)G._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=c(this);
return d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.getText(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&
this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,
"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ga,"").replace(Y,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ta(this,b);ta(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===
1?this[0].innerHTML.replace(Ga,""):null;else if(typeof a==="string"&&!/<script/i.test(a)&&(c.support.leadingWhitespace||!Y.test(a))&&!G[(Ha.exec(a)||["",""])[1].toLowerCase()])try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){T(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}else c.isFunction(a)?this.each(function(e){var i=c(this),j=i.html();i.empty().append(function(){return a.call(this,e,j)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){c.isFunction(a)||(a=c(a).detach());return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(t){return c.nodeName(t,"table")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}var e,i,j=a[0],o=[];if(c.isFunction(j))return this.each(function(t){var z=
c(this);a[0]=j.call(this,t,b?z.html():w);return z.domManip(a,b,d)});if(this[0]){e=a[0]&&a[0].parentNode&&a[0].parentNode.nodeType===11?{fragment:a[0].parentNode}:ua(a,this,o);if(i=e.fragment.firstChild){b=b&&c.nodeName(i,"tr");for(var p=0,n=this.length;p<n;p++)d.call(b?f(this[p],i):this[p],e.cacheable||this.length>1||p>0?e.fragment.cloneNode(true):e.fragment)}o&&c.each(o,La)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},
function(a,b){c.fn[a]=function(d){var f=[];d=c(d);for(var e=0,i=d.length;e<i;e++){var j=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),j);f=f.concat(j)}return this.pushStack(f,a,d.selector)}});c.each({remove:function(a,b){if(!a||c.filter(a,[this]).length){if(!b&&this.nodeType===1){T(this.getElementsByTagName("*"));T([this])}this.parentNode&&this.parentNode.removeChild(this)}},empty:function(){for(this.nodeType===1&&T(this.getElementsByTagName("*"));this.firstChild;)this.removeChild(this.firstChild)}},
function(a,b){c.fn[a]=function(){return this.each(b,arguments)}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;var e=[];c.each(a,function(i,j){if(typeof j==="number")j+="";if(j){if(typeof j==="string"&&!gb.test(j))j=b.createTextNode(j);else if(typeof j==="string"){j=j.replace(db,hb);var o=(Ha.exec(j)||["",""])[1].toLowerCase(),p=G[o]||G._default,n=p[0];i=b.createElement("div");for(i.innerHTML=p[1]+j+p[2];n--;)i=i.lastChild;
if(!c.support.tbody){n=fb.test(j);o=o==="table"&&!n?i.firstChild&&i.firstChild.childNodes:p[1]==="<table>"&&!n?i.childNodes:[];for(p=o.length-1;p>=0;--p)c.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!c.support.leadingWhitespace&&Y.test(j)&&i.insertBefore(b.createTextNode(Y.exec(j)[0]),i.firstChild);j=c.makeArray(i.childNodes)}if(j.nodeType)e.push(j);else e=c.merge(e,j)}});if(d)for(a=0;e[a];a++)if(f&&c.nodeName(e[a],"script")&&(!e[a].type||e[a].type.toLowerCase()===
"text/javascript"))f.push(e[a].parentNode?e[a].parentNode.removeChild(e[a]):e[a]);else{e[a].nodeType===1&&e.splice.apply(e,[a+1,0].concat(c.makeArray(e[a].getElementsByTagName("script"))));d.appendChild(e[a])}return e}});var ib=/z-?index|font-?weight|opacity|zoom|line-?height/i,Ia=/alpha\([^)]*\)/,Ja=/opacity=([^)]*)/,ja=/float/i,ka=/-([a-z])/ig,jb=/([A-Z])/g,kb=/^-?\d+(?:px)?$/i,lb=/^-?\d/,mb={position:"absolute",visibility:"hidden",display:"block"},nb=["Left","Right"],ob=["Top","Bottom"],pb=s.defaultView&&
s.defaultView.getComputedStyle,Ka=c.support.cssFloat?"cssFloat":"styleFloat",la=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return $(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!ib.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""===
"NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=Ia.test(a)?a.replace(Ia,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Ja.exec(f.filter)[1])/100+"":""}if(ja.test(b))b=Ka;b=b.replace(ka,la);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,i=b==="width"?nb:ob;function j(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(i,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=
parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,"border"+this+"Width",true))||0})}a.offsetWidth!==0?j():c.swap(a,mb,j);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Ja.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ja.test(b))b=Ka;if(!d&&e&&e[b])f=e[b];else if(pb){if(ja.test(b))b="float";b=b.replace(jb,"-$1").toLowerCase();e=
a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ka,la);f=a.currentStyle[b]||a.currentStyle[d];if(!kb.test(f)&&lb.test(f)){b=e.left;var i=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=i}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=
f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var qb=K(),rb=/<script(.|\s)*?\/script>/gi,sb=/select|textarea/i,tb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,O=/=\?(&|$)/,ma=/\?/,ub=/(\?|&)_=.*?(&|$)/,vb=/^(\w+:)?\/\/([^\/?#]+)/,
wb=/%20/g;c.fn.extend({_load:c.fn.load,load:function(a,b,d){if(typeof a!=="string")return this._load(a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}c.ajax({url:a,type:f,dataType:"html",data:b,context:this,complete:function(i,j){if(j==="success"||j==="notmodified")this.html(e?c("<div />").append(i.responseText.replace(rb,
"")).find(e):i.responseText);d&&this.each(d,[i.responseText,j,i])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||sb.test(this.nodeName)||tb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});
c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},
ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",
text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&e.success.call(p,o,j,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(p,x,j);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(r,q){(e.context?c(e.context):c.event).trigger(r,q)}var e=c.extend(true,{},c.ajaxSettings,a),i,j,o,p=e.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,
e.traditional);if(e.dataType==="jsonp"){if(n==="GET")O.test(e.url)||(e.url+=(ma.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!O.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&O.test(e.data)||O.test(e.url))){i=e.jsonpCallback||"jsonp"+qb++;if(e.data)e.data=(e.data+"").replace(O,"="+i+"$1");e.url=e.url.replace(O,"="+i+"$1");e.dataType="script";A[i]=A[i]||function(r){o=r;b();d();A[i]=w;try{delete A[i]}catch(q){}B&&
B.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===false&&n==="GET"){var t=K(),z=e.url.replace(ub,"$1_="+t+"$2");e.url=z+(z===e.url?(ma.test(e.url)?"&":"?")+"_="+t:"")}if(e.data&&n==="GET")e.url+=(ma.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");t=(t=vb.exec(e.url))&&(t[1]&&t[1]!==location.protocol||t[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&t){var B=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");
C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!i){var D=false;C.onload=C.onreadystatechange=function(){if(!D&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){D=true;b();d();C.onload=C.onreadystatechange=null;B&&C.parentNode&&B.removeChild(C)}}}B.insertBefore(C,B.firstChild);return w}var F=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",
e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}t||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ia){}if(e.beforeSend&&e.beforeSend.call(p,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",
[x,e]);var g=x.onreadystatechange=function(r){if(!x||x.readyState===0){F||d();F=true;if(x)x.onreadystatechange=c.noop}else if(!F&&x&&(x.readyState===4||r==="timeout")){F=true;x.onreadystatechange=c.noop;j=r==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";if(j==="success")try{o=c.httpData(x,e.dataType,e)}catch(q){j="parsererror"}if(j==="success"||j==="notmodified")i||b();else c.handleError(e,x,j);d();r==="timeout"&&x.abort();if(e.async)x=
null}};try{var h=x.abort;x.abort=function(){if(x){h.call(x);if(x)x.readyState=0}g()}}catch(k){}e.async&&e.timeout>0&&setTimeout(function(){x&&!F&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||A,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol===
"file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;if(e&&a.documentElement.nodeName==="parsererror")throw"parsererror";if(d&&
d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&f.indexOf("json")>=0)if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))a=A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+a))();else throw"Invalid JSON: "+a;else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(e,i){i=
c.isFunction(i)?i():i;f[f.length]=encodeURIComponent(e)+"="+encodeURIComponent(i)}var f=[];if(b===w)b=c.ajaxSettings.traditional;c.isArray(a)||a.jquery?c.each(a,function(){d(this.name,this.value)}):c.each(a,function e(i,j){if(c.isArray(j))c.each(j,function(o,p){b?d(i,p):e(i+"["+(typeof p==="object"||c.isArray(p)?o:"")+"]",p)});else!b&&j!=null&&typeof j==="object"?c.each(j,function(o,p){e(i+"["+o+"]",p)}):d(i,j)});return f.join("&").replace(wb,"+")}});var na={},xb=/toggle|show|hide/,yb=/^([+-]=)?([\d+-.]+)(.*)$/,
Z,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a!=null)return this.animate(L("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(na[d])f=na[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();
na[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a!=null)return this.animate(L("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&
c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(L("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var i=c.extend({},e),j,o=this.nodeType===1&&c(this).is(":hidden"),
p=this;for(j in a){var n=j.replace(ka,la);if(j!==n){a[n]=a[j];delete a[j];j=n}if(a[j]==="hide"&&o||a[j]==="show"&&!o)return i.complete.call(this);if((j==="height"||j==="width")&&this.style){i.display=c.css(this,"display");i.overflow=this.style.overflow}if(c.isArray(a[j])){(i.specialEasing=i.specialEasing||{})[j]=a[j][1];a[j]=a[j][0]}}if(i.overflow!=null)this.style.overflow="hidden";i.curAnim=c.extend({},a);c.each(a,function(t,z){var B=new c.fx(p,i,t);if(xb.test(z))B[z==="toggle"?o?"show":"hide":z](a);
else{var C=yb.exec(z),D=B.cur(true)||0;if(C){z=parseFloat(C[2]);var F=C[3]||"px";if(F!=="px"){p.style[t]=(z||1)+F;D=(z||1)/B.cur(true)*D;p.style[t]=D+F}if(C[1])z=(C[1]==="-="?-1:1)*z+D;B.custom(D,z,F)}else B.custom(D,z,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:L("show",1),slideUp:L("hide",1),slideToggle:L("toggle",
1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration==="number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,
b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==
null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(i){return e.step(i)}this.startTime=K();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!Z)Z=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop===
"width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=K(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=
this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=
c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},stop:function(){clearInterval(Z);Z=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=
null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?function(a){var b=this[0];if(!b||!b.ownerDocument)return null;if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),
f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(!b||!b.ownerDocument)return null;if(a)return this.each(function(t){c.offset.setOffset(this,a,t)});if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=
b,e=b.ownerDocument,i,j=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var p=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==j;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;i=e?e.getComputedStyle(b,null):b.currentStyle;p-=b.scrollTop;n-=b.scrollLeft;if(b===d){p+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){p+=parseFloat(i.borderTopWidth)||
0;n+=parseFloat(i.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&i.overflow!=="visible"){p+=parseFloat(i.borderTopWidth)||0;n+=parseFloat(i.borderLeftWidth)||0}f=i}if(f.position==="relative"||f.position==="static"){p+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&f.position==="fixed"){p+=Math.max(j.scrollTop,o.scrollTop);n+=Math.max(j.scrollLeft,o.scrollLeft)}return{top:p,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),
d,f,e,i=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);
d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i;a.removeChild(b);c.offset.initialize=c.noop},
bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),i=parseInt(c.curCSS(a,"top",true),10)||0,j=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,d,e);d={top:b.top-e.top+i,left:b.left-
e.left+j};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=
this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],i;if(!e)return null;if(f!==w)return this.each(function(){if(i=wa(this))i.scrollTo(!a?f:c(i).scrollLeft(),a?f:c(i).scrollTop());else this[d]=f});else return(i=wa(e))?"pageXOffset"in i?i[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&i.document.documentElement[d]||i.document.body[d]:e[d]}});
c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;return"scrollTo"in e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+
b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements boud jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params');
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      // making sure that all forms have actual up-to-date token(cached forms contain old one)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrf_param + '"]').val(csrf_token);
    });
  }

})( jQuery );
(function() {
  var CSRFToken, anchoredLink, assetsChanged, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsPushState, cacheCurrentPage, changePage, constrainPageCacheTo, createDocument, crossOriginLink, currentState, executeScriptTags, extractLink, extractTitleAndBody, extractTrackAssets, fetchHistory, fetchReplacement, handleClick, ignoreClick, initializeTurbolinks, initialized, installClickHandlerLast, intersection, invalidContent, loadedAssets, noTurbolink, nonHtmlLink, nonStandardClick, pageCache, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberInitialPage, removeHash, removeNoscriptTags, requestMethod, requestMethodIsSafe, resetScrollPosition, targetLink, triggerEvent, visit, xhr, _ref,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  initialized = false;

  currentState = null;

  referer = document.location.href;

  loadedAssets = null;

  pageCache = {};

  createDocument = null;

  requestMethod = ((_ref = document.cookie.match(/request_method=(\w+)/)) != null ? _ref[1].toUpperCase() : void 0) || '';

  xhr = null;

  visit = function(url) {
    if (browserSupportsPushState && browserIsntBuggy) {
      cacheCurrentPage();
      reflectNewUrl(url);
      return fetchReplacement(url);
    } else {
      return document.location.href = url;
    }
  };

  fetchReplacement = function(url) {
    var safeUrl;
    triggerEvent('page:fetch');
    safeUrl = removeHash(url);
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', safeUrl, true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = (function(_this) {
      return function() {
        var doc;
        triggerEvent('page:receive');
        if (invalidContent(xhr) || assetsChanged((doc = createDocument(xhr.responseText)))) {
          return document.location.reload();
        } else {
          changePage.apply(null, extractTitleAndBody(doc));
          reflectRedirectedUrl(xhr);
          if (document.location.hash) {
            document.location.href = document.location.href;
          } else {
            resetScrollPosition();
          }
          return triggerEvent('page:load');
        }
      };
    })(this);
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onabort = function() {
      return rememberCurrentUrl();
    };
    xhr.onerror = function() {
      return document.location.href = url;
    };
    return xhr.send();
  };

  fetchHistory = function(state) {
    var page;
    cacheCurrentPage();
    if (page = pageCache[state.position]) {
      if (xhr != null) {
        xhr.abort();
      }
      changePage(page.title, page.body);
      recallScrollPosition(page);
      return triggerEvent('page:restore');
    } else {
      return fetchReplacement(document.location.href);
    }
  };

  cacheCurrentPage = function() {
    rememberInitialPage();
    pageCache[currentState.position] = {
      url: document.location.href,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset
    };
    return constrainPageCacheTo(10);
  };

  constrainPageCacheTo = function(limit) {
    var key, value;
    for (key in pageCache) {
      if (!__hasProp.call(pageCache, key)) continue;
      value = pageCache[key];
      if (key <= currentState.position - limit) {
        pageCache[key] = null;
      }
    }
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    removeNoscriptTags();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    return triggerEvent('page:change');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref1, _ref2;
    scripts = Array.prototype.slice.call(document.body.getElementsByTagName('script'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref1 = script.type) === '' || _ref1 === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref2 = script.attributes;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        attr = _ref2[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function() {
    var noscript, noscriptTags, _i, _len;
    noscriptTags = Array.prototype.slice.call(document.body.getElementsByTagName('noscript'));
    for (_i = 0, _len = noscriptTags.length; _i < _len; _i++) {
      noscript = noscriptTags[_i];
      noscript.parentNode.removeChild(noscript);
    }
  };

  reflectNewUrl = function(url) {
    if (url !== document.location.href) {
      referer = document.location.href;
      return window.history.pushState({
        turbolinks: true,
        position: currentState.position + 1
      }, '', url);
    }
  };

  reflectRedirectedUrl = function(xhr) {
    var location;
    if ((location = xhr.getResponseHeader('X-XHR-Current-Location')) && location !== document.location.pathname + document.location.search) {
      return window.history.replaceState(currentState, '', location + document.location.hash);
    }
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      position: Date.now()
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  rememberInitialPage = function() {
    if (!initialized) {
      rememberCurrentUrl();
      rememberCurrentState();
      createDocument = browserCompatibleDocumentParser();
      return initialized = true;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    return window.scrollTo(0, 0);
  };

  removeHash = function(url) {
    var link;
    link = url;
    if (url.href == null) {
      link = document.createElement('A');
      link.href = url;
    }
    return link.href.replace(link.hash, '');
  };

  triggerEvent = function(name) {
    var event;
    event = document.createEvent('Events');
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  invalidContent = function(xhr) {
    return !xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
  };

  extractTrackAssets = function(doc) {
    var node, _i, _len, _ref1, _results;
    _ref1 = doc.head.childNodes;
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      node = _ref1[_i];
      if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
        _results.push(node.src || node.href);
      }
    }
    return _results;
  };

  assetsChanged = function(doc) {
    var fetchedAssets;
    loadedAssets || (loadedAssets = extractTrackAssets(document));
    fetchedAssets = extractTrackAssets(doc);
    return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
  };

  intersection = function(a, b) {
    var value, _i, _len, _ref1, _results;
    if (a.length > b.length) {
      _ref1 = [b, a], a = _ref1[0], b = _ref1[1];
    }
    _results = [];
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      value = a[_i];
      if (__indexOf.call(b, value) >= 0) {
        _results.push(value);
      }
    }
    return _results;
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, doc.body, CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref1;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref1 = testDoc.body) != null ? _ref1.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  installClickHandlerLast = function(event) {
    if (!event.defaultPrevented) {
      document.removeEventListener('click', handleClick, false);
      return document.addEventListener('click', handleClick, false);
    }
  };

  handleClick = function(event) {
    var link;
    if (!event.defaultPrevented) {
      link = extractLink(event);
      if (link.nodeName === 'A' && !ignoreClick(event, link)) {
        visit(link.href);
        return event.preventDefault();
      }
    }
  };

  extractLink = function(event) {
    var link;
    link = event.target;
    while (!(!link.parentNode || link.nodeName === 'A')) {
      link = link.parentNode;
    }
    return link;
  };

  crossOriginLink = function(link) {
    return location.protocol !== link.protocol || location.host !== link.host;
  };

  anchoredLink = function(link) {
    return ((link.hash && removeHash(link)) === removeHash(location)) || (link.href === location.href + '#');
  };

  nonHtmlLink = function(link) {
    var url;
    url = removeHash(link);
    return url.match(/\.[a-z]+(\?.*)?$/g) && !url.match(/\.html?(\?.*)?$/g);
  };

  noTurbolink = function(link) {
    var ignore;
    while (!(ignore || link === document)) {
      ignore = link.getAttribute('data-no-turbolink') != null;
      link = link.parentNode;
    }
    return ignore;
  };

  targetLink = function(link) {
    return link.target.length !== 0;
  };

  nonStandardClick = function(event) {
    return event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  };

  ignoreClick = function(event, link) {
    return crossOriginLink(link) || anchoredLink(link) || nonHtmlLink(link) || noTurbolink(link) || targetLink(link) || nonStandardClick(event);
  };

  initializeTurbolinks = function() {
    document.addEventListener('click', installClickHandlerLast, true);
    return window.addEventListener('popstate', function(event) {
      var _ref1;
      if ((_ref1 = event.state) != null ? _ref1.turbolinks : void 0) {
        return fetchHistory(event.state);
      }
    }, false);
  };

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && window.history.state !== void 0;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = requestMethod === 'GET' || requestMethod === '';

  if (browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe) {
    initializeTurbolinks();
  }

  this.Turbolinks = {
    visit: visit
  };

}).call(this);
/****************************************************************
 *                                                              *
 * ModalPopups                                                  *
 * -----------                                                  *
 *                                                              *
 * This script offers you a collection of basic modal popups.   *
 *                                                              *
 * Requirements:                                                * 
 * DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" *
 *                                                              *
 * Version 0.1 (initial version)                                *
 * Copyright (c) 2008 Jan Stolk                                 *
 *                                                              *
 * Website: http://www.modalpopups.com                          *
 * E-Mail: stolk_jan@hotmail.com                                *
 *                                                              *
 *                                                              *
 * This library is free software; you can redistribute          *
 * it and/or modify it under the terms of the GNU               *
 * Lesser General Public License as published by the            *
 * Free Software Foundation; either version 3 of the            *
 * License, or (at your option) any later version.              *
 *                                                              *
 * This library is distributed in the hope that it will         *
 * be useful, but WITHOUT ANY WARRANTY; without even the        *
 * implied warranty of MERCHANTABILITY or FITNESS FOR A         *
 * PARTICULAR PURPOSE. See the GNU Lesser General Public        *
 * License for more details.                                    *
 *                                                              *
 * You should have received a copy of the GNU Lesser            *
 * General Public License along with this library;              *
 * Inc., 59 Temple Place, Suite 330, Boston,                    *
 * MA 02111-1307 USA                                            *
 *                                                              *
 ****************************************************************/

/****************************************************************
 *                                                              *
 *  Next release ideas:                                         *
 *                                                              *
 *  maxWidth and maxHeight                                      *
 *      to limit autosize of popup                              *
 *                                                              *
 *  Improve window.onresize                                     *
 *      change is to addHandler etc... to be able to have more  *
 *      than one window or more than one oneesize active        *
 *                                                              *
 ****************************************************************/


var ModalPopupsDefaults = {
    shadow: true,
    shadowSize: 5,
    shadowColor: "#333333",
    backgroundColor: "#CCCCCC",
    borderColor: "#999999",
    titleBackColor: "#C1D2E7",
    titleFontColor: "#15428B",
    popupBackColor: "#C7D6E9",
    popupFontColor: "black",
    footerBackColor: "#C1D2E7",
    footerFontColor: "#15428B",
    okButtonText: "OK",
    yesButtonText: "Yes",
    noButtonText: "No",
    cancelButtonText: "Cancel",
    fontFamily: "Verdana,Arial",
    fontSize: "9pt"
}

var ModalPopups = {
    Init: function() {
        //No init required, yet
    },
    
    SetDefaults: function(parameters) {
        parameters = parameters || {};
        ModalPopupsDefaults.shadow = parameters.shadow != null ? parameters.shadow : ModalPopupsDefaults.shadow;
        ModalPopupsDefaults.shadowSize = parameters.shadowSize != null ? parameters.shadowSize : ModalPopupsDefaults.shadowSize;
        ModalPopupsDefaults.shadowColor = parameters.shadowColor != null ? parameters.shadowColor : ModalPopupsDefaults.shadowColor;
        ModalPopupsDefaults.backgroundColor = parameters.backgroundColor != null ? parameters.backgroundColor : ModalPopupsDefaults.backgroundColor;
        ModalPopupsDefaults.borderColor = parameters.borderColor != null ? parameters.borderColor : ModalPopupsDefaults.borderColor;
        ModalPopupsDefaults.okButtonText = parameters.okButtonText != null ? parameters.okButtonText : ModalPopupsDefaults.okButtonText;
        ModalPopupsDefaults.yesButtonText = parameters.yesButtonText != null ? parameters.yesButtonText : ModalPopupsDefaults.yesButtonText;
        ModalPopupsDefaults.noButtonText = parameters.noButtonText != null ? parameters.noButtonText : ModalPopupsDefaults.noButtonText;
        ModalPopupsDefaults.cancelButtonText = parameters.cancelButtonText != null ? parameters.cancelButtonText : ModalPopupsDefaults.cancelButtonText;
        ModalPopupsDefaults.titleBackColor = parameters.titleBackColor != null ? parameters.titleBackColor : ModalPopupsDefaults.titleBackColor;
        ModalPopupsDefaults.titleFontColor = parameters.titleFontColor != null ? parameters.titleFontColor : ModalPopupsDefaults.titleFontColor;
        ModalPopupsDefaults.popupBackColor = parameters.popupBackColor != null ? parameters.popupBackColor : ModalPopupsDefaults.popupBackColor;
        ModalPopupsDefaults.popupFontColor = parameters.popupFontColor != null ? parameters.popupFontColor : ModalPopupsDefaults.popupFontColor;
        ModalPopupsDefaults.footerBackColor = parameters.footerBackColor != null ? parameters.footerBackColor : ModalPopupsDefaults.footerBackColor;
        ModalPopupsDefaults.footerFontColor = parameters.footerFontColor != null ? parameters.footerFontColor : ModalPopupsDefaults.footerFontColor;
        ModalPopupsDefaults.fontFamily = parameters.fontFamily != null ? parameters.fontFamily : ModalPopupsDefaults.fontFamily;
        ModalPopupsDefaults.fontSize = parameters.fontSize != null ? parameters.fontSize : ModalPopupsDefaults.fontSize;
    },

    Alert: function(id, title, message, parameters) {
        //Get parameters
        parameters = parameters || {};
        if(!title) title = "Alert";

        //'Alert' specific parameters
        parameters.buttons = "ok";
        parameters.okButtonText = parameters.okButtonText != null ? parameters.okButtonText : ModalPopupsDefaults.okButtonText;

        //Create layers
        var myLayers = ModalPopups._createAllLayers(id, title, message, parameters);
        var oPopupBody = myLayers[4];
        
        //'Alert' specific setup of Body
        oPopupBody.innerHTML = message;

        //Style all layers        
        ModalPopups._styleAllLayers(id, parameters, myLayers);
    },

    Confirm: function(id, title, question, parameters) {
        //Get parameters
        parameters = parameters || {};
        if(!title) title = "Confirm";

        //'Confirm' specific parameters
        parameters.buttons = "yes,no";
        parameters.yesButtonText = parameters.yesButtonText != null ? parameters.yesButtonText : ModalPopupsDefaults.yesButtonText;
        parameters.noButtonText = parameters.noButtonText != null ? parameters.noButtonText : ModalPopupsDefaults.noButtonText;

        //Create layers
        var myLayers = ModalPopups._createAllLayers(id, title, question, parameters);
        var oPopupBody = myLayers[4];
        
        //'Confirm' specific setup of Body
        oPopupBody.innerHTML = question;
        
        //Style all layers   
        ModalPopups._styleAllLayers(id, parameters, myLayers);
    },
    
    YesNoCancel: function(id, title, question, parameters) {
        //Get parameters
        parameters = parameters || {};
        if(!title) title = "YesNoCancel";

        //'Confirm' specific parameters
        parameters.buttons = "yes,no,cancel";
        parameters.yesButtonText = parameters.yesButtonText != null ? parameters.yesButtonText : ModalPopupsDefaults.yesButtonText;
        parameters.noButtonText = parameters.noButtonText != null ? parameters.noButtonText : ModalPopupsDefaults.noButtonText;
        parameters.cancelButtonText = parameters.cancelButtonText != null ? parameters.cancelButtonText : ModalPopupsDefaults.cancelButtonText;

        //Create layers
        var myLayers = ModalPopups._createAllLayers(id, title, question, parameters);
        var oPopupBody = myLayers[4];
        
        //'Confirm' specific setup of Body
        oPopupBody.innerHTML = question;
        
        //Style all layers   
        ModalPopups._styleAllLayers(id, parameters, myLayers);
    },
    
    Prompt: function(id, title, question, parameters) {
        //Get parameters
        parameters = parameters || {};
        if(!title) title = "Prompt";
        
        //'Prompt' specific parameters
        parameters.buttons = "ok,cancel";
        parameters.okButtonText = parameters.okButtonText != null ? parameters.okButtonText : "OK";
        parameters.cancelButtonText = parameters.cancelButtonText != null ? parameters.cancelButtonText : "Cancel";
        
        //Create layers
        var myLayers = ModalPopups._createAllLayers(id, title, question, parameters);
        var oPopupBody = myLayers[4];
        
        var txtStyle = "";
        if(parameters.width != null)
            txtStyle = "width:95%;";

        //'Prompt' specific setup of Body
        var txtHtml = question + "<br/>";
        txtHtml += "<input type=text id='" + id + "_promptInput' value='' " + 
            "style='border: solid 1px #859DBE; "  + txtStyle + "'>";

        oPopupBody.innerHTML = txtHtml;
        
        //Style all layers   
        ModalPopups._styleAllLayers(id, parameters, myLayers);

        //Focus input box        
        ModalPopupsSupport.findControl(id+"_promptInput").focus();
    },
    
    GetPromptInput: function(id) {
        var promptValue = ModalPopupsSupport.findControl(id+"_promptInput");
        return promptValue;
    },
    
    GetPromptResult: function(id) {
        var promptValue = ModalPopupsSupport.findControl(id+"_promptInput");
        return promptValue;
    },
    
    GetCustomControl: function(id) {
        return ModalPopupsSupport.findControl(id);
    },
    
    Indicator: function(id, title, message, parameters) {
        //Get parameters
        parameters = parameters || {};
        if(!title) title = "Indicator";

        //'Indicator' specific parameters
        if(parameters.buttons == null)
            parameters.buttons = "";

        //Create layers
        var myLayers = ModalPopups._createAllLayers(id, title, message, parameters);
        var oPopupBody = myLayers[4];
        
        //'Indicator' specific setup of Body
        oPopupBody.innerHTML = message;

        //Style all layers        
        ModalPopups._styleAllLayers(id, parameters, myLayers);
    },

    //Custom modal popup. parameters.buttons is a mandatory parameter
    Custom: function(id, title, contents, parameters) {
        //Get parameters
        parameters = parameters || {};
        if(!title) title = "Custom";
        
        if(parameters.buttons == null)
        {
            alert("buttons is a required parameter. ie: buttons: 'yes,no' or buttons: 'ok'.\nPossible buttons are yes, no, ok, cancel");
            return;
        }

        //Create layers
        var myLayers = ModalPopups._createAllLayers(id, title, contents, parameters);
        var oPopupBody = myLayers[4];
        
        //'Custom' specific setup of Body
        oPopupBody.innerHTML = contents;

        //Style all layers        
        ModalPopups._styleAllLayers(id, parameters, myLayers);
    },

    //Cancel/Close modal popup    
    Close: function(id) {
        window.onresize = null;
        window.onscroll = null;
    
        //try
        //{
            document.body.removeChild(ModalPopupsSupport.findControl(id+"_background"));
            document.body.removeChild(ModalPopupsSupport.findControl(id+"_popup"));
            document.body.removeChild(ModalPopupsSupport.findControl(id+"_shadow"));
        //}
        //catch
        //{
        //}
    },

    //Cancel/Close modal popup    
    Cancel: function(id) {
        ModalPopups.Close(id);
    },
    
     //Support variable to put each layer on top, increases everytime a modal popup is created
    _zIndex: 10000,
    
     //Support function to create all layers
    _createAllLayers: function(id, title, message, parameters) {
        //Create all 6 layers for; BackGround, Popup, Shadow, PopupTitle, PopupBody, PopupFooter
        var oBackground = ModalPopupsSupport.makeLayer(id+'_background', true, null);        // 0
        var oPopup = ModalPopupsSupport.makeLayer(id+'_popup', true, null);                  // 1
        var oShadow = ModalPopupsSupport.makeLayer(id+'_shadow', true, null);                // 2
        var oPopupTitle = ModalPopupsSupport.makeLayer(id+'_popupTitle', true, oPopup);      // 3
        var oPopupBody = ModalPopupsSupport.makeLayer(id+'_popupBody', true, oPopup);        // 4
        var oPopupFooter = ModalPopupsSupport.makeLayer(id+'_popupFooter', true, oPopup);    // 5
        
        //Set default values for button related parameters; OK, Yes, No, Cancel
        var okButtonText = parameters.okButtonText != null ? parameters.okButtonText : ModalPopupsDefaults.okButtonText;
        var yesButtonText = parameters.yesButtonText != null ? parameters.yesButtonText : ModalPopupsDefaults.yesButtonText;
        var noButtonText = parameters.noButtonText != null ? parameters.noButtonText : ModalPopupsDefaults.noButtonText;
        var cancelButtonText = parameters.cancelButtonText != null ? parameters.cancelButtonText : ModalPopupsDefaults.cancelButtonText;
        var onOk = parameters.onOk != null ? parameters.onOk : "ModalPopups.Close(\"" + id + "\");";
        var onYes = parameters.onYes != null ? parameters.onYes : "ModalPopups.Close(\"" + id + "\");";
        var onNo = parameters.onNo != null ? parameters.onNo : "ModalPopups.Close(\"" + id + "\");";
        var onCancel = parameters.onCancel != null ? parameters.onCancel : "ModalPopups.Close(\"" + id + "\");";
        
        //Create popup 'title' layer
        oPopupTitle.innerHTML = "<table cellpadding='0' cellspacing='0' style='border: 0;' height='100%'>" +
            "<tr><td valign='middle'><b>" + title + "</b></td></tr>" + 
            "</table>" ;
        
        //Create popup 'footer' layer
        oPopupFooter.innerHTML = "";
            
        //Split buttons parameter and create buttons; OK, Yes, No, Cancel
        parameters.fontFamily = parameters.fontFamily != null ? parameters.fontFamily : ModalPopupsDefaults.fontFamily;
        var bt = parameters.buttons.split(',');
        for(x in bt) {
            if(bt[x] == "ok")
                oPopupFooter.innerHTML += "<input name='" + id + "_okButton' id='" + id + "_okButton' type=button value='" + okButtonText + "' style='font-family:Verdana,Arial; font-size:8pt; border: solid 1px #859DBE; background-color: white; width:75px; height:20px; margin-right: 5px; margin-left: 5px;' onclick='" + onOk + "'/>";
            if(bt[x] == "yes")
                oPopupFooter.innerHTML += "<input name='" + id + "_yesButton' id='" + id + "_yesButton' type=button value='" + yesButtonText + "' style='font-family:Verdana,Arial; font-size:8pt; border: solid 1px #859DBE; background-color: white; width:75px; height:20px; margin-right: 5px; margin-left: 5px;' onclick='" + onYes + "'/>";
            if(bt[x] == "no")
                oPopupFooter.innerHTML += "<input name='" + id + "_noButton' id='" + id + "_noButton' type=button value='" + noButtonText + "' style='font-family:Verdana,Arial; font-size:8pt; border: solid 1px #859DBE; background-color: white; width:75px; height:20px; margin-right: 5px; margin-left: 5px;' onclick='" + onNo + "'/>";
            if(bt[x] == "cancel")
                oPopupFooter.innerHTML += "<input name='" + id + "_cancelButton' id='" + id + "_cancelButton' type=button value='" + cancelButtonText + "' style='font-family:Verdana,Arial; font-size:8pt; border: solid 1px #859DBE; background-color: white; width:75px; height:20px; margin-right: 5px; margin-left: 5px;' onclick='" + onCancel + "'/>";
        }
        
        //Create popup 'body' layer, is done in; Alert, Confirm, YesNoCancel, Prompt and Custom functions.
        var allLayers = new Array(oBackground, oPopup, oShadow, oPopupTitle, oPopupBody, oPopupFooter);
        
        if(parameters.autoClose != null )
            setTimeout('ModalPopups.Close(\"'+id+'\");', parameters.autoClose);

        return allLayers;
    },
    
     //Support function to style and position all layers
    _styleAllLayers: function(id, parameters, allLayers) {
        var myLayers = allLayers;
        var oBackground = myLayers[0];
        var oPopup = myLayers[1];
        var oShadow = myLayers[2];
        var oPopupTitle = myLayers[3];
        var oPopupBody = myLayers[4];
        var oPopupFooter = myLayers[5];
        
        ModalPopups._zIndex += 3;
        var zIndex = ModalPopups._zIndex;

        //Get Css parameters for borderColor. 
        parameters.borderColor = parameters.borderColor != null ? parameters.borderColor : ModalPopupsDefaults.borderColor;  // #859DBE

        //Default css for; oBackground, oPopup and oShadow layers
        //Position elements excluded (except for background); top, left, width, height. 
        //They will be calculated by contents of oPopup, or set by the parameters.
        var cssBackground = "display:inline; position:absolute; z-index: " + (zIndex) + "; left:0px; top:0px; width:100%; height:100%; filter:alpha(opacity=70); opacity:0.7;";
        var cssShadow = "display:inline; position:absolute; z-index: " + (zIndex+1) + ";"; 
        var cssPopup = "display:inline; position:absolute; z-index: " + (zIndex+2) + "; background-color:white; color:black; border:solid 1px " + parameters.borderColor + "; padding:1px;"; // background-color:#EEF1F2

        //Get Css parameters for oBackGround layer. 
        parameters.backgroundColor = parameters.backgroundColor != null ? parameters.backgroundColor : ModalPopupsDefaults.backgroundColor;
        cssBackground += " background-color:" + parameters.backgroundColor + ";";

        //Css for oPopup content layers. (oPopupTitle, oPopupBody, oPopupFooter)
        parameters.fontFamily = parameters.fontFamily != null ? parameters.fontFamily : ModalPopupsDefaults.fontFamily;
        parameters.fontSize = parameters.fontSize != null ? parameters.fontSize : ModalPopupsDefaults.fontSize;
        var cssPopupTitle = "position: absolute; font-family:" + parameters.fontFamily + "; font-size:" + parameters.fontSize + "; padding: 5px; text-align:left;";
        var cssPopupBody = "position: absolute; font-family:" + parameters.fontFamily + "; font-size:" + parameters.fontSize + "; padding: 5px; text-align:left;";
        var cssPopupFooter = "position: absolute; font-family:" + parameters.fontFamily + "; font-size:" + parameters.fontSize + "; padding: 5px; text-align:center;";

        //First style the contents of the oPopup layer. (oPopupTitle, oPopupBody, oPopupFooter)
        //When this is done we can calculate the height and width of the oPopup contents.
        if(ModalPopupsSupport.isIE) {
            oPopupTitle.style.cssText = cssPopupTitle;
            oPopupBody.style.cssText = cssPopupBody; 
            oPopupFooter.style.cssText = cssPopupFooter; 
        }
        else { 
            oPopupTitle.setAttribute("style", cssPopupTitle);
            oPopupBody.setAttribute("style", cssPopupBody);
            oPopupFooter.setAttribute("style", cssPopupFooter);
        } 

        //Get css color related parameters for; oPopup, oPopupTitle, oPopupBody, oPopupFooter.
        parameters.titleBackColor = parameters.titleBackColor != null ? parameters.titleBackColor : ModalPopupsDefaults.titleBackColor;
        parameters.titleFontColor = parameters.titleFontColor != null ? parameters.titleFontColor : ModalPopupsDefaults.titleFontColor;
        parameters.popupBackColor = parameters.popupBackColor != null ? parameters.popupBackColor : ModalPopupsDefaults.popupBackColor;
        parameters.popupFontColor = parameters.popupFontColor != null ? parameters.popupFontColor : ModalPopupsDefaults.popupFontColor;
        parameters.footerBackColor = parameters.footerBackColor != null ? parameters.footerBackColor : ModalPopupsDefaults.footerBackColor;
        parameters.footerFontColor = parameters.footerFontColor != null ? parameters.footerFontColor : ModalPopupsDefaults.footerFontColor;
        cssPopupTitle += " background-color:" + parameters.titleBackColor + ";";
        cssPopupTitle += " color:" + parameters.titleFontColor + ";";
        cssPopupBody += " background-color:" + parameters.popupBackColor + ";";
        cssPopupBody += " color:" + parameters.popupFontColor + ";";
        cssPopupFooter += " background-color:" + parameters.footerBackColor + ";";
        cssPopupFooter += " color:" + parameters.footerFontColor + ";";

        //Calculate maxWidth of the 3 layers in oPopup. (oPopupTitle,oPopupBody,oPopupFooter)
        var calcMaxWidth = 0;
        if(ModalPopupsSupport.getLayerWidth(oPopupTitle.id) > calcMaxWidth) 
            calcMaxWidth = ModalPopupsSupport.getLayerWidth(oPopupTitle.id);
        if(ModalPopupsSupport.getLayerWidth(oPopupBody.id) > calcMaxWidth)
            calcMaxWidth = ModalPopupsSupport.getLayerWidth(oPopupBody.id);  
        if(ModalPopupsSupport.getLayerWidth(oPopupFooter.id) > calcMaxWidth)
            calcMaxWidth = ModalPopupsSupport.getLayerWidth(oPopupFooter.id);   
                        
        //Calculate total height of the 3 layers in oPopup. (oPopupTitle+oPopupBody+oPopupFooter)
        var calcTotalHeight = ModalPopupsSupport.getLayerHeight(oPopupTitle.id) + ModalPopupsSupport.getLayerHeight(oPopupBody.id) + ModalPopupsSupport.getLayerHeight(oPopupFooter.id);    
        
        parameters.width = parameters.width != null ? parameters.width : (calcMaxWidth + 4); // Add 4px for; padding: 1px and border: 1px;
        parameters.height = parameters.height != null ? parameters.height : calcTotalHeight; // Set height as height of; oPopupTitle + oPopupBody + oPopupFooter
        
        //Eerst hoogte oPopupBody aanpassen indien parameters.height is meegegeven
        var newBodyHeight = ModalPopupsSupport.getLayerHeight(oPopupBody.id)
        if(parameters.height > calcTotalHeight) {
            // Sub 10px for; padding: 5px;
            newBodyHeight = parameters.height - ModalPopupsSupport.getLayerHeight(oPopupTitle.id) - ModalPopupsSupport.getLayerHeight(oPopupFooter.id);
            cssPopupBody += " height:" + newBodyHeight + "px;";
            calcTotalHeight = ModalPopupsSupport.getLayerHeight(oPopupTitle.id) + newBodyHeight + ModalPopupsSupport.getLayerHeight(oPopupFooter.id);  
        }
        
        cssPopupTitle += " top:1px;";
        cssPopupBody += " top:" + ModalPopupsSupport.getLayerHeight(oPopupTitle.id) + "px;";
        cssPopupFooter += " top:" + (ModalPopupsSupport.getLayerHeight(oPopupTitle.id) + (newBodyHeight) /*ModalPopupsSupport.getLayerHeight(oPopupBody.id)*/) + "px;";
        cssPopupTitle += " width:" + (parameters.width - 10) + "px;"; // Sub 10px for; padding-left+right: 5px;
        cssPopupBody += " width:" + (parameters.width - 10) + "px;"; // Sub 10px for-left+right; padding: 5px;
        cssPopupFooter += " width:" + (parameters.width - 10) + "px;"; // Sub 10px for-left+right; padding: 5px;
        
         //Get browser width and height
        var frameWidth = ModalPopupsSupport.getFrameWidth();
        var frameHeight = ModalPopupsSupport.getFrameHeight();
        
        if(parameters.height < calcTotalHeight)
            parameters.height = calcTotalHeight;
        
        //Get parameters for oPopup layer.
        parameters.top = parameters.top != null ? parameters.top : ((frameHeight/2) - (parameters.height/2));
        parameters.left = parameters.left != null ? parameters.left : ((frameWidth/2) - (parameters.width/2));

        //Set modal popup position
        //cssPopup += " top:" + parameters.top + "px;";
        //cssPopup += " left:" + parameters.left + "px;";
        
        cssPopupTitle += " left:1px;";
        cssPopupBody += " left:1px;";
        cssPopupFooter += " left:1px;";
        
        if(parameters.width) 
            cssPopup += " width:" + parameters.width + "px;";
        else
            cssPopup += " width:" + parameters.maxWidth + "px;";
            
        if(parameters.height) 
            cssPopup += " height:" + (parameters.height-1) + "px;";
        else
            cssPopup += " height:" + (calcTotalHeight-1) + "px;";
        
        //First style the contents of the oPopup layer. (oPopupTitle, oPopupBody, oPopupFooter)
        //When this is done we can calculate the height and width of the oPopup contents.
        if(ModalPopupsSupport.isIE) {
            oPopupTitle.style.cssText = cssPopupTitle;
            oPopupBody.style.cssText = cssPopupBody; 
            oPopupFooter.style.cssText = cssPopupFooter; 
        }
        else { 
            oPopupTitle.setAttribute("style", cssPopupTitle);
            oPopupBody.setAttribute("style", cssPopupBody);
            oPopupFooter.setAttribute("style", cssPopupFooter);
        }   

        //Setup shadow layer
        parameters.shadow = parameters.shadow != null ? parameters.shadow : ModalPopupsDefaults.shadow;
        parameters.shadowSize = parameters.shadowSize != null ? parameters.shadowSize : ModalPopupsDefaults.shadowSize;
        if(parameters.shadow) {
            //Get parameters for oShadow layer.
            parameters.shadowSize = parameters.shadowSize != null ? parameters.shadowSize : ModalPopupsDefaults.shadowSize;
            parameters.shadowColor = parameters.shadowColor != null ? parameters.shadowColor : ModalPopupsDefaults.shadowColor;
            cssShadow += "background-color:" + parameters.shadowColor + ";"; 
        
            //cssShadow += " top:" + (parameters.top + parameters.shadowSize) + "px;";
            //cssShadow += " left:" + (parameters.left + parameters.shadowSize) + "px;";
            if(parameters.width) 
                cssShadow += " width:" + parameters.width + "px;";
            else
                cssShadow += " width:" + maxWidth + "px;";
            if(parameters.height) 
                cssShadow += " height:" + (parameters.height-1) + "px;";
            else
                cssShadow += " height:" + (calcTotalHeight) + "px;";
            
        }
        else {
            cssShadow += " display:none;";
        }
        
        //Secondly style the contents of the main layers. (oBackGround, oPopup, oShadow)
        if(ModalPopupsSupport.isIE) {
            oPopup.style.cssText = cssPopup; 
            oShadow.style.cssText = cssShadow; 
            oBackground.style.cssText = cssBackground; 
        }
        else {
            oPopup.setAttribute("style", cssPopup);
            oShadow.setAttribute("style", cssShadow);
            oBackground.setAttribute("style", cssBackground);
        }
        
        ModalPopupsSupport.centerElement(document.getElementById(id+'_background'), 0, true);
        ModalPopupsSupport.centerElement(document.getElementById(id+'_popup'), 0, false);
        if(parameters.shadow)
            ModalPopupsSupport.centerElement(document.getElementById(id+'_shadow'), parameters.shadowSize, false);
        
        //Load file?
        parameters.loadTextFile = parameters.loadTextFile != null ? parameters.loadTextFile : "";
        if(parameters.loadTextFile != "")
            ModalPopups._loadTextFile(id, parameters, allLayers, parameters.loadTextFile);
            
//        parameters.autoClose = parameters.autoClose != null ? parameters.autoClose : 0;
//        if(!parameters.autoClose)
//        {
        window.onresize = function() {
            ModalPopupsSupport.centerElement(document.getElementById(id+'_background'), 0, true);
            ModalPopupsSupport.centerElement(document.getElementById(id+'_popup'), 0, false);
            if(parameters.shadow) {
                ModalPopupsSupport.centerElement(document.getElementById(id+'_shadow'), parameters.shadowSize, false);
                }
            }
            
        window.onscroll = function() {
            ModalPopupsSupport.centerElement(document.getElementById(id+'_background'), 0, true);
            ModalPopupsSupport.centerElement(document.getElementById(id+'_popup'), 0, false);
            if(parameters.shadow) {
                ModalPopupsSupport.centerElement(document.getElementById(id+'_shadow'), parameters.shadowSize, false);
                }
        }

        //}
     },
     
     //Support function to load text file via AJAX call
     _loadTextFile: function(id, parameters, allLayers, filename)
     {
        var objXml = ModalPopupsSupport.getXmlHttp(); 
        objXml.open("GET", filename, true);
        objXml.onreadystatechange=function() 
        {
            if (objXml.readyState==4) 
            {
                var txt = objXml.responseText.replace("\r\n","<br>").replace("\n\r","<br>").replace("\n","<br>").replace("\r","<br>");
                var html = "<div style='overflow-y: scroll; position:absolute; " + 
                    "top:5px; left:5px; height:" + (parameters.height - 65) + "px; " + 
                    "width:" + (parameters.width - 10) + "px;'>";
                html += txt;
                html += "</div>";
                ModalPopups.GetCustomControl(id+"_popupBody").innerHTML = html;
                parameters.loadTextFile = "";
                ModalPopups._styleAllLayers(id, parameters, allLayers);
            }
        }
        objXml.send(null);
    }
};

var ModalPopupsSupport = {
    isIE: function() {
        return (window.ActiveXObject) ? true : false;
    },
    
    getDialog: function() {
    
    },
    
    makeLayer : function(id,layerVisible,layerParent) {
        var container = document.createElement("div");
        container.id = id;
        
        if(layerParent)
            layerParent.appendChild(container);
        else
            document.body.appendChild(container);
        
        return container;
    },
    
    deleteLayer: function(id) {
        var del = findLayer(id);
        if(del) 
            document.body.removeChild(del);
    },
    
    findLayer: function(id) {
        return document.all ? document.all[id] : document.getElementById(id);
    },
        
    findControl: function(id, parent) {
        if(parent == null)
        {  
            return document.all ? document.all[id] : document.getElementById(id);
        }
        else
        {
            return document.all ? document.all[id] : document.getElementById(id);
        }
    },
    
    getLayerHeight: function(id) {
        if (document.all) {
            gh = document.getElementById(id).offsetHeight;  
        }
        else {
            gh = document.getElementById(id).offsetHeight;  //-5;
        }
        return gh;
    },
    
    getLayerWidth: function(id) {
        gw = document.getElementById(id).offsetWidth;
        return gw;
    },
    
    getViewportDimensions: function() {
        var intH = 0, intW = 0;
        
        if(self.innerHeight) {
           intH = window.innerHeight;
           intW = window.innerWidth;
        } 
        else {
            if(document.documentElement && document.documentElement.clientHeight) {
                intH = document.documentElement.clientHeight;
                intW = document.documentElement.clientWidth;
            }
            else {
                if(document.body) {
                    intH = document.body.clientHeight;
                    intW = document.body.clientWidth;
                }
            }
        }

        return {
            height: parseInt(intH, 10),
            width: parseInt(intW, 10)
        };
    },
    
    getScrollXY: function() {
        var scrOfX = 0, scrOfY = 0;
        if( typeof( window.pageYOffset ) == 'number' ) {
            //Netscape compliant
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
        } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
        } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
        }
        return [ scrOfX, scrOfY ];
        },
    
    centerElement: function(elem,add,noleft) {
        var viewport = ModalPopupsSupport.getViewportDimensions();
        var left = (viewport.width == 0) ? 50 : parseInt((viewport.width - elem.offsetWidth) / 2, 10);
        var top = (viewport.height == 0) ? 50 : parseInt((viewport.height - elem.offsetHeight) / 2, 10);
        var scroll = ModalPopupsSupport.getScrollXY();
        //alert(scroll[1]);

        if(!noleft) {
            elem.style.left = (left + add) + 'px';
        }
        elem.style.top = (top + add + scroll[1]) + 'px';

        viewport, left, top, elem = null;    
    },
    
    readFile: function(filename, intoElement) {
        var xmlHttp = getXmlHttp();
        var file = filename+"?r="+Math.random();
        xmlHttp.open("GET", file, true);
        xmlHttp.onreadystatechange=function() 
        {
            if (xmlHttp.readyState==4) 
            {
                intoElement.innerHTML = xmlHttp.responseText;
            }
        }
        xmlHttp.send(null);
    },
        
    getFrameWidth: function() {
        var frameWidth = document.documentElement.clientWidth;
        if (self.innerWidth) // Als de browser deze manier van aanroepen hanteerd
        {
            frameWidth = self.innerWidth; // Haal de frame-width op
        }
        else if (document.documentElement && document.documentElement.clientWidth)  // Als de browser deze manier van aanroepen hanteerd
        {
            frameWidth = document.documentElement.clientWidth; // Haal de frame-width op
        }
        else if (document.body)  // Als de browser deze manier van aanroepen hanteerd
        {
            frameWidth = document.body.clientWidth; // Haal de frame-width op
        }
        else return;
        return frameWidth;
    },
    
    getFrameHeight: function() {
        var frameHeight = document.documentElement.clientHeight;
        if (self.innerWidth) // Als de browser deze manier van aanroepen hanteerd
        {
            frameHeight = self.innerHeight; // Haal de frame-height op
        }
        else if (document.documentElement && document.documentElement.clientWidth)  // Als de browser deze manier van aanroepen hanteerd
        {
            frameHeight = document.documentElement.clientHeight; // Haal de frame-height op
        }
        else if (document.body)  // Als de browser deze manier van aanroepen hanteerd
        {
            frameHeight = document.body.clientHeight; // Haal de frame-height op
        }
        else return;
        return frameHeight;
    },
    
    getXmlHttp: function()
    {
        var xmlHttp;
        try
        {  // Firefox, Opera 8.0+, Safari  
            xmlHttp=new XMLHttpRequest();  
        }
        catch (e)
        {  // Internet Explorer  
            try
            {    
                xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");    
            }
            catch (e)
            {    
                try
                {      
                    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");      
                }
                catch (e)
                {      
                    alert("Your browser does not support AJAX!");      
                    return false;      
                }    
            }  
        }  
        return xmlHttp;
    }
    
    

};




/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09
 */

var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Manufacturer:
 * Dalton Maag Ltd.
 */

Cufon.registerFont({"w":216,"face":{"font-family":"Aller","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 5 3 3 0 0 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-14 -294.155 360.889 90","underline-thickness":"18","underline-position":"-18","unicode-range":"U+0020-U+2122"},"glyphs":{" ":{"w":85},"%":{"d":"84,-132v26,0,35,-22,34,-51v-1,-29,-8,-50,-34,-50v-25,0,-36,21,-35,50v0,29,7,51,35,51xm84,-106v-47,0,-68,-31,-68,-77v0,-45,22,-76,68,-76v45,0,67,31,67,76v0,46,-21,77,-67,77xm292,-22v26,0,35,-22,35,-50v0,-29,-8,-50,-35,-50v-26,0,-35,22,-34,50v1,28,7,50,34,50xm292,4v-46,0,-67,-31,-67,-76v0,-45,21,-77,67,-77v46,0,68,31,68,77v0,46,-22,76,-68,76xm258,-255v12,0,26,-2,37,0r-174,255v-12,1,-25,2,-36,0","w":378},"&":{"d":"145,-229v-30,-10,-78,-8,-78,29v0,50,74,30,121,34r33,-45r3,0r0,45r47,0v3,8,2,21,0,29r-47,0r0,53v0,63,-43,88,-106,88v-56,0,-97,-22,-97,-77v0,-37,20,-62,46,-74v-20,-9,-37,-25,-37,-54v-1,-60,70,-72,123,-55v-1,12,-3,18,-8,27xm60,-79v0,35,23,51,61,51v64,0,73,-44,69,-108r-73,0v-36,1,-57,23,-57,57","w":273},"'":{"d":"23,-259v11,0,24,-2,34,0r0,99v-11,2,-23,1,-34,0r0,-99","w":80},"(":{"d":"97,-279v-55,77,-56,262,0,339v-11,2,-24,3,-35,0v-57,-78,-57,-261,0,-339v11,-2,23,-2,35,0","w":114},")":{"d":"53,-279v57,78,57,261,0,339v-11,2,-23,2,-35,0v55,-77,56,-262,0,-339v11,-2,24,-3,35,0","w":114},"*":{"d":"76,-259v8,-2,15,-1,23,0r3,47v-10,0,-20,2,-29,0xm66,-207v-1,10,-4,18,-8,26r-44,-17v1,-7,3,-14,7,-21xm60,-173v9,4,16,10,23,16r-30,36r-18,-13xm154,-219v4,7,6,14,7,21r-44,17v-4,-8,-7,-16,-8,-26xm139,-134v-5,6,-11,9,-18,13r-30,-36v7,-5,15,-12,23,-16","w":174},"+":{"d":"92,-111r-60,0v-2,-9,-1,-23,0,-32r60,0r0,-65v11,-2,21,-2,32,0r0,65r60,0v0,11,2,22,0,32r-60,0r0,66v-10,1,-22,2,-32,0r0,-66"},",":{"d":"28,-40v12,-1,23,-2,36,0r-23,81v-11,0,-24,2,-34,0","w":76},"-":{"d":"112,-117v0,10,2,23,0,32r-94,0v0,-10,-2,-23,0,-32r94,0","w":129},".":{"d":"23,0v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0","w":86},"\/":{"d":"100,-259v12,0,24,-2,35,0r-88,259v-11,0,-24,2,-34,0","w":147},"0":{"d":"18,-116v0,-69,25,-120,91,-120v65,0,90,51,90,120v0,68,-25,120,-91,120v-66,0,-90,-52,-90,-120xm161,-116v0,-50,-12,-88,-53,-88v-41,0,-53,39,-53,88v0,50,11,89,53,89v41,0,53,-40,53,-89"},"1":{"d":"49,-162v-7,-8,-10,-14,-13,-26v35,-14,62,-36,101,-46r0,203r51,0v1,11,2,20,0,31r-140,0v-3,-9,-2,-21,0,-31r54,0r0,-154"},"2":{"d":"27,-221v50,-26,151,-21,146,53v-4,63,-54,95,-86,136r96,0v0,10,2,23,0,32r-160,0r-2,-5r102,-122v22,-29,13,-77,-35,-77v-23,0,-37,7,-52,13v-3,-9,-9,-19,-9,-30"},"3":{"d":"28,-16v42,19,119,17,119,-43v0,-41,-43,-51,-82,-41r-3,-5r60,-95r-92,0v-2,-9,-3,-23,0,-32r145,0r3,4r-66,100v43,-4,70,24,72,65v4,85,-94,105,-167,77v2,-11,6,-21,11,-30"},"4":{"d":"15,-28r-3,-4r105,-207v12,1,23,7,32,12r-84,167r73,0r0,-68v11,-2,23,-2,34,0r0,68r34,0v0,10,2,23,0,32r-34,0r0,49v-11,0,-24,2,-34,0r0,-49r-123,0"},"5":{"d":"79,-136v60,-10,105,17,105,74v0,82,-89,103,-161,78v1,-12,5,-21,10,-30v44,17,113,11,113,-46v0,-50,-57,-57,-98,-42r-4,-3r5,-127r122,0v0,11,2,22,0,32r-90,0"},"6":{"d":"112,4v-110,7,-104,-153,-55,-214v22,-30,56,-48,104,-52v4,11,3,20,1,30v-59,6,-91,45,-101,101v10,-18,31,-35,61,-34v49,2,77,31,77,83v0,54,-34,82,-87,86xm162,-81v0,-34,-16,-54,-49,-54v-32,0,-49,22,-50,55v-1,34,17,53,48,53v33,0,51,-21,51,-54"},"7":{"d":"88,27v-13,-3,-23,-7,-33,-15r92,-212r-122,0v0,-11,-2,-22,0,-32r173,2"},"8":{"d":"185,-197v1,32,-20,49,-42,60v28,13,54,31,54,71v0,49,-38,70,-89,70v-51,0,-89,-21,-89,-70v0,-40,26,-58,53,-71v-22,-11,-42,-29,-41,-60v1,-42,34,-62,77,-62v43,0,75,20,77,62xm108,-26v58,0,66,-72,20,-88v-6,-3,-13,-6,-20,-8v-26,9,-51,20,-51,53v0,28,21,43,51,43xm108,-230v-48,-4,-54,58,-16,73v26,11,58,-7,58,-37v0,-25,-16,-34,-42,-36"},"9":{"d":"106,-235v109,-7,103,153,55,214v-23,29,-55,49,-104,52v-4,-8,-3,-21,-1,-30v58,-7,93,-43,101,-100v-11,17,-32,34,-61,33v-51,0,-77,-32,-77,-82v0,-55,34,-83,87,-87xm57,-149v0,35,16,53,48,53v32,0,51,-21,51,-54v1,-34,-17,-54,-49,-54v-30,1,-50,21,-50,55"},":":{"d":"23,-145v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0xm23,0v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0","w":86},";":{"d":"31,-40v12,-1,23,-2,36,0r-23,81v-11,0,-24,2,-34,0xm29,-145v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0","w":93},"<":{"d":"184,-204v3,14,2,22,0,34r-118,46r118,44v2,12,2,24,0,36r-150,-61v-2,-12,-3,-26,0,-38"},"=":{"d":"184,-107v2,10,2,22,0,32r-152,0v0,-10,-2,-23,0,-32r152,0xm184,-176v2,11,2,23,0,33r-152,0v0,-11,-2,-23,0,-33r152,0"},">":{"d":"32,-44v0,-11,-2,-24,0,-34r118,-46r-118,-44v-2,-12,-2,-24,0,-36r150,61v3,10,2,26,0,38"},"?":{"d":"162,-189v-2,42,-32,63,-62,75r0,37v-11,0,-24,2,-34,0r0,-58v29,-8,57,-18,58,-54v1,-44,-69,-46,-100,-30v-3,-10,-7,-18,-9,-30v58,-23,151,-10,147,60xm62,0v0,-13,-2,-28,0,-40v11,-3,29,-3,41,0v0,13,2,28,0,40v-13,0,-29,2,-41,0","w":175},"@":{"d":"54,-78v-6,93,84,124,165,96v4,7,7,15,8,25v-18,8,-41,12,-70,12v-85,-2,-137,-45,-137,-132v0,-113,73,-186,194,-186v79,0,129,40,131,122v2,79,-63,146,-137,110v-39,25,-110,14,-108,-44v3,-83,71,-133,157,-105r-26,129v52,20,82,-39,82,-90v0,-62,-39,-96,-103,-94v-97,2,-150,62,-156,157xm136,-82v-2,37,35,43,63,29r20,-104v-51,-9,-80,26,-83,75","w":365},"A":{"d":"159,-60r-98,0r-18,60v-12,0,-26,2,-37,0r84,-259v14,0,29,-2,42,0r84,259v-13,0,-27,2,-39,0xm71,-92r78,0r-39,-132","w":222},"B":{"d":"198,-72v1,80,-91,81,-166,72r0,-259v64,-9,153,-9,150,64v-2,29,-18,49,-42,56v34,6,58,25,58,67xm159,-73v0,-47,-43,-49,-91,-48r0,93v45,3,91,1,91,-45xm145,-193v0,-38,-37,-45,-77,-40r0,82v42,2,77,-2,77,-42","w":214},"C":{"d":"61,-128v0,82,66,119,136,90v5,10,9,20,10,30v-19,8,-40,12,-65,12v-81,-1,-118,-52,-121,-132v-4,-104,83,-159,182,-125v0,12,-6,21,-9,30v-69,-27,-133,13,-133,95","w":222},"D":{"d":"231,-129v0,114,-87,147,-199,129r0,-259v110,-19,199,18,199,130xm192,-130v0,-75,-44,-108,-123,-99r0,199v77,11,123,-21,123,-100","w":251},"E":{"d":"32,-259r142,0v0,10,2,23,0,32r-106,0r0,74r85,0v0,10,2,23,0,32r-85,0r0,89r109,0v0,10,2,23,0,32r-145,0r0,-259","w":192},"F":{"d":"32,-259r135,0v0,10,2,23,0,32r-99,0r0,76r83,0v0,11,2,23,0,33r-83,0r0,118v-12,0,-25,2,-36,0r0,-259","w":181},"G":{"d":"60,-128v-2,73,48,114,121,95r0,-101v12,0,26,-2,37,0r0,126v-20,8,-44,13,-73,12v-82,-2,-121,-50,-124,-132v-3,-104,85,-159,184,-125v0,12,-6,21,-9,30v-15,-4,-29,-9,-51,-8v-59,2,-83,43,-85,103","w":245},"H":{"d":"32,-259v12,0,25,-2,36,0r0,107r111,0r0,-107v12,0,25,-2,36,0r0,259v-12,0,-25,2,-36,0r0,-120r-111,0r0,120v-12,0,-25,2,-36,0r0,-259","w":246},"I":{"d":"32,-259v12,0,25,-2,36,0r0,259v-12,0,-25,2,-36,0r0,-259","w":100},"J":{"d":"16,-31v29,8,60,2,60,-33r0,-163r-45,0v-2,-10,-2,-22,0,-32r82,0r0,187v5,63,-44,87,-103,72v1,-12,3,-20,6,-31","w":142},"K":{"d":"79,-131r83,-128v13,0,27,-2,40,0r-82,124r93,135v-14,0,-28,2,-42,0xm32,-259v12,0,25,-2,36,0r0,259v-12,0,-25,2,-36,0r0,-259"},"L":{"d":"32,-259v12,0,25,-2,36,0r0,227r102,0v1,10,2,22,0,32r-138,0r0,-259","w":178},"M":{"d":"39,-259v13,0,29,-2,41,0r67,162r68,-162v13,0,27,-2,39,0r12,259v-12,0,-24,2,-35,0r-9,-201r-63,147v-9,1,-19,2,-28,0r-62,-148r-8,202v-11,0,-23,2,-34,0","w":293},"N":{"d":"32,-259v11,0,23,-2,34,0r112,195r0,-195v12,0,24,-2,35,0r0,259v-11,0,-23,2,-34,0r-113,-193r0,193v-11,0,-24,2,-34,0r0,-259","w":244},"O":{"d":"240,-129v0,79,-31,133,-109,133v-78,0,-109,-56,-109,-133v0,-77,31,-134,109,-134v78,0,109,55,109,134xm61,-129v0,55,15,102,70,102v55,0,71,-47,71,-102v0,-55,-15,-102,-71,-102v-55,0,-70,47,-70,102","w":262},"P":{"d":"190,-180v0,70,-52,92,-122,86r0,94v-12,0,-25,2,-36,0r0,-259v76,-12,158,-4,158,79xm152,-179v0,-46,-37,-57,-84,-51r0,104v45,6,84,-5,84,-53","w":203},"Q":{"d":"243,23v0,13,-3,22,-6,32r-83,-15v0,-15,3,-20,7,-31xm239,-129v0,79,-31,133,-109,133v-78,0,-109,-56,-109,-133v0,-77,31,-134,109,-134v78,0,109,55,109,134xm60,-129v1,57,16,102,70,102v55,0,71,-46,71,-102v0,-56,-16,-102,-71,-102v-55,0,-70,45,-70,102","w":260},"R":{"d":"149,-181v1,-43,-35,-56,-80,-50r0,231v-12,0,-25,2,-37,0r0,-259v83,-16,181,8,151,101v-8,24,-28,39,-50,49r75,109v-12,1,-28,2,-41,0r-83,-121v30,-10,64,-21,65,-60","w":214},"S":{"d":"145,-137v70,41,26,157,-62,141v-27,1,-47,-3,-66,-11v0,-10,5,-23,8,-32v43,20,140,14,112,-51v-21,-48,-114,-28,-114,-103v0,-70,87,-82,145,-60v-1,10,-3,20,-7,30v-34,-17,-120,-14,-96,41v12,27,55,30,80,45","w":196},"T":{"d":"76,-227r-67,0v0,-10,-2,-23,0,-32r171,0v2,10,2,22,0,32r-67,0r0,227v-12,2,-25,1,-37,0r0,-227","w":189},"U":{"d":"121,4v-124,0,-86,-150,-92,-263v12,-1,25,-2,37,0r0,147v1,47,7,83,55,83v48,0,56,-34,55,-83r0,-147v12,-1,26,-2,37,0v-6,114,33,263,-92,263","w":242},"V":{"d":"8,-259v13,0,29,-2,41,0r65,222r65,-222v13,0,28,-2,40,0r-85,259v-14,0,-29,2,-42,0","w":226},"W":{"d":"10,-259v13,0,28,-2,40,0r45,216r53,-216v12,0,27,-2,38,0r54,218r45,-218v12,0,26,-2,37,0r-62,259v-14,0,-30,2,-43,0r-51,-203r-52,203v-14,0,-29,2,-42,0","w":331},"X":{"d":"108,-135r-62,135v-14,2,-24,1,-38,0r64,-135r-54,-123v13,-2,26,-3,39,0xm111,-135r51,-123v12,-2,27,-3,39,0r-54,122r64,136v-15,2,-24,1,-39,0","w":219},"Y":{"d":"89,-95r-83,-164v14,0,29,-2,42,0r60,129r60,-129v13,0,27,-2,39,0r-81,164r0,95v-12,0,-26,2,-37,0r0,-95","w":213},"Z":{"d":"9,-3r130,-224r-114,0v-2,-10,-2,-22,0,-32r168,0r2,3r-130,224r121,0v2,10,2,22,0,32r-175,0","w":203},"[":{"d":"18,-274r77,0v2,10,2,20,0,30r-42,0r0,275r42,0v2,10,2,20,0,29r-77,0r0,-334","w":114},"\\":{"d":"134,0v-12,0,-24,2,-35,0r-87,-259v12,0,24,-2,35,0","w":148},"]":{"d":"19,60v-2,-9,-1,-21,0,-29r43,0r0,-275r-43,0v-1,-10,-2,-20,0,-30r78,0r0,334r-78,0","w":114},"^":{"d":"80,-259v13,0,26,-2,38,0r57,127v-11,0,-23,2,-33,0r-44,-97r-42,97v-12,1,-22,0,-34,0","w":198},"_":{"d":"180,5v1,8,2,19,0,27r-178,0v-2,-9,-3,-18,0,-27r178,0","w":181},"`":{"d":"46,-260v15,0,32,-2,46,0r42,46v-12,3,-25,2,-36,0","w":180},"a":{"d":"53,-55v0,36,45,34,73,27r0,-59v-34,-5,-73,-3,-73,32xm17,-55v3,-52,53,-68,109,-60v10,-52,-52,-49,-87,-37v-5,-8,-7,-18,-7,-29v56,-17,129,-11,129,61r0,115v-54,14,-148,20,-144,-50","w":186},"b":{"d":"193,-97v0,89,-86,119,-165,91r0,-258v12,0,25,-2,36,0r0,102v9,-15,28,-27,53,-27v54,1,76,36,76,92xm111,-158v-60,-2,-46,72,-47,128v50,14,94,-11,92,-65v-2,-36,-10,-62,-45,-63","w":212},"c":{"d":"55,-92v0,58,48,77,97,60v4,6,7,18,7,28v-71,25,-141,-9,-141,-88v0,-77,68,-114,139,-89v-1,9,-3,21,-6,28v-50,-19,-96,4,-96,61","w":172},"d":{"d":"19,-89v0,-74,55,-112,128,-95r0,-80v12,0,25,-2,36,0r0,259v-73,22,-164,7,-164,-84xm57,-89v-4,55,42,73,90,60r0,-124v-47,-20,-97,9,-90,64","w":210},"e":{"d":"164,-34v3,8,6,18,7,28v-69,27,-160,1,-153,-85v5,-59,28,-98,87,-98v58,0,82,44,76,105r-126,0v-5,60,62,69,109,50xm147,-110v4,-44,-50,-67,-77,-37v-8,9,-12,21,-14,37r91,0","w":200},"f":{"d":"132,-235v-34,-11,-62,7,-55,50r47,0v1,9,2,20,0,28r-47,0r0,157v-12,0,-25,2,-36,0r0,-157r-30,0v-2,-7,-1,-20,0,-28r30,0v-8,-64,37,-93,96,-79v0,12,-3,19,-5,29","w":133},"g":{"d":"54,-41v2,26,47,17,74,17v38,0,61,17,61,50v0,47,-49,64,-100,64v-43,0,-76,-10,-76,-48v0,-22,14,-37,29,-45v-26,-13,-18,-58,5,-70v-15,-10,-26,-27,-26,-51v0,-64,85,-81,127,-48v10,-8,27,-15,46,-14v0,11,2,22,0,32r-32,0v29,57,-27,112,-93,91v-6,4,-15,12,-15,22xm152,28v0,-30,-43,-22,-73,-23v-21,-2,-32,13,-32,30v0,46,105,31,105,-7xm58,-124v0,24,13,39,38,39v25,0,38,-15,38,-39v0,-25,-13,-39,-38,-39v-25,0,-38,14,-38,39","w":199},"h":{"d":"113,-157v-67,0,-46,92,-49,157v-12,0,-25,2,-36,0r0,-264v12,0,25,-2,36,0r0,107v11,-16,28,-32,57,-32v86,0,57,111,62,189v-12,0,-24,2,-35,0v-7,-56,23,-157,-35,-157","w":208},"i":{"d":"40,-157v-18,3,-32,0,-24,-28r59,0r0,185v-12,0,-24,2,-35,0r0,-157xm32,-225v0,-12,-2,-26,0,-37v12,0,27,-2,38,0v0,12,2,25,0,37v-12,0,-27,2,-38,0","w":103},"j":{"d":"-9,36v24,8,50,2,50,-28r0,-165v-18,3,-32,0,-24,-28r59,0r0,195v4,51,-45,65,-90,53v0,-10,2,-20,5,-27xm70,-226v-27,8,-48,1,-38,-35v10,-3,28,-3,38,0v2,12,2,23,0,35","w":104},"k":{"d":"27,-264v12,0,25,-2,36,0r0,264v-12,0,-25,2,-36,0r0,-264xm73,-96r58,-89v13,0,28,-2,40,0r-59,87r69,98v-13,0,-28,2,-40,0","w":185},"l":{"d":"104,0v-41,9,-76,-4,-76,-48r0,-216v12,0,24,-2,35,0r0,208v-2,25,13,34,37,28v2,8,4,18,4,28","w":107},"m":{"d":"108,-158v-62,0,-40,95,-44,158v-12,0,-24,2,-35,0r0,-185v10,0,20,-2,30,0r3,29v12,-39,95,-46,105,0v11,-17,26,-32,54,-33v86,-4,57,111,62,189v-12,0,-25,2,-36,0r0,-107v-1,-29,-5,-50,-32,-50v-61,0,-36,97,-41,157v-12,0,-25,2,-36,0r0,-110v0,-28,-5,-48,-30,-48","w":307},"n":{"d":"114,-157v-66,0,-48,91,-50,157v-12,0,-24,2,-35,0r0,-185v10,0,20,-2,30,0r3,30v11,-18,30,-33,59,-34v86,-4,57,111,62,189v-12,0,-24,2,-35,0r0,-107v-1,-30,-6,-50,-34,-50","w":208},"o":{"d":"190,-92v0,57,-27,96,-86,96v-59,0,-86,-38,-86,-96v0,-59,28,-97,86,-97v57,0,86,40,86,97xm55,-92v0,39,12,68,49,68v36,0,48,-30,48,-68v0,-38,-12,-68,-48,-68v-37,0,-49,30,-49,68","w":207},"p":{"d":"193,-97v0,75,-55,115,-129,97r0,85v-12,0,-25,2,-36,0r0,-270v21,-3,39,-2,34,26v11,-17,29,-30,56,-30v53,0,75,37,75,92xm111,-158v-59,-1,-46,71,-47,128v52,15,95,-11,92,-65v-2,-35,-11,-63,-45,-63","w":212},"q":{"d":"19,-87v0,-88,81,-119,163,-94r0,266v-12,0,-24,2,-35,0r0,-85v-68,15,-128,-13,-128,-87xm56,-86v0,54,44,69,91,56r0,-126v-53,-13,-91,15,-91,70","w":210},"r":{"d":"125,-153v-79,-10,-58,82,-61,153v-12,0,-24,2,-35,0r0,-185v10,0,21,-2,30,0r3,29v11,-18,32,-35,63,-29v2,10,2,21,0,32","w":133},"s":{"d":"144,-75v23,74,-70,93,-127,71v0,-11,6,-20,9,-29v32,20,113,2,76,-39v-30,-18,-80,-18,-80,-64v0,-56,74,-61,120,-44v-1,10,-4,20,-8,28v-25,-17,-102,-8,-67,30v25,17,68,15,77,47","w":163},"t":{"d":"123,-1v-44,11,-87,0,-87,-50r0,-105v-10,-2,-28,5,-30,-5r62,-69r3,0r0,45r47,0v0,10,2,20,0,29r-47,0r0,84v-6,39,16,54,48,43v4,8,3,19,4,28","w":128},"u":{"d":"179,-6v-67,21,-152,16,-152,-76r0,-103v12,0,24,-2,35,0v6,65,-23,165,51,159v12,0,22,-1,31,-4r0,-155v12,0,24,-2,35,0r0,179","w":206},"v":{"d":"6,-185v13,0,28,-2,40,0r50,153r51,-153v13,0,26,-2,38,0r-72,185v-12,0,-24,2,-35,0","w":191},"w":{"d":"8,-185v13,0,26,-2,38,0r36,151r41,-151v12,0,25,-2,36,0r41,149r36,-149v12,0,24,-2,35,0r-55,185v-12,0,-25,2,-36,0r-40,-140r-41,140v-12,0,-26,2,-37,0","w":279},"x":{"d":"57,-96r-44,-89v13,0,26,-2,39,0r38,90r-46,95v-13,0,-26,2,-38,0xm93,-95r38,-90v13,0,26,-2,39,0r-43,88r50,97v-13,0,-25,2,-38,0","w":183},"y":{"d":"31,58v23,8,48,0,50,-23r11,-35v-8,0,-19,2,-26,0r-61,-185v13,0,27,-2,39,0r51,172r53,-172v12,0,25,-2,37,0r-82,247v-11,26,-47,34,-78,23v0,-13,2,-19,6,-27","w":190},"z":{"d":"10,-5r98,-151r-86,0v-1,-8,-2,-21,0,-29r139,0r1,5r-98,152r92,0v2,9,1,19,0,28r-144,0","w":171},"{":{"d":"129,60v-67,5,-75,-44,-75,-109v0,-32,-13,-45,-36,-56r0,-5v22,-11,37,-28,36,-61v-1,-64,7,-109,75,-104v2,9,2,19,0,28v-36,-2,-40,21,-40,57v0,40,-3,71,-31,82v28,12,31,44,31,85v0,35,5,55,40,54v2,10,2,19,0,29","w":149},"|":{"d":"42,-279v12,-2,24,-2,35,0r0,339v-9,3,-25,3,-35,0r0,-339","w":119},"}":{"d":"131,-105v-74,17,13,172,-112,165v0,-10,-2,-20,0,-29v37,2,41,-22,41,-57v-1,-41,4,-69,30,-82v-27,-12,-31,-42,-30,-84v0,-34,-5,-58,-41,-55v0,-9,-2,-19,0,-28v68,-5,78,39,75,104v-1,34,15,50,37,61r0,5","w":149},"~":{"d":"165,-143v-32,47,-108,-19,-143,19v-8,-7,-12,-14,-15,-23v9,-11,27,-21,47,-21v34,2,70,29,96,1v8,7,11,14,15,24","w":171},"\u00d7":{"d":"85,-127r-43,-44v6,-8,14,-17,22,-23r44,44r44,-44v9,6,16,14,22,23r-43,44r43,43v-5,8,-13,17,-22,22r-44,-43r-44,44v-9,-6,-17,-14,-23,-23"},"\u2013":{"d":"180,-117v0,10,2,23,0,32r-180,0v0,-11,-2,-22,0,-32r180,0","w":180},"\u2014":{"d":"360,-117v0,10,2,23,0,32r-360,0v0,-11,-2,-22,0,-32r360,0","w":360},"\u2018":{"d":"18,-258v9,-3,25,-3,35,0r22,80v-12,1,-23,2,-35,0","w":92},"\u2019":{"d":"39,-259v12,0,25,-2,36,0r-22,80v-9,3,-25,3,-35,0","w":92},"\u201c":{"d":"18,-258v9,-3,25,-3,35,0r22,80v-12,1,-23,2,-35,0xm88,-258v9,-3,25,-3,35,0r22,80v-12,1,-23,2,-35,0","w":163},"\u201d":{"d":"39,-259v12,0,25,-2,36,0r-22,80v-9,3,-25,3,-35,0xm109,-259v12,0,25,-2,36,0r-22,80v-9,3,-25,3,-35,0","w":163},"\u2026":{"d":"112,0v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0xm200,0v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0xm23,0v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v3,11,3,29,0,40v-13,0,-28,2,-40,0","w":263},"\u2122":{"d":"50,-228r-41,0v-2,-9,-1,-17,0,-27r109,0v2,9,2,18,0,27r-40,0r0,117v-8,3,-20,3,-28,0r0,-117xm141,-255v11,-1,20,0,31,0r35,79r36,-79v10,-1,18,0,29,0r7,144v-8,2,-19,4,-27,0r-6,-91r-31,64v-8,1,-11,2,-20,0r-29,-63r-4,90v-10,2,-18,3,-28,0","w":297},"!":{"d":"33,-259v13,0,27,-2,39,0r-2,181v-11,2,-23,3,-34,0xm32,0v0,-13,-2,-28,0,-40v13,-2,27,-2,40,0v2,13,2,27,0,40v-13,0,-28,2,-40,0","w":104},"\"":{"d":"94,-259v11,0,24,-2,34,0r0,99v-11,2,-23,1,-34,0r0,-99xm23,-259v11,0,24,-2,34,0r0,99v-11,2,-23,1,-34,0r0,-99","w":151},"#":{"d":"68,-75r-44,0v0,-9,-2,-21,0,-29r47,0r5,-59r-45,0v-2,-7,-1,-20,0,-28r47,0r5,-57r32,-1r-4,58r61,0r5,-57r32,-1r-5,58r42,0v2,9,1,19,0,28r-44,0r-5,59r42,0v0,9,2,21,0,29r-45,0r-5,65v-11,2,-22,1,-32,0r5,-65r-61,0r-5,65v-12,1,-21,2,-33,0xm165,-104r5,-59r-62,0r-5,59r62,0","w":264},"$":{"d":"157,-133v56,31,33,135,-33,134r0,41v-6,3,-19,3,-25,0r0,-38v-29,1,-51,-3,-72,-11v0,-11,5,-22,8,-32v43,20,135,16,112,-50v-27,-43,-115,-27,-113,-101v1,-40,26,-64,65,-68r0,-35v7,-2,18,-1,25,0r0,34v19,0,41,4,55,10v-1,10,-4,19,-8,29v-35,-15,-117,-16,-96,42v17,25,56,31,82,45"},"\u00a0":{"w":85}}});
/*!
* jQuery JavaScript Library v1.4.4
* http://jquery.com/
*
* Copyright 2010, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2010, The Dojo Foundation
* Released under the MIT, BSD, and GPL Licenses.
*
* Date: Thu Nov 11 19:04:53 2010 -0500
*/

(function(window, undefined) {

    // Use the correct document accordingly with window argument (sandbox)
    var document = window.document;
    var jQuery = (function() {

        // Define a local copy of jQuery
        var jQuery = function(selector, context) {
            // The jQuery object is actually just the init constructor 'enhanced'
            return new jQuery.fn.init(selector, context);
        },

        // Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

        // Map over the $ in case of overwrite
	_$ = window.$,

        // A central reference to the root jQuery(document)
	rootjQuery,

        // A simple way to check for HTML strings or ID strings
        // (both of which we optimize for)
	quickExpr = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,

        // Is it a simple selector
	isSimple = /^.[^:#\[\.,]*$/,

        // Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,
	rwhite = /\s/,

        // Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

        // Check for non-word characters
	rnonword = /\W/,

        // Check for digits
	rdigit = /\d/,

        // Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

        // JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

        // Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

        // Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

        // For matching the engine and version of the browser
	browserMatch,

        // Has the ready events already been bound?
	readyBound = false,

        // The functions to execute on DOM ready
	readyList = [],

        // The ready event handler
	DOMContentLoaded,

        // Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

        // [[Class]] -> type pairs
	class2type = {};

        jQuery.fn = jQuery.prototype = {
            init: function(selector, context) {
                var match, elem, ret, doc;

                // Handle $(""), $(null), or $(undefined)
                if (!selector) {
                    return this;
                }

                // Handle $(DOMElement)
                if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                }

                // The body element only exists once, optimize finding it
                if (selector === "body" && !context && document.body) {
                    this.context = document;
                    this[0] = document.body;
                    this.selector = "body";
                    this.length = 1;
                    return this;
                }

                // Handle HTML strings
                if (typeof selector === "string") {
                    // Are we dealing with HTML string or an ID?
                    match = quickExpr.exec(selector);

                    // Verify a match, and that no context was specified for #id
                    if (match && (match[1] || !context)) {

                        // HANDLE: $(html) -> $(array)
                        if (match[1]) {
                            doc = (context ? context.ownerDocument || context : document);

                            // If a single string is passed in and it's a single tag
                            // just do a createElement and skip the rest
                            ret = rsingleTag.exec(selector);

                            if (ret) {
                                if (jQuery.isPlainObject(context)) {
                                    selector = [document.createElement(ret[1])];
                                    jQuery.fn.attr.call(selector, context, true);

                                } else {
                                    selector = [doc.createElement(ret[1])];
                                }

                            } else {
                                ret = jQuery.buildFragment([match[1]], [doc]);
                                selector = (ret.cacheable ? ret.fragment.cloneNode(true) : ret.fragment).childNodes;
                            }

                            return jQuery.merge(this, selector);

                            // HANDLE: $("#id")
                        } else {
                            elem = document.getElementById(match[2]);

                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            if (elem && elem.parentNode) {
                                // Handle the case where IE and Opera return items
                                // by name instead of ID
                                if (elem.id !== match[2]) {
                                    return rootjQuery.find(selector);
                                }

                                // Otherwise, we inject the element directly into the jQuery object
                                this.length = 1;
                                this[0] = elem;
                            }

                            this.context = document;
                            this.selector = selector;
                            return this;
                        }

                        // HANDLE: $("TAG")
                    } else if (!context && !rnonword.test(selector)) {
                        this.selector = selector;
                        this.context = document;
                        selector = document.getElementsByTagName(selector);
                        return jQuery.merge(this, selector);

                        // HANDLE: $(expr, $(...))
                    } else if (!context || context.jquery) {
                        return (context || rootjQuery).find(selector);

                        // HANDLE: $(expr, context)
                        // (which is just equivalent to: $(context).find(expr)
                    } else {
                        return jQuery(context).find(selector);
                    }

                    // HANDLE: $(function)
                    // Shortcut for document ready
                } else if (jQuery.isFunction(selector)) {
                    return rootjQuery.ready(selector);
                }

                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }

                return jQuery.makeArray(selector, this);
            },

            // Start with an empty selector
            selector: "",

            // The current version of jQuery being used
            jquery: "1.4.4",

            // The default length of a jQuery object is 0
            length: 0,

            // The number of elements contained in the matched element set
            size: function() {
                return this.length;
            },

            toArray: function() {
                return slice.call(this, 0);
            },

            // Get the Nth element in the matched element set OR
            // Get the whole matched element set as a clean array
            get: function(num) {
                return num == null ?

                // Return a 'clean' array
			this.toArray() :

                // Return just the object
			(num < 0 ? this.slice(num)[0] : this[num]);
            },

            // Take an array of elements and push it onto the stack
            // (returning the new matched element set)
            pushStack: function(elems, name, selector) {
                // Build a new jQuery matched element set
                var ret = jQuery();

                if (jQuery.isArray(elems)) {
                    push.apply(ret, elems);

                } else {
                    jQuery.merge(ret, elems);
                }

                // Add the old object onto the stack (as a reference)
                ret.prevObject = this;

                ret.context = this.context;

                if (name === "find") {
                    ret.selector = this.selector + (this.selector ? " " : "") + selector;
                } else if (name) {
                    ret.selector = this.selector + "." + name + "(" + selector + ")";
                }

                // Return the newly-formed element set
                return ret;
            },

            // Execute a callback for every element in the matched set.
            // (You can seed the arguments with an array of args, but this is
            // only used internally.)
            each: function(callback, args) {
                return jQuery.each(this, callback, args);
            },

            ready: function(fn) {
                // Attach the listeners
                jQuery.bindReady();

                // If the DOM is already ready
                if (jQuery.isReady) {
                    // Execute the function immediately
                    fn.call(document, jQuery);

                    // Otherwise, remember the function for later
                } else if (readyList) {
                    // Add the function to the wait list
                    readyList.push(fn);
                }

                return this;
            },

            eq: function(i) {
                return i === -1 ?
			this.slice(i) :
			this.slice(i, +i + 1);
            },

            first: function() {
                return this.eq(0);
            },

            last: function() {
                return this.eq(-1);
            },

            slice: function() {
                return this.pushStack(slice.apply(this, arguments),
			"slice", slice.call(arguments).join(","));
            },

            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem);
                }));
            },

            end: function() {
                return this.prevObject || jQuery(null);
            },

            // For internal use only.
            // Behaves like an Array's method, not like a jQuery method.
            push: push,
            sort: [].sort,
            splice: [].splice
        };

        // Give the init function the jQuery prototype for later instantiation
        jQuery.fn.init.prototype = jQuery.fn;

        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

            // Handle a deep copy situation
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                // skip the boolean and the target
                i = 2;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {};
            }

            // extend jQuery itself if only one argument is passed
            if (length === i) {
                target = this;
                --i;
            }

            for (; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) != null) {
                    // Extend the base object
                    for (name in options) {
                        src = target[name];
                        copy = options[name];

                        // Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];

                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[name] = jQuery.extend(deep, clone, copy);

                            // Don't bring in undefined values
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        };

        jQuery.extend({
            noConflict: function(deep) {
                window.$ = _$;

                if (deep) {
                    window.jQuery = _jQuery;
                }

                return jQuery;
            },

            // Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,

            // A counter to track how many items to wait for before
            // the ready event fires. See #6781
            readyWait: 1,

            // Handle when the DOM is ready
            ready: function(wait) {
                // A third-party is pushing the ready event forwards
                if (wait === true) {
                    jQuery.readyWait--;
                }

                // Make sure that the DOM is not already loaded
                if (!jQuery.readyWait || (wait !== true && !jQuery.isReady)) {
                    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                    if (!document.body) {
                        return setTimeout(jQuery.ready, 1);
                    }

                    // Remember that the DOM is ready
                    jQuery.isReady = true;

                    // If a normal DOM Ready event fired, decrement, and wait if need be
                    if (wait !== true && --jQuery.readyWait > 0) {
                        return;
                    }

                    // If there are functions bound, to execute
                    if (readyList) {
                        // Execute all of them
                        var fn,
					i = 0,
					ready = readyList;

                        // Reset the list of functions
                        readyList = null;

                        while ((fn = ready[i++])) {
                            fn.call(document, jQuery);
                        }

                        // Trigger any bound ready events
                        if (jQuery.fn.trigger) {
                            jQuery(document).trigger("ready").unbind("ready");
                        }
                    }
                }
            },

            bindReady: function() {
                if (readyBound) {
                    return;
                }

                readyBound = true;

                // Catch cases where $(document).ready() is called after the
                // browser event has already occurred.
                if (document.readyState === "complete") {
                    // Handle it asynchronously to allow scripts the opportunity to delay ready
                    return setTimeout(jQuery.ready, 1);
                }

                // Mozilla, Opera and webkit nightlies currently support this event
                if (document.addEventListener) {
                    // Use the handy event callback
                    document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

                    // A fallback to window.onload, that will always work
                    window.addEventListener("load", jQuery.ready, false);

                    // If IE event model is used
                } else if (document.attachEvent) {
                    // ensure firing before onload,
                    // maybe late but safe also for iframes
                    document.attachEvent("onreadystatechange", DOMContentLoaded);

                    // A fallback to window.onload, that will always work
                    window.attachEvent("onload", jQuery.ready);

                    // If IE and not a frame
                    // continually check to see if the document is ready
                    var toplevel = false;

                    try {
                        toplevel = window.frameElement == null;
                    } catch (e) { }

                    if (document.documentElement.doScroll && toplevel) {
                        doScrollCheck();
                    }
                }
            },

            // See test/unit/core.js for details concerning isFunction.
            // Since version 1.3, DOM methods and functions like alert
            // aren't supported. They return false on IE (#2968).
            isFunction: function(obj) {
                return jQuery.type(obj) === "function";
            },

            isArray: Array.isArray || function(obj) {
                return jQuery.type(obj) === "array";
            },

            // A crude way of determining if an object is a window
            isWindow: function(obj) {
                return obj && typeof obj === "object" && "setInterval" in obj;
            },

            isNaN: function(obj) {
                return obj == null || !rdigit.test(obj) || isNaN(obj);
            },

            type: function(obj) {
                return obj == null ?
			String(obj) :
			class2type[toString.call(obj)] || "object";
            },

            isPlainObject: function(obj) {
                // Must be an Object.
                // Because of IE, we also have to check the presence of the constructor property.
                // Make sure that DOM nodes and window objects don't pass through, as well
                if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return false;
                }

                // Not own constructor property must be Object
                if (obj.constructor &&
			!hasOwn.call(obj, "constructor") &&
			!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }

                // Own properties are enumerated firstly, so to speed up,
                // if last one is own, then all properties are own.

                var key;
                for (key in obj) { }

                return key === undefined || hasOwn.call(obj, key);
            },

            isEmptyObject: function(obj) {
                for (var name in obj) {
                    return false;
                }
                return true;
            },

            error: function(msg) {
                throw msg;
            },

            parseJSON: function(data) {
                if (typeof data !== "string" || !data) {
                    return null;
                }

                // Make sure leading/trailing whitespace is removed (IE can't handle it)
                data = jQuery.trim(data);

                // Make sure the incoming data is actual JSON
                // Logic borrowed from http://json.org/json2.js
                if (rvalidchars.test(data.replace(rvalidescape, "@")
			.replace(rvalidtokens, "]")
			.replace(rvalidbraces, ""))) {

                    // Try to use the native JSON parser first
                    return window.JSON && window.JSON.parse ?
				window.JSON.parse(data) :
				(new Function("return " + data))();

                } else {
                    jQuery.error("Invalid JSON: " + data);
                }
            },

            noop: function() { },

            // Evalulates a script in a global context
            globalEval: function(data) {
                if (data && rnotwhite.test(data)) {
                    // Inspired by code by Andrea Giammarchi
                    // http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
                    var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");

                    script.type = "text/javascript";

                    if (jQuery.support.scriptEval) {
                        script.appendChild(document.createTextNode(data));
                    } else {
                        script.text = data;
                    }

                    // Use insertBefore instead of appendChild to circumvent an IE6 bug.
                    // This arises when a base node is used (#2709).
                    head.insertBefore(script, head.firstChild);
                    head.removeChild(script);
                }
            },

            nodeName: function(elem, name) {
                return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
            },

            // args is for internal usage only
            each: function(object, callback, args) {
                var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction(object);

                if (args) {
                    if (isObj) {
                        for (name in object) {
                            if (callback.apply(object[name], args) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; i < length; ) {
                            if (callback.apply(object[i++], args) === false) {
                                break;
                            }
                        }
                    }

                    // A special, fast, case for the most common use of each
                } else {
                    if (isObj) {
                        for (name in object) {
                            if (callback.call(object[name], name, object[name]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (var value = object[0];
					i < length && callback.call(value, i, value) !== false; value = object[++i]) { }
                    }
                }

                return object;
            },

            // Use native String.trim function wherever possible
            trim: trim ?
		function(text) {
		    return text == null ?
				"" :
				trim.call(text);
		} :

            // Otherwise use our own trimming functionality
		function(text) {
		    return text == null ?
				"" :
				text.toString().replace(trimLeft, "").replace(trimRight, "");
		},

            // results is for internal usage only
            makeArray: function(array, results) {
                var ret = results || [];

                if (array != null) {
                    // The window, strings (and functions) also have 'length'
                    // The extra typeof function check is to prevent crashes
                    // in Safari 2 (See: #3039)
                    // Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
                    var type = jQuery.type(array);

                    if (array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow(array)) {
                        push.call(ret, array);
                    } else {
                        jQuery.merge(ret, array);
                    }
                }

                return ret;
            },

            inArray: function(elem, array) {
                if (array.indexOf) {
                    return array.indexOf(elem);
                }

                for (var i = 0, length = array.length; i < length; i++) {
                    if (array[i] === elem) {
                        return i;
                    }
                }

                return -1;
            },

            merge: function(first, second) {
                var i = first.length,
			j = 0;

                if (typeof second.length === "number") {
                    for (var l = second.length; j < l; j++) {
                        first[i++] = second[j];
                    }

                } else {
                    while (second[j] !== undefined) {
                        first[i++] = second[j++];
                    }
                }

                first.length = i;

                return first;
            },

            grep: function(elems, callback, inv) {
                var ret = [], retVal;
                inv = !!inv;

                // Go through the array, only saving the items
                // that pass the validator function
                for (var i = 0, length = elems.length; i < length; i++) {
                    retVal = !!callback(elems[i], i);
                    if (inv !== retVal) {
                        ret.push(elems[i]);
                    }
                }

                return ret;
            },

            // arg is for internal usage only
            map: function(elems, callback, arg) {
                var ret = [], value;

                // Go through the array, translating each of the items to their
                // new value (or values).
                for (var i = 0, length = elems.length; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }

                return ret.concat.apply([], ret);
            },

            // A global GUID counter for objects
            guid: 1,

            proxy: function(fn, proxy, thisObject) {
                if (arguments.length === 2) {
                    if (typeof proxy === "string") {
                        thisObject = fn;
                        fn = thisObject[proxy];
                        proxy = undefined;

                    } else if (proxy && !jQuery.isFunction(proxy)) {
                        thisObject = proxy;
                        proxy = undefined;
                    }
                }

                if (!proxy && fn) {
                    proxy = function() {
                        return fn.apply(thisObject || this, arguments);
                    };
                }

                // Set the guid of unique handler to the same of original handler, so it can be removed
                if (fn) {
                    proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;
                }

                // So proxy can be declared as an argument
                return proxy;
            },

            // Mutifunctional method to get and set values to a collection
            // The value/s can be optionally by executed if its a function
            access: function(elems, key, value, exec, fn, pass) {
                var length = elems.length;

                // Setting many attributes
                if (typeof key === "object") {
                    for (var k in key) {
                        jQuery.access(elems, k, key[k], exec, fn, value);
                    }
                    return elems;
                }

                // Setting one attribute
                if (value !== undefined) {
                    // Optionally, function values get executed if exec is true
                    exec = !pass && exec && jQuery.isFunction(value);

                    for (var i = 0; i < length; i++) {
                        fn(elems[i], key, exec ? value.call(elems[i], i, fn(elems[i], key)) : value, pass);
                    }

                    return elems;
                }

                // Getting an attribute
                return length ? fn(elems[0], key) : undefined;
            },

            now: function() {
                return (new Date()).getTime();
            },

            // Use of jQuery.browser is frowned upon.
            // More details: http://docs.jquery.com/Utilities/jQuery.browser
            uaMatch: function(ua) {
                ua = ua.toLowerCase();

                var match = rwebkit.exec(ua) ||
			ropera.exec(ua) ||
			rmsie.exec(ua) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec(ua) ||
			[];

                return { browser: match[1] || "", version: match[2] || "0" };
            },

            browser: {}
        });

        // Populate the class2type map
        jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

        browserMatch = jQuery.uaMatch(userAgent);
        if (browserMatch.browser) {
            jQuery.browser[browserMatch.browser] = true;
            jQuery.browser.version = browserMatch.version;
        }

        // Deprecated, use jQuery.browser.webkit instead
        if (jQuery.browser.webkit) {
            jQuery.browser.safari = true;
        }

        if (indexOf) {
            jQuery.inArray = function(elem, array) {
                return indexOf.call(array, elem);
            };
        }

        // Verify that \s matches non-breaking spaces
        // (IE fails on this test)
        if (!rwhite.test("\xA0")) {
            trimLeft = /^[\s\xA0]+/;
            trimRight = /[\s\xA0]+$/;
        }

        // All jQuery objects should point back to these
        rootjQuery = jQuery(document);

        // Cleanup functions for the document ready method
        if (document.addEventListener) {
            DOMContentLoaded = function() {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                jQuery.ready();
            };

        } else if (document.attachEvent) {
            DOMContentLoaded = function() {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", DOMContentLoaded);
                    jQuery.ready();
                }
            };
        }

        // The DOM ready check for Internet Explorer
        function doScrollCheck() {
            if (jQuery.isReady) {
                return;
            }

            try {
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");
            } catch (e) {
                setTimeout(doScrollCheck, 1);
                return;
            }

            // and execute any waiting functions
            jQuery.ready();
        }

        // Expose jQuery to the global object
        return (window.jQuery = window.$ = jQuery);

    })();


    (function() {

        jQuery.support = {};

        var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + jQuery.now();

        div.style.display = "none";
        div.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

        var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0],
		select = document.createElement("select"),
		opt = select.appendChild(document.createElement("option"));

        // Can't get basic test support
        if (!all || !all.length || !a) {
            return;
        }

        jQuery.support = {
            // IE strips leading whitespace when .innerHTML is used
            leadingWhitespace: div.firstChild.nodeType === 3,

            // Make sure that tbody elements aren't automatically inserted
            // IE will insert them into empty tables
            tbody: !div.getElementsByTagName("tbody").length,

            // Make sure that link elements get serialized correctly by innerHTML
            // This requires a wrapper element in IE
            htmlSerialize: !!div.getElementsByTagName("link").length,

            // Get the style information from getAttribute
            // (IE uses .cssText insted)
            style: /red/.test(a.getAttribute("style")),

            // Make sure that URLs aren't manipulated
            // (IE normalizes it by default)
            hrefNormalized: a.getAttribute("href") === "/a",

            // Make sure that element opacity exists
            // (IE uses filter instead)
            // Use a regex to work around a WebKit issue. See #5145
            opacity: /^0.55$/.test(a.style.opacity),

            // Verify style float existence
            // (IE uses styleFloat instead of cssFloat)
            cssFloat: !!a.style.cssFloat,

            // Make sure that if no value is specified for a checkbox
            // that it defaults to "on".
            // (WebKit defaults to "" instead)
            checkOn: div.getElementsByTagName("input")[0].value === "on",

            // Make sure that a selected-by-default option has a working selected property.
            // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
            optSelected: opt.selected,

            // Will be defined later
            deleteExpando: true,
            optDisabled: false,
            checkClone: false,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableHiddenOffsets: true
        };

        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as diabled)
        select.disabled = true;
        jQuery.support.optDisabled = !opt.disabled;

        script.type = "text/javascript";
        try {
            script.appendChild(document.createTextNode("window." + id + "=1;"));
        } catch (e) { }

        root.insertBefore(script, root.firstChild);

        // Make sure that the execution of code works by injecting a script
        // tag with appendChild/createTextNode
        // (IE doesn't support this, fails, and uses .text instead)
        if (window[id]) {
            jQuery.support.scriptEval = true;
            delete window[id];
        }

        // Test to see if it's possible to delete an expando from an element
        // Fails in Internet Explorer
        try {
            delete script.test;

        } catch (e) {
            jQuery.support.deleteExpando = false;
        }

        root.removeChild(script);

        if (div.attachEvent && div.fireEvent) {
            div.attachEvent("onclick", function click() {
                // Cloning a node shouldn't copy over any
                // bound event handlers (IE does this)
                jQuery.support.noCloneEvent = false;
                div.detachEvent("onclick", click);
            });
            div.cloneNode(true).fireEvent("onclick");
        }

        div = document.createElement("div");
        div.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";

        var fragment = document.createDocumentFragment();
        fragment.appendChild(div.firstChild);

        // WebKit doesn't clone checked state correctly in fragments
        jQuery.support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

        // Figure out if the W3C box model works as expected
        // document.body must exist before we can do this
        jQuery(function() {
            var div = document.createElement("div");
            div.style.width = div.style.paddingLeft = "1px";

            document.body.appendChild(div);
            jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;

            if ("zoom" in div.style) {
                // Check if natively block-level elements act like inline-block
                // elements when setting their display to 'inline' and giving
                // them layout
                // (IE < 8 does this)
                div.style.display = "inline";
                div.style.zoom = 1;
                jQuery.support.inlineBlockNeedsLayout = div.offsetWidth === 2;

                // Check if elements with layout shrink-wrap their children
                // (IE 6 does this)
                div.style.display = "";
                div.innerHTML = "<div style='width:4px;'></div>";
                jQuery.support.shrinkWrapBlocks = div.offsetWidth !== 2;
            }

            div.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
            var tds = div.getElementsByTagName("td");

            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            // (only IE 8 fails this test)
            jQuery.support.reliableHiddenOffsets = tds[0].offsetHeight === 0;

            tds[0].style.display = "";
            tds[1].style.display = "none";

            // Check if empty table cells still have offsetWidth/Height
            // (IE < 8 fail this test)
            jQuery.support.reliableHiddenOffsets = jQuery.support.reliableHiddenOffsets && tds[0].offsetHeight === 0;
            div.innerHTML = "";

            document.body.removeChild(div).style.display = "none";
            div = tds = null;
        });

        // Technique from Juriy Zaytsev
        // http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
        var eventSupported = function(eventName) {
            var el = document.createElement("div");
            eventName = "on" + eventName;

            var isSupported = (eventName in el);
            if (!isSupported) {
                el.setAttribute(eventName, "return;");
                isSupported = typeof el[eventName] === "function";
            }
            el = null;

            return isSupported;
        };

        jQuery.support.submitBubbles = eventSupported("submit");
        jQuery.support.changeBubbles = eventSupported("change");

        // release memory in IE
        root = script = div = all = a = null;
    })();



    var windowData = {},
	rbrace = /^(?:\{.*\}|\[.*\])$/;

    jQuery.extend({
        cache: {},

        // Please use with caution
        uuid: 0,

        // Unique for each copy of jQuery on the page	
        expando: "jQuery" + jQuery.now(),

        // The following elements throw uncatchable exceptions if you
        // attempt to add expando properties to them.
        noData: {
            "embed": true,
            // Ban all objects except for Flash (which handle expandos)
            "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            "applet": true
        },

        data: function(elem, name, data) {
            if (!jQuery.acceptData(elem)) {
                return;
            }

            elem = elem == window ?
			windowData :
			elem;

            var isNode = elem.nodeType,
			id = isNode ? elem[jQuery.expando] : null,
			cache = jQuery.cache, thisCache;

            if (isNode && !id && typeof name === "string" && data === undefined) {
                return;
            }

            // Get the data from the object directly
            if (!isNode) {
                cache = elem;

                // Compute a unique ID for the element
            } else if (!id) {
                elem[jQuery.expando] = id = ++jQuery.uuid;
            }

            // Avoid generating a new cache unless none exists and we
            // want to manipulate it.
            if (typeof name === "object") {
                if (isNode) {
                    cache[id] = jQuery.extend(cache[id], name);

                } else {
                    jQuery.extend(cache, name);
                }

            } else if (isNode && !cache[id]) {
                cache[id] = {};
            }

            thisCache = isNode ? cache[id] : cache;

            // Prevent overriding the named cache with undefined values
            if (data !== undefined) {
                thisCache[name] = data;
            }

            return typeof name === "string" ? thisCache[name] : thisCache;
        },

        removeData: function(elem, name) {
            if (!jQuery.acceptData(elem)) {
                return;
            }

            elem = elem == window ?
			windowData :
			elem;

            var isNode = elem.nodeType,
			id = isNode ? elem[jQuery.expando] : elem,
			cache = jQuery.cache,
			thisCache = isNode ? cache[id] : id;

            // If we want to remove a specific section of the element's data
            if (name) {
                if (thisCache) {
                    // Remove the section of cache data
                    delete thisCache[name];

                    // If we've removed all the data, remove the element's cache
                    if (isNode && jQuery.isEmptyObject(thisCache)) {
                        jQuery.removeData(elem);
                    }
                }

                // Otherwise, we want to remove all of the element's data
            } else {
                if (isNode && jQuery.support.deleteExpando) {
                    delete elem[jQuery.expando];

                } else if (elem.removeAttribute) {
                    elem.removeAttribute(jQuery.expando);

                    // Completely remove the data cache
                } else if (isNode) {
                    delete cache[id];

                    // Remove all fields from the object
                } else {
                    for (var n in elem) {
                        delete elem[n];
                    }
                }
            }
        },

        // A method for determining if a DOM node can handle the data expando
        acceptData: function(elem) {
            if (elem.nodeName) {
                var match = jQuery.noData[elem.nodeName.toLowerCase()];

                if (match) {
                    return !(match === true || elem.getAttribute("classid") !== match);
                }
            }

            return true;
        }
    });

    jQuery.fn.extend({
        data: function(key, value) {
            var data = null;

            if (typeof key === "undefined") {
                if (this.length) {
                    var attr = this[0].attributes, name;
                    data = jQuery.data(this[0]);

                    for (var i = 0, l = attr.length; i < l; i++) {
                        name = attr[i].name;

                        if (name.indexOf("data-") === 0) {
                            name = name.substr(5);
                            dataAttr(this[0], name, data[name]);
                        }
                    }
                }

                return data;

            } else if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key);
                });
            }

            var parts = key.split(".");
            parts[1] = parts[1] ? "." + parts[1] : "";

            if (value === undefined) {
                data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

                // Try to fetch any internally stored data first
                if (data === undefined && this.length) {
                    data = jQuery.data(this[0], key);
                    data = dataAttr(this[0], key, data);
                }

                return data === undefined && parts[1] ?
				this.data(parts[0]) :
				data;

            } else {
                return this.each(function() {
                    var $this = jQuery(this),
					args = [parts[0], value];

                    $this.triggerHandler("setData" + parts[1] + "!", args);
                    jQuery.data(this, key, value);
                    $this.triggerHandler("changeData" + parts[1] + "!", args);
                });
            }
        },

        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key);
            });
        }
    });

    function dataAttr(elem, key, data) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            data = elem.getAttribute("data-" + key);

            if (typeof data === "string") {
                try {
                    data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				!jQuery.isNaN(data) ? parseFloat(data) :
					rbrace.test(data) ? jQuery.parseJSON(data) :
					data;
                } catch (e) { }

                // Make sure we set the data so it isn't changed later
                jQuery.data(elem, key, data);

            } else {
                data = undefined;
            }
        }

        return data;
    }




    jQuery.extend({
        queue: function(elem, type, data) {
            if (!elem) {
                return;
            }

            type = (type || "fx") + "queue";
            var q = jQuery.data(elem, type);

            // Speed up dequeue by getting out quickly if this is just a lookup
            if (!data) {
                return q || [];
            }

            if (!q || jQuery.isArray(data)) {
                q = jQuery.data(elem, type, jQuery.makeArray(data));

            } else {
                q.push(data);
            }

            return q;
        },

        dequeue: function(elem, type) {
            type = type || "fx";

            var queue = jQuery.queue(elem, type),
			fn = queue.shift();

            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
            }

            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                fn.call(elem, function() {
                    jQuery.dequeue(elem, type);
                });
            }
        }
    });

    jQuery.fn.extend({
        queue: function(type, data) {
            if (typeof type !== "string") {
                data = type;
                type = "fx";
            }

            if (data === undefined) {
                return jQuery.queue(this[0], type);
            }
            return this.each(function(i) {
                var queue = jQuery.queue(this, type, data);

                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },

        // Based off of the plugin by Clint Helfers, with permission.
        // http://blindsignals.com/index.php/2009/07/jquery-delay/
        delay: function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";

            return this.queue(type, function() {
                var elem = this;
                setTimeout(function() {
                    jQuery.dequeue(elem, type);
                }, time);
            });
        },

        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        }
    });




    var rclass = /[\n\t]/g,
	rspaces = /\s+/,
	rreturn = /\r/g,
	rspecialurl = /^(?:href|src|style)$/,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rradiocheck = /^(?:radio|checkbox)$/i;

    jQuery.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };

    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, name, value, true, jQuery.attr);
        },

        removeAttr: function(name, fn) {
            return this.each(function() {
                jQuery.attr(this, name, "");
                if (this.nodeType === 1) {
                    this.removeAttribute(name);
                }
            });
        },

        addClass: function(value) {
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    self.addClass(value.call(this, i, self.attr("class")));
                });
            }

            if (value && typeof value === "string") {
                var classNames = (value || "").split(rspaces);

                for (var i = 0, l = this.length; i < l; i++) {
                    var elem = this[i];

                    if (elem.nodeType === 1) {
                        if (!elem.className) {
                            elem.className = value;

                        } else {
                            var className = " " + elem.className + " ",
							setClass = elem.className;

                            for (var c = 0, cl = classNames.length; c < cl; c++) {
                                if (className.indexOf(" " + classNames[c] + " ") < 0) {
                                    setClass += " " + classNames[c];
                                }
                            }
                            elem.className = jQuery.trim(setClass);
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function(value) {
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    self.removeClass(value.call(this, i, self.attr("class")));
                });
            }

            if ((value && typeof value === "string") || value === undefined) {
                var classNames = (value || "").split(rspaces);

                for (var i = 0, l = this.length; i < l; i++) {
                    var elem = this[i];

                    if (elem.nodeType === 1 && elem.className) {
                        if (value) {
                            var className = (" " + elem.className + " ").replace(rclass, " ");
                            for (var c = 0, cl = classNames.length; c < cl; c++) {
                                className = className.replace(" " + classNames[c] + " ", " ");
                            }
                            elem.className = jQuery.trim(className);

                        } else {
                            elem.className = "";
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function(value, stateVal) {
            var type = typeof value,
			isBool = typeof stateVal === "boolean";

            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    self.toggleClass(value.call(this, i, self.attr("class"), stateVal), stateVal);
                });
            }

            return this.each(function() {
                if (type === "string") {
                    // toggle individual class names
                    var className,
					i = 0,
					self = jQuery(this),
					state = stateVal,
					classNames = value.split(rspaces);

                    while ((className = classNames[i++])) {
                        // check each className given, space seperated list
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? "addClass" : "removeClass"](className);
                    }

                } else if (type === "undefined" || type === "boolean") {
                    if (this.className) {
                        // store className if set
                        jQuery.data(this, "__className__", this.className);
                    }

                    // toggle whole className
                    this.className = this.className || value === false ? "" : jQuery.data(this, "__className__") || "";
                }
            });
        },

        hasClass: function(selector) {
            var className = " " + selector + " ";
            for (var i = 0, l = this.length; i < l; i++) {
                if ((" " + this[i].className + " ").replace(rclass, " ").indexOf(className) > -1) {
                    return true;
                }
            }

            return false;
        },

        val: function(value) {
            if (!arguments.length) {
                var elem = this[0];

                if (elem) {
                    if (jQuery.nodeName(elem, "option")) {
                        // attributes.value is undefined in Blackberry 4.7 but
                        // uses .value. See #6932
                        var val = elem.attributes.value;
                        return !val || val.specified ? elem.value : elem.text;
                    }

                    // We need to handle select boxes special
                    if (jQuery.nodeName(elem, "select")) {
                        var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type === "select-one";

                        // Nothing was selected
                        if (index < 0) {
                            return null;
                        }

                        // Loop through all the selected options
                        for (var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++) {
                            var option = options[i];

                            // Don't return options that are disabled or in a disabled optgroup
                            if (option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
								(!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

                                // Get the specific value for the option
                                value = jQuery(option).val();

                                // We don't need an array for one selects
                                if (one) {
                                    return value;
                                }

                                // Multi-Selects return an array
                                values.push(value);
                            }
                        }

                        return values;
                    }

                    // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
                    if (rradiocheck.test(elem.type) && !jQuery.support.checkOn) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    }


                    // Everything else, we just grab the value
                    return (elem.value || "").replace(rreturn, "");

                }

                return undefined;
            }

            var isFunction = jQuery.isFunction(value);

            return this.each(function(i) {
                var self = jQuery(this), val = value;

                if (this.nodeType !== 1) {
                    return;
                }

                if (isFunction) {
                    val = value.call(this, i, self.val());
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }

                if (jQuery.isArray(val) && rradiocheck.test(this.type)) {
                    this.checked = jQuery.inArray(self.val(), val) >= 0;

                } else if (jQuery.nodeName(this, "select")) {
                    var values = jQuery.makeArray(val);

                    jQuery("option", this).each(function() {
                        this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
                    });

                    if (!values.length) {
                        this.selectedIndex = -1;
                    }

                } else {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },

        attr: function(elem, name, value, pass) {
            // don't set attributes on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8) {
                return undefined;
            }

            if (pass && name in jQuery.attrFn) {
                return jQuery(elem)[name](value);
            }

            var notxml = elem.nodeType !== 1 || !jQuery.isXMLDoc(elem),
            // Whether we are setting (or getting)
			set = value !== undefined;

            // Try to normalize/fix the name
            name = notxml && jQuery.props[name] || name;

            // These attributes require special treatment
            var special = rspecialurl.test(name);

            // Safari mis-reports the default selected property of an option
            // Accessing the parent's selectedIndex property fixes it
            if (name === "selected" && !jQuery.support.optSelected) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;

                    // Make sure that it also works with optgroups, see #5701
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }

            // If applicable, access the attribute via the DOM 0 way
            // 'in' checks fail in Blackberry 4.7 #6931
            if ((name in elem || elem[name] !== undefined) && notxml && !special) {
                if (set) {
                    // We can't allow the type property to be changed (since it causes problems in IE)
                    if (name === "type" && rtype.test(elem.nodeName) && elem.parentNode) {
                        jQuery.error("type property can't be changed");
                    }

                    if (value === null) {
                        if (elem.nodeType === 1) {
                            elem.removeAttribute(name);
                        }

                    } else {
                        elem[name] = value;
                    }
                }

                // browsers index elements by id/name on forms, give priority to attributes.
                if (jQuery.nodeName(elem, "form") && elem.getAttributeNode(name)) {
                    return elem.getAttributeNode(name).nodeValue;
                }

                // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                if (name === "tabIndex") {
                    var attributeNode = elem.getAttributeNode("tabIndex");

                    return attributeNode && attributeNode.specified ?
					attributeNode.value :
					rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ?
						0 :
						undefined;
                }

                return elem[name];
            }

            if (!jQuery.support.style && notxml && name === "style") {
                if (set) {
                    elem.style.cssText = "" + value;
                }

                return elem.style.cssText;
            }

            if (set) {
                // convert the value to a string (all browsers do this but IE) see #1070
                elem.setAttribute(name, "" + value);
            }

            // Ensure that missing attributes return undefined
            // Blackberry 4.7 returns "" from getAttribute #6938
            if (!elem.attributes[name] && (elem.hasAttribute && !elem.hasAttribute(name))) {
                return undefined;
            }

            var attr = !jQuery.support.hrefNormalized && notxml && special ?
            // Some attributes require a special call on IE
				elem.getAttribute(name, 2) :
				elem.getAttribute(name);

            // Non-existent attributes return null, we normalize to undefined
            return attr === null ? undefined : attr;
        }
    });




    var rnamespaces = /\.(.*)$/,
	rformElems = /^(?:textarea|input|select)$/i,
	rperiod = /\./g,
	rspace = / /g,
	rescape = /[^\w\s.|`]/g,
	fcleanup = function(nm) {
	    return nm.replace(rescape, "\\$&");
	},
	focusCounts = { focusin: 0, focusout: 0 };

    /*
    * A number of helper functions used for managing events.
    * Many of the ideas behind this code originated from
    * Dean Edwards' addEvent library.
    */
    jQuery.event = {

        // Bind an event to an element
        // Original by Dean Edwards
        add: function(elem, types, handler, data) {
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            // For whatever reason, IE has trouble passing the window object
            // around, causing it to be cloned in the process
            if (jQuery.isWindow(elem) && (elem !== window && !elem.frameElement)) {
                elem = window;
            }

            if (handler === false) {
                handler = returnFalse;
            } else if (!handler) {
                // Fixes bug #7229. Fix recommended by jdalton
                return;
            }

            var handleObjIn, handleObj;

            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
            }

            // Make sure that the function being executed has a unique ID
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure
            var elemData = jQuery.data(elem);

            // If no elemData is found then we must be trying to bind to one of the
            // banned noData elements
            if (!elemData) {
                return;
            }

            // Use a key less likely to result in collisions for plain JS objects.
            // Fixes bug #7150.
            var eventKey = elem.nodeType ? "events" : "__events__",
			events = elemData[eventKey],
			eventHandle = elemData.handle;

            if (typeof events === "function") {
                // On plain objects events is a fn that holds the the data
                // which prevents this data from being JSON serialized
                // the function does not need to be called, it just contains the data
                eventHandle = events.handle;
                events = events.events;

            } else if (!events) {
                if (!elem.nodeType) {
                    // On plain objects, create a fn that acts as the holder
                    // of the values to avoid JSON serialization of event data
                    elemData[eventKey] = elemData = function() { };
                }

                elemData.events = events = {};
            }

            if (!eventHandle) {
                elemData.handle = eventHandle = function() {
                    // Handle the second event of a trigger and when
                    // an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply(eventHandle.elem, arguments) :
					undefined;
                };
            }

            // Add elem as a property of the handle function
            // This is to prevent a memory leak with non-native events in IE.
            eventHandle.elem = elem;

            // Handle multiple events separated by a space
            // jQuery(...).bind("mouseover mouseout", fn);
            types = types.split(" ");

            var type, i = 0, namespaces;

            while ((type = types[i++])) {
                handleObj = handleObjIn ?
				jQuery.extend({}, handleObjIn) :
				{ handler: handler, data: data };

                // Namespaced event handlers
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    handleObj.namespace = namespaces.slice(0).sort().join(".");

                } else {
                    namespaces = [];
                    handleObj.namespace = "";
                }

                handleObj.type = type;
                if (!handleObj.guid) {
                    handleObj.guid = handler.guid;
                }

                // Get the current list of functions bound to this event
                var handlers = events[type],
				special = jQuery.event.special[type] || {};

                // Init the event handler queue
                if (!handlers) {
                    handlers = events[type] = [];

                    // Check for a special event handler
                    // Only use addEventListener/attachEvent if the special
                    // events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        // Bind the global event handler to the element
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);

                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }

                if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add the function to the element's handler list
                handlers.push(handleObj);

                // Keep track of which events have been used, for global triggering
                jQuery.event.global[type] = true;
            }

            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },

        global: {},

        // Detach an event or set of events from an element
        remove: function(elem, types, handler, pos) {
            // don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            if (handler === false) {
                handler = returnFalse;
            }

            var ret, type, fn, j, i = 0, all, namespaces, namespace, special, eventType, handleObj, origType,
			eventKey = elem.nodeType ? "events" : "__events__",
			elemData = jQuery.data(elem),
			events = elemData && elemData[eventKey];

            if (!elemData || !events) {
                return;
            }

            if (typeof events === "function") {
                elemData = events;
                events = events.events;
            }

            // types is actually an event object here
            if (types && types.type) {
                handler = types.handler;
                types = types.type;
            }

            // Unbind all events for the element
            if (!types || typeof types === "string" && types.charAt(0) === ".") {
                types = types || "";

                for (type in events) {
                    jQuery.event.remove(elem, type + types);
                }

                return;
            }

            // Handle multiple events separated by a space
            // jQuery(...).unbind("mouseover mouseout", fn);
            types = types.split(" ");

            while ((type = types[i++])) {
                origType = type;
                handleObj = null;
                all = type.indexOf(".") < 0;
                namespaces = [];

                if (!all) {
                    // Namespaced event handlers
                    namespaces = type.split(".");
                    type = namespaces.shift();

                    namespace = new RegExp("(^|\\.)" +
					jQuery.map(namespaces.slice(0).sort(), fcleanup).join("\\.(?:.*\\.)?") + "(\\.|$)");
                }

                eventType = events[type];

                if (!eventType) {
                    continue;
                }

                if (!handler) {
                    for (j = 0; j < eventType.length; j++) {
                        handleObj = eventType[j];

                        if (all || namespace.test(handleObj.namespace)) {
                            jQuery.event.remove(elem, origType, handleObj.handler, j);
                            eventType.splice(j--, 1);
                        }
                    }

                    continue;
                }

                special = jQuery.event.special[type] || {};

                for (j = pos || 0; j < eventType.length; j++) {
                    handleObj = eventType[j];

                    if (handler.guid === handleObj.guid) {
                        // remove the given handler for the given type
                        if (all || namespace.test(handleObj.namespace)) {
                            if (pos == null) {
                                eventType.splice(j--, 1);
                            }

                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }

                        if (pos != null) {
                            break;
                        }
                    }
                }

                // remove generic event handler if no more handlers exist
                if (eventType.length === 0 || pos != null && eventType.length === 1) {
                    if (!special.teardown || special.teardown.call(elem, namespaces) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    ret = null;
                    delete events[type];
                }
            }

            // Remove the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                var handle = elemData.handle;
                if (handle) {
                    handle.elem = null;
                }

                delete elemData.events;
                delete elemData.handle;

                if (typeof elemData === "function") {
                    jQuery.removeData(elem, eventKey);

                } else if (jQuery.isEmptyObject(elemData)) {
                    jQuery.removeData(elem);
                }
            }
        },

        // bubbling is internal
        trigger: function(event, data, elem /*, bubbling */) {
            // Event object or event type
            var type = event.type || event,
			bubbling = arguments[3];

            if (!bubbling) {
                event = typeof event === "object" ?
                // jQuery.Event object
				event[jQuery.expando] ? event :
                // Object literal
				jQuery.extend(jQuery.Event(type), event) :
                // Just the event type (string)
				jQuery.Event(type);

                if (type.indexOf("!") >= 0) {
                    event.type = type = type.slice(0, -1);
                    event.exclusive = true;
                }

                // Handle a global trigger
                if (!elem) {
                    // Don't bubble custom events when global (to avoid too much overhead)
                    event.stopPropagation();

                    // Only trigger if we've ever bound an event for it
                    if (jQuery.event.global[type]) {
                        jQuery.each(jQuery.cache, function() {
                            if (this.events && this.events[type]) {
                                jQuery.event.trigger(event, data, this.handle.elem);
                            }
                        });
                    }
                }

                // Handle triggering a single element

                // don't do events on text and comment nodes
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8) {
                    return undefined;
                }

                // Clean up in case it is reused
                event.result = undefined;
                event.target = elem;

                // Clone the incoming data, if any
                data = jQuery.makeArray(data);
                data.unshift(event);
            }

            event.currentTarget = elem;

            // Trigger the event, it is assumed that "handle" is a function
            var handle = elem.nodeType ?
			jQuery.data(elem, "handle") :
			(jQuery.data(elem, "__events__") || {}).handle;

            if (handle) {
                handle.apply(elem, data);
            }

            var parent = elem.parentNode || elem.ownerDocument;

            // Trigger an inline bound script
            try {
                if (!(elem && elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()])) {
                    if (elem["on" + type] && elem["on" + type].apply(elem, data) === false) {
                        event.result = false;
                        event.preventDefault();
                    }
                }

                // prevent IE from throwing an error for some elements with some event types, see #3533
            } catch (inlineError) { }

            if (!event.isPropagationStopped() && parent) {
                jQuery.event.trigger(event, data, parent, true);

            } else if (!event.isDefaultPrevented()) {
                var old,
				target = event.target,
				targetType = type.replace(rnamespaces, ""),
				isClick = jQuery.nodeName(target, "a") && targetType === "click",
				special = jQuery.event.special[targetType] || {};

                if ((!special._default || special._default.call(elem, event) === false) &&
				!isClick && !(target && target.nodeName && jQuery.noData[target.nodeName.toLowerCase()])) {

                    try {
                        if (target[targetType]) {
                            // Make sure that we don't accidentally re-trigger the onFOO events
                            old = target["on" + targetType];

                            if (old) {
                                target["on" + targetType] = null;
                            }

                            jQuery.event.triggered = true;
                            target[targetType]();
                        }

                        // prevent IE from throwing an error for some elements with some event types, see #3533
                    } catch (triggerError) { }

                    if (old) {
                        target["on" + targetType] = old;
                    }

                    jQuery.event.triggered = false;
                }
            }
        },

        handle: function(event) {
            var all, handlers, namespaces, namespace_re, events,
			namespace_sort = [],
			args = jQuery.makeArray(arguments);

            event = args[0] = jQuery.event.fix(event || window.event);
            event.currentTarget = this;

            // Namespaced event handlers
            all = event.type.indexOf(".") < 0 && !event.exclusive;

            if (!all) {
                namespaces = event.type.split(".");
                event.type = namespaces.shift();
                namespace_sort = namespaces.slice(0).sort();
                namespace_re = new RegExp("(^|\\.)" + namespace_sort.join("\\.(?:.*\\.)?") + "(\\.|$)");
            }

            event.namespace = event.namespace || namespace_sort.join(".");

            events = jQuery.data(this, this.nodeType ? "events" : "__events__");

            if (typeof events === "function") {
                events = events.events;
            }

            handlers = (events || {})[event.type];

            if (events && handlers) {
                // Clone the handlers to prevent manipulation
                handlers = handlers.slice(0);

                for (var j = 0, l = handlers.length; j < l; j++) {
                    var handleObj = handlers[j];

                    // Filter the functions by class
                    if (all || namespace_re.test(handleObj.namespace)) {
                        // Pass in a reference to the handler function itself
                        // So that we can later remove it
                        event.handler = handleObj.handler;
                        event.data = handleObj.data;
                        event.handleObj = handleObj;

                        var ret = handleObj.handler.apply(this, args);

                        if (ret !== undefined) {
                            event.result = ret;
                            if (ret === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }

                        if (event.isImmediatePropagationStopped()) {
                            break;
                        }
                    }
                }
            }

            return event.result;
        },

        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }

            // store a copy of the original event object
            // and "clone" to set read-only properties
            var originalEvent = event;
            event = jQuery.Event(originalEvent);

            for (var i = this.props.length, prop; i; ) {
                prop = this.props[--i];
                event[prop] = originalEvent[prop];
            }

            // Fix target property, if necessary
            if (!event.target) {
                // Fixes #1925 where srcElement might not be defined either
                event.target = event.srcElement || document;
            }

            // check if target is a textnode (safari)
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }

            // Add relatedTarget, if necessary
            if (!event.relatedTarget && event.fromElement) {
                event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
            }

            // Calculate pageX/Y if missing and clientX/Y available
            if (event.pageX == null && event.clientX != null) {
                var doc = document.documentElement,
				body = document.body;

                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            }

            // Add which for key events
            if (event.which == null && (event.charCode != null || event.keyCode != null)) {
                event.which = event.charCode != null ? event.charCode : event.keyCode;
            }

            // Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
            if (!event.metaKey && event.ctrlKey) {
                event.metaKey = event.ctrlKey;
            }

            // Add which for click: 1 === left; 2 === middle; 3 === right
            // Note: button is not normalized, so don't use it
            if (!event.which && event.button !== undefined) {
                event.which = (event.button & 1 ? 1 : (event.button & 2 ? 3 : (event.button & 4 ? 2 : 0)));
            }

            return event;
        },

        // Deprecated, use jQuery.guid instead
        guid: 1E8,

        // Deprecated, use jQuery.proxy instead
        proxy: jQuery.proxy,

        special: {
            ready: {
                // Make sure the ready event is setup
                setup: jQuery.bindReady,
                teardown: jQuery.noop
            },

            live: {
                add: function(handleObj) {
                    jQuery.event.add(this,
					liveConvert(handleObj.origType, handleObj.selector),
					jQuery.extend({}, handleObj, { handler: liveHandler, guid: handleObj.handler.guid }));
                },

                remove: function(handleObj) {
                    jQuery.event.remove(this, liveConvert(handleObj.origType, handleObj.selector), handleObj);
                }
            },

            beforeunload: {
                setup: function(data, namespaces, eventHandle) {
                    // We only want to do this special case on windows
                    if (jQuery.isWindow(this)) {
                        this.onbeforeunload = eventHandle;
                    }
                },

                teardown: function(namespaces, eventHandle) {
                    if (this.onbeforeunload === eventHandle) {
                        this.onbeforeunload = null;
                    }
                }
            }
        }
    };

    jQuery.removeEvent = document.removeEventListener ?
	function(elem, type, handle) {
	    if (elem.removeEventListener) {
	        elem.removeEventListener(type, handle, false);
	    }
	} :
	function(elem, type, handle) {
	    if (elem.detachEvent) {
	        elem.detachEvent("on" + type, handle);
	    }
	};

    jQuery.Event = function(src) {
        // Allow instantiation without the 'new' keyword
        if (!this.preventDefault) {
            return new jQuery.Event(src);
        }

        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Event type
        } else {
            this.type = src;
        }

        // timeStamp is buggy for some events on Firefox(#3843)
        // So we won't rely on the native value
        this.timeStamp = jQuery.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
    };

    function returnFalse() {
        return false;
    }
    function returnTrue() {
        return true;
    }

    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = returnTrue;

            var e = this.originalEvent;
            if (!e) {
                return;
            }

            // if preventDefault exists run it on the original event
            if (e.preventDefault) {
                e.preventDefault();

                // otherwise set the returnValue property of the original event to false (IE)
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = returnTrue;

            var e = this.originalEvent;
            if (!e) {
                return;
            }
            // if stopPropagation exists run it on the original event
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            // otherwise set the cancelBubble property of the original event to true (IE)
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };

    // Checks if an event happened on an element within another element
    // Used in jQuery.event.special.mouseenter and mouseleave handlers
    var withinElement = function(event) {
        // Check if mouse(over|out) are still within the same parent element
        var parent = event.relatedTarget;

        // Firefox sometimes assigns relatedTarget a XUL element
        // which we cannot access the parentNode property of
        try {
            // Traverse up the tree
            while (parent && parent !== this) {
                parent = parent.parentNode;
            }

            if (parent !== this) {
                // set the correct event type
                event.type = event.data;

                // handle event if we actually just moused on to a non sub-element
                jQuery.event.handle.apply(this, arguments);
            }

            // assuming we've left the element since we most likely mousedover a xul element
        } catch (e) { }
    },

    // In case of event delegation, we only need to rename the event.type,
    // liveHandler will take care of the rest.
delegate = function(event) {
    event.type = event.data;
    jQuery.event.handle.apply(this, arguments);
};

    // Create mouseenter and mouseleave events
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            setup: function(data) {
                jQuery.event.add(this, fix, data && data.selector ? delegate : withinElement, orig);
            },
            teardown: function(data) {
                jQuery.event.remove(this, fix, data && data.selector ? delegate : withinElement);
            }
        };
    });

    // submit delegation
    if (!jQuery.support.submitBubbles) {

        jQuery.event.special.submit = {
            setup: function(data, namespaces) {
                if (this.nodeName.toLowerCase() !== "form") {
                    jQuery.event.add(this, "click.specialSubmit", function(e) {
                        var elem = e.target,
						type = elem.type;

                        if ((type === "submit" || type === "image") && jQuery(elem).closest("form").length) {
                            e.liveFired = undefined;
                            return trigger("submit", this, arguments);
                        }
                    });

                    jQuery.event.add(this, "keypress.specialSubmit", function(e) {
                        var elem = e.target,
						type = elem.type;

                        if ((type === "text" || type === "password") && jQuery(elem).closest("form").length && e.keyCode === 13) {
                            e.liveFired = undefined;
                            return trigger("submit", this, arguments);
                        }
                    });

                } else {
                    return false;
                }
            },

            teardown: function(namespaces) {
                jQuery.event.remove(this, ".specialSubmit");
            }
        };

    }

    // change delegation, happens here so we have bind.
    if (!jQuery.support.changeBubbles) {

        var changeFilters,

	getVal = function(elem) {
	    var type = elem.type, val = elem.value;

	    if (type === "radio" || type === "checkbox") {
	        val = elem.checked;

	    } else if (type === "select-multiple") {
	        val = elem.selectedIndex > -1 ?
				jQuery.map(elem.options, function(elem) {
				    return elem.selected;
				}).join("-") :
				"";

	    } else if (elem.nodeName.toLowerCase() === "select") {
	        val = elem.selectedIndex;
	    }

	    return val;
	},

	testChange = function testChange(e) {
	    var elem = e.target, data, val;

	    if (!rformElems.test(elem.nodeName) || elem.readOnly) {
	        return;
	    }

	    data = jQuery.data(elem, "_change_data");
	    val = getVal(elem);

	    // the current data will be also retrieved by beforeactivate
	    if (e.type !== "focusout" || elem.type !== "radio") {
	        jQuery.data(elem, "_change_data", val);
	    }

	    if (data === undefined || val === data) {
	        return;
	    }

	    if (data != null || val) {
	        e.type = "change";
	        e.liveFired = undefined;
	        return jQuery.event.trigger(e, arguments[1], elem);
	    }
	};

        jQuery.event.special.change = {
            filters: {
                focusout: testChange,

                beforedeactivate: testChange,

                click: function(e) {
                    var elem = e.target, type = elem.type;

                    if (type === "radio" || type === "checkbox" || elem.nodeName.toLowerCase() === "select") {
                        return testChange.call(this, e);
                    }
                },

                // Change has to be called before submit
                // Keydown will be called before keypress, which is used in submit-event delegation
                keydown: function(e) {
                    var elem = e.target, type = elem.type;

                    if ((e.keyCode === 13 && elem.nodeName.toLowerCase() !== "textarea") ||
					(e.keyCode === 32 && (type === "checkbox" || type === "radio")) ||
					type === "select-multiple") {
                        return testChange.call(this, e);
                    }
                },

                // Beforeactivate happens also before the previous element is blurred
                // with this event you can't trigger a change event, but you can store
                // information
                beforeactivate: function(e) {
                    var elem = e.target;
                    jQuery.data(elem, "_change_data", getVal(elem));
                }
            },

            setup: function(data, namespaces) {
                if (this.type === "file") {
                    return false;
                }

                for (var type in changeFilters) {
                    jQuery.event.add(this, type + ".specialChange", changeFilters[type]);
                }

                return rformElems.test(this.nodeName);
            },

            teardown: function(namespaces) {
                jQuery.event.remove(this, ".specialChange");

                return rformElems.test(this.nodeName);
            }
        };

        changeFilters = jQuery.event.special.change.filters;

        // Handle when the input is .focus()'d
        changeFilters.focus = changeFilters.beforeactivate;
    }

    function trigger(type, elem, args) {
        args[0].type = type;
        return jQuery.event.handle.apply(elem, args);
    }

    // Create "bubbling" focus and blur events
    if (document.addEventListener) {
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            jQuery.event.special[fix] = {
                setup: function() {
                    if (focusCounts[fix]++ === 0) {
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function() {
                    if (--focusCounts[fix] === 0) {
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };

            function handler(e) {
                e = jQuery.event.fix(e);
                e.type = fix;
                return jQuery.event.trigger(e, null, e.target);
            }
        });
    }

    jQuery.each(["bind", "one"], function(i, name) {
        jQuery.fn[name] = function(type, data, fn) {
            // Handle object literals
            if (typeof type === "object") {
                for (var key in type) {
                    this[name](key, data, type[key], fn);
                }
                return this;
            }

            if (jQuery.isFunction(data) || data === false) {
                fn = data;
                data = undefined;
            }

            var handler = name === "one" ? jQuery.proxy(fn, function(event) {
                jQuery(this).unbind(event, handler);
                return fn.apply(this, arguments);
            }) : fn;

            if (type === "unload" && name !== "one") {
                this.one(type, data, fn);

            } else {
                for (var i = 0, l = this.length; i < l; i++) {
                    jQuery.event.add(this[i], type, handler, data);
                }
            }

            return this;
        };
    });

    jQuery.fn.extend({
        unbind: function(type, fn) {
            // Handle object literals
            if (typeof type === "object" && !type.preventDefault) {
                for (var key in type) {
                    this.unbind(key, type[key]);
                }

            } else {
                for (var i = 0, l = this.length; i < l; i++) {
                    jQuery.event.remove(this[i], type, fn);
                }
            }

            return this;
        },

        delegate: function(selector, types, data, fn) {
            return this.live(types, data, fn, selector);
        },

        undelegate: function(selector, types, fn) {
            if (arguments.length === 0) {
                return this.unbind("live");

            } else {
                return this.die(types, null, fn, selector);
            }
        },

        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },

        triggerHandler: function(type, data) {
            if (this[0]) {
                var event = jQuery.Event(type);
                event.preventDefault();
                event.stopPropagation();
                jQuery.event.trigger(event, data, this[0]);
                return event.result;
            }
        },

        toggle: function(fn) {
            // Save reference to arguments for access in closure
            var args = arguments,
			i = 1;

            // link all the functions, so any of them can unbind this click handler
            while (i < args.length) {
                jQuery.proxy(fn, args[i++]);
            }

            return this.click(jQuery.proxy(fn, function(event) {
                // Figure out which function to execute
                var lastToggle = (jQuery.data(this, "lastToggle" + fn.guid) || 0) % i;
                jQuery.data(this, "lastToggle" + fn.guid, lastToggle + 1);

                // Make sure that clicks stop
                event.preventDefault();

                // and execute the function
                return args[lastToggle].apply(this, arguments) || false;
            }));
        },

        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });

    var liveMap = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };

    jQuery.each(["live", "die"], function(i, name) {
        jQuery.fn[name] = function(types, data, fn, origSelector /* Internal Use Only */) {
            var type, i = 0, match, namespaces, preType,
			selector = origSelector || this.selector,
			context = origSelector ? this : jQuery(this.context);

            if (typeof types === "object" && !types.preventDefault) {
                for (var key in types) {
                    context[name](key, data, types[key], selector);
                }

                return this;
            }

            if (jQuery.isFunction(data)) {
                fn = data;
                data = undefined;
            }

            types = (types || "").split(" ");

            while ((type = types[i++]) != null) {
                match = rnamespaces.exec(type);
                namespaces = "";

                if (match) {
                    namespaces = match[0];
                    type = type.replace(rnamespaces, "");
                }

                if (type === "hover") {
                    types.push("mouseenter" + namespaces, "mouseleave" + namespaces);
                    continue;
                }

                preType = type;

                if (type === "focus" || type === "blur") {
                    types.push(liveMap[type] + namespaces);
                    type = type + namespaces;

                } else {
                    type = (liveMap[type] || type) + namespaces;
                }

                if (name === "live") {
                    // bind live handler
                    for (var j = 0, l = context.length; j < l; j++) {
                        jQuery.event.add(context[j], "live." + liveConvert(type, selector),
						{ data: data, selector: selector, handler: fn, origType: type, origHandler: fn, preType: preType });
                    }

                } else {
                    // unbind live handler
                    context.unbind("live." + liveConvert(type, selector), fn);
                }
            }

            return this;
        };
    });

    function liveHandler(event) {
        var stop, maxLevel, related, match, handleObj, elem, j, i, l, data, close, namespace, ret,
		elems = [],
		selectors = [],
		events = jQuery.data(this, this.nodeType ? "events" : "__events__");

        if (typeof events === "function") {
            events = events.events;
        }

        // Make sure we avoid non-left-click bubbling in Firefox (#3861)
        if (event.liveFired === this || !events || !events.live || event.button && event.type === "click") {
            return;
        }

        if (event.namespace) {
            namespace = new RegExp("(^|\\.)" + event.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
        }

        event.liveFired = this;

        var live = events.live.slice(0);

        for (j = 0; j < live.length; j++) {
            handleObj = live[j];

            if (handleObj.origType.replace(rnamespaces, "") === event.type) {
                selectors.push(handleObj.selector);

            } else {
                live.splice(j--, 1);
            }
        }

        match = jQuery(event.target).closest(selectors, event.currentTarget);

        for (i = 0, l = match.length; i < l; i++) {
            close = match[i];

            for (j = 0; j < live.length; j++) {
                handleObj = live[j];

                if (close.selector === handleObj.selector && (!namespace || namespace.test(handleObj.namespace))) {
                    elem = close.elem;
                    related = null;

                    // Those two events require additional checking
                    if (handleObj.preType === "mouseenter" || handleObj.preType === "mouseleave") {
                        event.type = handleObj.preType;
                        related = jQuery(event.relatedTarget).closest(handleObj.selector)[0];
                    }

                    if (!related || related !== elem) {
                        elems.push({ elem: elem, handleObj: handleObj, level: close.level });
                    }
                }
            }
        }

        for (i = 0, l = elems.length; i < l; i++) {
            match = elems[i];

            if (maxLevel && match.level > maxLevel) {
                break;
            }

            event.currentTarget = match.elem;
            event.data = match.handleObj.data;
            event.handleObj = match.handleObj;

            ret = match.handleObj.origHandler.apply(match.elem, arguments);

            if (ret === false || event.isPropagationStopped()) {
                maxLevel = match.level;

                if (ret === false) {
                    stop = false;
                }
                if (event.isImmediatePropagationStopped()) {
                    break;
                }
            }
        }

        return stop;
    }

    function liveConvert(type, selector) {
        return (type && type !== "*" ? type + "." : "") + selector.replace(rperiod, "`").replace(rspace, "&");
    }

    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error").split(" "), function(i, name) {

	    // Handle event binding
	    jQuery.fn[name] = function(data, fn) {
	        if (fn == null) {
	            fn = data;
	            data = null;
	        }

	        return arguments.length > 0 ?
			this.bind(name, data, fn) :
			this.trigger(name);
	    };

	    if (jQuery.attrFn) {
	        jQuery.attrFn[name] = true;
	    }
	});

    // Prevent memory leaks in IE
    // Window isn't included so as not to unbind existing unload events
    // More info:
    //  - http://isaacschlueter.com/2006/10/msie-memory-leaks/
    if (window.attachEvent && !window.addEventListener) {
        jQuery(window).bind("unload", function() {
            for (var id in jQuery.cache) {
                if (jQuery.cache[id].handle) {
                    // Try/Catch is to handle iframes being unloaded, see #4280
                    try {
                        jQuery.event.remove(jQuery.cache[id].handle.elem);
                    } catch (e) { }
                }
            }
        });
    }


    /*!
    * Sizzle CSS Selector Engine - v1.0
    *  Copyright 2009, The Dojo Foundation
    *  Released under the MIT, BSD, and GPL Licenses.
    *  More information: http://sizzlejs.com/
    */
    (function() {

        var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;

        // Here we check if the JavaScript engine is using some sort of
        // optimization where it does not always call our comparision
        // function. If that is the case, discard the hasDuplicate value.
        //   Thus far that includes Google Chrome.
        [0, 0].sort(function() {
            baseHasDuplicate = false;
            return 0;
        });

        var Sizzle = function(selector, context, results, seed) {
            results = results || [];
            context = context || document;

            var origContext = context;

            if (context.nodeType !== 1 && context.nodeType !== 9) {
                return [];
            }

            if (!selector || typeof selector !== "string") {
                return results;
            }

            var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML(context),
		parts = [],
		soFar = selector;

            // Reset the position of the chunker regexp (start from head)
            do {
                chunker.exec("");
                m = chunker.exec(soFar);

                if (m) {
                    soFar = m[3];

                    parts.push(m[1]);

                    if (m[2]) {
                        extra = m[3];
                        break;
                    }
                }
            } while (m);

            if (parts.length > 1 && origPOS.exec(selector)) {

                if (parts.length === 2 && Expr.relative[parts[0]]) {
                    set = posProcess(parts[0] + parts[1], context);

                } else {
                    set = Expr.relative[parts[0]] ?
				[context] :
				Sizzle(parts.shift(), context);

                    while (parts.length) {
                        selector = parts.shift();

                        if (Expr.relative[selector]) {
                            selector += parts.shift();
                        }

                        set = posProcess(selector, set);
                    }
                }

            } else {
                // Take a shortcut and set the context if the root selector is an ID
                // (but not if it'll be faster if the inner selector is an ID)
                if (!seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1])) {

                    ret = Sizzle.find(parts.shift(), context, contextXML);
                    context = ret.expr ?
				Sizzle.filter(ret.expr, ret.set)[0] :
				ret.set[0];
                }

                if (context) {
                    ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed)} :
				Sizzle.find(parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML);

                    set = ret.expr ?
				Sizzle.filter(ret.expr, ret.set) :
				ret.set;

                    if (parts.length > 0) {
                        checkSet = makeArray(set);

                    } else {
                        prune = false;
                    }

                    while (parts.length) {
                        cur = parts.pop();
                        pop = cur;

                        if (!Expr.relative[cur]) {
                            cur = "";
                        } else {
                            pop = parts.pop();
                        }

                        if (pop == null) {
                            pop = context;
                        }

                        Expr.relative[cur](checkSet, pop, contextXML);
                    }

                } else {
                    checkSet = parts = [];
                }
            }

            if (!checkSet) {
                checkSet = set;
            }

            if (!checkSet) {
                Sizzle.error(cur || selector);
            }

            if (toString.call(checkSet) === "[object Array]") {
                if (!prune) {
                    results.push.apply(results, checkSet);

                } else if (context && context.nodeType === 1) {
                    for (i = 0; checkSet[i] != null; i++) {
                        if (checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i]))) {
                            results.push(set[i]);
                        }
                    }

                } else {
                    for (i = 0; checkSet[i] != null; i++) {
                        if (checkSet[i] && checkSet[i].nodeType === 1) {
                            results.push(set[i]);
                        }
                    }
                }

            } else {
                makeArray(checkSet, results);
            }

            if (extra) {
                Sizzle(extra, origContext, results, seed);
                Sizzle.uniqueSort(results);
            }

            return results;
        };

        Sizzle.uniqueSort = function(results) {
            if (sortOrder) {
                hasDuplicate = baseHasDuplicate;
                results.sort(sortOrder);

                if (hasDuplicate) {
                    for (var i = 1; i < results.length; i++) {
                        if (results[i] === results[i - 1]) {
                            results.splice(i--, 1);
                        }
                    }
                }
            }

            return results;
        };

        Sizzle.matches = function(expr, set) {
            return Sizzle(expr, null, null, set);
        };

        Sizzle.matchesSelector = function(node, expr) {
            return Sizzle(expr, null, null, [node]).length > 0;
        };

        Sizzle.find = function(expr, context, isXML) {
            var set;

            if (!expr) {
                return [];
            }

            for (var i = 0, l = Expr.order.length; i < l; i++) {
                var match,
			type = Expr.order[i];

                if ((match = Expr.leftMatch[type].exec(expr))) {
                    var left = match[1];
                    match.splice(1, 1);

                    if (left.substr(left.length - 1) !== "\\") {
                        match[1] = (match[1] || "").replace(/\\/g, "");
                        set = Expr.find[type](match, context, isXML);

                        if (set != null) {
                            expr = expr.replace(Expr.match[type], "");
                            break;
                        }
                    }
                }
            }

            if (!set) {
                set = context.getElementsByTagName("*");
            }

            return { set: set, expr: expr };
        };

        Sizzle.filter = function(expr, set, inplace, not) {
            var match, anyFound,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML(set[0]);

            while (expr && set.length) {
                for (var type in Expr.filter) {
                    if ((match = Expr.leftMatch[type].exec(expr)) != null && match[2]) {
                        var found, item,
					filter = Expr.filter[type],
					left = match[1];

                        anyFound = false;

                        match.splice(1, 1);

                        if (left.substr(left.length - 1) === "\\") {
                            continue;
                        }

                        if (curLoop === result) {
                            result = [];
                        }

                        if (Expr.preFilter[type]) {
                            match = Expr.preFilter[type](match, curLoop, inplace, result, not, isXMLFilter);

                            if (!match) {
                                anyFound = found = true;

                            } else if (match === true) {
                                continue;
                            }
                        }

                        if (match) {
                            for (var i = 0; (item = curLoop[i]) != null; i++) {
                                if (item) {
                                    found = filter(item, match, i, curLoop);
                                    var pass = not ^ !!found;

                                    if (inplace && found != null) {
                                        if (pass) {
                                            anyFound = true;

                                        } else {
                                            curLoop[i] = false;
                                        }

                                    } else if (pass) {
                                        result.push(item);
                                        anyFound = true;
                                    }
                                }
                            }
                        }

                        if (found !== undefined) {
                            if (!inplace) {
                                curLoop = result;
                            }

                            expr = expr.replace(Expr.match[type], "");

                            if (!anyFound) {
                                return [];
                            }

                            break;
                        }
                    }
                }

                // Improper expression
                if (expr === old) {
                    if (anyFound == null) {
                        Sizzle.error(expr);

                    } else {
                        break;
                    }
                }

                old = expr;
            }

            return curLoop;
        };

        Sizzle.error = function(msg) {
            throw "Syntax error, unrecognized expression: " + msg;
        };

        var Expr = Sizzle.selectors = {
            order: ["ID", "NAME", "TAG"],

            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },

            leftMatch: {},

            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },

            attrHandle: {
                href: function(elem) {
                    return elem.getAttribute("href");
                }
            },

            relative: {
                "+": function(checkSet, part) {
                    var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

                    if (isTag) {
                        part = part.toLowerCase();
                    }

                    for (var i = 0, l = checkSet.length, elem; i < l; i++) {
                        if ((elem = checkSet[i])) {
                            while ((elem = elem.previousSibling) && elem.nodeType !== 1) { }

                            checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
                        }
                    }

                    if (isPartStrNotTag) {
                        Sizzle.filter(part, checkSet, true);
                    }
                },

                ">": function(checkSet, part) {
                    var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

                    if (isPartStr && !/\W/.test(part)) {
                        part = part.toLowerCase();

                        for (; i < l; i++) {
                            elem = checkSet[i];

                            if (elem) {
                                var parent = elem.parentNode;
                                checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
                            }
                        }

                    } else {
                        for (; i < l; i++) {
                            elem = checkSet[i];

                            if (elem) {
                                checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
                            }
                        }

                        if (isPartStr) {
                            Sizzle.filter(part, checkSet, true);
                        }
                    }
                },

                "": function(checkSet, part, isXML) {
                    var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

                    if (typeof part === "string" && !/\W/.test(part)) {
                        part = part.toLowerCase();
                        nodeCheck = part;
                        checkFn = dirNodeCheck;
                    }

                    checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
                },

                "~": function(checkSet, part, isXML) {
                    var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

                    if (typeof part === "string" && !/\W/.test(part)) {
                        part = part.toLowerCase();
                        nodeCheck = part;
                        checkFn = dirNodeCheck;
                    }

                    checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
                }
            },

            find: {
                ID: function(match, context, isXML) {
                    if (typeof context.getElementById !== "undefined" && !isXML) {
                        var m = context.getElementById(match[1]);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        return m && m.parentNode ? [m] : [];
                    }
                },

                NAME: function(match, context) {
                    if (typeof context.getElementsByName !== "undefined") {
                        var ret = [],
					results = context.getElementsByName(match[1]);

                        for (var i = 0, l = results.length; i < l; i++) {
                            if (results[i].getAttribute("name") === match[1]) {
                                ret.push(results[i]);
                            }
                        }

                        return ret.length === 0 ? null : ret;
                    }
                },

                TAG: function(match, context) {
                    return context.getElementsByTagName(match[1]);
                }
            },
            preFilter: {
                CLASS: function(match, curLoop, inplace, result, not, isXML) {
                    match = " " + match[1].replace(/\\/g, "") + " ";

                    if (isXML) {
                        return match;
                    }

                    for (var i = 0, elem; (elem = curLoop[i]) != null; i++) {
                        if (elem) {
                            if (not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n]/g, " ").indexOf(match) >= 0)) {
                                if (!inplace) {
                                    result.push(elem);
                                }

                            } else if (inplace) {
                                curLoop[i] = false;
                            }
                        }
                    }

                    return false;
                },

                ID: function(match) {
                    return match[1].replace(/\\/g, "");
                },

                TAG: function(match, curLoop) {
                    return match[1].toLowerCase();
                },

                CHILD: function(match) {
                    if (match[1] === "nth") {
                        // parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
                        var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test(match[2]) && "0n+" + match[2] || match[2]);

                        // calculate the numbers (first)n+(last) including if they are negative
                        match[2] = (test[1] + (test[2] || 1)) - 0;
                        match[3] = test[3] - 0;
                    }

                    // TODO: Move to normal caching system
                    match[0] = done++;

                    return match;
                },

                ATTR: function(match, curLoop, inplace, result, not, isXML) {
                    var name = match[1].replace(/\\/g, "");

                    if (!isXML && Expr.attrMap[name]) {
                        match[1] = Expr.attrMap[name];
                    }

                    if (match[2] === "~=") {
                        match[4] = " " + match[4] + " ";
                    }

                    return match;
                },

                PSEUDO: function(match, curLoop, inplace, result, not) {
                    if (match[1] === "not") {
                        // If we're dealing with a complex expression, or a simple one
                        if ((chunker.exec(match[3]) || "").length > 1 || /^\w/.test(match[3])) {
                            match[3] = Sizzle(match[3], null, null, curLoop);

                        } else {
                            var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

                            if (!inplace) {
                                result.push.apply(result, ret);
                            }

                            return false;
                        }

                    } else if (Expr.match.POS.test(match[0]) || Expr.match.CHILD.test(match[0])) {
                        return true;
                    }

                    return match;
                },

                POS: function(match) {
                    match.unshift(true);

                    return match;
                }
            },

            filters: {
                enabled: function(elem) {
                    return elem.disabled === false && elem.type !== "hidden";
                },

                disabled: function(elem) {
                    return elem.disabled === true;
                },

                checked: function(elem) {
                    return elem.checked === true;
                },

                selected: function(elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    elem.parentNode.selectedIndex;

                    return elem.selected === true;
                },

                parent: function(elem) {
                    return !!elem.firstChild;
                },

                empty: function(elem) {
                    return !elem.firstChild;
                },

                has: function(elem, i, match) {
                    return !!Sizzle(match[3], elem).length;
                },

                header: function(elem) {
                    return (/h\d/i).test(elem.nodeName);
                },

                text: function(elem) {
                    return "text" === elem.type;
                },
                radio: function(elem) {
                    return "radio" === elem.type;
                },

                checkbox: function(elem) {
                    return "checkbox" === elem.type;
                },

                file: function(elem) {
                    return "file" === elem.type;
                },
                password: function(elem) {
                    return "password" === elem.type;
                },

                submit: function(elem) {
                    return "submit" === elem.type;
                },

                image: function(elem) {
                    return "image" === elem.type;
                },

                reset: function(elem) {
                    return "reset" === elem.type;
                },

                button: function(elem) {
                    return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
                },

                input: function(elem) {
                    return (/input|select|textarea|button/i).test(elem.nodeName);
                }
            },
            setFilters: {
                first: function(elem, i) {
                    return i === 0;
                },

                last: function(elem, i, match, array) {
                    return i === array.length - 1;
                },

                even: function(elem, i) {
                    return i % 2 === 0;
                },

                odd: function(elem, i) {
                    return i % 2 === 1;
                },

                lt: function(elem, i, match) {
                    return i < match[3] - 0;
                },

                gt: function(elem, i, match) {
                    return i > match[3] - 0;
                },

                nth: function(elem, i, match) {
                    return match[3] - 0 === i;
                },

                eq: function(elem, i, match) {
                    return match[3] - 0 === i;
                }
            },
            filter: {
                PSEUDO: function(elem, match, i, array) {
                    var name = match[1],
				filter = Expr.filters[name];

                    if (filter) {
                        return filter(elem, i, match, array);

                    } else if (name === "contains") {
                        return (elem.textContent || elem.innerText || Sizzle.getText([elem]) || "").indexOf(match[3]) >= 0;

                    } else if (name === "not") {
                        var not = match[3];

                        for (var j = 0, l = not.length; j < l; j++) {
                            if (not[j] === elem) {
                                return false;
                            }
                        }

                        return true;

                    } else {
                        Sizzle.error("Syntax error, unrecognized expression: " + name);
                    }
                },

                CHILD: function(elem, match) {
                    var type = match[1],
				node = elem;

                    switch (type) {
                        case "only":
                        case "first":
                            while ((node = node.previousSibling)) {
                                if (node.nodeType === 1) {
                                    return false;
                                }
                            }

                            if (type === "first") {
                                return true;
                            }

                            node = elem;

                        case "last":
                            while ((node = node.nextSibling)) {
                                if (node.nodeType === 1) {
                                    return false;
                                }
                            }

                            return true;

                        case "nth":
                            var first = match[2],
						last = match[3];

                            if (first === 1 && last === 0) {
                                return true;
                            }

                            var doneName = match[0],
						parent = elem.parentNode;

                            if (parent && (parent.sizcache !== doneName || !elem.nodeIndex)) {
                                var count = 0;

                                for (node = parent.firstChild; node; node = node.nextSibling) {
                                    if (node.nodeType === 1) {
                                        node.nodeIndex = ++count;
                                    }
                                }

                                parent.sizcache = doneName;
                            }

                            var diff = elem.nodeIndex - last;

                            if (first === 0) {
                                return diff === 0;

                            } else {
                                return (diff % first === 0 && diff / first >= 0);
                            }
                    }
                },

                ID: function(elem, match) {
                    return elem.nodeType === 1 && elem.getAttribute("id") === match;
                },

                TAG: function(elem, match) {
                    return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
                },

                CLASS: function(elem, match) {
                    return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf(match) > -1;
                },

                ATTR: function(elem, match) {
                    var name = match[1],
				result = Expr.attrHandle[name] ?
					Expr.attrHandle[name](elem) :
					elem[name] != null ?
						elem[name] :
						elem.getAttribute(name),
				value = result + "",
				type = match[2],
				check = match[4];

                    return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
                },

                POS: function(elem, match, i, array) {
                    var name = match[2],
				filter = Expr.setFilters[name];

                    if (filter) {
                        return filter(elem, i, match, array);
                    }
                }
            }
        };

        var origPOS = Expr.match.POS,
	fescape = function(all, num) {
	    return "\\" + (num - 0 + 1);
	};

        for (var type in Expr.match) {
            Expr.match[type] = new RegExp(Expr.match[type].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            Expr.leftMatch[type] = new RegExp(/(^(?:.|\r|\n)*?)/.source + Expr.match[type].source.replace(/\\(\d+)/g, fescape));
        }

        var makeArray = function(array, results) {
            array = Array.prototype.slice.call(array, 0);

            if (results) {
                results.push.apply(results, array);
                return results;
            }

            return array;
        };

        // Perform a simple check to determine if the browser is capable of
        // converting a NodeList to an array using builtin methods.
        // Also verifies that the returned array holds DOM nodes
        // (which is not the case in the Blackberry browser)
        try {
            Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;

            // Provide a fallback method if it does not work
        } catch (e) {
            makeArray = function(array, results) {
                var i = 0,
			ret = results || [];

                if (toString.call(array) === "[object Array]") {
                    Array.prototype.push.apply(ret, array);

                } else {
                    if (typeof array.length === "number") {
                        for (var l = array.length; i < l; i++) {
                            ret.push(array[i]);
                        }

                    } else {
                        for (; array[i]; i++) {
                            ret.push(array[i]);
                        }
                    }
                }

                return ret;
            };
        }

        var sortOrder, siblingCheck;

        if (document.documentElement.compareDocumentPosition) {
            sortOrder = function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                    return a.compareDocumentPosition ? -1 : 1;
                }

                return a.compareDocumentPosition(b) & 4 ? -1 : 1;
            };

        } else {
            sortOrder = function(a, b) {
                var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

                // The nodes are identical, we can exit early
                if (a === b) {
                    hasDuplicate = true;
                    return 0;

                    // If the nodes are siblings (or identical) we can do a quick check
                } else if (aup === bup) {
                    return siblingCheck(a, b);

                    // If no parents were found then the nodes are disconnected
                } else if (!aup) {
                    return -1;

                } else if (!bup) {
                    return 1;
                }

                // Otherwise they're somewhere else in the tree so we need
                // to build up a full list of the parentNodes for comparison
                while (cur) {
                    ap.unshift(cur);
                    cur = cur.parentNode;
                }

                cur = bup;

                while (cur) {
                    bp.unshift(cur);
                    cur = cur.parentNode;
                }

                al = ap.length;
                bl = bp.length;

                // Start walking down the tree looking for a discrepancy
                for (var i = 0; i < al && i < bl; i++) {
                    if (ap[i] !== bp[i]) {
                        return siblingCheck(ap[i], bp[i]);
                    }
                }

                // We ended someplace up the tree so do a sibling check
                return i === al ?
			siblingCheck(a, bp[i], -1) :
			siblingCheck(ap[i], b, 1);
            };

            siblingCheck = function(a, b, ret) {
                if (a === b) {
                    return ret;
                }

                var cur = a.nextSibling;

                while (cur) {
                    if (cur === b) {
                        return -1;
                    }

                    cur = cur.nextSibling;
                }

                return 1;
            };
        }

        // Utility function for retreiving the text value of an array of DOM nodes
        Sizzle.getText = function(elems) {
            var ret = "", elem;

            for (var i = 0; elems[i]; i++) {
                elem = elems[i];

                // Get the text from text nodes and CDATA nodes
                if (elem.nodeType === 3 || elem.nodeType === 4) {
                    ret += elem.nodeValue;

                    // Traverse everything else, except comment nodes
                } else if (elem.nodeType !== 8) {
                    ret += Sizzle.getText(elem.childNodes);
                }
            }

            return ret;
        };

        // Check to see if the browser returns elements by name when
        // querying by getElementById (and provide a workaround)
        (function() {
            // We're going to inject a fake input element with a specified name
            var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

            form.innerHTML = "<a name='" + id + "'/>";

            // Inject it into the root element, check its status, and remove it quickly
            root.insertBefore(form, root.firstChild);

            // The workaround has to do additional checks after a getElementById
            // Which slows things down for other browsers (hence the branching)
            if (document.getElementById(id)) {
                Expr.find.ID = function(match, context, isXML) {
                    if (typeof context.getElementById !== "undefined" && !isXML) {
                        var m = context.getElementById(match[1]);

                        return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
                    }
                };

                Expr.filter.ID = function(elem, match) {
                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

                    return elem.nodeType === 1 && node && node.nodeValue === match;
                };
            }

            root.removeChild(form);

            // release memory in IE
            root = form = null;
        })();

        (function() {
            // Check to see if the browser returns only elements
            // when doing getElementsByTagName("*")

            // Create a fake element
            var div = document.createElement("div");
            div.appendChild(document.createComment(""));

            // Make sure no comments are found
            if (div.getElementsByTagName("*").length > 0) {
                Expr.find.TAG = function(match, context) {
                    var results = context.getElementsByTagName(match[1]);

                    // Filter out possible comments
                    if (match[1] === "*") {
                        var tmp = [];

                        for (var i = 0; results[i]; i++) {
                            if (results[i].nodeType === 1) {
                                tmp.push(results[i]);
                            }
                        }

                        results = tmp;
                    }

                    return results;
                };
            }

            // Check to see if an attribute returns normalized href attributes
            div.innerHTML = "<a href='#'></a>";

            if (div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#") {

                Expr.attrHandle.href = function(elem) {
                    return elem.getAttribute("href", 2);
                };
            }

            // release memory in IE
            div = null;
        })();

        if (document.querySelectorAll) {
            (function() {
                var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

                div.innerHTML = "<p class='TEST'></p>";

                // Safari can't handle uppercase or unicode characters when
                // in quirks mode.
                if (div.querySelectorAll && div.querySelectorAll(".TEST").length === 0) {
                    return;
                }

                Sizzle = function(query, context, extra, seed) {
                    context = context || document;

                    // Make sure that attribute selectors are quoted
                    query = query.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

                    // Only use querySelectorAll on non-XML documents
                    // (ID selectors don't work in non-HTML documents)
                    if (!seed && !Sizzle.isXML(context)) {
                        if (context.nodeType === 9) {
                            try {
                                return makeArray(context.querySelectorAll(query), extra);
                            } catch (qsaError) { }

                            // qSA works strangely on Element-rooted queries
                            // We can work around this by specifying an extra ID on the root
                            // and working up from there (Thanks to Andrew Dupont for the technique)
                            // IE 8 doesn't work on object elements
                        } else if (context.nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                            var old = context.getAttribute("id"),
						nid = old || id;

                            if (!old) {
                                context.setAttribute("id", nid);
                            }

                            try {
                                return makeArray(context.querySelectorAll("#" + nid + " " + query), extra);

                            } catch (pseudoError) {
                            } finally {
                                if (!old) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }

                    return oldSizzle(query, context, extra, seed);
                };

                for (var prop in oldSizzle) {
                    Sizzle[prop] = oldSizzle[prop];
                }

                // release memory in IE
                div = null;
            })();
        }

        (function() {
            var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector,
		pseudoWorks = false;

            try {
                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call(document.documentElement, "[test!='']:sizzle");

            } catch (pseudoError) {
                pseudoWorks = true;
            }

            if (matches) {
                Sizzle.matchesSelector = function(node, expr) {
                    // Make sure that attribute selectors are quoted
                    expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

                    if (!Sizzle.isXML(node)) {
                        try {
                            if (pseudoWorks || !Expr.match.PSEUDO.test(expr) && !/!=/.test(expr)) {
                                return matches.call(node, expr);
                            }
                        } catch (e) { }
                    }

                    return Sizzle(expr, null, null, [node]).length > 0;
                };
            }
        })();

        (function() {
            var div = document.createElement("div");

            div.innerHTML = "<div class='test e'></div><div class='test'></div>";

            // Opera can't find a second classname (in 9.6)
            // Also, make sure that getElementsByClassName actually exists
            if (!div.getElementsByClassName || div.getElementsByClassName("e").length === 0) {
                return;
            }

            // Safari caches class attributes, doesn't catch changes (in 3.2)
            div.lastChild.className = "e";

            if (div.getElementsByClassName("e").length === 1) {
                return;
            }

            Expr.order.splice(1, 0, "CLASS");
            Expr.find.CLASS = function(match, context, isXML) {
                if (typeof context.getElementsByClassName !== "undefined" && !isXML) {
                    return context.getElementsByClassName(match[1]);
                }
            };

            // release memory in IE
            div = null;
        })();

        function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
            for (var i = 0, l = checkSet.length; i < l; i++) {
                var elem = checkSet[i];

                if (elem) {
                    var match = false;

                    elem = elem[dir];

                    while (elem) {
                        if (elem.sizcache === doneName) {
                            match = checkSet[elem.sizset];
                            break;
                        }

                        if (elem.nodeType === 1 && !isXML) {
                            elem.sizcache = doneName;
                            elem.sizset = i;
                        }

                        if (elem.nodeName.toLowerCase() === cur) {
                            match = elem;
                            break;
                        }

                        elem = elem[dir];
                    }

                    checkSet[i] = match;
                }
            }
        }

        function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
            for (var i = 0, l = checkSet.length; i < l; i++) {
                var elem = checkSet[i];

                if (elem) {
                    var match = false;

                    elem = elem[dir];

                    while (elem) {
                        if (elem.sizcache === doneName) {
                            match = checkSet[elem.sizset];
                            break;
                        }

                        if (elem.nodeType === 1) {
                            if (!isXML) {
                                elem.sizcache = doneName;
                                elem.sizset = i;
                            }

                            if (typeof cur !== "string") {
                                if (elem === cur) {
                                    match = true;
                                    break;
                                }

                            } else if (Sizzle.filter(cur, [elem]).length > 0) {
                                match = elem;
                                break;
                            }
                        }

                        elem = elem[dir];
                    }

                    checkSet[i] = match;
                }
            }
        }

        if (document.documentElement.contains) {
            Sizzle.contains = function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : true);
            };

        } else if (document.documentElement.compareDocumentPosition) {
            Sizzle.contains = function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16);
            };

        } else {
            Sizzle.contains = function() {
                return false;
            };
        }

        Sizzle.isXML = function(elem) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833) 
            var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };

        var posProcess = function(selector, context) {
            var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

            // Position selectors must be done after the filter
            // And so must :not(positional) so we move all PSEUDOs to the end
            while ((match = Expr.match.PSEUDO.exec(selector))) {
                later += match[0];
                selector = selector.replace(Expr.match.PSEUDO, "");
            }

            selector = Expr.relative[selector] ? selector + "*" : selector;

            for (var i = 0, l = root.length; i < l; i++) {
                Sizzle(selector, root[i], tmpSet);
            }

            return Sizzle.filter(later, tmpSet);
        };

        // EXPOSE
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.filters;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;


    })();


    var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
    // Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS;

    jQuery.fn.extend({
        find: function(selector) {
            var ret = this.pushStack("", "find", selector),
			length = 0;

            for (var i = 0, l = this.length; i < l; i++) {
                length = ret.length;
                jQuery.find(selector, this[i], ret);

                if (i > 0) {
                    // Make sure that the results are unique
                    for (var n = length; n < ret.length; n++) {
                        for (var r = 0; r < length; r++) {
                            if (ret[r] === ret[n]) {
                                ret.splice(n--, 1);
                                break;
                            }
                        }
                    }
                }
            }

            return ret;
        },

        has: function(target) {
            var targets = jQuery(target);
            return this.filter(function() {
                for (var i = 0, l = targets.length; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },

        not: function(selector) {
            return this.pushStack(winnow(this, selector, false), "not", selector);
        },

        filter: function(selector) {
            return this.pushStack(winnow(this, selector, true), "filter", selector);
        },

        is: function(selector) {
            return !!selector && jQuery.filter(selector, this).length > 0;
        },

        closest: function(selectors, context) {
            var ret = [], i, l, cur = this[0];

            if (jQuery.isArray(selectors)) {
                var match, selector,
				matches = {},
				level = 1;

                if (cur && selectors.length) {
                    for (i = 0, l = selectors.length; i < l; i++) {
                        selector = selectors[i];

                        if (!matches[selector]) {
                            matches[selector] = jQuery.expr.match.POS.test(selector) ?
							jQuery(selector, context || this.context) :
							selector;
                        }
                    }

                    while (cur && cur.ownerDocument && cur !== context) {
                        for (selector in matches) {
                            match = matches[selector];

                            if (match.jquery ? match.index(cur) > -1 : jQuery(cur).is(match)) {
                                ret.push({ selector: selector, elem: cur, level: level });
                            }
                        }

                        cur = cur.parentNode;
                        level++;
                    }
                }

                return ret;
            }

            var pos = POS.test(selectors) ?
			jQuery(selectors, context || this.context) : null;

            for (i = 0, l = this.length; i < l; i++) {
                cur = this[i];

                while (cur) {
                    if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
                        ret.push(cur);
                        break;

                    } else {
                        cur = cur.parentNode;
                        if (!cur || !cur.ownerDocument || cur === context) {
                            break;
                        }
                    }
                }
            }

            ret = ret.length > 1 ? jQuery.unique(ret) : ret;

            return this.pushStack(ret, "closest", selectors);
        },

        // Determine the position of an element within
        // the matched set of elements
        index: function(elem) {
            if (!elem || typeof elem === "string") {
                return jQuery.inArray(this[0],
                // If it receives a string, the selector is used
                // If it receives nothing, the siblings are used
				elem ? jQuery(elem) : this.parent().children());
            }
            // Locate the position of the desired element
            return jQuery.inArray(
            // If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this);
        },

        add: function(selector, context) {
            var set = typeof selector === "string" ?
				jQuery(selector, context || this.context) :
				jQuery.makeArray(selector),
			all = jQuery.merge(this.get(), set);

            return this.pushStack(isDisconnected(set[0]) || isDisconnected(all[0]) ?
			all :
			jQuery.unique(all));
        },

        andSelf: function() {
            return this.add(this.prevObject);
        }
    });

    // A painfully simple check to see if an element is disconnected
    // from a document (should be improved, where feasible).
    function isDisconnected(node) {
        return !node || !node.parentNode || node.parentNode.nodeType === 11;
    }

    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return jQuery.nth(elem, 2, "nextSibling");
        },
        prev: function(elem) {
            return jQuery.nth(elem, 2, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling(elem.parentNode.firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray(elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);

            if (!runtil.test(name)) {
                selector = until;
            }

            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }

            ret = this.length > 1 ? jQuery.unique(ret) : ret;

            if ((this.length > 1 || rmultiselector.test(selector)) && rparentsprev.test(name)) {
                ret = ret.reverse();
            }

            return this.pushStack(ret, name, slice.call(arguments).join(","));
        };
    });

    jQuery.extend({
        filter: function(expr, elems, not) {
            if (not) {
                expr = ":not(" + expr + ")";
            }

            return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] :
			jQuery.find.matches(expr, elems);
        },

        dir: function(elem, dir, until) {
            var matched = [],
			cur = elem[dir];

            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },

        nth: function(cur, result, dir, elem) {
            result = result || 1;
            var num = 0;

            for (; cur; cur = cur[dir]) {
                if (cur.nodeType === 1 && ++num === result) {
                    break;
                }
            }

            return cur;
        },

        sibling: function(n, elem) {
            var r = [];

            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n);
                }
            }

            return r;
        }
    });

    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, keep) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                var retVal = !!qualifier.call(elem, i, elem);
                return retVal === keep;
            });

        } else if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem, i) {
                return (elem === qualifier) === keep;
            });

        } else if (typeof qualifier === "string") {
            var filtered = jQuery.grep(elements, function(elem) {
                return elem.nodeType === 1;
            });

            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, filtered, !keep);
            } else {
                qualifier = jQuery.filter(qualifier, filtered);
            }
        }

        return jQuery.grep(elements, function(elem, i) {
            return (jQuery.inArray(elem, qualifier) >= 0) === keep;
        });
    }




    var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnocache = /<(?:script|object|embed|option|style)/i,
    // checked="checked" or checked (html5)
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	raction = /\=([^="'>\s]+\/)>/g,
	wrapMap = {
	    option: [1, "<select multiple='multiple'>", "</select>"],
	    legend: [1, "<fieldset>", "</fieldset>"],
	    thead: [1, "<table>", "</table>"],
	    tr: [2, "<table><tbody>", "</tbody></table>"],
	    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
	    area: [1, "<map>", "</map>"],
	    _default: [0, "", ""]
	};

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    // IE can't serialize <link> and <script> tags normally
    if (!jQuery.support.htmlSerialize) {
        wrapMap._default = [1, "div<div>", "</div>"];
    }

    jQuery.fn.extend({
        text: function(text) {
            if (jQuery.isFunction(text)) {
                return this.each(function(i) {
                    var self = jQuery(this);

                    self.text(text.call(this, i, self.text()));
                });
            }

            if (typeof text !== "object" && text !== undefined) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(text));
            }

            return jQuery.text(this);
        },

        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }

            if (this[0]) {
                // The elements to wrap the target around
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }

                wrap.map(function() {
                    var elem = this;

                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }

                    return elem;
                }).append(this);
            }

            return this;
        },

        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }

            return this.each(function() {
                var self = jQuery(this),
				contents = self.contents();

                if (contents.length) {
                    contents.wrapAll(html);

                } else {
                    self.append(html);
                }
            });
        },

        wrap: function(html) {
            return this.each(function() {
                jQuery(this).wrapAll(html);
            });
        },

        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        },

        append: function() {
            return this.domManip(arguments, true, function(elem) {
                if (this.nodeType === 1) {
                    this.appendChild(elem);
                }
            });
        },

        prepend: function() {
            return this.domManip(arguments, true, function(elem) {
                if (this.nodeType === 1) {
                    this.insertBefore(elem, this.firstChild);
                }
            });
        },

        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(elem) {
                    this.parentNode.insertBefore(elem, this);
                });
            } else if (arguments.length) {
                var set = jQuery(arguments[0]);
                set.push.apply(set, this.toArray());
                return this.pushStack(set, "before", arguments);
            }
        },

        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(elem) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                });
            } else if (arguments.length) {
                var set = this.pushStack(this, "after", arguments);
                set.push.apply(set, jQuery(arguments[0]).toArray());
                return set;
            }
        },

        // keepData is for internal use only--do not document
        remove: function(selector, keepData) {
            for (var i = 0, elem; (elem = this[i]) != null; i++) {
                if (!selector || jQuery.filter(selector, [elem]).length) {
                    if (!keepData && elem.nodeType === 1) {
                        jQuery.cleanData(elem.getElementsByTagName("*"));
                        jQuery.cleanData([elem]);
                    }

                    if (elem.parentNode) {
                        elem.parentNode.removeChild(elem);
                    }
                }
            }

            return this;
        },

        empty: function() {
            for (var i = 0, elem; (elem = this[i]) != null; i++) {
                // Remove element nodes and prevent memory leaks
                if (elem.nodeType === 1) {
                    jQuery.cleanData(elem.getElementsByTagName("*"));
                }

                // Remove any remaining nodes
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
            }

            return this;
        },

        clone: function(events) {
            // Do the clone
            var ret = this.map(function() {
                if (!jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this)) {
                    // IE copies events bound via attachEvent when
                    // using cloneNode. Calling detachEvent on the
                    // clone will also remove the events from the orignal
                    // In order to get around this, we use innerHTML.
                    // Unfortunately, this means some modifications to
                    // attributes in IE that are actually only stored
                    // as properties will not be copied (such as the
                    // the name attribute on an input).
                    var html = this.outerHTML,
					ownerDocument = this.ownerDocument;

                    if (!html) {
                        var div = ownerDocument.createElement("div");
                        div.appendChild(this.cloneNode(true));
                        html = div.innerHTML;
                    }

                    return jQuery.clean([html.replace(rinlinejQuery, "")
                    // Handle the case in IE 8 where action=/test/> self-closes a tag
					.replace(raction, '="$1">')
					.replace(rleadingWhitespace, "")], ownerDocument)[0];
                } else {
                    return this.cloneNode(true);
                }
            });

            // Copy the events from the original to the clone
            if (events === true) {
                cloneCopyEvent(this, ret);
                cloneCopyEvent(this.find("*"), ret.find("*"));
            }

            // Return the cloned set
            return ret;
        },

        html: function(value) {
            if (value === undefined) {
                return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

                // See if we can take a shortcut and just use innerHTML
            } else if (typeof value === "string" && !rnocache.test(value) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
			!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                value = value.replace(rxhtmlTag, "<$1></$2>");

                try {
                    for (var i = 0, l = this.length; i < l; i++) {
                        // Remove element nodes and prevent memory leaks
                        if (this[i].nodeType === 1) {
                            jQuery.cleanData(this[i].getElementsByTagName("*"));
                            this[i].innerHTML = value;
                        }
                    }

                    // If using innerHTML throws an exception, use the fallback method
                } catch (e) {
                    this.empty().append(value);
                }

            } else if (jQuery.isFunction(value)) {
                this.each(function(i) {
                    var self = jQuery(this);

                    self.html(value.call(this, i, self.html()));
                });

            } else {
                this.empty().append(value);
            }

            return this;
        },

        replaceWith: function(value) {
            if (this[0] && this[0].parentNode) {
                // Make sure that the elements are removed from the DOM before they are inserted
                // this can help fix replacing a parent with child elements
                if (jQuery.isFunction(value)) {
                    return this.each(function(i) {
                        var self = jQuery(this), old = self.html();
                        self.replaceWith(value.call(this, i, old));
                    });
                }

                if (typeof value !== "string") {
                    value = jQuery(value).detach();
                }

                return this.each(function() {
                    var next = this.nextSibling,
					parent = this.parentNode;

                    jQuery(this).remove();

                    if (next) {
                        jQuery(next).before(value);
                    } else {
                        jQuery(parent).append(value);
                    }
                });
            } else {
                return this.pushStack(jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value);
            }
        },

        detach: function(selector) {
            return this.remove(selector, true);
        },

        domManip: function(args, table, callback) {
            var results, first, fragment, parent,
			value = args[0],
			scripts = [];

            // We can't cloneNode fragments that contain checked, in WebKit
            if (!jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test(value)) {
                return this.each(function() {
                    jQuery(this).domManip(args, table, callback, true);
                });
            }

            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    args[0] = value.call(this, i, table ? self.html() : undefined);
                    self.domManip(args, table, callback);
                });
            }

            if (this[0]) {
                parent = value && value.parentNode;

                // If we're in a fragment, just use that instead of building a new one
                if (jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length) {
                    results = { fragment: parent };

                } else {
                    results = jQuery.buildFragment(args, this, scripts);
                }

                fragment = results.fragment;

                if (fragment.childNodes.length === 1) {
                    first = fragment = fragment.firstChild;
                } else {
                    first = fragment.firstChild;
                }

                if (first) {
                    table = table && jQuery.nodeName(first, "tr");

                    for (var i = 0, l = this.length; i < l; i++) {
                        callback.call(
						table ?
							root(this[i], first) :
							this[i],
						i > 0 || results.cacheable || this.length > 1 ?
							fragment.cloneNode(true) :
							fragment
					);
                    }
                }

                if (scripts.length) {
                    jQuery.each(scripts, evalScript);
                }
            }

            return this;
        }
    });

    function root(elem, cur) {
        return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
    }

    function cloneCopyEvent(orig, ret) {
        var i = 0;

        ret.each(function() {
            if (this.nodeName !== (orig[i] && orig[i].nodeName)) {
                return;
            }

            var oldData = jQuery.data(orig[i++]),
			curData = jQuery.data(this, oldData),
			events = oldData && oldData.events;

            if (events) {
                delete curData.handle;
                curData.events = {};

                for (var type in events) {
                    for (var handler in events[type]) {
                        jQuery.event.add(this, type, events[type][handler], events[type][handler].data);
                    }
                }
            }
        });
    }

    jQuery.buildFragment = function(args, nodes, scripts) {
        var fragment, cacheable, cacheresults,
		doc = (nodes && nodes[0] ? nodes[0].ownerDocument || nodes[0] : document);

        // Only cache "small" (1/2 KB) strings that are associated with the main document
        // Cloning options loses the selected state, so don't cache them
        // IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
        // Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
        if (args.length === 1 && typeof args[0] === "string" && args[0].length < 512 && doc === document &&
		!rnocache.test(args[0]) && (jQuery.support.checkClone || !rchecked.test(args[0]))) {

            cacheable = true;
            cacheresults = jQuery.fragments[args[0]];
            if (cacheresults) {
                if (cacheresults !== 1) {
                    fragment = cacheresults;
                }
            }
        }

        if (!fragment) {
            fragment = doc.createDocumentFragment();
            jQuery.clean(args, doc, fragment, scripts);
        }

        if (cacheable) {
            jQuery.fragments[args[0]] = cacheresults ? fragment : 1;
        }

        return { fragment: fragment, cacheable: cacheable };
    };

    jQuery.fragments = {};

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var ret = [],
			insert = jQuery(selector),
			parent = this.length === 1 && this[0].parentNode;

            if (parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1) {
                insert[original](this[0]);
                return this;

            } else {
                for (var i = 0, l = insert.length; i < l; i++) {
                    var elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery(insert[i])[original](elems);
                    ret = ret.concat(elems);
                }

                return this.pushStack(ret, name, insert.selector);
            }
        };
    });

    jQuery.extend({
        clean: function(elems, context, fragment, scripts) {
            context = context || document;

            // !context.createElement fails in IE with an error but returns typeof 'object'
            if (typeof context.createElement === "undefined") {
                context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
            }

            var ret = [];

            for (var i = 0, elem; (elem = elems[i]) != null; i++) {
                if (typeof elem === "number") {
                    elem += "";
                }

                if (!elem) {
                    continue;
                }

                // Convert html string into DOM nodes
                if (typeof elem === "string" && !rhtml.test(elem)) {
                    elem = context.createTextNode(elem);

                } else if (typeof elem === "string") {
                    // Fix "XHTML"-style tags in all browsers
                    elem = elem.replace(rxhtmlTag, "<$1></$2>");

                    // Trim whitespace, otherwise indexOf won't work as expected
                    var tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(),
					wrap = wrapMap[tag] || wrapMap._default,
					depth = wrap[0],
					div = context.createElement("div");

                    // Go to html and back, then peel off extra wrappers
                    div.innerHTML = wrap[1] + elem + wrap[2];

                    // Move to the right depth
                    while (depth--) {
                        div = div.lastChild;
                    }

                    // Remove IE's autoinserted <tbody> from table fragments
                    if (!jQuery.support.tbody) {

                        // String was a <table>, *may* have spurious <tbody>
                        var hasBody = rtbody.test(elem),
						tbody = tag === "table" && !hasBody ?
							div.firstChild && div.firstChild.childNodes :

                        // String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !hasBody ?
								div.childNodes :
								[];

                        for (var j = tbody.length - 1; j >= 0; --j) {
                            if (jQuery.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) {
                                tbody[j].parentNode.removeChild(tbody[j]);
                            }
                        }

                    }

                    // IE completely kills leading whitespace when innerHTML is used
                    if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                        div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
                    }

                    elem = div.childNodes;
                }

                if (elem.nodeType) {
                    ret.push(elem);
                } else {
                    ret = jQuery.merge(ret, elem);
                }
            }

            if (fragment) {
                for (i = 0; ret[i]; i++) {
                    if (scripts && jQuery.nodeName(ret[i], "script") && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript")) {
                        scripts.push(ret[i].parentNode ? ret[i].parentNode.removeChild(ret[i]) : ret[i]);

                    } else {
                        if (ret[i].nodeType === 1) {
                            ret.splice.apply(ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))));
                        }
                        fragment.appendChild(ret[i]);
                    }
                }
            }

            return ret;
        },

        cleanData: function(elems) {
            var data, id, cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

            for (var i = 0, elem; (elem = elems[i]) != null; i++) {
                if (elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()]) {
                    continue;
                }

                id = elem[jQuery.expando];

                if (id) {
                    data = cache[id];

                    if (data && data.events) {
                        for (var type in data.events) {
                            if (special[type]) {
                                jQuery.event.remove(elem, type);

                            } else {
                                jQuery.removeEvent(elem, type, data.handle);
                            }
                        }
                    }

                    if (deleteExpando) {
                        delete elem[jQuery.expando];

                    } else if (elem.removeAttribute) {
                        elem.removeAttribute(jQuery.expando);
                    }

                    delete cache[id];
                }
            }
        }
    });

    function evalScript(i, elem) {
        if (elem.src) {
            jQuery.ajax({
                url: elem.src,
                async: false,
                dataType: "script"
            });
        } else {
            jQuery.globalEval(elem.text || elem.textContent || elem.innerHTML || "");
        }

        if (elem.parentNode) {
            elem.parentNode.removeChild(elem);
        }
    }




    var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	rdashAlpha = /-([a-z])/ig,
	rupper = /([A-Z])/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = ["Left", "Right"],
	cssHeight = ["Top", "Bottom"],
	curCSS,

	getComputedStyle,
	currentStyle,

	fcamelCase = function(all, letter) {
	    return letter.toUpperCase();
	};

    jQuery.fn.css = function(name, value) {
        // Setting 'undefined' is a no-op
        if (arguments.length === 2 && value === undefined) {
            return this;
        }

        return jQuery.access(this, name, value, true, function(elem, name, value) {
            return value !== undefined ?
			jQuery.style(elem, name, value) :
			jQuery.css(elem, name);
        });
    };

    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity", "opacity");
                        return ret === "" ? "1" : ret;

                    } else {
                        return elem.style.opacity;
                    }
                }
            }
        },

        // Exclude the following css properties to add px
        cssNumber: {
            "zIndex": true,
            "fontWeight": true,
            "opacity": true,
            "zoom": true,
            "lineHeight": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },

        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, origName = jQuery.camelCase(name),
			style = elem.style, hooks = jQuery.cssHooks[origName];

            name = jQuery.cssProps[origName] || origName;

            // Check if we're setting a value
            if (value !== undefined) {
                // Make sure that NaN and null values aren't set. See: #7116
                if (typeof value === "number" && isNaN(value) || value == null) {
                    return;
                }

                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if (typeof value === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value)) !== undefined) {
                    // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
                    // Fixes bug #5509
                    try {
                        style[name] = value;
                    } catch (e) { }
                }

            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
            }
        },

        css: function(elem, name, extra) {
            // Make sure that we're working with the right name
            var ret, origName = jQuery.camelCase(name),
			hooks = jQuery.cssHooks[origName];

            name = jQuery.cssProps[origName] || origName;

            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks && (ret = hooks.get(elem, true, extra)) !== undefined) {
                return ret;

                // Otherwise, if a way to get the computed value exists, use that
            } else if (curCSS) {
                return curCSS(elem, name, origName);
            }
        },

        // A method for quickly swapping in/out CSS properties to get correct calculations
        swap: function(elem, options, callback) {
            var old = {};

            // Remember the old values, and insert the new ones
            for (var name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }

            callback.call(elem);

            // Revert the old values
            for (name in options) {
                elem.style[name] = old[name];
            }
        },

        camelCase: function(string) {
            return string.replace(rdashAlpha, fcamelCase);
        }
    });

    // DEPRECATED, Use jQuery.css() instead
    jQuery.curCSS = jQuery.css;

    jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                var val;

                if (computed) {
                    if (elem.offsetWidth !== 0) {
                        val = getWH(elem, name, extra);

                    } else {
                        jQuery.swap(elem, cssShow, function() {
                            val = getWH(elem, name, extra);
                        });
                    }

                    if (val <= 0) {
                        val = curCSS(elem, name, name);

                        if (val === "0px" && currentStyle) {
                            val = currentStyle(elem, name, name);
                        }

                        if (val != null) {
                            // Should return "auto" instead of 0, use 0 for
                            // temporary backwards-compat
                            return val === "" || val === "auto" ? "0px" : val;
                        }
                    }

                    if (val < 0 || val == null) {
                        val = elem.style[name];

                        // Should return "auto" instead of 0, use 0 for
                        // temporary backwards-compat
                        return val === "" || val === "auto" ? "0px" : val;
                    }

                    return typeof val === "string" ? val : val + "px";
                }
            },

            set: function(elem, value) {
                if (rnumpx.test(value)) {
                    // ignore negative width and height values #1599
                    value = parseFloat(value);

                    if (value >= 0) {
                        return value + "px";
                    }

                } else {
                    return value;
                }
            }
        };
    });

    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                // IE uses filters for opacity
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ?
				(parseFloat(RegExp.$1) / 100) + "" :
				computed ? "1" : "";
            },

            set: function(elem, value) {
                var style = elem.style;

                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;

                // Set the alpha filter to set the opacity
                var opacity = jQuery.isNaN(value) ?
				"" :
				"alpha(opacity=" + value * 100 + ")",
				filter = style.filter || "";

                style.filter = ralpha.test(filter) ?
				filter.replace(ralpha, opacity) :
				style.filter + ' ' + opacity;
            }
        };
    }

    if (document.defaultView && document.defaultView.getComputedStyle) {
        getComputedStyle = function(elem, newName, name) {
            var ret, defaultView, computedStyle;

            name = name.replace(rupper, "-$1").toLowerCase();

            if (!(defaultView = elem.ownerDocument.defaultView)) {
                return undefined;
            }

            if ((computedStyle = defaultView.getComputedStyle(elem, null))) {
                ret = computedStyle.getPropertyValue(name);
                if (ret === "" && !jQuery.contains(elem.ownerDocument.documentElement, elem)) {
                    ret = jQuery.style(elem, name);
                }
            }

            return ret;
        };
    }

    if (document.documentElement.currentStyle) {
        currentStyle = function(elem, name) {
            var left, rsLeft,
			ret = elem.currentStyle && elem.currentStyle[name],
			style = elem.style;

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            if (!rnumpx.test(ret) && rnum.test(ret)) {
                // Remember the original values
                left = style.left;
                rsLeft = elem.runtimeStyle.left;

                // Put in the new values to get a computed value out
                elem.runtimeStyle.left = elem.currentStyle.left;
                style.left = name === "fontSize" ? "1em" : (ret || 0);
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                elem.runtimeStyle.left = rsLeft;
            }

            return ret === "" ? "auto" : ret;
        };
    }

    curCSS = getComputedStyle || currentStyle;

    function getWH(elem, name, extra) {
        var which = name === "width" ? cssWidth : cssHeight,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight;

        if (extra === "border") {
            return val;
        }

        jQuery.each(which, function() {
            if (!extra) {
                val -= parseFloat(jQuery.css(elem, "padding" + this)) || 0;
            }

            if (extra === "margin") {
                val += parseFloat(jQuery.css(elem, "margin" + this)) || 0;

            } else {
                val -= parseFloat(jQuery.css(elem, "border" + this + "Width")) || 0;
            }
        });

        return val;
    }

    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            var width = elem.offsetWidth,
			height = elem.offsetHeight;

            return (width === 0 && height === 0) || (!jQuery.support.reliableHiddenOffsets && (elem.style.display || jQuery.css(elem, "display")) === "none");
        };

        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
    }




    var jsc = jQuery.now(),
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rinput = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	rnoContent = /^(?:GET|HEAD)$/,
	rbracket = /\[\]$/,
	jsre = /\=\?(&|$)/,
	rquery = /\?/,
	rts = /([?&])_=[^&]*/,
	rurl = /^(\w+:)?\/\/([^\/?#]+)/,
	r20 = /%20/g,
	rhash = /#.*$/,

    // Keep a copy of the old load method
	_load = jQuery.fn.load;

    jQuery.fn.extend({
        load: function(url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments);

                // Don't do a request if no elements are being requested
            } else if (!this.length) {
                return this;
            }

            var off = url.indexOf(" ");
            if (off >= 0) {
                var selector = url.slice(off, url.length);
                url = url.slice(0, off);
            }

            // Default to a GET request
            var type = "GET";

            // If the second parameter was provided
            if (params) {
                // If it's a function
                if (jQuery.isFunction(params)) {
                    // We assume that it's the callback
                    callback = params;
                    params = null;

                    // Otherwise, build a param string
                } else if (typeof params === "object") {
                    params = jQuery.param(params, jQuery.ajaxSettings.traditional);
                    type = "POST";
                }
            }

            var self = this;

            // Request the remote document
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params,
                complete: function(res, status) {
                    // If successful, inject the HTML into all the matched elements
                    if (status === "success" || status === "notmodified") {
                        // See if a selector was specified
                        self.html(selector ?
                        // Create a dummy div to hold the results
						jQuery("<div>")
                        // inject the contents of the document in, removing the scripts
                        // to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(rscript, ""))

                        // Locate the specified elements
							.find(selector) :

                        // If not, just inject the full result
						res.responseText);
                    }

                    if (callback) {
                        self.each(callback, [res.responseText, status, res]);
                    }
                }
            });

            return this;
        },

        serialize: function() {
            return jQuery.param(this.serializeArray());
        },

        serializeArray: function() {
            return this.map(function() {
                return this.elements ? jQuery.makeArray(this.elements) : this;
            })
		.filter(function() {
		    return this.name && !this.disabled &&
				(this.checked || rselectTextarea.test(this.nodeName) ||
					rinput.test(this.type));
		})
		.map(function(i, elem) {
		    var val = jQuery(this).val();

		    return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map(val, function(val, i) {
					    return { name: elem.name, value: val };
					}) :
					{ name: elem.name, value: val };
		}).get();
        }
    });

    // Attach a bunch of functions for handling common AJAX events
    jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(i, o) {
        jQuery.fn[o] = function(f) {
            return this.bind(o, f);
        };
    });

    jQuery.extend({
        get: function(url, data, callback, type) {
            // shift arguments if data argument was omited
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = null;
            }

            return jQuery.ajax({
                type: "GET",
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        },

        getScript: function(url, callback) {
            return jQuery.get(url, null, callback, "script");
        },

        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },

        post: function(url, data, callback, type) {
            // shift arguments if data argument was omited
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = {};
            }

            return jQuery.ajax({
                type: "POST",
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        },

        ajaxSetup: function(settings) {
            jQuery.extend(jQuery.ajaxSettings, settings);
        },

        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            /*
            timeout: 0,
            data: null,
            username: null,
            password: null,
            traditional: false,
            */
            // This function can be overriden by calling jQuery.ajaxSetup
            xhr: function() {
                return new window.XMLHttpRequest();
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },

        ajax: function(origSettings) {
            var s = jQuery.extend(true, {}, jQuery.ajaxSettings, origSettings),
			jsonp, status, data, type = s.type.toUpperCase(), noContent = rnoContent.test(type);

            s.url = s.url.replace(rhash, "");

            // Use original (not extended) context object if it was provided
            s.context = origSettings && origSettings.context != null ? origSettings.context : s;

            // convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }

            // Handle JSONP Parameter Callbacks
            if (s.dataType === "jsonp") {
                if (type === "GET") {
                    if (!jsre.test(s.url)) {
                        s.url += (rquery.test(s.url) ? "&" : "?") + (s.jsonp || "callback") + "=?";
                    }
                } else if (!s.data || !jsre.test(s.data)) {
                    s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
                }
                s.dataType = "json";
            }

            // Build temporary JSONP function
            if (s.dataType === "json" && (s.data && jsre.test(s.data) || jsre.test(s.url))) {
                jsonp = s.jsonpCallback || ("jsonp" + jsc++);

                // Replace the =? sequence both in the query string and the data
                if (s.data) {
                    s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
                }

                s.url = s.url.replace(jsre, "=" + jsonp + "$1");

                // We need to make sure
                // that a JSONP style response is executed properly
                s.dataType = "script";

                // Handle JSONP-style loading
                var customJsonp = window[jsonp];

                window[jsonp] = function(tmp) {
                    if (jQuery.isFunction(customJsonp)) {
                        customJsonp(tmp);

                    } else {
                        // Garbage collect
                        window[jsonp] = undefined;

                        try {
                            delete window[jsonp];
                        } catch (jsonpError) { }
                    }

                    data = tmp;
                    jQuery.handleSuccess(s, xhr, status, data);
                    jQuery.handleComplete(s, xhr, status, data);

                    if (head) {
                        head.removeChild(script);
                    }
                };
            }

            if (s.dataType === "script" && s.cache === null) {
                s.cache = false;
            }

            if (s.cache === false && noContent) {
                var ts = jQuery.now();

                // try replacing _= if it is there
                var ret = s.url.replace(rts, "$1_=" + ts);

                // if nothing was replaced, add timestamp to the end
                s.url = ret + ((ret === s.url) ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
            }

            // If data is available, append data to url for GET/HEAD requests
            if (s.data && noContent) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
            }

            // Watch for a new set of requests
            if (s.global && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }

            // Matches an absolute URL, and saves the domain
            var parts = rurl.exec(s.url),
			remote = parts && (parts[1] && parts[1].toLowerCase() !== location.protocol || parts[2].toLowerCase() !== location.host);

            // If we're requesting a remote document
            // and trying to load JSON or Script with a GET
            if (s.dataType === "script" && type === "GET" && remote) {
                var head = document.getElementsByTagName("head")[0] || document.documentElement;
                var script = document.createElement("script");
                if (s.scriptCharset) {
                    script.charset = s.scriptCharset;
                }
                script.src = s.url;

                // Handle Script loading
                if (!jsonp) {
                    var done = false;

                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function() {
                        if (!done && (!this.readyState ||
							this.readyState === "loaded" || this.readyState === "complete")) {
                            done = true;
                            jQuery.handleSuccess(s, xhr, status, data);
                            jQuery.handleComplete(s, xhr, status, data);

                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;
                            if (head && script.parentNode) {
                                head.removeChild(script);
                            }
                        }
                    };
                }

                // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
                // This arises when a base node is used (#2709 and #4378).
                head.insertBefore(script, head.firstChild);

                // We handle everything using the script element injection
                return undefined;
            }

            var requestDone = false;

            // Create the request object
            var xhr = s.xhr();

            if (!xhr) {
                return;
            }

            // Open the socket
            // Passing null username, generates a login popup on Opera (#2865)
            if (s.username) {
                xhr.open(type, s.url, s.async, s.username, s.password);
            } else {
                xhr.open(type, s.url, s.async);
            }

            // Need an extra try/catch for cross domain requests in Firefox 3
            try {
                // Set content-type if data specified and content-body is valid for this type
                if ((s.data != null && !noContent) || (origSettings && origSettings.contentType)) {
                    xhr.setRequestHeader("Content-Type", s.contentType);
                }

                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                if (s.ifModified) {
                    if (jQuery.lastModified[s.url]) {
                        xhr.setRequestHeader("If-Modified-Since", jQuery.lastModified[s.url]);
                    }

                    if (jQuery.etag[s.url]) {
                        xhr.setRequestHeader("If-None-Match", jQuery.etag[s.url]);
                    }
                }

                // Set header so the called script knows that it's an XMLHttpRequest
                // Only send the header if it's not a remote XHR
                if (!remote) {
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                }

                // Set the Accepts header for the server, depending on the dataType
                xhr.setRequestHeader("Accept", s.dataType && s.accepts[s.dataType] ?
				s.accepts[s.dataType] + ", */*; q=0.01" :
				s.accepts._default);
            } catch (headerError) { }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                // Handle the global AJAX counter
                if (s.global && jQuery.active-- === 1) {
                    jQuery.event.trigger("ajaxStop");
                }

                // close opended socket
                xhr.abort();
                return false;
            }

            if (s.global) {
                jQuery.triggerGlobal(s, "ajaxSend", [xhr, s]);
            }

            // Wait for a response to come back
            var onreadystatechange = xhr.onreadystatechange = function(isTimeout) {
                // The request was aborted
                if (!xhr || xhr.readyState === 0 || isTimeout === "abort") {
                    // Opera doesn't call onreadystatechange before this point
                    // so we simulate the call
                    if (!requestDone) {
                        jQuery.handleComplete(s, xhr, status, data);
                    }

                    requestDone = true;
                    if (xhr) {
                        xhr.onreadystatechange = jQuery.noop;
                    }

                    // The transfer is complete and the data is available, or the request timed out
                } else if (!requestDone && xhr && (xhr.readyState === 4 || isTimeout === "timeout")) {
                    requestDone = true;
                    xhr.onreadystatechange = jQuery.noop;

                    status = isTimeout === "timeout" ?
					"timeout" :
					!jQuery.httpSuccess(xhr) ?
						"error" :
						s.ifModified && jQuery.httpNotModified(xhr, s.url) ?
							"notmodified" :
							"success";

                    var errMsg;

                    if (status === "success") {
                        // Watch for, and catch, XML document parse errors
                        try {
                            // process the data (runs the xml through httpData regardless of callback)
                            data = jQuery.httpData(xhr, s.dataType, s);
                        } catch (parserError) {
                            status = "parsererror";
                            errMsg = parserError;
                        }
                    }

                    // Make sure that the request was successful or notmodified
                    if (status === "success" || status === "notmodified") {
                        // JSONP handles its own success callback
                        if (!jsonp) {
                            jQuery.handleSuccess(s, xhr, status, data);
                        }
                    } else {
                        jQuery.handleError(s, xhr, status, errMsg);
                    }

                    // Fire the complete handlers
                    if (!jsonp) {
                        jQuery.handleComplete(s, xhr, status, data);
                    }

                    if (isTimeout === "timeout") {
                        xhr.abort();
                    }

                    // Stop memory leaks
                    if (s.async) {
                        xhr = null;
                    }
                }
            };

            // Override the abort handler, if we can (IE 6 doesn't allow it, but that's OK)
            // Opera doesn't fire onreadystatechange at all on abort
            try {
                var oldAbort = xhr.abort;
                xhr.abort = function() {
                    if (xhr) {
                        // oldAbort has no call property in IE7 so
                        // just do it this way, which works in all
                        // browsers
                        Function.prototype.call.call(oldAbort, xhr);
                    }

                    onreadystatechange("abort");
                };
            } catch (abortError) { }

            // Timeout checker
            if (s.async && s.timeout > 0) {
                setTimeout(function() {
                    // Check to see if the request is still happening
                    if (xhr && !requestDone) {
                        onreadystatechange("timeout");
                    }
                }, s.timeout);
            }

            // Send the data
            try {
                xhr.send(noContent || s.data == null ? null : s.data);

            } catch (sendError) {
                jQuery.handleError(s, xhr, null, sendError);

                // Fire the complete handlers
                jQuery.handleComplete(s, xhr, status, data);
            }

            // firefox 1.5 doesn't fire statechange for sync requests
            if (!s.async) {
                onreadystatechange();
            }

            // return XMLHttpRequest to allow aborting the request etc.
            return xhr;
        },

        // Serialize an array of form elements or a set of
        // key/values into a query string
        param: function(a, traditional) {
            var s = [],
			add = function(key, value) {
			    // If value is a function, invoke it and return its value
			    value = jQuery.isFunction(value) ? value() : value;
			    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

            // Set traditional to true for jQuery <= 1.3.2 behavior.
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings.traditional;
            }

            // If an array was passed in, assume that it is an array of form elements.
            if (jQuery.isArray(a) || a.jquery) {
                // Serialize the form elements
                jQuery.each(a, function() {
                    add(this.name, this.value);
                });

            } else {
                // If traditional, encode the "old" way (the way 1.3.2 or older
                // did it), otherwise encode params recursively.
                for (var prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }

            // Return the resulting serialization
            return s.join("&").replace(r20, "+");
        }
    });

    function buildParams(prefix, obj, traditional, add) {
        if (jQuery.isArray(obj) && obj.length) {
            // Serialize array item.
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    add(prefix, v);

                } else {
                    // If array item is non-scalar (array or object), encode its
                    // numeric index to resolve deserialization ambiguity issues.
                    // Note that rack (as of 1.0.0) can't currently deserialize
                    // nested arrays properly, and attempting to do so may cause
                    // a server error. Possible fixes are to modify rack's
                    // deserialization algorithm or to provide an option or flag
                    // to force array serialization to be shallow.
                    buildParams(prefix + "[" + (typeof v === "object" || jQuery.isArray(v) ? i : "") + "]", v, traditional, add);
                }
            });

        } else if (!traditional && obj != null && typeof obj === "object") {
            if (jQuery.isEmptyObject(obj)) {
                add(prefix, "");

                // Serialize object item.
            } else {
                jQuery.each(obj, function(k, v) {
                    buildParams(prefix + "[" + k + "]", v, traditional, add);
                });
            }

        } else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }

    // This is still on the jQuery object... for now
    // Want to move this to jQuery.ajax some day
    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        handleError: function(s, xhr, status, e) {
            // If a local callback was specified, fire it
            if (s.error) {
                s.error.call(s.context, xhr, status, e);
            }

            // Fire the global callback
            if (s.global) {
                jQuery.triggerGlobal(s, "ajaxError", [xhr, s, e]);
            }
        },

        handleSuccess: function(s, xhr, status, data) {
            // If a local callback was specified, fire it and pass it the data
            if (s.success) {
                s.success.call(s.context, data, status, xhr);
            }

            // Fire the global callback
            if (s.global) {
                jQuery.triggerGlobal(s, "ajaxSuccess", [xhr, s]);
            }
        },

        handleComplete: function(s, xhr, status) {
            // Process result
            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            // The request was completed
            if (s.global) {
                jQuery.triggerGlobal(s, "ajaxComplete", [xhr, s]);
            }

            // Handle the global AJAX counter
            if (s.global && jQuery.active-- === 1) {
                jQuery.event.trigger("ajaxStop");
            }
        },

        triggerGlobal: function(s, type, args) {
            (s.context && s.context.url == null ? jQuery(s.context) : jQuery.event).trigger(type, args);
        },

        // Determines if an XMLHttpRequest was successful or not
        httpSuccess: function(xhr) {
            try {
                // IE error sometimes returns 1223 when it should be 204 so treat it as success, see #1450
                return !xhr.status && location.protocol === "file:" ||
				xhr.status >= 200 && xhr.status < 300 ||
				xhr.status === 304 || xhr.status === 1223;
            } catch (e) { }

            return false;
        },

        // Determines if an XMLHttpRequest returns NotModified
        httpNotModified: function(xhr, url) {
            var lastModified = xhr.getResponseHeader("Last-Modified"),
			etag = xhr.getResponseHeader("Etag");

            if (lastModified) {
                jQuery.lastModified[url] = lastModified;
            }

            if (etag) {
                jQuery.etag[url] = etag;
            }

            return xhr.status === 304;
        },

        httpData: function(xhr, type, s) {
            var ct = xhr.getResponseHeader("content-type") || "",
			xml = type === "xml" || !type && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === "parsererror") {
                jQuery.error("parsererror");
            }

            // Allow a pre-filtering function to sanitize the response
            // s is checked to keep backwards compatibility
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }

            // The filter can actually parse the response
            if (typeof data === "string") {
                // Get the JavaScript object, if JSON is used.
                if (type === "json" || !type && ct.indexOf("json") >= 0) {
                    data = jQuery.parseJSON(data);

                    // If the type is "script", eval it in global context
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    jQuery.globalEval(data);
                }
            }

            return data;
        }

    });

    /*
    * Create the request object; Microsoft failed to properly
    * implement the XMLHttpRequest in IE7 (can't request local files),
    * so we use the ActiveXObject when it is available
    * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
    * we need a fallback.
    */
    if (window.ActiveXObject) {
        jQuery.ajaxSettings.xhr = function() {
            if (window.location.protocol !== "file:") {
                try {
                    return new window.XMLHttpRequest();
                } catch (xhrError) { }
            }

            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (activeError) { }
        };
    }

    // Does this browser support XHR requests?
    jQuery.support.ajax = !!jQuery.ajaxSettings.xhr();




    var elemdisplay = {},
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)(.*)$/,
	timerId,
	fxAttrs = [
    // height animations
		["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
    // width animations
		["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
    // opacity animations
		["opacity"]
	];

    jQuery.fn.extend({
        show: function(speed, easing, callback) {
            var elem, display;

            if (speed || speed === 0) {
                return this.animate(genFx("show", 3), speed, easing, callback);

            } else {
                for (var i = 0, j = this.length; i < j; i++) {
                    elem = this[i];
                    display = elem.style.display;

                    // Reset the inline display of this element to learn if it is
                    // being hidden by cascaded rules or not
                    if (!jQuery.data(elem, "olddisplay") && display === "none") {
                        display = elem.style.display = "";
                    }

                    // Set elements which have been overridden with display: none
                    // in a stylesheet to whatever the default browser style is
                    // for such an element
                    if (display === "" && jQuery.css(elem, "display") === "none") {
                        jQuery.data(elem, "olddisplay", defaultDisplay(elem.nodeName));
                    }
                }

                // Set the display of most of the elements in a second loop
                // to avoid the constant reflow
                for (i = 0; i < j; i++) {
                    elem = this[i];
                    display = elem.style.display;

                    if (display === "" || display === "none") {
                        elem.style.display = jQuery.data(elem, "olddisplay") || "";
                    }
                }

                return this;
            }
        },

        hide: function(speed, easing, callback) {
            if (speed || speed === 0) {
                return this.animate(genFx("hide", 3), speed, easing, callback);

            } else {
                for (var i = 0, j = this.length; i < j; i++) {
                    var display = jQuery.css(this[i], "display");

                    if (display !== "none") {
                        jQuery.data(this[i], "olddisplay", display);
                    }
                }

                // Set the display of the elements in a second loop
                // to avoid the constant reflow
                for (i = 0; i < j; i++) {
                    this[i].style.display = "none";
                }

                return this;
            }
        },

        // Save the old toggle function
        _toggle: jQuery.fn.toggle,

        toggle: function(fn, fn2, callback) {
            var bool = typeof fn === "boolean";

            if (jQuery.isFunction(fn) && jQuery.isFunction(fn2)) {
                this._toggle.apply(this, arguments);

            } else if (fn == null || bool) {
                this.each(function() {
                    var state = bool ? fn : jQuery(this).is(":hidden");
                    jQuery(this)[state ? "show" : "hide"]();
                });

            } else {
                this.animate(genFx("toggle", 3), fn, fn2, callback);
            }

            return this;
        },

        fadeTo: function(speed, to, easing, callback) {
            return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({ opacity: to }, speed, easing, callback);
        },

        animate: function(prop, speed, easing, callback) {
            var optall = jQuery.speed(speed, easing, callback);

            if (jQuery.isEmptyObject(prop)) {
                return this.each(optall.complete);
            }

            return this[optall.queue === false ? "each" : "queue"](function() {
                // XXX 'this' does not always have a nodeName when running the
                // test suite

                var opt = jQuery.extend({}, optall), p,
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				self = this;

                for (p in prop) {
                    var name = jQuery.camelCase(p);

                    if (p !== name) {
                        prop[name] = prop[p];
                        delete prop[p];
                        p = name;
                    }

                    if (prop[p] === "hide" && hidden || prop[p] === "show" && !hidden) {
                        return opt.complete.call(this);
                    }

                    if (isElement && (p === "height" || p === "width")) {
                        // Make sure that nothing sneaks out
                        // Record all 3 overflow attributes because IE does not
                        // change the overflow attribute when overflowX and
                        // overflowY are set to the same value
                        opt.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];

                        // Set display property to inline-block for height/width
                        // animations on inline elements that are having width/height
                        // animated
                        if (jQuery.css(this, "display") === "inline" &&
							jQuery.css(this, "float") === "none") {
                            if (!jQuery.support.inlineBlockNeedsLayout) {
                                this.style.display = "inline-block";

                            } else {
                                var display = defaultDisplay(this.nodeName);

                                // inline-level elements accept inline-block;
                                // block-level elements need to be inline with layout
                                if (display === "inline") {
                                    this.style.display = "inline-block";

                                } else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1;
                                }
                            }
                        }
                    }

                    if (jQuery.isArray(prop[p])) {
                        // Create (if needed) and add to specialEasing
                        (opt.specialEasing = opt.specialEasing || {})[p] = prop[p][1];
                        prop[p] = prop[p][0];
                    }
                }

                if (opt.overflow != null) {
                    this.style.overflow = "hidden";
                }

                opt.curAnim = jQuery.extend({}, prop);

                jQuery.each(prop, function(name, val) {
                    var e = new jQuery.fx(self, opt, name);

                    if (rfxtypes.test(val)) {
                        e[val === "toggle" ? hidden ? "show" : "hide" : val](prop);

                    } else {
                        var parts = rfxnum.exec(val),
						start = e.cur() || 0;

                        if (parts) {
                            var end = parseFloat(parts[2]),
							unit = parts[3] || "px";

                            // We need to compute starting value
                            if (unit !== "px") {
                                jQuery.style(self, name, (end || 1) + unit);
                                start = ((end || 1) / e.cur()) * start;
                                jQuery.style(self, name, start + unit);
                            }

                            // If a +=/-= token was provided, we're doing a relative animation
                            if (parts[1]) {
                                end = ((parts[1] === "-=" ? -1 : 1) * end) + start;
                            }

                            e.custom(start, end, unit);

                        } else {
                            e.custom(start, val, "");
                        }
                    }
                });

                // For JS strict compliance
                return true;
            });
        },

        stop: function(clearQueue, gotoEnd) {
            var timers = jQuery.timers;

            if (clearQueue) {
                this.queue([]);
            }

            this.each(function() {
                // go in reverse order so anything added to the queue during the loop is ignored
                for (var i = timers.length - 1; i >= 0; i--) {
                    if (timers[i].elem === this) {
                        if (gotoEnd) {
                            // force the next step to be the last
                            timers[i](true);
                        }

                        timers.splice(i, 1);
                    }
                }
            });

            // start the next in the queue if the last step wasn't forced
            if (!gotoEnd) {
                this.dequeue();
            }

            return this;
        }

    });

    function genFx(type, num) {
        var obj = {};

        jQuery.each(fxAttrs.concat.apply([], fxAttrs.slice(0, num)), function() {
            obj[this] = type;
        });

        return obj;
    }

    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show", 1),
        slideUp: genFx("hide", 1),
        slideToggle: genFx("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });

    jQuery.extend({
        speed: function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing ||
				jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };

            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

            // Queueing
            opt.old = opt.complete;
            opt.complete = function() {
                if (opt.queue !== false) {
                    jQuery(this).dequeue();
                }
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this);
                }
            };

            return opt;
        },

        easing: {
            linear: function(p, n, firstNum, diff) {
                return firstNum + diff * p;
            },
            swing: function(p, n, firstNum, diff) {
                return ((-Math.cos(p * Math.PI) / 2) + 0.5) * diff + firstNum;
            }
        },

        timers: [],

        fx: function(elem, options, prop) {
            this.options = options;
            this.elem = elem;
            this.prop = prop;

            if (!options.orig) {
                options.orig = {};
            }
        }

    });

    jQuery.fx.prototype = {
        // Simple function for setting a style value
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }

            (jQuery.fx.step[this.prop] || jQuery.fx.step._default)(this);
        },

        // Get the current size
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }

            var r = parseFloat(jQuery.css(this.elem, this.prop));
            return r && r > -10000 ? r : 0;
        },

        // Start an animation from one number to another
        custom: function(from, to, unit) {
            var self = this,
			fx = jQuery.fx;

            this.startTime = jQuery.now();
            this.start = from;
            this.end = to;
            this.unit = unit || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;

            function t(gotoEnd) {
                return self.step(gotoEnd);
            }

            t.elem = this.elem;

            if (t() && jQuery.timers.push(t) && !timerId) {
                timerId = setInterval(fx.tick, fx.interval);
            }
        },

        // Simple 'show' function
        show: function() {
            // Remember where we started, so that we can go back to it later
            this.options.orig[this.prop] = jQuery.style(this.elem, this.prop);
            this.options.show = true;

            // Begin the animation
            // Make sure that we start at a small width/height to avoid any
            // flash of content
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());

            // Start by showing the element
            jQuery(this.elem).show();
        },

        // Simple 'hide' function
        hide: function() {
            // Remember where we started, so that we can go back to it later
            this.options.orig[this.prop] = jQuery.style(this.elem, this.prop);
            this.options.hide = true;

            // Begin the animation
            this.custom(this.cur(), 0);
        },

        // Each step of an animation
        step: function(gotoEnd) {
            var t = jQuery.now(), done = true;

            if (gotoEnd || t >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();

                this.options.curAnim[this.prop] = true;

                for (var i in this.options.curAnim) {
                    if (this.options.curAnim[i] !== true) {
                        done = false;
                    }
                }

                if (done) {
                    // Reset the overflow
                    if (this.options.overflow != null && !jQuery.support.shrinkWrapBlocks) {
                        var elem = this.elem,
						options = this.options;

                        jQuery.each(["", "X", "Y"], function(index, value) {
                            elem.style["overflow" + value] = options.overflow[index];
                        });
                    }

                    // Hide the element if the "hide" operation was done
                    if (this.options.hide) {
                        jQuery(this.elem).hide();
                    }

                    // Reset the properties, if the item has been hidden or shown
                    if (this.options.hide || this.options.show) {
                        for (var p in this.options.curAnim) {
                            jQuery.style(this.elem, p, this.options.orig[p]);
                        }
                    }

                    // Execute the complete function
                    this.options.complete.call(this.elem);
                }

                return false;

            } else {
                var n = t - this.startTime;
                this.state = n / this.options.duration;

                // Perform the easing function, defaults to swing
                var specialEasing = this.options.specialEasing && this.options.specialEasing[this.prop];
                var defaultEasing = this.options.easing || (jQuery.easing.swing ? "swing" : "linear");
                this.pos = jQuery.easing[specialEasing || defaultEasing](this.state, n, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);

                // Perform the next step of the animation
                this.update();
            }

            return true;
        }
    };

    jQuery.extend(jQuery.fx, {
        tick: function() {
            var timers = jQuery.timers;

            for (var i = 0; i < timers.length; i++) {
                if (!timers[i]()) {
                    timers.splice(i--, 1);
                }
            }

            if (!timers.length) {
                jQuery.fx.stop();
            }
        },

        interval: 13,

        stop: function() {
            clearInterval(timerId);
            timerId = null;
        },

        speeds: {
            slow: 600,
            fast: 200,
            // Default speed
            _default: 400
        },

        step: {
            opacity: function(fx) {
                jQuery.style(fx.elem, "opacity", fx.now);
            },

            _default: function(fx) {
                if (fx.elem.style && fx.elem.style[fx.prop] != null) {
                    fx.elem.style[fx.prop] = (fx.prop === "width" || fx.prop === "height" ? Math.max(0, fx.now) : fx.now) + fx.unit;
                } else {
                    fx.elem[fx.prop] = fx.now;
                }
            }
        }
    });

    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
    }

    function defaultDisplay(nodeName) {
        if (!elemdisplay[nodeName]) {
            var elem = jQuery("<" + nodeName + ">").appendTo("body"),
			display = elem.css("display");

            elem.remove();

            if (display === "none" || display === "") {
                display = "block";
            }

            elemdisplay[nodeName] = display;
        }

        return elemdisplay[nodeName];
    }




    var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

    if ("getBoundingClientRect" in document.documentElement) {
        jQuery.fn.offset = function(options) {
            var elem = this[0], box;

            if (options) {
                return this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }

            if (!elem || !elem.ownerDocument) {
                return null;
            }

            if (elem === elem.ownerDocument.body) {
                return jQuery.offset.bodyOffset(elem);
            }

            try {
                box = elem.getBoundingClientRect();
            } catch (e) { }

            var doc = elem.ownerDocument,
			docElem = doc.documentElement;

            // Make sure we're not dealing with a disconnected DOM node
            if (!box || !jQuery.contains(docElem, elem)) {
                return box || { top: 0, left: 0 };
            }

            var body = doc.body,
			win = getWindow(doc),
			clientTop = docElem.clientTop || body.clientTop || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop = (win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop || body.scrollTop),
			scrollLeft = (win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft),
			top = box.top + scrollTop - clientTop,
			left = box.left + scrollLeft - clientLeft;

            return { top: top, left: left };
        };

    } else {
        jQuery.fn.offset = function(options) {
            var elem = this[0];

            if (options) {
                return this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }

            if (!elem || !elem.ownerDocument) {
                return null;
            }

            if (elem === elem.ownerDocument.body) {
                return jQuery.offset.bodyOffset(elem);
            }

            jQuery.offset.initialize();

            var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

            while ((elem = elem.parentNode) && elem !== body && elem !== docElem) {
                if (jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed") {
                    break;
                }

                computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
                top -= elem.scrollTop;
                left -= elem.scrollLeft;

                if (elem === offsetParent) {
                    top += elem.offsetTop;
                    left += elem.offsetLeft;

                    if (jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && rtable.test(elem.nodeName))) {
                        top += parseFloat(computedStyle.borderTopWidth) || 0;
                        left += parseFloat(computedStyle.borderLeftWidth) || 0;
                    }

                    prevOffsetParent = offsetParent;
                    offsetParent = elem.offsetParent;
                }

                if (jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible") {
                    top += parseFloat(computedStyle.borderTopWidth) || 0;
                    left += parseFloat(computedStyle.borderLeftWidth) || 0;
                }

                prevComputedStyle = computedStyle;
            }

            if (prevComputedStyle.position === "relative" || prevComputedStyle.position === "static") {
                top += body.offsetTop;
                left += body.offsetLeft;
            }

            if (jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed") {
                top += Math.max(docElem.scrollTop, body.scrollTop);
                left += Math.max(docElem.scrollLeft, body.scrollLeft);
            }

            return { top: top, left: left };
        };
    }

    jQuery.offset = {
        initialize: function() {
            var body = document.body, container = document.createElement("div"), innerDiv, checkDiv, table, td, bodyMarginTop = parseFloat(jQuery.css(body, "marginTop")) || 0,
			html = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";

            jQuery.extend(container.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" });

            container.innerHTML = html;
            body.insertBefore(container, body.firstChild);
            innerDiv = container.firstChild;
            checkDiv = innerDiv.firstChild;
            td = innerDiv.nextSibling.firstChild.firstChild;

            this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

            checkDiv.style.position = "fixed";
            checkDiv.style.top = "20px";

            // safari subtracts parent border width here which is 5px
            this.supportsFixedPosition = (checkDiv.offsetTop === 20 || checkDiv.offsetTop === 15);
            checkDiv.style.position = checkDiv.style.top = "";

            innerDiv.style.overflow = "hidden";
            innerDiv.style.position = "relative";

            this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

            this.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== bodyMarginTop);

            body.removeChild(container);
            body = container = innerDiv = checkDiv = table = td = null;
            jQuery.offset.initialize = jQuery.noop;
        },

        bodyOffset: function(body) {
            var top = body.offsetTop,
			left = body.offsetLeft;

            jQuery.offset.initialize();

            if (jQuery.offset.doesNotIncludeMarginInBodyOffset) {
                top += parseFloat(jQuery.css(body, "marginTop")) || 0;
                left += parseFloat(jQuery.css(body, "marginLeft")) || 0;
            }

            return { top: top, left: left };
        },

        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");

            // set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }

            var curElem = jQuery(elem),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css(elem, "top"),
			curCSSLeft = jQuery.css(elem, "left"),
			calculatePosition = (position === "absolute" && jQuery.inArray('auto', [curCSSTop, curCSSLeft]) > -1),
			props = {}, curPosition = {}, curTop, curLeft;

            // need to be able to calculate position if either top or left is auto and position is absolute
            if (calculatePosition) {
                curPosition = curElem.position();
            }

            curTop = calculatePosition ? curPosition.top : parseInt(curCSSTop, 10) || 0;
            curLeft = calculatePosition ? curPosition.left : parseInt(curCSSLeft, 10) || 0;

            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }

            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }

            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };


    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return null;
            }

            var elem = this[0],

            // Get *real* offsetParent
		offsetParent = this.offsetParent(),

            // Get correct offsets
		offset = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0} : offsetParent.offset();

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top -= parseFloat(jQuery.css(elem, "marginTop")) || 0;
            offset.left -= parseFloat(jQuery.css(elem, "marginLeft")) || 0;

            // Add offsetParent borders
            parentOffset.top += parseFloat(jQuery.css(offsetParent[0], "borderTopWidth")) || 0;
            parentOffset.left += parseFloat(jQuery.css(offsetParent[0], "borderLeftWidth")) || 0;

            // Subtract the two offsets
            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        },

        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || document.body;
                while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent;
            });
        }
    });


    // Create scrollLeft and scrollTop methods
    jQuery.each(["Left", "Top"], function(i, name) {
        var method = "scroll" + name;

        jQuery.fn[method] = function(val) {
            var elem = this[0], win;

            if (!elem) {
                return null;
            }

            if (val !== undefined) {
                // Set the scroll offset
                return this.each(function() {
                    win = getWindow(this);

                    if (win) {
                        win.scrollTo(
						!i ? val : jQuery(win).scrollLeft(),
						 i ? val : jQuery(win).scrollTop()
					);

                    } else {
                        this[method] = val;
                    }
                });
            } else {
                win = getWindow(elem);

                // Return the scroll offset
                return win ? ("pageXOffset" in win) ? win[i ? "pageYOffset" : "pageXOffset"] :
				jQuery.support.boxModel && win.document.documentElement[method] ||
					win.document.body[method] :
				elem[method];
            }
        };
    });

    function getWindow(elem) {
        return jQuery.isWindow(elem) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
    }




    // Create innerHeight, innerWidth, outerHeight and outerWidth methods
    jQuery.each(["Height", "Width"], function(i, name) {

        var type = name.toLowerCase();

        // innerHeight and innerWidth
        jQuery.fn["inner" + name] = function() {
            return this[0] ?
			parseFloat(jQuery.css(this[0], type, "padding")) :
			null;
        };

        // outerHeight and outerWidth
        jQuery.fn["outer" + name] = function(margin) {
            return this[0] ?
			parseFloat(jQuery.css(this[0], type, margin ? "margin" : "border")) :
			null;
        };

        jQuery.fn[type] = function(size) {
            // Get window width or height
            var elem = this[0];
            if (!elem) {
                return size == null ? null : this;
            }

            if (jQuery.isFunction(size)) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    self[type](size.call(this, i, self[type]()));
                });
            }

            if (jQuery.isWindow(elem)) {
                // Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
                return elem.document.compatMode === "CSS1Compat" && elem.document.documentElement["client" + name] ||
				elem.document.body["client" + name];

                // Get document width or height
            } else if (elem.nodeType === 9) {
                // Either scroll[Width/Height] or offset[Width/Height], whichever is greater
                return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

                // Get or set width or height on the element
            } else if (size === undefined) {
                var orig = jQuery.css(elem, type),
				ret = parseFloat(orig);

                return jQuery.isNaN(ret) ? orig : ret;

                // Set the width or height on the element (default to pixels if value is unitless)
            } else {
                return this.css(type, typeof size === "string" ? size : size + "px");
            }
        };

    });


})(window);
/*!
 * jQuery UI 1.8.9
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */

(function(b,c){function f(g){return!b(g).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.9",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(g,e){return typeof g==="number"?this.each(function(){var a=this;setTimeout(function(){b(a).focus();e&&e.call(a)},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;g=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,
"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!g.length?b(document):g},zIndex:function(g){if(g!==c)return this.css("zIndex",g);if(this.length){g=b(this[0]);for(var e;g.length&&g[0]!==document;){e=g.css("position");
if(e==="absolute"||e==="relative"||e==="fixed"){e=parseInt(g.css("zIndex"),10);if(!isNaN(e)&&e!==0)return e}g=g.parent()}}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.each(["Width","Height"],function(g,e){function a(j,n,q,l){b.each(d,function(){n-=parseFloat(b.curCSS(j,"padding"+this,true))||0;if(q)n-=parseFloat(b.curCSS(j,
"border"+this+"Width",true))||0;if(l)n-=parseFloat(b.curCSS(j,"margin"+this,true))||0});return n}var d=e==="Width"?["Left","Right"]:["Top","Bottom"],h=e.toLowerCase(),i={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+e]=function(j){if(j===c)return i["inner"+e].call(this);return this.each(function(){b(this).css(h,a(this,j)+"px")})};b.fn["outer"+e]=function(j,n){if(typeof j!=="number")return i["outer"+e].call(this,j);return this.each(function(){b(this).css(h,
a(this,j,true,n)+"px")})}});b.extend(b.expr[":"],{data:function(g,e,a){return!!b.data(g,a[3])},focusable:function(g){var e=g.nodeName.toLowerCase(),a=b.attr(g,"tabindex");if("area"===e){e=g.parentNode;a=e.name;if(!g.href||!a||e.nodeName.toLowerCase()!=="map")return false;g=b("img[usemap=#"+a+"]")[0];return!!g&&f(g)}return(/input|select|textarea|button|object/.test(e)?!g.disabled:"a"==e?g.href||!isNaN(a):!isNaN(a))&&f(g)},tabbable:function(g){var e=b.attr(g,"tabindex");return(isNaN(e)||e>=0)&&b(g).is(":focusable")}});
b(function(){var g=document.body,e=g.appendChild(e=document.createElement("div"));b.extend(e.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=e.offsetHeight===100;b.support.selectstart="onselectstart"in e;g.removeChild(e).style.display="none"});b.extend(b.ui,{plugin:{add:function(g,e,a){g=b.ui[g].prototype;for(var d in a){g.plugins[d]=g.plugins[d]||[];g.plugins[d].push([e,a[d]])}},call:function(g,e,a){if((e=g.plugins[e])&&g.element[0].parentNode)for(var d=0;d<e.length;d++)g.options[e[d][0]]&&
e[d][1].apply(g.element,a)}},contains:function(g,e){return document.compareDocumentPosition?g.compareDocumentPosition(e)&16:g!==e&&g.contains(e)},hasScroll:function(g,e){if(b(g).css("overflow")==="hidden")return false;e=e&&e==="left"?"scrollLeft":"scrollTop";var a=false;if(g[e]>0)return true;g[e]=1;a=g[e]>0;g[e]=0;return a},isOverAxis:function(g,e,a){return g>e&&g<e+a},isOver:function(g,e,a,d,h,i){return b.ui.isOverAxis(g,a,h)&&b.ui.isOverAxis(e,d,i)}})}})(jQuery);
(function(b,c){if(b.cleanData){var f=b.cleanData;b.cleanData=function(e){for(var a=0,d;(d=e[a])!=null;a++)b(d).triggerHandler("remove");f(e)}}else{var g=b.fn.remove;b.fn.remove=function(e,a){return this.each(function(){if(!a)if(!e||b.filter(e,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return g.call(b(this),e,a)})}}b.widget=function(e,a,d){var h=e.split(".")[0],i;e=e.split(".")[1];i=h+"-"+e;if(!d){d=a;a=b.Widget}b.expr[":"][i]=function(j){return!!b.data(j,
e)};b[h]=b[h]||{};b[h][e]=function(j,n){arguments.length&&this._createWidget(j,n)};a=new a;a.options=b.extend(true,{},a.options);b[h][e].prototype=b.extend(true,a,{namespace:h,widgetName:e,widgetEventPrefix:b[h][e].prototype.widgetEventPrefix||e,widgetBaseClass:i},d);b.widget.bridge(e,b[h][e])};b.widget.bridge=function(e,a){b.fn[e]=function(d){var h=typeof d==="string",i=Array.prototype.slice.call(arguments,1),j=this;d=!h&&i.length?b.extend.apply(null,[true,d].concat(i)):d;if(h&&d.charAt(0)==="_")return j;
h?this.each(function(){var n=b.data(this,e),q=n&&b.isFunction(n[d])?n[d].apply(n,i):n;if(q!==n&&q!==c){j=q;return false}}):this.each(function(){var n=b.data(this,e);n?n.option(d||{})._init():b.data(this,e,new a(d,this))});return j}};b.Widget=function(e,a){arguments.length&&this._createWidget(e,a)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(e,a){b.data(a,this.widgetName,this);this.element=b(a);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),e);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(e,a){var d=e;if(arguments.length===0)return b.extend({},this.options);if(typeof e==="string"){if(a===c)return this.options[e];d={};d[e]=a}this._setOptions(d);return this},_setOptions:function(e){var a=this;b.each(e,function(d,h){a._setOption(d,h)});return this},_setOption:function(e,a){this.options[e]=a;if(e==="disabled")this.widget()[a?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",a);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(e,a,d){var h=this.options[e];a=b.Event(a);a.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();d=d||{};if(a.originalEvent){e=b.event.props.length;for(var i;e;){i=b.event.props[--e];a[i]=a.originalEvent[i]}}this.element.trigger(a,d);return!(b.isFunction(h)&&h.call(this.element[0],a,d)===false||a.isDefaultPrevented())}}})(jQuery);
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var c=this;this.element.bind("mousedown."+this.widgetName,function(f){return c._mouseDown(f)}).bind("click."+this.widgetName,function(f){if(true===b.data(f.target,c.widgetName+".preventClickEvent")){b.removeData(f.target,c.widgetName+".preventClickEvent");f.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(c){c.originalEvent=
c.originalEvent||{};if(!c.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(c);this._mouseDownEvent=c;var f=this,g=c.which==1,e=typeof this.options.cancel=="string"?b(c.target).parents().add(c.target).filter(this.options.cancel).length:false;if(!g||e||!this._mouseCapture(c))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)){this._mouseStarted=
this._mouseStart(c)!==false;if(!this._mouseStarted){c.preventDefault();return true}}this._mouseMoveDelegate=function(a){return f._mouseMove(a)};this._mouseUpDelegate=function(a){return f._mouseUp(a)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.preventDefault();return c.originalEvent.mouseHandled=true}},_mouseMove:function(c){if(b.browser.msie&&!(document.documentMode>=9)&&!c.button)return this._mouseUp(c);if(this._mouseStarted){this._mouseDrag(c);
return c.preventDefault()}if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==false)?this._mouseDrag(c):this._mouseUp(c);return!this._mouseStarted},_mouseUp:function(c){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;c.target==this._mouseDownEvent.target&&b.data(c.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(c)}return false},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(b){b.widget("ui.draggable",b.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(c){var f=
this.options;if(this.helper||f.disabled||b(c.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(c);if(!this.handle)return false;return true},_mouseStart:function(c){var f=this.options;this.helper=this._createHelper(c);this._cacheHelperProportions();if(b.ui.ddmanager)b.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};b.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;f.cursorAt&&this._adjustOffsetFromHelper(f.cursorAt);f.containment&&this._setContainment();if(this._trigger("start",c)===false){this._clear();return false}this._cacheHelperProportions();
b.ui.ddmanager&&!f.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,c);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(c,true);return true},_mouseDrag:function(c,f){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!f){f=this._uiHash();if(this._trigger("drag",c,f)===false){this._mouseUp({});return false}this.position=f.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";b.ui.ddmanager&&b.ui.ddmanager.drag(this,c);return false},_mouseStop:function(c){var f=false;if(b.ui.ddmanager&&!this.options.dropBehaviour)f=b.ui.ddmanager.drop(this,c);if(this.dropped){f=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!f||this.options.revert=="valid"&&f||this.options.revert===true||b.isFunction(this.options.revert)&&
this.options.revert.call(this.element,f)){var g=this;b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){g._trigger("stop",c)!==false&&g._clear()})}else this._trigger("stop",c)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(c){var f=!this.options.handle||!b(this.options.handle,this.element).length?true:false;b(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
c.target)f=true});return f},_createHelper:function(c){var f=this.options;c=b.isFunction(f.helper)?b(f.helper.apply(this.element[0],[c])):f.helper=="clone"?this.element.clone():this.element;c.parents("body").length||c.appendTo(f.appendTo=="parent"?this.element[0].parentNode:f.appendTo);c[0]!=this.element[0]&&!/(fixed|absolute)/.test(c.css("position"))&&c.css("position","absolute");return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string")c=c.split(" ");if(b.isArray(c))c={left:+c[0],top:+c[1]||
0};if("left"in c)this.offset.click.left=c.left+this.margins.left;if("right"in c)this.offset.click.left=this.helperProportions.width-c.right+this.margins.left;if("top"in c)this.offset.click.top=c.top+this.margins.top;if("bottom"in c)this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)c={top:0,left:0};return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();return{top:c.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var c=this.options;if(c.containment==
"parent")c.containment=this.helper[0].parentNode;if(c.containment=="document"||c.containment=="window")this.containment=[(c.containment=="document"?0:b(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(c.containment=="document"?0:b(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(c.containment=="document"?0:b(window).scrollLeft())+b(c.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(c.containment=="document"?
0:b(window).scrollTop())+(b(c.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(c.containment)&&c.containment.constructor!=Array){var f=b(c.containment)[0];if(f){c=b(c.containment).offset();var g=b(f).css("overflow")!="hidden";this.containment=[c.left+(parseInt(b(f).css("borderLeftWidth"),10)||0)+(parseInt(b(f).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(b(f).css("borderTopWidth"),
10)||0)+(parseInt(b(f).css("paddingTop"),10)||0)-this.margins.top,c.left+(g?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(b(f).css("borderLeftWidth"),10)||0)-(parseInt(b(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(g?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(b(f).css("borderTopWidth"),10)||0)-(parseInt(b(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}}else if(c.containment.constructor==
Array)this.containment=c.containment},_convertPositionTo:function(c,f){if(!f)f=this.position;c=c=="absolute"?1:-1;var g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(g[0].tagName);return{top:f.top+this.offset.relative.top*c+this.offset.parent.top*c-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():
e?0:g.scrollTop())*c),left:f.left+this.offset.relative.left*c+this.offset.parent.left*c-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:g.scrollLeft())*c)}},_generatePosition:function(c){var f=this.options,g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(g[0].tagName),a=c.pageX,d=c.pageY;
if(this.originalPosition){if(this.containment){if(c.pageX-this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(c.pageY-this.offset.click.top<this.containment[1])d=this.containment[1]+this.offset.click.top;if(c.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(c.pageY-this.offset.click.top>this.containment[3])d=this.containment[3]+this.offset.click.top}if(f.grid){d=this.originalPageY+Math.round((d-this.originalPageY)/
f.grid[1])*f.grid[1];d=this.containment?!(d-this.offset.click.top<this.containment[1]||d-this.offset.click.top>this.containment[3])?d:!(d-this.offset.click.top<this.containment[1])?d-f.grid[1]:d+f.grid[1]:d;a=this.originalPageX+Math.round((a-this.originalPageX)/f.grid[0])*f.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?a:!(a-this.offset.click.left<this.containment[0])?a-f.grid[0]:a+f.grid[0]:a}}return{top:d-this.offset.click.top-
this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:g.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:g.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=
this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(c,f,g){g=g||this._uiHash();b.ui.plugin.call(this,c,[f,g]);if(c=="drag")this.positionAbs=this._convertPositionTo("absolute");return b.Widget.prototype._trigger.call(this,c,f,g)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});b.extend(b.ui.draggable,{version:"1.8.9"});
b.ui.plugin.add("draggable","connectToSortable",{start:function(c,f){var g=b(this).data("draggable"),e=g.options,a=b.extend({},f,{item:g.element});g.sortables=[];b(e.connectToSortable).each(function(){var d=b.data(this,"sortable");if(d&&!d.options.disabled){g.sortables.push({instance:d,shouldRevert:d.options.revert});d._refreshItems();d._trigger("activate",c,a)}})},stop:function(c,f){var g=b(this).data("draggable"),e=b.extend({},f,{item:g.element});b.each(g.sortables,function(){if(this.instance.isOver){this.instance.isOver=
0;g.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;g.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,e)}})},drag:function(c,f){var g=b(this).data("draggable"),e=this;b.each(g.sortables,function(){this.instance.positionAbs=
g.positionAbs;this.instance.helperProportions=g.helperProportions;this.instance.offset.click=g.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=b(e).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,
true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=g.offset.click.top;this.instance.offset.click.left=g.offset.click.left;this.instance.offset.parent.left-=g.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=g.offset.parent.top-this.instance.offset.parent.top;g._trigger("toSortable",c);g.dropped=this.instance.element;g.currentItem=g.element;this.instance.fromOutside=g}this.instance.currentItem&&this.instance._mouseDrag(c)}else if(this.instance.isOver){this.instance.isOver=
0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();g._trigger("fromSortable",c);g.dropped=false}})}});b.ui.plugin.add("draggable","cursor",{start:function(){var c=b("body"),f=b(this).data("draggable").options;if(c.css("cursor"))f._cursor=
c.css("cursor");c.css("cursor",f.cursor)},stop:function(){var c=b(this).data("draggable").options;c._cursor&&b("body").css("cursor",c._cursor)}});b.ui.plugin.add("draggable","iframeFix",{start:function(){var c=b(this).data("draggable").options;b(c.iframeFix===true?"iframe":c.iframeFix).each(function(){b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(b(this).offset()).appendTo("body")})},
stop:function(){b("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});b.ui.plugin.add("draggable","opacity",{start:function(c,f){c=b(f.helper);f=b(this).data("draggable").options;if(c.css("opacity"))f._opacity=c.css("opacity");c.css("opacity",f.opacity)},stop:function(c,f){c=b(this).data("draggable").options;c._opacity&&b(f.helper).css("opacity",c._opacity)}});b.ui.plugin.add("draggable","scroll",{start:function(){var c=b(this).data("draggable");if(c.scrollParent[0]!=
document&&c.scrollParent[0].tagName!="HTML")c.overflowOffset=c.scrollParent.offset()},drag:function(c){var f=b(this).data("draggable"),g=f.options,e=false;if(f.scrollParent[0]!=document&&f.scrollParent[0].tagName!="HTML"){if(!g.axis||g.axis!="x")if(f.overflowOffset.top+f.scrollParent[0].offsetHeight-c.pageY<g.scrollSensitivity)f.scrollParent[0].scrollTop=e=f.scrollParent[0].scrollTop+g.scrollSpeed;else if(c.pageY-f.overflowOffset.top<g.scrollSensitivity)f.scrollParent[0].scrollTop=e=f.scrollParent[0].scrollTop-
g.scrollSpeed;if(!g.axis||g.axis!="y")if(f.overflowOffset.left+f.scrollParent[0].offsetWidth-c.pageX<g.scrollSensitivity)f.scrollParent[0].scrollLeft=e=f.scrollParent[0].scrollLeft+g.scrollSpeed;else if(c.pageX-f.overflowOffset.left<g.scrollSensitivity)f.scrollParent[0].scrollLeft=e=f.scrollParent[0].scrollLeft-g.scrollSpeed}else{if(!g.axis||g.axis!="x")if(c.pageY-b(document).scrollTop()<g.scrollSensitivity)e=b(document).scrollTop(b(document).scrollTop()-g.scrollSpeed);else if(b(window).height()-
(c.pageY-b(document).scrollTop())<g.scrollSensitivity)e=b(document).scrollTop(b(document).scrollTop()+g.scrollSpeed);if(!g.axis||g.axis!="y")if(c.pageX-b(document).scrollLeft()<g.scrollSensitivity)e=b(document).scrollLeft(b(document).scrollLeft()-g.scrollSpeed);else if(b(window).width()-(c.pageX-b(document).scrollLeft())<g.scrollSensitivity)e=b(document).scrollLeft(b(document).scrollLeft()+g.scrollSpeed)}e!==false&&b.ui.ddmanager&&!g.dropBehaviour&&b.ui.ddmanager.prepareOffsets(f,c)}});b.ui.plugin.add("draggable",
"snap",{start:function(){var c=b(this).data("draggable"),f=c.options;c.snapElements=[];b(f.snap.constructor!=String?f.snap.items||":data(draggable)":f.snap).each(function(){var g=b(this),e=g.offset();this!=c.element[0]&&c.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:e.top,left:e.left})})},drag:function(c,f){for(var g=b(this).data("draggable"),e=g.options,a=e.snapTolerance,d=f.offset.left,h=d+g.helperProportions.width,i=f.offset.top,j=i+g.helperProportions.height,n=
g.snapElements.length-1;n>=0;n--){var q=g.snapElements[n].left,l=q+g.snapElements[n].width,k=g.snapElements[n].top,m=k+g.snapElements[n].height;if(q-a<d&&d<l+a&&k-a<i&&i<m+a||q-a<d&&d<l+a&&k-a<j&&j<m+a||q-a<h&&h<l+a&&k-a<i&&i<m+a||q-a<h&&h<l+a&&k-a<j&&j<m+a){if(e.snapMode!="inner"){var o=Math.abs(k-j)<=a,p=Math.abs(m-i)<=a,s=Math.abs(q-h)<=a,r=Math.abs(l-d)<=a;if(o)f.position.top=g._convertPositionTo("relative",{top:k-g.helperProportions.height,left:0}).top-g.margins.top;if(p)f.position.top=g._convertPositionTo("relative",
{top:m,left:0}).top-g.margins.top;if(s)f.position.left=g._convertPositionTo("relative",{top:0,left:q-g.helperProportions.width}).left-g.margins.left;if(r)f.position.left=g._convertPositionTo("relative",{top:0,left:l}).left-g.margins.left}var u=o||p||s||r;if(e.snapMode!="outer"){o=Math.abs(k-i)<=a;p=Math.abs(m-j)<=a;s=Math.abs(q-d)<=a;r=Math.abs(l-h)<=a;if(o)f.position.top=g._convertPositionTo("relative",{top:k,left:0}).top-g.margins.top;if(p)f.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,
left:0}).top-g.margins.top;if(s)f.position.left=g._convertPositionTo("relative",{top:0,left:q}).left-g.margins.left;if(r)f.position.left=g._convertPositionTo("relative",{top:0,left:l-g.helperProportions.width}).left-g.margins.left}if(!g.snapElements[n].snapping&&(o||p||s||r||u))g.options.snap.snap&&g.options.snap.snap.call(g.element,c,b.extend(g._uiHash(),{snapItem:g.snapElements[n].item}));g.snapElements[n].snapping=o||p||s||r||u}else{g.snapElements[n].snapping&&g.options.snap.release&&g.options.snap.release.call(g.element,
c,b.extend(g._uiHash(),{snapItem:g.snapElements[n].item}));g.snapElements[n].snapping=false}}}});b.ui.plugin.add("draggable","stack",{start:function(){var c=b(this).data("draggable").options;c=b.makeArray(b(c.stack)).sort(function(g,e){return(parseInt(b(g).css("zIndex"),10)||0)-(parseInt(b(e).css("zIndex"),10)||0)});if(c.length){var f=parseInt(c[0].style.zIndex)||0;b(c).each(function(g){this.style.zIndex=f+g});this[0].style.zIndex=f+c.length}}});b.ui.plugin.add("draggable","zIndex",{start:function(c,
f){c=b(f.helper);f=b(this).data("draggable").options;if(c.css("zIndex"))f._zIndex=c.css("zIndex");c.css("zIndex",f.zIndex)},stop:function(c,f){c=b(this).data("draggable").options;c._zIndex&&b(f.helper).css("zIndex",c._zIndex)}})})(jQuery);
(function(b){b.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var c=this.options,f=c.accept;this.isover=0;this.isout=1;this.accept=b.isFunction(f)?f:function(g){return g.is(f)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};b.ui.ddmanager.droppables[c.scope]=b.ui.ddmanager.droppables[c.scope]||[];b.ui.ddmanager.droppables[c.scope].push(this);
c.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var c=b.ui.ddmanager.droppables[this.options.scope],f=0;f<c.length;f++)c[f]==this&&c.splice(f,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(c,f){if(c=="accept")this.accept=b.isFunction(f)?f:function(g){return g.is(f)};b.Widget.prototype._setOption.apply(this,arguments)},_activate:function(c){var f=b.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);f&&this._trigger("activate",c,this.ui(f))},_deactivate:function(c){var f=b.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);f&&this._trigger("deactivate",c,this.ui(f))},_over:function(c){var f=b.ui.ddmanager.current;if(!(!f||(f.currentItem||f.element)[0]==this.element[0]))if(this.accept.call(this.element[0],f.currentItem||f.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",c,this.ui(f))}},_out:function(c){var f=b.ui.ddmanager.current;if(!(!f||(f.currentItem||f.element)[0]==this.element[0]))if(this.accept.call(this.element[0],f.currentItem||f.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",c,this.ui(f))}},_drop:function(c,f){var g=f||b.ui.ddmanager.current;if(!g||(g.currentItem||g.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var a=
b.data(this,"droppable");if(a.options.greedy&&!a.options.disabled&&a.options.scope==g.options.scope&&a.accept.call(a.element[0],g.currentItem||g.element)&&b.ui.intersect(g,b.extend(a,{offset:a.element.offset()}),a.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],g.currentItem||g.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
c,this.ui(g));return this.element}return false},ui:function(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs}}});b.extend(b.ui.droppable,{version:"1.8.9"});b.ui.intersect=function(c,f,g){if(!f.offset)return false;var e=(c.positionAbs||c.position.absolute).left,a=e+c.helperProportions.width,d=(c.positionAbs||c.position.absolute).top,h=d+c.helperProportions.height,i=f.offset.left,j=i+f.proportions.width,n=f.offset.top,q=n+f.proportions.height;
switch(g){case "fit":return i<=e&&a<=j&&n<=d&&h<=q;case "intersect":return i<e+c.helperProportions.width/2&&a-c.helperProportions.width/2<j&&n<d+c.helperProportions.height/2&&h-c.helperProportions.height/2<q;case "pointer":return b.ui.isOver((c.positionAbs||c.position.absolute).top+(c.clickOffset||c.offset.click).top,(c.positionAbs||c.position.absolute).left+(c.clickOffset||c.offset.click).left,n,i,f.proportions.height,f.proportions.width);case "touch":return(d>=n&&d<=q||h>=n&&h<=q||d<n&&h>q)&&(e>=
i&&e<=j||a>=i&&a<=j||e<i&&a>j);default:return false}};b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(c,f){var g=b.ui.ddmanager.droppables[c.options.scope]||[],e=f?f.type:null,a=(c.currentItem||c.element).find(":data(droppable)").andSelf(),d=0;a:for(;d<g.length;d++)if(!(g[d].options.disabled||c&&!g[d].accept.call(g[d].element[0],c.currentItem||c.element))){for(var h=0;h<a.length;h++)if(a[h]==g[d].element[0]){g[d].proportions.height=0;continue a}g[d].visible=g[d].element.css("display")!=
"none";if(g[d].visible){g[d].offset=g[d].element.offset();g[d].proportions={width:g[d].element[0].offsetWidth,height:g[d].element[0].offsetHeight};e=="mousedown"&&g[d]._activate.call(g[d],f)}}},drop:function(c,f){var g=false;b.each(b.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&b.ui.intersect(c,this,this.options.tolerance))g=g||this._drop.call(this,f);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],c.currentItem||
c.element)){this.isout=1;this.isover=0;this._deactivate.call(this,f)}}});return g},drag:function(c,f){c.options.refreshPositions&&b.ui.ddmanager.prepareOffsets(c,f);b.each(b.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var g=b.ui.intersect(c,this,this.options.tolerance);if(g=!g&&this.isover==1?"isout":g&&this.isover==0?"isover":null){var e;if(this.options.greedy){var a=this.element.parents(":data(droppable):eq(0)");if(a.length){e=
b.data(a[0],"droppable");e.greedyChild=g=="isover"?1:0}}if(e&&g=="isover"){e.isover=0;e.isout=1;e._out.call(e,f)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,f);if(e&&g=="isout"){e.isout=0;e.isover=1;e._over.call(e,f)}}}})}}})(jQuery);
(function(b){b.widget("ui.resizable",b.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var g=this,e=this.options;this.element.addClass("ui-resizable");b.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&b.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(b('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=e.handles||(!b(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var a=this.handles.split(",");this.handles={};for(var d=0;d<a.length;d++){var h=b.trim(a[d]),i=b('<div class="ui-resizable-handle '+("ui-resizable-"+h)+'"></div>');/sw|se|ne|nw/.test(h)&&i.css({zIndex:++e.zIndex});"se"==h&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[h]=".ui-resizable-"+h;this.element.append(i)}}this._renderAxis=function(j){j=j||this.element;for(var n in this.handles){if(this.handles[n].constructor==
String)this.handles[n]=b(this.handles[n],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var q=b(this.handles[n],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(n)?q.outerHeight():q.outerWidth();q=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");j.css(q,l);this._proportionallyResize()}b(this.handles[n])}};this._renderAxis(this.element);this._handles=b(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!g.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);g.axis=j&&j[1]?j[1]:"se"}});if(e.autoHide){this._handles.hide();b(this.element).addClass("ui-resizable-autohide").hover(function(){b(this).removeClass("ui-resizable-autohide");g._handles.show()},function(){if(!g.resizing){b(this).addClass("ui-resizable-autohide");g._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var g=function(a){b(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){g(this.element);var e=this.element;e.after(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);g(this.originalElement);return this},_mouseCapture:function(g){var e=false;for(var a in this.handles)if(b(this.handles[a])[0]==g.target)e=true;return!this.options.disabled&&e},_mouseStart:function(g){var e=this.options,a=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:b(document).scrollTop(),left:b(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:a.top,left:a.left});b.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();a=c(this.helper.css("left"));var h=c(this.helper.css("top"));if(e.containment){a+=b(e.containment).scrollLeft()||0;h+=b(e.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:a,top:h};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:a,top:h};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:g.pageX,top:g.pageY};this.aspectRatio=typeof e.aspectRatio=="number"?e.aspectRatio:
this.originalSize.width/this.originalSize.height||1;e=b(".ui-resizable-"+this.axis).css("cursor");b("body").css("cursor",e=="auto"?this.axis+"-resize":e);d.addClass("ui-resizable-resizing");this._propagate("start",g);return true},_mouseDrag:function(g){var e=this.helper,a=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;a=d.apply(this,[g,g.pageX-a.left||0,g.pageY-a.top||0]);if(this._aspectRatio||g.shiftKey)a=this._updateRatio(a,g);a=this._respectSize(a,g);this._propagate("resize",
g);e.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(a);this._trigger("resize",g,this.ui());return false},_mouseStop:function(g){this.resizing=false;var e=this.options,a=this;if(this._helper){var d=this._proportionallyResizeElements,h=d.length&&/textarea/i.test(d[0].nodeName);d=h&&b.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;
h={width:a.size.width-(h?0:a.sizeDiff.width),height:a.size.height-d};d=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var i=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;e.animate||this.element.css(b.extend(h,{top:i,left:d}));a.helper.height(a.size.height);a.helper.width(a.size.width);this._helper&&!e.animate&&this._proportionallyResize()}b("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",
g);this._helper&&this.helper.remove();return false},_updateCache:function(g){this.offset=this.helper.offset();if(f(g.left))this.position.left=g.left;if(f(g.top))this.position.top=g.top;if(f(g.height))this.size.height=g.height;if(f(g.width))this.size.width=g.width},_updateRatio:function(g){var e=this.position,a=this.size,d=this.axis;if(g.height)g.width=a.height*this.aspectRatio;else if(g.width)g.height=a.width/this.aspectRatio;if(d=="sw"){g.left=e.left+(a.width-g.width);g.top=null}if(d=="nw"){g.top=
e.top+(a.height-g.height);g.left=e.left+(a.width-g.width)}return g},_respectSize:function(g){var e=this.options,a=this.axis,d=f(g.width)&&e.maxWidth&&e.maxWidth<g.width,h=f(g.height)&&e.maxHeight&&e.maxHeight<g.height,i=f(g.width)&&e.minWidth&&e.minWidth>g.width,j=f(g.height)&&e.minHeight&&e.minHeight>g.height;if(i)g.width=e.minWidth;if(j)g.height=e.minHeight;if(d)g.width=e.maxWidth;if(h)g.height=e.maxHeight;var n=this.originalPosition.left+this.originalSize.width,q=this.position.top+this.size.height,
l=/sw|nw|w/.test(a);a=/nw|ne|n/.test(a);if(i&&l)g.left=n-e.minWidth;if(d&&l)g.left=n-e.maxWidth;if(j&&a)g.top=q-e.minHeight;if(h&&a)g.top=q-e.maxHeight;if((e=!g.width&&!g.height)&&!g.left&&g.top)g.top=null;else if(e&&!g.top&&g.left)g.left=null;return g},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var g=this.helper||this.element,e=0;e<this._proportionallyResizeElements.length;e++){var a=this._proportionallyResizeElements[e];if(!this.borderDif){var d=[a.css("borderTopWidth"),
a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],h=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];this.borderDif=b.map(d,function(i,j){i=parseInt(i,10)||0;j=parseInt(h[j],10)||0;return i+j})}b.browser.msie&&(b(g).is(":hidden")||b(g).parents(":hidden").length)||a.css({height:g.height()-this.borderDif[0]-this.borderDif[2]||0,width:g.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var g=this.options;this.elementOffset=
this.element.offset();if(this._helper){this.helper=this.helper||b('<div style="overflow:hidden;"></div>');var e=b.browser.msie&&b.browser.version<7,a=e?1:0;e=e?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+e,height:this.element.outerHeight()+e,position:"absolute",left:this.elementOffset.left-a+"px",top:this.elementOffset.top-a+"px",zIndex:++g.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(g,e){return{width:this.originalSize.width+
e}},w:function(g,e){return{left:this.originalPosition.left+e,width:this.originalSize.width-e}},n:function(g,e,a){return{top:this.originalPosition.top+a,height:this.originalSize.height-a}},s:function(g,e,a){return{height:this.originalSize.height+a}},se:function(g,e,a){return b.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,e,a]))},sw:function(g,e,a){return b.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,e,a]))},ne:function(g,e,a){return b.extend(this._change.n.apply(this,
arguments),this._change.e.apply(this,[g,e,a]))},nw:function(g,e,a){return b.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,e,a]))}},_propagate:function(g,e){b.ui.plugin.call(this,g,[e,this.ui()]);g!="resize"&&this._trigger(g,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});b.extend(b.ui.resizable,
{version:"1.8.9"});b.ui.plugin.add("resizable","alsoResize",{start:function(){var g=b(this).data("resizable").options,e=function(a){b(a).each(function(){var d=b(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof g.alsoResize=="object"&&!g.alsoResize.parentNode)if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];e(g.alsoResize)}else b.each(g.alsoResize,
function(a){e(a)});else e(g.alsoResize)},resize:function(g,e){var a=b(this).data("resizable");g=a.options;var d=a.originalSize,h=a.originalPosition,i={height:a.size.height-d.height||0,width:a.size.width-d.width||0,top:a.position.top-h.top||0,left:a.position.left-h.left||0},j=function(n,q){b(n).each(function(){var l=b(this),k=b(this).data("resizable-alsoresize"),m={},o=q&&q.length?q:l.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];b.each(o,function(p,s){if((p=
(k[s]||0)+(i[s]||0))&&p>=0)m[s]=p||null});if(b.browser.opera&&/relative/.test(l.css("position"))){a._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(m)})};typeof g.alsoResize=="object"&&!g.alsoResize.nodeType?b.each(g.alsoResize,function(n,q){j(n,q)}):j(g.alsoResize)},stop:function(){var g=b(this).data("resizable"),e=g.options,a=function(d){b(d).each(function(){var h=b(this);h.css({position:h.data("resizable-alsoresize").position})})};if(g._revertToRelativePosition){g._revertToRelativePosition=
false;typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?b.each(e.alsoResize,function(d){a(d)}):a(e.alsoResize)}b(this).removeData("resizable-alsoresize")}});b.ui.plugin.add("resizable","animate",{stop:function(g){var e=b(this).data("resizable"),a=e.options,d=e._proportionallyResizeElements,h=d.length&&/textarea/i.test(d[0].nodeName),i=h&&b.ui.hasScroll(d[0],"left")?0:e.sizeDiff.height;h={width:e.size.width-(h?0:e.sizeDiff.width),height:e.size.height-i};i=parseInt(e.element.css("left"),10)+(e.position.left-
e.originalPosition.left)||null;var j=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null;e.element.animate(b.extend(h,j&&i?{top:j,left:i}:{}),{duration:a.animateDuration,easing:a.animateEasing,step:function(){var n={width:parseInt(e.element.css("width"),10),height:parseInt(e.element.css("height"),10),top:parseInt(e.element.css("top"),10),left:parseInt(e.element.css("left"),10)};d&&d.length&&b(d[0]).css({width:n.width,height:n.height});e._updateCache(n);e._propagate("resize",
g)}})}});b.ui.plugin.add("resizable","containment",{start:function(){var g=b(this).data("resizable"),e=g.element,a=g.options.containment;if(e=a instanceof b?a.get(0):/parent/.test(a)?e.parent().get(0):a){g.containerElement=b(e);if(/document/.test(a)||a==document){g.containerOffset={left:0,top:0};g.containerPosition={left:0,top:0};g.parentData={element:b(document),left:0,top:0,width:b(document).width(),height:b(document).height()||document.body.parentNode.scrollHeight}}else{var d=b(e),h=[];b(["Top",
"Right","Left","Bottom"]).each(function(n,q){h[n]=c(d.css("padding"+q))});g.containerOffset=d.offset();g.containerPosition=d.position();g.containerSize={height:d.innerHeight()-h[3],width:d.innerWidth()-h[1]};a=g.containerOffset;var i=g.containerSize.height,j=g.containerSize.width;j=b.ui.hasScroll(e,"left")?e.scrollWidth:j;i=b.ui.hasScroll(e)?e.scrollHeight:i;g.parentData={element:e,left:a.left,top:a.top,width:j,height:i}}}},resize:function(g){var e=b(this).data("resizable"),a=e.options,d=e.containerOffset,
h=e.position;g=e._aspectRatio||g.shiftKey;var i={top:0,left:0},j=e.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))i=d;if(h.left<(e._helper?d.left:0)){e.size.width+=e._helper?e.position.left-d.left:e.position.left-i.left;if(g)e.size.height=e.size.width/a.aspectRatio;e.position.left=a.helper?d.left:0}if(h.top<(e._helper?d.top:0)){e.size.height+=e._helper?e.position.top-d.top:e.position.top;if(g)e.size.width=e.size.height*a.aspectRatio;e.position.top=e._helper?d.top:0}e.offset.left=
e.parentData.left+e.position.left;e.offset.top=e.parentData.top+e.position.top;a=Math.abs((e._helper?e.offset.left-i.left:e.offset.left-i.left)+e.sizeDiff.width);d=Math.abs((e._helper?e.offset.top-i.top:e.offset.top-d.top)+e.sizeDiff.height);h=e.containerElement.get(0)==e.element.parent().get(0);i=/relative|absolute/.test(e.containerElement.css("position"));if(h&&i)a-=e.parentData.left;if(a+e.size.width>=e.parentData.width){e.size.width=e.parentData.width-a;if(g)e.size.height=e.size.width/e.aspectRatio}if(d+
e.size.height>=e.parentData.height){e.size.height=e.parentData.height-d;if(g)e.size.width=e.size.height*e.aspectRatio}},stop:function(){var g=b(this).data("resizable"),e=g.options,a=g.containerOffset,d=g.containerPosition,h=g.containerElement,i=b(g.helper),j=i.offset(),n=i.outerWidth()-g.sizeDiff.width;i=i.outerHeight()-g.sizeDiff.height;g._helper&&!e.animate&&/relative/.test(h.css("position"))&&b(this).css({left:j.left-d.left-a.left,width:n,height:i});g._helper&&!e.animate&&/static/.test(h.css("position"))&&
b(this).css({left:j.left-d.left-a.left,width:n,height:i})}});b.ui.plugin.add("resizable","ghost",{start:function(){var g=b(this).data("resizable"),e=g.options,a=g.size;g.ghost=g.originalElement.clone();g.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:"");g.ghost.appendTo(g.helper)},resize:function(){var g=b(this).data("resizable");g.ghost&&g.ghost.css({position:"relative",
height:g.size.height,width:g.size.width})},stop:function(){var g=b(this).data("resizable");g.ghost&&g.helper&&g.helper.get(0).removeChild(g.ghost.get(0))}});b.ui.plugin.add("resizable","grid",{resize:function(){var g=b(this).data("resizable"),e=g.options,a=g.size,d=g.originalSize,h=g.originalPosition,i=g.axis;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var j=Math.round((a.width-d.width)/(e.grid[0]||1))*(e.grid[0]||1);e=Math.round((a.height-d.height)/(e.grid[1]||1))*(e.grid[1]||1);if(/^(se|s|e)$/.test(i)){g.size.width=
d.width+j;g.size.height=d.height+e}else if(/^(ne)$/.test(i)){g.size.width=d.width+j;g.size.height=d.height+e;g.position.top=h.top-e}else{if(/^(sw)$/.test(i)){g.size.width=d.width+j;g.size.height=d.height+e}else{g.size.width=d.width+j;g.size.height=d.height+e;g.position.top=h.top-e}g.position.left=h.left-j}}});var c=function(g){return parseInt(g,10)||0},f=function(g){return!isNaN(parseInt(g,10))}})(jQuery);
(function(b){b.widget("ui.selectable",b.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=b(c.options.filter,c.element[0]);f.each(function(){var g=b(this),e=g.offset();b.data(this,"selectable-item",{element:this,$element:g,left:e.left,top:e.top,right:e.left+g.outerWidth(),bottom:e.top+g.outerHeight(),startselected:false,selected:g.hasClass("ui-selected"),
selecting:g.hasClass("ui-selecting"),unselecting:g.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=b("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var g=this.options;this.selectees=b(g.filter,this.element[0]);this._trigger("start",c);b(g.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});g.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var e=b.data(this,"selectable-item");e.startselected=true;if(!c.metaKey){e.$element.removeClass("ui-selected");e.selected=false;e.$element.addClass("ui-unselecting");e.unselecting=true;f._trigger("unselecting",
c,{unselecting:e.element})}});b(c.target).parents().andSelf().each(function(){var e=b.data(this,"selectable-item");if(e){var a=!c.metaKey||!e.$element.hasClass("ui-selected");e.$element.removeClass(a?"ui-unselecting":"ui-selected").addClass(a?"ui-selecting":"ui-unselecting");e.unselecting=!a;e.selecting=a;(e.selected=a)?f._trigger("selecting",c,{selecting:e.element}):f._trigger("unselecting",c,{unselecting:e.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var g=
this.options,e=this.opos[0],a=this.opos[1],d=c.pageX,h=c.pageY;if(e>d){var i=d;d=e;e=i}if(a>h){i=h;h=a;a=i}this.helper.css({left:e,top:a,width:d-e,height:h-a});this.selectees.each(function(){var j=b.data(this,"selectable-item");if(!(!j||j.element==f.element[0])){var n=false;if(g.tolerance=="touch")n=!(j.left>d||j.right<e||j.top>h||j.bottom<a);else if(g.tolerance=="fit")n=j.left>e&&j.right<d&&j.top>a&&j.bottom<h;if(n){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;f._trigger("selecting",c,{selecting:j.element})}}else{if(j.selecting)if(c.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}f._trigger("unselecting",c,{unselecting:j.element})}if(j.selected)if(!c.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;f._trigger("unselecting",c,{unselecting:j.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;b(".ui-unselecting",this.element[0]).each(function(){var g=b.data(this,"selectable-item");g.$element.removeClass("ui-unselecting");g.unselecting=false;g.startselected=false;f._trigger("unselected",c,{unselected:g.element})});b(".ui-selecting",this.element[0]).each(function(){var g=
b.data(this,"selectable-item");g.$element.removeClass("ui-selecting").addClass("ui-selected");g.selecting=false;g.selected=true;g.startselected=true;f._trigger("selected",c,{selected:g.element})});this._trigger("stop",c);this.helper.remove();return false}});b.extend(b.ui.selectable,{version:"1.8.9"})})(jQuery);
(function(b){b.widget("ui.sortable",b.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var c=this.items.length-1;c>=0;c--)this.items[c].item.removeData("sortable-item");return this},_setOption:function(c,f){if(c==="disabled"){this.options[c]=f;this.widget()[f?"addClass":"removeClass"]("ui-sortable-disabled")}else b.Widget.prototype._setOption.apply(this,
arguments)},_mouseCapture:function(c,f){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(c);var g=null,e=this;b(c.target).parents().each(function(){if(b.data(this,"sortable-item")==e){g=b(this);return false}});if(b.data(c.target,"sortable-item")==e)g=b(c.target);if(!g)return false;if(this.options.handle&&!f){var a=false;b(this.options.handle,g).find("*").andSelf().each(function(){if(this==c.target)a=true});if(!a)return false}this.currentItem=
g;this._removeCurrentsFromItems();return true},_mouseStart:function(c,f,g){f=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(c);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");b.extend(this.offset,
{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;f.cursorAt&&this._adjustOffsetFromHelper(f.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();f.containment&&this._setContainment();
if(f.cursor){if(b("body").css("cursor"))this._storedCursor=b("body").css("cursor");b("body").css("cursor",f.cursor)}if(f.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",f.opacity)}if(f.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",f.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",
c,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!g)for(g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",c,e._uiHash(this));if(b.ui.ddmanager)b.ui.ddmanager.current=this;b.ui.ddmanager&&!f.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,c);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(c);return true},_mouseDrag:function(c){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var f=this.options,g=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-c.pageY<f.scrollSensitivity)this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+f.scrollSpeed;else if(c.pageY-this.overflowOffset.top<f.scrollSensitivity)this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-f.scrollSpeed;if(this.overflowOffset.left+
this.scrollParent[0].offsetWidth-c.pageX<f.scrollSensitivity)this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+f.scrollSpeed;else if(c.pageX-this.overflowOffset.left<f.scrollSensitivity)this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-f.scrollSpeed}else{if(c.pageY-b(document).scrollTop()<f.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()-f.scrollSpeed);else if(b(window).height()-(c.pageY-b(document).scrollTop())<f.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()+
f.scrollSpeed);if(c.pageX-b(document).scrollLeft()<f.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()-f.scrollSpeed);else if(b(window).width()-(c.pageX-b(document).scrollLeft())<f.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()+f.scrollSpeed)}g!==false&&b.ui.ddmanager&&!f.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,c)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+
"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(f=this.items.length-1;f>=0;f--){g=this.items[f];var e=g.item[0],a=this._intersectsWithPointer(g);if(a)if(e!=this.currentItem[0]&&this.placeholder[a==1?"next":"prev"]()[0]!=e&&!b.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!b.ui.contains(this.element[0],e):true)){this.direction=a==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(g))this._rearrange(c,
g);else break;this._trigger("change",c,this._uiHash());break}}this._contactContainers(c);b.ui.ddmanager&&b.ui.ddmanager.drag(this,c);this._trigger("sort",c,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,f){if(c){b.ui.ddmanager&&!this.options.dropBehaviour&&b.ui.ddmanager.drop(this,c);if(this.options.revert){var g=this;f=g.placeholder.offset();g.reverting=true;b(this.helper).animate({left:f.left-this.offset.parent.left-g.margins.left+(this.offsetParent[0]==
document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-g.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){g._clear(c)})}else this._clear(c,f);return false}},cancel:function(){var c=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var f=this.containers.length-
1;f>=0;f--){this.containers[f]._trigger("deactivate",null,c._uiHash(this));if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",null,c._uiHash(this));this.containers[f].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();b.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
this.domPosition.prev?b(this.domPosition.prev).after(this.currentItem):b(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(c){var f=this._getItemsAsjQuery(c&&c.connected),g=[];c=c||{};b(f).each(function(){var e=(b(c.item||this).attr(c.attribute||"id")||"").match(c.expression||/(.+)[-=_](.+)/);if(e)g.push((c.key||e[1]+"[]")+"="+(c.key&&c.expression?e[1]:e[2]))});!g.length&&c.key&&g.push(c.key+"=");return g.join("&")},toArray:function(c){var f=this._getItemsAsjQuery(c&&
c.connected),g=[];c=c||{};f.each(function(){g.push(b(c.item||this).attr(c.attribute||"id")||"")});return g},_intersectsWith:function(c){var f=this.positionAbs.left,g=f+this.helperProportions.width,e=this.positionAbs.top,a=e+this.helperProportions.height,d=c.left,h=d+c.width,i=c.top,j=i+c.height,n=this.offset.click.top,q=this.offset.click.left;n=e+n>i&&e+n<j&&f+q>d&&f+q<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?
"width":"height"]>c[this.floating?"width":"height"]?n:d<f+this.helperProportions.width/2&&g-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&a-this.helperProportions.height/2<j},_intersectsWithPointer:function(c){var f=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,c.top,c.height);c=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,c.left,c.width);f=f&&c;c=this._getDragVerticalDirection();var g=this._getDragHorizontalDirection();if(!f)return false;return this.floating?
g&&g=="right"||c=="down"?2:1:c&&(c=="down"?2:1)},_intersectsWithSides:function(c){var f=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,c.top+c.height/2,c.height);c=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,c.left+c.width/2,c.width);var g=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&c||e=="left"&&!c:g&&(g=="down"&&f||g=="up"&&!f)},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
return c!=0&&(c>0?"down":"up")},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;return c!=0&&(c>0?"right":"left")},refresh:function(c){this._refreshItems(c);this.refreshPositions();return this},_connectWith:function(){var c=this.options;return c.connectWith.constructor==String?[c.connectWith]:c.connectWith},_getItemsAsjQuery:function(c){var f=[],g=[],e=this._connectWith();if(e&&c)for(c=e.length-1;c>=0;c--)for(var a=b(e[c]),d=a.length-1;d>=0;d--){var h=
b.data(a[d],"sortable");if(h&&h!=this&&!h.options.disabled)g.push([b.isFunction(h.options.items)?h.options.items.call(h.element):b(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}g.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(c=g.length-1;c>=0;c--)g[c][0].each(function(){f.push(this)});
return b(f)},_removeCurrentsFromItems:function(){for(var c=this.currentItem.find(":data(sortable-item)"),f=0;f<this.items.length;f++)for(var g=0;g<c.length;g++)c[g]==this.items[f].item[0]&&this.items.splice(f,1)},_refreshItems:function(c){this.items=[];this.containers=[this];var f=this.items,g=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):b(this.options.items,this.element),this]],e=this._connectWith();if(e)for(var a=e.length-1;a>=0;a--)for(var d=
b(e[a]),h=d.length-1;h>=0;h--){var i=b.data(d[h],"sortable");if(i&&i!=this&&!i.options.disabled){g.push([b.isFunction(i.options.items)?i.options.items.call(i.element[0],c,{item:this.currentItem}):b(i.options.items,i.element),i]);this.containers.push(i)}}for(a=g.length-1;a>=0;a--){c=g[a][1];e=g[a][0];h=0;for(d=e.length;h<d;h++){i=b(e[h]);i.data("sortable-item",c);f.push({item:i,instance:c,width:0,height:0,left:0,top:0})}}},refreshPositions:function(c){if(this.offsetParent&&this.helper)this.offset.parent=
this._getParentOffset();for(var f=this.items.length-1;f>=0;f--){var g=this.items[f],e=this.options.toleranceElement?b(this.options.toleranceElement,g.item):g.item;if(!c){g.width=e.outerWidth();g.height=e.outerHeight()}e=e.offset();g.left=e.left;g.top=e.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(f=this.containers.length-1;f>=0;f--){e=this.containers[f].element.offset();this.containers[f].containerCache.left=e.left;this.containers[f].containerCache.top=
e.top;this.containers[f].containerCache.width=this.containers[f].element.outerWidth();this.containers[f].containerCache.height=this.containers[f].element.outerHeight()}return this},_createPlaceholder:function(c){var f=c||this,g=f.options;if(!g.placeholder||g.placeholder.constructor==String){var e=g.placeholder;g.placeholder={element:function(){var a=b(document.createElement(f.currentItem[0].nodeName)).addClass(e||f.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!e)a.style.visibility="hidden";return a},update:function(a,d){if(!(e&&!g.forcePlaceholderSize)){d.height()||d.height(f.currentItem.innerHeight()-parseInt(f.currentItem.css("paddingTop")||0,10)-parseInt(f.currentItem.css("paddingBottom")||0,10));d.width()||d.width(f.currentItem.innerWidth()-parseInt(f.currentItem.css("paddingLeft")||0,10)-parseInt(f.currentItem.css("paddingRight")||0,10))}}}}f.placeholder=b(g.placeholder.element.call(f.element,f.currentItem));f.currentItem.after(f.placeholder);
g.placeholder.update(f,f.placeholder)},_contactContainers:function(c){for(var f=null,g=null,e=this.containers.length-1;e>=0;e--)if(!b.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(f&&b.ui.contains(this.containers[e].element[0],f.element[0]))){f=this.containers[e];g=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",c,this._uiHash(this));this.containers[e].containerCache.over=0}if(f)if(this.containers.length===
1){this.containers[g]._trigger("over",c,this._uiHash(this));this.containers[g].containerCache.over=1}else if(this.currentContainer!=this.containers[g]){f=1E4;e=null;for(var a=this.positionAbs[this.containers[g].floating?"left":"top"],d=this.items.length-1;d>=0;d--)if(b.ui.contains(this.containers[g].element[0],this.items[d].item[0])){var h=this.items[d][this.containers[g].floating?"left":"top"];if(Math.abs(h-a)<f){f=Math.abs(h-a);e=this.items[d]}}if(e||this.options.dropOnEmpty){this.currentContainer=
this.containers[g];e?this._rearrange(c,e,null,true):this._rearrange(c,null,this.containers[g].element,true);this._trigger("change",c,this._uiHash());this.containers[g]._trigger("change",c,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[g]._trigger("over",c,this._uiHash(this));this.containers[g].containerCache.over=1}}},_createHelper:function(c){var f=this.options;c=b.isFunction(f.helper)?b(f.helper.apply(this.element[0],[c,this.currentItem])):
f.helper=="clone"?this.currentItem.clone():this.currentItem;c.parents("body").length||b(f.appendTo!="parent"?f.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0]);if(c[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(c[0].style.width==""||f.forceHelperSize)c.width(this.currentItem.width());if(c[0].style.height==
""||f.forceHelperSize)c.height(this.currentItem.height());return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string")c=c.split(" ");if(b.isArray(c))c={left:+c[0],top:+c[1]||0};if("left"in c)this.offset.click.left=c.left+this.margins.left;if("right"in c)this.offset.click.left=this.helperProportions.width-c.right+this.margins.left;if("top"in c)this.offset.click.top=c.top+this.margins.top;if("bottom"in c)this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)c={top:0,left:0};return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var c=this.options;if(c.containment=="parent")c.containment=this.helper[0].parentNode;if(c.containment=="document"||c.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(c.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(c.containment=="document"?document:window).height()||
document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(c.containment)){var f=b(c.containment)[0];c=b(c.containment).offset();var g=b(f).css("overflow")!="hidden";this.containment=[c.left+(parseInt(b(f).css("borderLeftWidth"),10)||0)+(parseInt(b(f).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(b(f).css("borderTopWidth"),10)||0)+(parseInt(b(f).css("paddingTop"),10)||0)-this.margins.top,c.left+(g?Math.max(f.scrollWidth,
f.offsetWidth):f.offsetWidth)-(parseInt(b(f).css("borderLeftWidth"),10)||0)-(parseInt(b(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(g?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(b(f).css("borderTopWidth"),10)||0)-(parseInt(b(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(c,f){if(!f)f=this.position;c=c=="absolute"?1:-1;var g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=
document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(g[0].tagName);return{top:f.top+this.offset.relative.top*c+this.offset.parent.top*c-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:g.scrollTop())*c),left:f.left+this.offset.relative.left*c+this.offset.parent.left*c-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
e?0:g.scrollLeft())*c)}},_generatePosition:function(c){var f=this.options,g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(g[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var a=c.pageX,d=c.pageY;if(this.originalPosition){if(this.containment){if(c.pageX-
this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(c.pageY-this.offset.click.top<this.containment[1])d=this.containment[1]+this.offset.click.top;if(c.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(c.pageY-this.offset.click.top>this.containment[3])d=this.containment[3]+this.offset.click.top}if(f.grid){d=this.originalPageY+Math.round((d-this.originalPageY)/f.grid[1])*f.grid[1];d=this.containment?!(d-this.offset.click.top<
this.containment[1]||d-this.offset.click.top>this.containment[3])?d:!(d-this.offset.click.top<this.containment[1])?d-f.grid[1]:d+f.grid[1]:d;a=this.originalPageX+Math.round((a-this.originalPageX)/f.grid[0])*f.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?a:!(a-this.offset.click.left<this.containment[0])?a-f.grid[0]:a+f.grid[0]:a}}return{top:d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&
this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:g.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:g.scrollLeft())}},_rearrange:function(c,f,g,e){g?g[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?f.item[0]:f.item[0].nextSibling);this.counter=
this.counter?++this.counter:1;var a=this,d=this.counter;window.setTimeout(function(){d==a.counter&&a.refreshPositions(!e)},0)},_clear:function(c,f){this.reverting=false;var g=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();
this.fromOutside&&!f&&g.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!f)g.push(function(a){this._trigger("update",a,this._uiHash())});if(!b.ui.contains(this.element[0],this.currentItem[0])){f||g.push(function(a){this._trigger("remove",a,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(b.ui.contains(this.containers[e].element[0],
this.currentItem[0])&&!f){g.push(function(a){return function(d){a._trigger("receive",d,this._uiHash(this))}}.call(this,this.containers[e]));g.push(function(a){return function(d){a._trigger("update",d,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){f||g.push(function(a){return function(d){a._trigger("deactivate",d,this._uiHash(this))}}.call(this,this.containers[e]));if(this.containers[e].containerCache.over){g.push(function(a){return function(d){a._trigger("out",
d,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&b("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!f){this._trigger("beforeStop",c,this._uiHash());for(e=0;e<g.length;e++)g[e].call(this,c);this._trigger("stop",c,this._uiHash())}return false}f||
this._trigger("beforeStop",c,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!f){for(e=0;e<g.length;e++)g[e].call(this,c);this._trigger("stop",c,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){b.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},_uiHash:function(c){var f=c||this;return{helper:f.helper,placeholder:f.placeholder||b([]),position:f.position,
originalPosition:f.originalPosition,offset:f.positionAbs,item:f.currentItem,sender:c?c.element:null}}});b.extend(b.ui.sortable,{version:"1.8.9"})})(jQuery);
jQuery.effects||function(b,c){function f(l){var k;if(l&&l.constructor==Array&&l.length==3)return l;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(l))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(l))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(l))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(l))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(l))return j.transparent;return j[b.trim(l).toLowerCase()]}function g(l,k){var m;do{m=b.curCSS(l,k);if(m!=""&&m!="transparent"||b.nodeName(l,"body"))break;k="backgroundColor"}while(l=l.parentNode);return f(m)}function e(){var l=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,o;if(l&&l.length&&l[0]&&l[l[0]])for(var p=l.length;p--;){m=l[p];if(typeof l[m]=="string"){o=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[o]=l[m]}}else for(m in l)if(typeof l[m]==="string")k[m]=l[m];return k}function a(l){var k,m;for(k in l){m=l[k];if(m==null||b.isFunction(m)||k in q||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete l[k]}return l}function d(l,k){var m={_:0},o;for(o in k)if(l[o]!=k[o])m[o]=k[o];return m}function h(l,k,m,o){if(typeof l=="object"){o=
k;m=null;k=l;l=k.effect}if(b.isFunction(k)){o=k;m=null;k={}}if(typeof k=="number"||b.fx.speeds[k]){o=m;m=k;k={}}if(b.isFunction(m)){o=m;m=null}k=k||{};m=m||k.duration;m=b.fx.off?0:typeof m=="number"?m:m in b.fx.speeds?b.fx.speeds[m]:b.fx.speeds._default;o=o||k.complete;return[l,k,m,o]}function i(l){if(!l||typeof l==="number"||b.fx.speeds[l])return true;if(typeof l==="string"&&!b.effects[l])return true;return false}b.effects={};b.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(l,k){b.fx.step[k]=function(m){if(!m.colorInit){m.start=g(m.elem,k);m.end=f(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},n=["add","remove","toggle"],q={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.effects.animateClass=function(l,k,m,
o){if(b.isFunction(m)){o=m;m=null}return this.queue("fx",function(){var p=b(this),s=p.attr("style")||" ",r=a(e.call(this)),u,v=p.attr("className");b.each(n,function(w,y){l[y]&&p[y+"Class"](l[y])});u=a(e.call(this));p.attr("className",v);p.animate(d(r,u),k,m,function(){b.each(n,function(w,y){l[y]&&p[y+"Class"](l[y])});if(typeof p.attr("style")=="object"){p.attr("style").cssText="";p.attr("style").cssText=s}else p.attr("style",s);o&&o.apply(this,arguments)});r=b.queue(this);u=r.splice(r.length-1,1)[0];
r.splice(1,0,u);b.dequeue(this)})};b.fn.extend({_addClass:b.fn.addClass,addClass:function(l,k,m,o){return k?b.effects.animateClass.apply(this,[{add:l},k,m,o]):this._addClass(l)},_removeClass:b.fn.removeClass,removeClass:function(l,k,m,o){return k?b.effects.animateClass.apply(this,[{remove:l},k,m,o]):this._removeClass(l)},_toggleClass:b.fn.toggleClass,toggleClass:function(l,k,m,o,p){return typeof k=="boolean"||k===c?m?b.effects.animateClass.apply(this,[k?{add:l}:{remove:l},m,o,p]):this._toggleClass(l,
k):b.effects.animateClass.apply(this,[{toggle:l},k,m,o])},switchClass:function(l,k,m,o,p){return b.effects.animateClass.apply(this,[{add:k,remove:l},m,o,p])}});b.extend(b.effects,{version:"1.8.9",save:function(l,k){for(var m=0;m<k.length;m++)k[m]!==null&&l.data("ec.storage."+k[m],l[0].style[k[m]])},restore:function(l,k){for(var m=0;m<k.length;m++)k[m]!==null&&l.css(k[m],l.data("ec.storage."+k[m]))},setMode:function(l,k){if(k=="toggle")k=l.is(":hidden")?"show":"hide";return k},getBaseline:function(l,
k){var m;switch(l[0]){case "top":m=0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=l[0]/k.height}switch(l[1]){case "left":l=0;break;case "center":l=0.5;break;case "right":l=1;break;default:l=l[1]/k.width}return{x:l,y:m}},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper"))return l.parent();var k={width:l.outerWidth(true),height:l.outerHeight(true),"float":l.css("float")},m=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});l.wrap(m);m=l.parent();if(l.css("position")=="static"){m.css({position:"relative"});l.css({position:"relative"})}else{b.extend(k,{position:l.css("position"),zIndex:l.css("z-index")});b.each(["top","left","bottom","right"],function(o,p){k[p]=l.css(p);if(isNaN(parseInt(k[p],10)))k[p]="auto"});l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(l){if(l.parent().is(".ui-effects-wrapper"))return l.parent().replaceWith(l);
return l},setTransition:function(l,k,m,o){o=o||{};b.each(k,function(p,s){unit=l.cssUnit(s);if(unit[0]>0)o[s]=unit[0]*m+unit[1]});return o}});b.fn.extend({effect:function(l){var k=h.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var o=b.effects[l];if(b.fx.off||!o)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});return o.call(this,m)},_show:b.fn.show,show:function(l){if(i(l))return this._show.apply(this,arguments);
else{var k=h.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)}},_hide:b.fn.hide,hide:function(l){if(i(l))return this._hide.apply(this,arguments);else{var k=h.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:b.fn.toggle,toggle:function(l){if(i(l)||typeof l==="boolean"||b.isFunction(l))return this.__toggle.apply(this,arguments);else{var k=h.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(l){var k=this.css(l),
m=[];b.each(["em","px","%","pt"],function(o,p){if(k.indexOf(p)>0)m=[parseFloat(k),p]});return m}});b.easing.jswing=b.easing.swing;b.extend(b.easing,{def:"easeOutQuad",swing:function(l,k,m,o,p){return b.easing[b.easing.def](l,k,m,o,p)},easeInQuad:function(l,k,m,o,p){return o*(k/=p)*k+m},easeOutQuad:function(l,k,m,o,p){return-o*(k/=p)*(k-2)+m},easeInOutQuad:function(l,k,m,o,p){if((k/=p/2)<1)return o/2*k*k+m;return-o/2*(--k*(k-2)-1)+m},easeInCubic:function(l,k,m,o,p){return o*(k/=p)*k*k+m},easeOutCubic:function(l,
k,m,o,p){return o*((k=k/p-1)*k*k+1)+m},easeInOutCubic:function(l,k,m,o,p){if((k/=p/2)<1)return o/2*k*k*k+m;return o/2*((k-=2)*k*k+2)+m},easeInQuart:function(l,k,m,o,p){return o*(k/=p)*k*k*k+m},easeOutQuart:function(l,k,m,o,p){return-o*((k=k/p-1)*k*k*k-1)+m},easeInOutQuart:function(l,k,m,o,p){if((k/=p/2)<1)return o/2*k*k*k*k+m;return-o/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(l,k,m,o,p){return o*(k/=p)*k*k*k*k+m},easeOutQuint:function(l,k,m,o,p){return o*((k=k/p-1)*k*k*k*k+1)+m},easeInOutQuint:function(l,
k,m,o,p){if((k/=p/2)<1)return o/2*k*k*k*k*k+m;return o/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(l,k,m,o,p){return-o*Math.cos(k/p*(Math.PI/2))+o+m},easeOutSine:function(l,k,m,o,p){return o*Math.sin(k/p*(Math.PI/2))+m},easeInOutSine:function(l,k,m,o,p){return-o/2*(Math.cos(Math.PI*k/p)-1)+m},easeInExpo:function(l,k,m,o,p){return k==0?m:o*Math.pow(2,10*(k/p-1))+m},easeOutExpo:function(l,k,m,o,p){return k==p?m+o:o*(-Math.pow(2,-10*k/p)+1)+m},easeInOutExpo:function(l,k,m,o,p){if(k==0)return m;if(k==
p)return m+o;if((k/=p/2)<1)return o/2*Math.pow(2,10*(k-1))+m;return o/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(l,k,m,o,p){return-o*(Math.sqrt(1-(k/=p)*k)-1)+m},easeOutCirc:function(l,k,m,o,p){return o*Math.sqrt(1-(k=k/p-1)*k)+m},easeInOutCirc:function(l,k,m,o,p){if((k/=p/2)<1)return-o/2*(Math.sqrt(1-k*k)-1)+m;return o/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(l,k,m,o,p){l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=p)==1)return m+o;s||(s=p*0.3);if(r<Math.abs(o)){r=o;l=s/4}else l=
s/(2*Math.PI)*Math.asin(o/r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*p-l)*2*Math.PI/s))+m},easeOutElastic:function(l,k,m,o,p){l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=p)==1)return m+o;s||(s=p*0.3);if(r<Math.abs(o)){r=o;l=s/4}else l=s/(2*Math.PI)*Math.asin(o/r);return r*Math.pow(2,-10*k)*Math.sin((k*p-l)*2*Math.PI/s)+o+m},easeInOutElastic:function(l,k,m,o,p){l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=p/2)==2)return m+o;s||(s=p*0.3*1.5);if(r<Math.abs(o)){r=o;l=s/4}else l=s/(2*Math.PI)*Math.asin(o/
r);if(k<1)return-0.5*r*Math.pow(2,10*(k-=1))*Math.sin((k*p-l)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*p-l)*2*Math.PI/s)*0.5+o+m},easeInBack:function(l,k,m,o,p,s){if(s==c)s=1.70158;return o*(k/=p)*k*((s+1)*k-s)+m},easeOutBack:function(l,k,m,o,p,s){if(s==c)s=1.70158;return o*((k=k/p-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(l,k,m,o,p,s){if(s==c)s=1.70158;if((k/=p/2)<1)return o/2*k*k*(((s*=1.525)+1)*k-s)+m;return o/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(l,
k,m,o,p){return o-b.easing.easeOutBounce(l,p-k,0,o,p)+m},easeOutBounce:function(l,k,m,o,p){return(k/=p)<1/2.75?o*7.5625*k*k+m:k<2/2.75?o*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?o*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:o*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(l,k,m,o,p){if(k<p/2)return b.easing.easeInBounce(l,k*2,0,o,p)*0.5+m;return b.easing.easeOutBounce(l,k*2-p,0,o,p)*0.5+o*0.5+m}})}(jQuery);
(function(b){b.effects.blind=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right"],e=b.effects.setMode(f,c.options.mode||"hide"),a=c.options.direction||"vertical";b.effects.save(f,g);f.show();var d=b.effects.createWrapper(f).css({overflow:"hidden"}),h=a=="vertical"?"height":"width";a=a=="vertical"?d.height():d.width();e=="show"&&d.css(h,0);var i={};i[h]=e=="show"?a:0;d.animate(i,c.duration,c.options.easing,function(){e=="hide"&&f.hide();b.effects.restore(f,
g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(f[0],arguments);f.dequeue()})})}})(jQuery);
(function(b){b.effects.bounce=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right"],e=b.effects.setMode(f,c.options.mode||"effect"),a=c.options.direction||"up",d=c.options.distance||20,h=c.options.times||5,i=c.duration||250;/show|hide/.test(e)&&g.push("opacity");b.effects.save(f,g);f.show();b.effects.createWrapper(f);var j=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";d=c.options.distance||(j=="top"?f.outerHeight({margin:true})/3:f.outerWidth({margin:true})/
3);if(e=="show")f.css("opacity",0).css(j,a=="pos"?-d:d);if(e=="hide")d/=h*2;e!="hide"&&h--;if(e=="show"){var n={opacity:1};n[j]=(a=="pos"?"+=":"-=")+d;f.animate(n,i/2,c.options.easing);d/=2;h--}for(n=0;n<h;n++){var q={},l={};q[j]=(a=="pos"?"-=":"+=")+d;l[j]=(a=="pos"?"+=":"-=")+d;f.animate(q,i/2,c.options.easing).animate(l,i/2,c.options.easing);d=e=="hide"?d*2:d/2}if(e=="hide"){n={opacity:0};n[j]=(a=="pos"?"-=":"+=")+d;f.animate(n,i/2,c.options.easing,function(){f.hide();b.effects.restore(f,g);b.effects.removeWrapper(f);
c.callback&&c.callback.apply(this,arguments)})}else{q={};l={};q[j]=(a=="pos"?"-=":"+=")+d;l[j]=(a=="pos"?"+=":"-=")+d;f.animate(q,i/2,c.options.easing).animate(l,i/2,c.options.easing,function(){b.effects.restore(f,g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(this,arguments)})}f.queue("fx",function(){f.dequeue()});f.dequeue()})}})(jQuery);
(function(b){b.effects.clip=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right","height","width"],e=b.effects.setMode(f,c.options.mode||"hide"),a=c.options.direction||"vertical";b.effects.save(f,g);f.show();var d=b.effects.createWrapper(f).css({overflow:"hidden"});d=f[0].tagName=="IMG"?d:f;var h={size:a=="vertical"?"height":"width",position:a=="vertical"?"top":"left"};a=a=="vertical"?d.height():d.width();if(e=="show"){d.css(h.size,0);d.css(h.position,
a/2)}var i={};i[h.size]=e=="show"?a:0;i[h.position]=e=="show"?0:a/2;d.animate(i,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){e=="hide"&&f.hide();b.effects.restore(f,g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(f[0],arguments);f.dequeue()}})})}})(jQuery);
(function(b){b.effects.drop=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right","opacity"],e=b.effects.setMode(f,c.options.mode||"hide"),a=c.options.direction||"left";b.effects.save(f,g);f.show();b.effects.createWrapper(f);var d=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=c.options.distance||(d=="top"?f.outerHeight({margin:true})/2:f.outerWidth({margin:true})/2);if(e=="show")f.css("opacity",0).css(d,a=="pos"?-h:h);var i={opacity:e==
"show"?1:0};i[d]=(e=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;f.animate(i,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){e=="hide"&&f.hide();b.effects.restore(f,g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(this,arguments);f.dequeue()}})})}})(jQuery);
(function(b){b.effects.explode=function(c){return this.queue(function(){var f=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3,g=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;c.options.mode=c.options.mode=="toggle"?b(this).is(":visible")?"hide":"show":c.options.mode;var e=b(this).show().css("visibility","hidden"),a=e.offset();a.top-=parseInt(e.css("marginTop"),10)||0;a.left-=parseInt(e.css("marginLeft"),10)||0;for(var d=e.outerWidth(true),h=e.outerHeight(true),i=0;i<f;i++)for(var j=
0;j<g;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(d/g),top:-i*(h/f)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:d/g,height:h/f,left:a.left+j*(d/g)+(c.options.mode=="show"?(j-Math.floor(g/2))*(d/g):0),top:a.top+i*(h/f)+(c.options.mode=="show"?(i-Math.floor(f/2))*(h/f):0),opacity:c.options.mode=="show"?0:1}).animate({left:a.left+j*(d/g)+(c.options.mode=="show"?0:(j-Math.floor(g/2))*(d/g)),top:a.top+
i*(h/f)+(c.options.mode=="show"?0:(i-Math.floor(f/2))*(h/f)),opacity:c.options.mode=="show"?1:0},c.duration||500);setTimeout(function(){c.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide();c.callback&&c.callback.apply(e[0]);e.dequeue();b("div.ui-effects-explode").remove()},c.duration||500)})}})(jQuery);
(function(b){b.effects.fade=function(c){return this.queue(function(){var f=b(this),g=b.effects.setMode(f,c.options.mode||"hide");f.animate({opacity:g},{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){c.callback&&c.callback.apply(this,arguments);f.dequeue()}})})}})(jQuery);
(function(b){b.effects.fold=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right"],e=b.effects.setMode(f,c.options.mode||"hide"),a=c.options.size||15,d=!!c.options.horizFirst,h=c.duration?c.duration/2:b.fx.speeds._default/2;b.effects.save(f,g);f.show();var i=b.effects.createWrapper(f).css({overflow:"hidden"}),j=e=="show"!=d,n=j?["width","height"]:["height","width"];j=j?[i.width(),i.height()]:[i.height(),i.width()];var q=/([0-9]+)%/.exec(a);if(q)a=parseInt(q[1],
10)/100*j[e=="hide"?0:1];if(e=="show")i.css(d?{height:0,width:a}:{height:a,width:0});d={};q={};d[n[0]]=e=="show"?j[0]:a;q[n[1]]=e=="show"?j[1]:0;i.animate(d,h,c.options.easing).animate(q,h,c.options.easing,function(){e=="hide"&&f.hide();b.effects.restore(f,g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(f[0],arguments);f.dequeue()})})}})(jQuery);
(function(b){b.effects.highlight=function(c){return this.queue(function(){var f=b(this),g=["backgroundImage","backgroundColor","opacity"],e=b.effects.setMode(f,c.options.mode||"show"),a={backgroundColor:f.css("backgroundColor")};if(e=="hide")a.opacity=0;b.effects.save(f,g);f.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(a,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){e=="hide"&&f.hide();b.effects.restore(f,g);e=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);f.dequeue()}})})}})(jQuery);
(function(b){b.effects.pulsate=function(c){return this.queue(function(){var f=b(this),g=b.effects.setMode(f,c.options.mode||"show");times=(c.options.times||5)*2-1;duration=c.duration?c.duration/2:b.fx.speeds._default/2;isVisible=f.is(":visible");animateTo=0;if(!isVisible){f.css("opacity",0).show();animateTo=1}if(g=="hide"&&isVisible||g=="show"&&!isVisible)times--;for(g=0;g<times;g++){f.animate({opacity:animateTo},duration,c.options.easing);animateTo=(animateTo+1)%2}f.animate({opacity:animateTo},duration,
c.options.easing,function(){animateTo==0&&f.hide();c.callback&&c.callback.apply(this,arguments)});f.queue("fx",function(){f.dequeue()}).dequeue()})}})(jQuery);
(function(b){b.effects.puff=function(c){return this.queue(function(){var f=b(this),g=b.effects.setMode(f,c.options.mode||"hide"),e=parseInt(c.options.percent,10)||150,a=e/100,d={height:f.height(),width:f.width()};b.extend(c.options,{fade:true,mode:g,percent:g=="hide"?e:100,from:g=="hide"?d:{height:d.height*a,width:d.width*a}});f.effect("scale",c.options,c.duration,c.callback);f.dequeue()})};b.effects.scale=function(c){return this.queue(function(){var f=b(this),g=b.extend(true,{},c.options),e=b.effects.setMode(f,
c.options.mode||"effect"),a=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:e=="hide"?0:100),d=c.options.direction||"both",h=c.options.origin;if(e!="effect"){g.origin=h||["middle","center"];g.restore=true}h={height:f.height(),width:f.width()};f.from=c.options.from||(e=="show"?{height:0,width:0}:h);a={y:d!="horizontal"?a/100:1,x:d!="vertical"?a/100:1};f.to={height:h.height*a.y,width:h.width*a.x};if(c.options.fade){if(e=="show"){f.from.opacity=0;f.to.opacity=1}if(e=="hide"){f.from.opacity=
1;f.to.opacity=0}}g.from=f.from;g.to=f.to;g.mode=e;f.effect("size",g,c.duration,c.callback);f.dequeue()})};b.effects.size=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],a=["width","height","overflow"],d=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=b.effects.setMode(f,c.options.mode||"effect"),n=c.options.restore||false,q=c.options.scale||"both",l=c.options.origin,k={height:f.height(),width:f.width()};f.from=c.options.from||k;f.to=c.options.to||k;if(l){l=b.effects.getBaseline(l,k);f.from.top=(k.height-f.from.height)*l.y;f.from.left=(k.width-f.from.width)*l.x;f.to.top=(k.height-f.to.height)*l.y;f.to.left=(k.width-f.to.width)*l.x}var m={from:{y:f.from.height/k.height,x:f.from.width/k.width},to:{y:f.to.height/k.height,x:f.to.width/k.width}};
if(q=="box"||q=="both"){if(m.from.y!=m.to.y){g=g.concat(h);f.from=b.effects.setTransition(f,h,m.from.y,f.from);f.to=b.effects.setTransition(f,h,m.to.y,f.to)}if(m.from.x!=m.to.x){g=g.concat(i);f.from=b.effects.setTransition(f,i,m.from.x,f.from);f.to=b.effects.setTransition(f,i,m.to.x,f.to)}}if(q=="content"||q=="both")if(m.from.y!=m.to.y){g=g.concat(d);f.from=b.effects.setTransition(f,d,m.from.y,f.from);f.to=b.effects.setTransition(f,d,m.to.y,f.to)}b.effects.save(f,n?g:e);f.show();b.effects.createWrapper(f);
f.css("overflow","hidden").css(f.from);if(q=="content"||q=="both"){h=h.concat(["marginTop","marginBottom"]).concat(d);i=i.concat(["marginLeft","marginRight"]);a=g.concat(h).concat(i);f.find("*[width]").each(function(){child=b(this);n&&b.effects.save(child,a);var o={height:child.height(),width:child.width()};child.from={height:o.height*m.from.y,width:o.width*m.from.x};child.to={height:o.height*m.to.y,width:o.width*m.to.x};if(m.from.y!=m.to.y){child.from=b.effects.setTransition(child,h,m.from.y,child.from);
child.to=b.effects.setTransition(child,h,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=b.effects.setTransition(child,i,m.from.x,child.from);child.to=b.effects.setTransition(child,i,m.to.x,child.to)}child.css(child.from);child.animate(child.to,c.duration,c.options.easing,function(){n&&b.effects.restore(child,a)})})}f.animate(f.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){f.to.opacity===0&&f.css("opacity",f.from.opacity);j=="hide"&&f.hide();b.effects.restore(f,
n?g:e);b.effects.removeWrapper(f);c.callback&&c.callback.apply(this,arguments);f.dequeue()}})})}})(jQuery);
(function(b){b.effects.shake=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right"];b.effects.setMode(f,c.options.mode||"effect");var e=c.options.direction||"left",a=c.options.distance||20,d=c.options.times||3,h=c.duration||c.options.duration||140;b.effects.save(f,g);f.show();b.effects.createWrapper(f);var i=e=="up"||e=="down"?"top":"left",j=e=="up"||e=="left"?"pos":"neg";e={};var n={},q={};e[i]=(j=="pos"?"-=":"+=")+a;n[i]=(j=="pos"?"+=":"-=")+a*2;q[i]=
(j=="pos"?"-=":"+=")+a*2;f.animate(e,h,c.options.easing);for(a=1;a<d;a++)f.animate(n,h,c.options.easing).animate(q,h,c.options.easing);f.animate(n,h,c.options.easing).animate(e,h/2,c.options.easing,function(){b.effects.restore(f,g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(this,arguments)});f.queue("fx",function(){f.dequeue()});f.dequeue()})}})(jQuery);
(function(b){b.effects.slide=function(c){return this.queue(function(){var f=b(this),g=["position","top","bottom","left","right"],e=b.effects.setMode(f,c.options.mode||"show"),a=c.options.direction||"left";b.effects.save(f,g);f.show();b.effects.createWrapper(f).css({overflow:"hidden"});var d=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=c.options.distance||(d=="top"?f.outerHeight({margin:true}):f.outerWidth({margin:true}));if(e=="show")f.css(d,a=="pos"?isNaN(h)?"-"+h:-h:h);
var i={};i[d]=(e=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;f.animate(i,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){e=="hide"&&f.hide();b.effects.restore(f,g);b.effects.removeWrapper(f);c.callback&&c.callback.apply(this,arguments);f.dequeue()}})})}})(jQuery);
(function(b){b.effects.transfer=function(c){return this.queue(function(){var f=b(this),g=b(c.options.to),e=g.offset();g={top:e.top,left:e.left,height:g.innerHeight(),width:g.innerWidth()};e=f.offset();var a=b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({top:e.top,left:e.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,c.duration,c.options.easing,function(){a.remove();c.callback&&c.callback.apply(f[0],arguments);
f.dequeue()})})}})(jQuery);
(function(b){b.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var c=this,f=c.options;c.running=0;c.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");c.headers=
c.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){f.disabled||b(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){f.disabled||b(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){f.disabled||b(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){f.disabled||b(this).removeClass("ui-state-focus")});c.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(f.navigation){var g=c.element.find("a").filter(f.navigationFilter).eq(0);if(g.length){var e=g.closest(".ui-accordion-header");c.active=e.length?e:g.closest(".ui-accordion-content").prev()}}c.active=c._findActive(c.active||f.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");c.active.next().addClass("ui-accordion-content-active");c._createIcons();c.resize();c.element.attr("role","tablist");c.headers.attr("role","tab").bind("keydown.accordion",
function(a){return c._keydown(a)}).next().attr("role","tabpanel");c.headers.not(c.active||"").attr({"aria-expanded":"false",tabIndex:-1}).next().hide();c.active.length?c.active.attr({"aria-expanded":"true",tabIndex:0}):c.headers.eq(0).attr("tabIndex",0);b.browser.safari||c.headers.find("a").attr("tabIndex",-1);f.event&&c.headers.bind(f.event.split(" ").join(".accordion ")+".accordion",function(a){c._clickHandler.call(c,a,this);a.preventDefault()})},_createIcons:function(){var c=this.options;if(c.icons){b("<span></span>").addClass("ui-icon "+
c.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var f=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(c.autoHeight||c.fillHeight)f.css("height","");return b.Widget.prototype.destroy.call(this)},_setOption:function(c,f){b.Widget.prototype._setOption.apply(this,arguments);c=="active"&&this.activate(f);if(c=="icons"){this._destroyIcons();
f&&this._createIcons()}if(c=="disabled")this.headers.add(this.headers.next())[f?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(c){if(!(this.options.disabled||c.altKey||c.ctrlKey)){var f=b.ui.keyCode,g=this.headers.length,e=this.headers.index(c.target),a=false;switch(c.keyCode){case f.RIGHT:case f.DOWN:a=this.headers[(e+1)%g];break;case f.LEFT:case f.UP:a=this.headers[(e-1+g)%g];break;case f.SPACE:case f.ENTER:this._clickHandler({target:c.target},c.target);
c.preventDefault()}if(a){b(c.target).attr("tabIndex",-1);b(a).attr("tabIndex",0);a.focus();return false}return true}},resize:function(){var c=this.options,f;if(c.fillSpace){if(b.browser.msie){var g=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}f=this.element.parent().height();b.browser.msie&&this.element.parent().css("overflow",g);this.headers.each(function(){f-=b(this).outerHeight(true)});this.headers.next().each(function(){b(this).height(Math.max(0,f-b(this).innerHeight()+
b(this).height()))}).css("overflow","auto")}else if(c.autoHeight){f=0;this.headers.next().each(function(){f=Math.max(f,b(this).height("").height())}).height(f)}return this},activate:function(c){this.options.active=c;c=this._findActive(c)[0];this._clickHandler({target:c},c);return this},_findActive:function(c){return c?typeof c==="number"?this.headers.filter(":eq("+c+")"):this.headers.not(this.headers.not(c)):c===false?b([]):this.headers.filter(":eq(0)")},_clickHandler:function(c,f){var g=this.options;
if(!g.disabled)if(c.target){c=b(c.currentTarget||f);f=c[0]===this.active[0];g.active=g.collapsible&&f?false:this.headers.index(c);if(!(this.running||!g.collapsible&&f)){var e=this.active;i=c.next();d=this.active.next();h={options:g,newHeader:f&&g.collapsible?b([]):c,oldHeader:this.active,newContent:f&&g.collapsible?b([]):i,oldContent:d};var a=this.headers.index(this.active[0])>this.headers.index(c[0]);this.active=f?b([]):c;this._toggle(i,d,h,f,a);e.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(g.icons.headerSelected).addClass(g.icons.header);
if(!f){c.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(g.icons.header).addClass(g.icons.headerSelected);c.next().addClass("ui-accordion-content-active")}}}else if(g.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(g.icons.headerSelected).addClass(g.icons.header);this.active.next().addClass("ui-accordion-content-active");var d=this.active.next(),
h={options:g,newHeader:b([]),oldHeader:g.active,newContent:b([]),oldContent:d},i=this.active=b([]);this._toggle(i,d,h)}},_toggle:function(c,f,g,e,a){var d=this,h=d.options;d.toShow=c;d.toHide=f;d.data=g;var i=function(){if(d)return d._completed.apply(d,arguments)};d._trigger("changestart",null,d.data);d.running=f.size()===0?c.size():f.size();if(h.animated){g={};g=h.collapsible&&e?{toShow:b([]),toHide:f,complete:i,down:a,autoHeight:h.autoHeight||h.fillSpace}:{toShow:c,toHide:f,complete:i,down:a,autoHeight:h.autoHeight||
h.fillSpace};if(!h.proxied)h.proxied=h.animated;if(!h.proxiedDuration)h.proxiedDuration=h.duration;h.animated=b.isFunction(h.proxied)?h.proxied(g):h.proxied;h.duration=b.isFunction(h.proxiedDuration)?h.proxiedDuration(g):h.proxiedDuration;e=b.ui.accordion.animations;var j=h.duration,n=h.animated;if(n&&!e[n]&&!b.easing[n])n="slide";e[n]||(e[n]=function(q){this.slide(q,{easing:n,duration:j||700})});e[n](g)}else{if(h.collapsible&&e)c.toggle();else{f.hide();c.show()}i(true)}f.prev().attr({"aria-expanded":"false",
tabIndex:-1}).blur();c.prev().attr({"aria-expanded":"true",tabIndex:0}).focus()},_completed:function(c){this.running=c?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});b.extend(b.ui.accordion,{version:"1.8.9",animations:{slide:function(c,f){c=
b.extend({easing:"swing",duration:300},c,f);if(c.toHide.size())if(c.toShow.size()){var g=c.toShow.css("overflow"),e=0,a={},d={},h;f=c.toShow;h=f[0].style.width;f.width(parseInt(f.parent().width(),10)-parseInt(f.css("paddingLeft"),10)-parseInt(f.css("paddingRight"),10)-(parseInt(f.css("borderLeftWidth"),10)||0)-(parseInt(f.css("borderRightWidth"),10)||0));b.each(["height","paddingTop","paddingBottom"],function(i,j){d[j]="hide";i=(""+b.css(c.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);a[j]={value:i[1],
unit:i[2]||"px"}});c.toShow.css({height:0,overflow:"hidden"}).show();c.toHide.filter(":hidden").each(c.complete).end().filter(":visible").animate(d,{step:function(i,j){if(j.prop=="height")e=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);c.toShow[0].style[j.prop]=e*a[j.prop].value+a[j.prop].unit},duration:c.duration,easing:c.easing,complete:function(){c.autoHeight||c.toShow.css("height","");c.toShow.css({width:h,overflow:g});c.complete()}})}else c.toHide.animate({height:"hide",paddingTop:"hide",
paddingBottom:"hide"},c);else c.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},c)},bounceslide:function(c){this.slide(c,{easing:c.down?"easeOutBounce":"swing",duration:c.down?1E3:200})}}})})(jQuery);
(function(b){b.widget("ui.autocomplete",{options:{appendTo:"body",delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var c=this,f=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(e){if(!(c.options.disabled||c.element.attr("readonly"))){g=false;var a=b.ui.keyCode;
switch(e.keyCode){case a.PAGE_UP:c._move("previousPage",e);break;case a.PAGE_DOWN:c._move("nextPage",e);break;case a.UP:c._move("previous",e);e.preventDefault();break;case a.DOWN:c._move("next",e);e.preventDefault();break;case a.ENTER:case a.NUMPAD_ENTER:if(c.menu.active){g=true;e.preventDefault()}case a.TAB:if(!c.menu.active)return;c.menu.select(e);break;case a.ESCAPE:c.element.val(c.term);c.close(e);break;default:clearTimeout(c.searching);c.searching=setTimeout(function(){if(c.term!=c.element.val()){c.selectedItem=
null;c.search(null,e)}},c.options.delay);break}}}).bind("keypress.autocomplete",function(e){if(g){g=false;e.preventDefault()}}).bind("focus.autocomplete",function(){if(!c.options.disabled){c.selectedItem=null;c.previous=c.element.val()}}).bind("blur.autocomplete",function(e){if(!c.options.disabled){clearTimeout(c.searching);c.closing=setTimeout(function(){c.close(e);c._change(e)},150)}});this._initSource();this.response=function(){return c._response.apply(c,arguments)};this.menu=b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo||
"body",f)[0]).mousedown(function(e){var a=c.menu.element[0];b(e.target).closest(".ui-menu-item").length||setTimeout(function(){b(document).one("mousedown",function(d){d.target!==c.element[0]&&d.target!==a&&!b.ui.contains(a,d.target)&&c.close()})},1);setTimeout(function(){clearTimeout(c.closing)},13)}).menu({focus:function(e,a){a=a.item.data("item.autocomplete");false!==c._trigger("focus",e,{item:a})&&/^key/.test(e.originalEvent.type)&&c.element.val(a.value)},selected:function(e,a){var d=a.item.data("item.autocomplete"),
h=c.previous;if(c.element[0]!==f.activeElement){c.element.focus();c.previous=h;setTimeout(function(){c.previous=h;c.selectedItem=d},1)}false!==c._trigger("select",e,{item:d})&&c.element.val(d.value);c.term=c.element.val();c.close(e);c.selectedItem=d},blur:function(){c.menu.element.is(":visible")&&c.element.val()!==c.term&&c.element.val(c.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");b.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();b.Widget.prototype.destroy.call(this)},_setOption:function(c,f){b.Widget.prototype._setOption.apply(this,arguments);c==="source"&&this._initSource();if(c==="appendTo")this.menu.element.appendTo(b(f||"body",this.element[0].ownerDocument)[0]);c==="disabled"&&f&&this.xhr&&this.xhr.abort()},_initSource:function(){var c=this,f,g;if(b.isArray(this.options.source)){f=this.options.source;this.source=function(e,a){a(b.ui.autocomplete.filter(f,e.term))}}else if(typeof this.options.source===
"string"){g=this.options.source;this.source=function(e,a){c.xhr&&c.xhr.abort();c.xhr=b.ajax({url:g,data:e,dataType:"json",success:function(d,h,i){i===c.xhr&&a(d);c.xhr=null},error:function(d){d===c.xhr&&a([]);c.xhr=null}})}}else this.source=this.options.source},search:function(c,f){c=c!=null?c:this.element.val();this.term=this.element.val();if(c.length<this.options.minLength)return this.close(f);clearTimeout(this.closing);if(this._trigger("search",f)!==false)return this._search(c)},_search:function(c){this.pending++;
this.element.addClass("ui-autocomplete-loading");this.source({term:c},this.response)},_response:function(c){if(!this.options.disabled&&c&&c.length){c=this._normalize(c);this._suggest(c);this._trigger("open")}else this.close();this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(c){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",c)}},_change:function(c){this.previous!==
this.element.val()&&this._trigger("change",c,{item:this.selectedItem})},_normalize:function(c){if(c.length&&c[0].label&&c[0].value)return c;return b.map(c,function(f){if(typeof f==="string")return{label:f,value:f};return b.extend({label:f.label||f.value,value:f.value||f.label},f)})},_suggest:function(c){var f=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(f,c);this.menu.deactivate();this.menu.refresh();f.show();this._resizeMenu();f.position(b.extend({of:this.element},this.options.position))},
_resizeMenu:function(){var c=this.menu.element;c.outerWidth(Math.max(c.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(c,f){var g=this;b.each(f,function(e,a){g._renderItem(c,a)})},_renderItem:function(c,f){return b("<li></li>").data("item.autocomplete",f).append(b("<a></a>").text(f.label)).appendTo(c)},_move:function(c,f){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){this.element.val(this.term);this.menu.deactivate()}else this.menu[c](f);
else this.search(null,f)},widget:function(){return this.menu.element}});b.extend(b.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(c,f){var g=new RegExp(b.ui.autocomplete.escapeRegex(f),"i");return b.grep(c,function(e){return g.test(e.label||e.value||e)})}})})(jQuery);
(function(b){b.widget("ui.menu",{_create:function(){var c=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(f){if(b(f.target).closest(".ui-menu-item a").length){f.preventDefault();c.select(f)}});this.refresh()},refresh:function(){var c=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(f){c.activate(f,b(this).parent())}).mouseleave(function(){c.deactivate()})},activate:function(c,f){this.deactivate();if(this.hasScroll()){var g=f.offset().top-this.element.offset().top,e=this.element.attr("scrollTop"),a=this.element.height();if(g<0)this.element.attr("scrollTop",e+g);else g>=a&&this.element.attr("scrollTop",e+g-a+f.height())}this.active=f.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",c,{item:f})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(c){this.move("next",".ui-menu-item:first",c)},previous:function(c){this.move("prev",".ui-menu-item:last",c)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(c,f,g){if(this.active){c=this.active[c+"All"](".ui-menu-item").eq(0);
c.length?this.activate(g,c):this.activate(g,this.element.children(f))}else this.activate(g,this.element.children(f))},nextPage:function(c){if(this.hasScroll())if(!this.active||this.last())this.activate(c,this.element.children(".ui-menu-item:first"));else{var f=this.active.offset().top,g=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var a=b(this).offset().top-f-g+b(this).height();return a<10&&a>-10});e.length||(e=this.element.children(".ui-menu-item:last"));this.activate(c,
e)}else this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(c){if(this.hasScroll())if(!this.active||this.first())this.activate(c,this.element.children(".ui-menu-item:last"));else{var f=this.active.offset().top,g=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var e=b(this).offset().top-f+g-b(this).height();return e<10&&e>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(c,result)}else this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(c){this._trigger("selected",c,{item:this.active})}})})(jQuery);
(function(b){var c,f=function(e){b(":ui-button",e.target.form).each(function(){var a=b(this).data("button");setTimeout(function(){a.refresh()},1)})},g=function(e){var a=e.name,d=e.form,h=b([]);if(a)h=d?b(d).find("[name='"+a+"']"):b("[name='"+a+"']",e.ownerDocument).filter(function(){return!this.form});return h};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
f);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var e=this,a=this.options,d=this.type==="checkbox"||this.type==="radio",h="ui-state-hover"+(!d?" ui-state-active":"");if(a.label===null)a.label=this.buttonElement.html();if(this.element.is(":disabled"))a.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!a.disabled){b(this).addClass("ui-state-hover");this===c&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){a.disabled||b(this).removeClass(h)}).bind("focus.button",function(){b(this).addClass("ui-state-focus")}).bind("blur.button",function(){b(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){e.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(a.disabled)return false;b(this).toggleClass("ui-state-active");
e.buttonElement.attr("aria-pressed",e.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(a.disabled)return false;b(this).addClass("ui-state-active");e.buttonElement.attr("aria-pressed",true);var i=e.element[0];g(i).not(i).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(a.disabled)return false;b(this).addClass("ui-state-active");
c=this;b(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(a.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(i){if(a.disabled)return false;if(i.keyCode==b.ui.keyCode.SPACE||i.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(i){i.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",
a.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){this.buttonElement=this.element.parents().last().find("label[for="+this.element.attr("id")+"]");this.element.addClass("ui-helper-hidden-accessible");var e=this.element.is(":checked");e&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",e)}else this.buttonElement=
this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||
this.buttonElement.removeAttr("title");b.Widget.prototype.destroy.call(this)},_setOption:function(e,a){b.Widget.prototype._setOption.apply(this,arguments);if(e==="disabled")a?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var e=this.element.is(":disabled");e!==this.options.disabled&&this._setOption("disabled",e);if(this.type==="radio")g(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var e=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
a=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),d=this.options.icons,h=d.primary&&d.secondary;if(d.primary||d.secondary){e.addClass("ui-button-text-icon"+(h?"s":d.primary?"-primary":"-secondary"));d.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){e.addClass(h?"ui-button-icons-only":"ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary");
this.hasTitle||e.attr("title",a)}}else e.addClass("ui-button-text-only")}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,a){e==="disabled"&&this.buttons.button("option",e,a);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");b.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(b,c){function f(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};b.extend(this._defaults,this.regional[""]);this.dpDiv=b('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function g(a,d){b.extend(a,d);for(var h in d)if(d[h]==
null||d[h]==c)a[h]=d[h];return a}b.extend(b.ui,{datepicker:{version:"1.8.9"}});var e=(new Date).getTime();b.extend(f.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){g(this._defaults,a||{});return this},_attachDatepicker:function(a,d){var h=null;for(var i in this._defaults){var j=a.getAttribute("date:"+i);if(j){h=h||{};try{h[i]=eval(j)}catch(n){h[i]=j}}}i=a.nodeName.toLowerCase();
j=i=="div"||i=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var q=this._newInst(b(a),j);q.settings=b.extend({},d||{},h||{});if(i=="input")this._connectDatepicker(a,q);else j&&this._inlineDatepicker(a,q)},_newInst:function(a,d){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:d,dpDiv:!d?this.dpDiv:b('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,d){var h=b(a);d.append=b([]);d.trigger=b([]);if(!h.hasClass(this.markerClassName)){this._attachments(h,d);h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(i,j,n){d.settings[j]=n}).bind("getData.datepicker",function(i,j){return this._get(d,j)});this._autoSize(d);b.data(a,"datepicker",d)}},_attachments:function(a,d){var h=this._get(d,"appendText"),i=this._get(d,"isRTL");d.append&&
d.append.remove();if(h){d.append=b('<span class="'+this._appendClass+'">'+h+"</span>");a[i?"before":"after"](d.append)}a.unbind("focus",this._showDatepicker);d.trigger&&d.trigger.remove();h=this._get(d,"showOn");if(h=="focus"||h=="both")a.focus(this._showDatepicker);if(h=="button"||h=="both"){h=this._get(d,"buttonText");var j=this._get(d,"buttonImage");d.trigger=b(this._get(d,"buttonImageOnly")?b("<img/>").addClass(this._triggerClass).attr({src:j,alt:h,title:h}):b('<button type="button"></button>').addClass(this._triggerClass).html(j==
""?h:b("<img/>").attr({src:j,alt:h,title:h})));a[i?"before":"after"](d.trigger);d.trigger.click(function(){b.datepicker._datepickerShowing&&b.datepicker._lastInput==a[0]?b.datepicker._hideDatepicker():b.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var d=new Date(2009,11,20),h=this._get(a,"dateFormat");if(h.match(/[DM]/)){var i=function(j){for(var n=0,q=0,l=0;l<j.length;l++)if(j[l].length>n){n=j[l].length;q=l}return q};d.setMonth(i(this._get(a,
h.match(/MM/)?"monthNames":"monthNamesShort")));d.setDate(i(this._get(a,h.match(/DD/)?"dayNames":"dayNamesShort"))+20-d.getDay())}a.input.attr("size",this._formatDate(a,d).length)}},_inlineDatepicker:function(a,d){var h=b(a);if(!h.hasClass(this.markerClassName)){h.addClass(this.markerClassName).append(d.dpDiv).bind("setData.datepicker",function(i,j,n){d.settings[j]=n}).bind("getData.datepicker",function(i,j){return this._get(d,j)});b.data(a,"datepicker",d);this._setDate(d,this._getDefaultDate(d),
true);this._updateDatepicker(d);this._updateAlternate(d);d.dpDiv.show()}},_dialogDatepicker:function(a,d,h,i,j){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=b('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);b("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};b.data(this._dialogInput[0],"datepicker",a)}g(a.settings,i||{});
d=d&&d.constructor==Date?this._formatDate(a,d):d;this._dialogInput.val(d);this._pos=j?j.length?j:[j.pageX,j.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=h;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);b.blockUI&&b.blockUI(this.dpDiv);b.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var d=b(a),h=b.data(a,"datepicker");if(d.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();b.removeData(a,"datepicker");if(i=="input"){h.append.remove();h.trigger.remove();d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(i=="div"||i=="span")d.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var d=b(a),h=b.data(a,"datepicker");if(d.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();if(i=="input"){a.disabled=false;h.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(i=="div"||i=="span")d.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,
function(j){return j==a?null:j})}},_disableDatepicker:function(a){var d=b(a),h=b.data(a,"datepicker");if(d.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();if(i=="input"){a.disabled=true;h.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(i=="div"||i=="span")d.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,function(j){return j==a?null:
j});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var d=0;d<this._disabledInputs.length;d++)if(this._disabledInputs[d]==a)return true;return false},_getInst:function(a){try{return b.data(a,"datepicker")}catch(d){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,d,h){var i=this._getInst(a);if(arguments.length==2&&typeof d=="string")return d=="defaults"?b.extend({},b.datepicker._defaults):i?d=="all"?b.extend({},
i.settings):this._get(i,d):null;var j=d||{};if(typeof d=="string"){j={};j[d]=h}if(i){this._curInst==i&&this._hideDatepicker();var n=this._getDateDatepicker(a,true);g(i.settings,j);this._attachments(b(a),i);this._autoSize(i);this._setDateDatepicker(a,n);this._updateDatepicker(i)}},_changeDatepicker:function(a,d,h){this._optionDatepicker(a,d,h)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,d){if(a=this._getInst(a)){this._setDate(a,d);
this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,d){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,d);return a?this._getDate(a):null},_doKeyDown:function(a){var d=b.datepicker._getInst(a.target),h=true,i=d.dpDiv.is(".ui-datepicker-rtl");d._keyEvent=true;if(b.datepicker._datepickerShowing)switch(a.keyCode){case 9:b.datepicker._hideDatepicker();h=false;break;case 13:h=b("td."+b.datepicker._dayOverClass+":not(."+b.datepicker._currentClass+")",d.dpDiv);h[0]?
b.datepicker._selectDay(a.target,d.selectedMonth,d.selectedYear,h[0]):b.datepicker._hideDatepicker();return false;case 27:b.datepicker._hideDatepicker();break;case 33:b.datepicker._adjustDate(a.target,a.ctrlKey?-b.datepicker._get(d,"stepBigMonths"):-b.datepicker._get(d,"stepMonths"),"M");break;case 34:b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(d,"stepBigMonths"):+b.datepicker._get(d,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)b.datepicker._clearDate(a.target);h=a.ctrlKey||
a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)b.datepicker._gotoToday(a.target);h=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?+1:-1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?-b.datepicker._get(d,"stepBigMonths"):-b.datepicker._get(d,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,-7,"D");h=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,
i?-1:+1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(d,"stepBigMonths"):+b.datepicker._get(d,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,+7,"D");h=a.ctrlKey||a.metaKey;break;default:h=false}else if(a.keyCode==36&&a.ctrlKey)b.datepicker._showDatepicker(this);else h=false;if(h){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var d=b.datepicker._getInst(a.target);if(b.datepicker._get(d,
"constrainInput")){d=b.datepicker._possibleChars(b.datepicker._get(d,"dateFormat"));var h=String.fromCharCode(a.charCode==c?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||h<" "||!d||d.indexOf(h)>-1}},_doKeyUp:function(a){a=b.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,b.datepicker._getFormatConfig(a))){b.datepicker._setDateFromField(a);b.datepicker._updateAlternate(a);b.datepicker._updateDatepicker(a)}}catch(d){b.datepicker.log(d)}return true},
_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=b("input",a.parentNode)[0];if(!(b.datepicker._isDisabledDatepicker(a)||b.datepicker._lastInput==a)){var d=b.datepicker._getInst(a);b.datepicker._curInst&&b.datepicker._curInst!=d&&b.datepicker._curInst.dpDiv.stop(true,true);var h=b.datepicker._get(d,"beforeShow");g(d.settings,h?h.apply(a,[a,d]):{});d.lastVal=null;b.datepicker._lastInput=a;b.datepicker._setDateFromField(d);if(b.datepicker._inDialog)a.value="";if(!b.datepicker._pos){b.datepicker._pos=
b.datepicker._findPos(a);b.datepicker._pos[1]+=a.offsetHeight}var i=false;b(a).parents().each(function(){i|=b(this).css("position")=="fixed";return!i});if(i&&b.browser.opera){b.datepicker._pos[0]-=document.documentElement.scrollLeft;b.datepicker._pos[1]-=document.documentElement.scrollTop}h={left:b.datepicker._pos[0],top:b.datepicker._pos[1]};b.datepicker._pos=null;d.dpDiv.empty();d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});b.datepicker._updateDatepicker(d);h=b.datepicker._checkOffset(d,
h,i);d.dpDiv.css({position:b.datepicker._inDialog&&b.blockUI?"static":i?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"});if(!d.inline){h=b.datepicker._get(d,"showAnim");var j=b.datepicker._get(d,"duration"),n=function(){b.datepicker._datepickerShowing=true;var q=d.dpDiv.find("iframe.ui-datepicker-cover");if(q.length){var l=b.datepicker._getBorders(d.dpDiv);q.css({left:-l[0],top:-l[1],width:d.dpDiv.outerWidth(),height:d.dpDiv.outerHeight()})}};d.dpDiv.zIndex(b(a).zIndex()+1);b.effects&&
b.effects[h]?d.dpDiv.show(h,b.datepicker._get(d,"showOptions"),j,n):d.dpDiv[h||"show"](h?j:null,n);if(!h||!j)n();d.input.is(":visible")&&!d.input.is(":disabled")&&d.input.focus();b.datepicker._curInst=d}}},_updateDatepicker:function(a){var d=this,h=b.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var i=a.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({left:-h[0],top:-h[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",
function(){b(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&b(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!d._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");b(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=
-1&&b(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&b(this).addClass("ui-datepicker-next-hover")}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();h=this._getNumberOfMonths(a);i=h[1];i>1?a.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",17*i+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(h[0]!=1||h[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,
"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==b.datepicker._curInst&&b.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input.focus();if(a.yearshtml){var j=a.yearshtml;setTimeout(function(){j===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);j=a.yearshtml=null},0)}},_getBorders:function(a){var d=function(h){return{thin:1,medium:2,thick:3}[h]||h};return[parseFloat(d(a.css("border-left-width"))),parseFloat(d(a.css("border-top-width")))]},
_checkOffset:function(a,d,h){var i=a.dpDiv.outerWidth(),j=a.dpDiv.outerHeight(),n=a.input?a.input.outerWidth():0,q=a.input?a.input.outerHeight():0,l=document.documentElement.clientWidth+b(document).scrollLeft(),k=document.documentElement.clientHeight+b(document).scrollTop();d.left-=this._get(a,"isRTL")?i-n:0;d.left-=h&&d.left==a.input.offset().left?b(document).scrollLeft():0;d.top-=h&&d.top==a.input.offset().top+q?b(document).scrollTop():0;d.left-=Math.min(d.left,d.left+i>l&&l>i?Math.abs(d.left+i-
l):0);d.top-=Math.min(d.top,d.top+j>k&&k>j?Math.abs(j+q):0);return d},_findPos:function(a){for(var d=this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1);)a=a[d?"previousSibling":"nextSibling"];a=b(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var d=this._curInst;if(!(!d||a&&d!=b.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(d,"showAnim");var h=this._get(d,"duration"),i=function(){b.datepicker._tidyDialog(d);this._curInst=null};b.effects&&b.effects[a]?
d.dpDiv.hide(a,b.datepicker._get(d,"showOptions"),h,i):d.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?h:null,i);a||i();if(a=this._get(d,"onClose"))a.apply(d.input?d.input[0]:null,[d.input?d.input.val():"",d]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(b.blockUI){b.unblockUI();b("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(b.datepicker._curInst){a=b(a.target);a[0].id!=b.datepicker._mainDivId&&a.parents("#"+b.datepicker._mainDivId).length==0&&!a.hasClass(b.datepicker.markerClassName)&&!a.hasClass(b.datepicker._triggerClass)&&b.datepicker._datepickerShowing&&!(b.datepicker._inDialog&&b.blockUI)&&b.datepicker._hideDatepicker()}},_adjustDate:function(a,d,h){a=b(a);var i=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(i,d+(h=="M"?this._get(i,"showCurrentAtPos"):
0),h);this._updateDatepicker(i)}},_gotoToday:function(a){a=b(a);var d=this._getInst(a[0]);if(this._get(d,"gotoCurrent")&&d.currentDay){d.selectedDay=d.currentDay;d.drawMonth=d.selectedMonth=d.currentMonth;d.drawYear=d.selectedYear=d.currentYear}else{var h=new Date;d.selectedDay=h.getDate();d.drawMonth=d.selectedMonth=h.getMonth();d.drawYear=d.selectedYear=h.getFullYear()}this._notifyChange(d);this._adjustDate(a)},_selectMonthYear:function(a,d,h){a=b(a);var i=this._getInst(a[0]);i._selectingMonthYear=
false;i["selected"+(h=="M"?"Month":"Year")]=i["draw"+(h=="M"?"Month":"Year")]=parseInt(d.options[d.selectedIndex].value,10);this._notifyChange(i);this._adjustDate(a)},_clickMonthYear:function(a){var d=this._getInst(b(a)[0]);d.input&&d._selectingMonthYear&&setTimeout(function(){d.input.focus()},0);d._selectingMonthYear=!d._selectingMonthYear},_selectDay:function(a,d,h,i){var j=b(a);if(!(b(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0]))){j=this._getInst(j[0]);j.selectedDay=j.currentDay=
b("a",i).html();j.selectedMonth=j.currentMonth=d;j.selectedYear=j.currentYear=h;this._selectDate(a,this._formatDate(j,j.currentDay,j.currentMonth,j.currentYear))}},_clearDate:function(a){a=b(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,d){a=this._getInst(b(a)[0]);d=d!=null?d:this._formatDate(a);a.input&&a.input.val(d);this._updateAlternate(a);var h=this._get(a,"onSelect");if(h)h.apply(a.input?a.input[0]:null,[d,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);
else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var d=this._get(a,"altField");if(d){var h=this._get(a,"altFormat")||this._get(a,"dateFormat"),i=this._getDate(a),j=this.formatDate(h,i,this._getFormatConfig(a));b(d).each(function(){b(this).val(j)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var d=
a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((d-a)/864E5)/7)+1},parseDate:function(a,d,h){if(a==null||d==null)throw"Invalid arguments";d=typeof d=="object"?d.toString():d+"";if(d=="")return null;var i=(h?h.shortYearCutoff:null)||this._defaults.shortYearCutoff;i=typeof i!="string"?i:(new Date).getFullYear()%100+parseInt(i,10);for(var j=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,n=(h?h.dayNames:null)||this._defaults.dayNames,q=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort,
l=(h?h.monthNames:null)||this._defaults.monthNames,k=h=-1,m=-1,o=-1,p=false,s=function(x){(x=y+1<a.length&&a.charAt(y+1)==x)&&y++;return x},r=function(x){var C=s(x);x=new RegExp("^\\d{1,"+(x=="@"?14:x=="!"?20:x=="y"&&C?4:x=="o"?3:2)+"}");x=d.substring(w).match(x);if(!x)throw"Missing number at position "+w;w+=x[0].length;return parseInt(x[0],10)},u=function(x,C,J){x=s(x)?J:C;for(C=0;C<x.length;C++)if(d.substr(w,x[C].length).toLowerCase()==x[C].toLowerCase()){w+=x[C].length;return C+1}throw"Unknown name at position "+
w;},v=function(){if(d.charAt(w)!=a.charAt(y))throw"Unexpected literal at position "+w;w++},w=0,y=0;y<a.length;y++)if(p)if(a.charAt(y)=="'"&&!s("'"))p=false;else v();else switch(a.charAt(y)){case "d":m=r("d");break;case "D":u("D",j,n);break;case "o":o=r("o");break;case "m":k=r("m");break;case "M":k=u("M",q,l);break;case "y":h=r("y");break;case "@":var B=new Date(r("@"));h=B.getFullYear();k=B.getMonth()+1;m=B.getDate();break;case "!":B=new Date((r("!")-this._ticksTo1970)/1E4);h=B.getFullYear();k=B.getMonth()+
1;m=B.getDate();break;case "'":if(s("'"))v();else p=true;break;default:v()}if(h==-1)h=(new Date).getFullYear();else if(h<100)h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(h<=i?0:-100);if(o>-1){k=1;m=o;do{i=this._getDaysInMonth(h,k-1);if(m<=i)break;k++;m-=i}while(1)}B=this._daylightSavingAdjust(new Date(h,k-1,m));if(B.getFullYear()!=h||B.getMonth()+1!=k||B.getDate()!=m)throw"Invalid date";return B},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,d,h){if(!d)return"";var i=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,j=(h?h.dayNames:null)||this._defaults.dayNames,n=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort;h=(h?h.monthNames:null)||this._defaults.monthNames;var q=function(s){(s=p+1<a.length&&
a.charAt(p+1)==s)&&p++;return s},l=function(s,r,u){r=""+r;if(q(s))for(;r.length<u;)r="0"+r;return r},k=function(s,r,u,v){return q(s)?v[r]:u[r]},m="",o=false;if(d)for(var p=0;p<a.length;p++)if(o)if(a.charAt(p)=="'"&&!q("'"))o=false;else m+=a.charAt(p);else switch(a.charAt(p)){case "d":m+=l("d",d.getDate(),2);break;case "D":m+=k("D",d.getDay(),i,j);break;case "o":m+=l("o",(d.getTime()-(new Date(d.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":m+=l("m",d.getMonth()+1,2);break;case "M":m+=k("M",
d.getMonth(),n,h);break;case "y":m+=q("y")?d.getFullYear():(d.getYear()%100<10?"0":"")+d.getYear()%100;break;case "@":m+=d.getTime();break;case "!":m+=d.getTime()*1E4+this._ticksTo1970;break;case "'":if(q("'"))m+="'";else o=true;break;default:m+=a.charAt(p)}return m},_possibleChars:function(a){for(var d="",h=false,i=function(n){(n=j+1<a.length&&a.charAt(j+1)==n)&&j++;return n},j=0;j<a.length;j++)if(h)if(a.charAt(j)=="'"&&!i("'"))h=false;else d+=a.charAt(j);else switch(a.charAt(j)){case "d":case "m":case "y":case "@":d+=
"0123456789";break;case "D":case "M":return null;case "'":if(i("'"))d+="'";else h=true;break;default:d+=a.charAt(j)}return d},_get:function(a,d){return a.settings[d]!==c?a.settings[d]:this._defaults[d]},_setDateFromField:function(a,d){if(a.input.val()!=a.lastVal){var h=this._get(a,"dateFormat"),i=a.lastVal=a.input?a.input.val():null,j,n;j=n=this._getDefaultDate(a);var q=this._getFormatConfig(a);try{j=this.parseDate(h,i,q)||n}catch(l){this.log(l);i=d?"":i}a.selectedDay=j.getDate();a.drawMonth=a.selectedMonth=
j.getMonth();a.drawYear=a.selectedYear=j.getFullYear();a.currentDay=i?j.getDate():0;a.currentMonth=i?j.getMonth():0;a.currentYear=i?j.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,d,h){var i=function(n){var q=new Date;q.setDate(q.getDate()+n);return q},j=function(n){try{return b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),n,b.datepicker._getFormatConfig(a))}catch(q){}var l=
(n.toLowerCase().match(/^c/)?b.datepicker._getDate(a):null)||new Date,k=l.getFullYear(),m=l.getMonth();l=l.getDate();for(var o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,p=o.exec(n);p;){switch(p[2]||"d"){case "d":case "D":l+=parseInt(p[1],10);break;case "w":case "W":l+=parseInt(p[1],10)*7;break;case "m":case "M":m+=parseInt(p[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break;case "y":case "Y":k+=parseInt(p[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break}p=o.exec(n)}return new Date(k,
m,l)};if(d=(d=d==null||d===""?h:typeof d=="string"?j(d):typeof d=="number"?isNaN(d)?h:i(d):new Date(d.getTime()))&&d.toString()=="Invalid Date"?h:d){d.setHours(0);d.setMinutes(0);d.setSeconds(0);d.setMilliseconds(0)}return this._daylightSavingAdjust(d)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,d,h){var i=!d,j=a.selectedMonth,n=a.selectedYear;d=this._restrictMinMax(a,this._determineDate(a,d,new Date));a.selectedDay=
a.currentDay=d.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=d.getMonth();a.drawYear=a.selectedYear=a.currentYear=d.getFullYear();if((j!=a.selectedMonth||n!=a.selectedYear)&&!h)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(i?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var d=new Date;d=this._daylightSavingAdjust(new Date(d.getFullYear(),
d.getMonth(),d.getDate()));var h=this._get(a,"isRTL"),i=this._get(a,"showButtonPanel"),j=this._get(a,"hideIfNoPrevNext"),n=this._get(a,"navigationAsDateFormat"),q=this._getNumberOfMonths(a),l=this._get(a,"showCurrentAtPos"),k=this._get(a,"stepMonths"),m=q[0]!=1||q[1]!=1,o=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),p=this._getMinMaxDate(a,"min"),s=this._getMinMaxDate(a,"max");l=a.drawMonth-l;var r=a.drawYear;if(l<0){l+=12;r--}if(s){var u=
this._daylightSavingAdjust(new Date(s.getFullYear(),s.getMonth()-q[0]*q[1]+1,s.getDate()));for(u=p&&u<p?p:u;this._daylightSavingAdjust(new Date(r,l,1))>u;){l--;if(l<0){l=11;r--}}}a.drawMonth=l;a.drawYear=r;u=this._get(a,"prevText");u=!n?u:this.formatDate(u,this._daylightSavingAdjust(new Date(r,l-k,1)),this._getFormatConfig(a));u=this._canAdjustMonth(a,-1,r,l)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._adjustDate('#"+a.id+"', -"+k+", 'M');\" title=\""+u+'"><span class="ui-icon ui-icon-circle-triangle-'+
(h?"e":"w")+'">'+u+"</span></a>":j?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+u+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"e":"w")+'">'+u+"</span></a>";var v=this._get(a,"nextText");v=!n?v:this.formatDate(v,this._daylightSavingAdjust(new Date(r,l+k,1)),this._getFormatConfig(a));j=this._canAdjustMonth(a,+1,r,l)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._adjustDate('#"+a.id+"', +"+k+", 'M');\" title=\""+v+'"><span class="ui-icon ui-icon-circle-triangle-'+
(h?"w":"e")+'">'+v+"</span></a>":j?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+v+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"w":"e")+'">'+v+"</span></a>";k=this._get(a,"currentText");v=this._get(a,"gotoCurrent")&&a.currentDay?o:d;k=!n?k:this.formatDate(k,v,this._getFormatConfig(a));n=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+e+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";i=i?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(h?n:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._gotoToday('#"+a.id+"');\">"+k+"</button>":"")+(h?"":n)+"</div>":"";n=parseInt(this._get(a,"firstDay"),10);n=isNaN(n)?0:n;k=this._get(a,"showWeek");v=this._get(a,"dayNames");this._get(a,"dayNamesShort");var w=this._get(a,"dayNamesMin"),y=
this._get(a,"monthNames"),B=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),C=this._get(a,"showOtherMonths"),J=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var M=this._getDefaultDate(a),K="",G=0;G<q[0];G++){for(var N="",H=0;H<q[1];H++){var O=this._daylightSavingAdjust(new Date(r,l,a.selectedDay)),A=" ui-corner-all",D="";if(m){D+='<div class="ui-datepicker-group';if(q[1]>1)switch(H){case 0:D+=" ui-datepicker-group-first";A=" ui-corner-"+(h?"right":"left");break;case q[1]-
1:D+=" ui-datepicker-group-last";A=" ui-corner-"+(h?"left":"right");break;default:D+=" ui-datepicker-group-middle";A="";break}D+='">'}D+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+A+'">'+(/all|left/.test(A)&&G==0?h?j:u:"")+(/all|right/.test(A)&&G==0?h?u:j:"")+this._generateMonthYearHeader(a,l,r,p,s,G>0||H>0,y,B)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var E=k?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(A=0;A<7;A++){var z=
(A+n)%7;E+="<th"+((A+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+v[z]+'">'+w[z]+"</span></th>"}D+=E+"</tr></thead><tbody>";E=this._getDaysInMonth(r,l);if(r==a.selectedYear&&l==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,E);A=(this._getFirstDayOfMonth(r,l)-n+7)%7;E=m?6:Math.ceil((A+E)/7);z=this._daylightSavingAdjust(new Date(r,l,1-A));for(var P=0;P<E;P++){D+="<tr>";var Q=!k?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(z)+"</td>";for(A=0;A<7;A++){var I=
x?x.apply(a.input?a.input[0]:null,[z]):[true,""],F=z.getMonth()!=l,L=F&&!J||!I[0]||p&&z<p||s&&z>s;Q+='<td class="'+((A+n+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()==O.getTime()&&l==a.selectedMonth&&a._keyEvent||M.getTime()==z.getTime()&&M.getTime()==O.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!C?"":" "+I[1]+(z.getTime()==o.getTime()?" "+this._currentClass:"")+(z.getTime()==d.getTime()?" ui-datepicker-today":
""))+'"'+((!F||C)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+e+".datepicker._selectDay('#"+a.id+"',"+z.getMonth()+","+z.getFullYear()+', this);return false;"')+">"+(F&&!C?"&#xa0;":L?'<span class="ui-state-default">'+z.getDate()+"</span>":'<a class="ui-state-default'+(z.getTime()==d.getTime()?" ui-state-highlight":"")+(z.getTime()==o.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+z.getDate()+"</a>")+"</td>";z.setDate(z.getDate()+1);z=this._daylightSavingAdjust(z)}D+=
Q+"</tr>"}l++;if(l>11){l=0;r++}D+="</tbody></table>"+(m?"</div>"+(q[0]>0&&H==q[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");N+=D}K+=N}K+=i+(b.browser.msie&&parseInt(b.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return K},_generateMonthYearHeader:function(a,d,h,i,j,n,q,l){var k=this._get(a,"changeMonth"),m=this._get(a,"changeYear"),o=this._get(a,"showMonthAfterYear"),p='<div class="ui-datepicker-title">',
s="";if(n||!k)s+='<span class="ui-datepicker-month">'+q[d]+"</span>";else{q=i&&i.getFullYear()==h;var r=j&&j.getFullYear()==h;s+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+e+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+e+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var u=0;u<12;u++)if((!q||u>=i.getMonth())&&(!r||u<=j.getMonth()))s+='<option value="'+u+'"'+(u==d?' selected="selected"':"")+">"+l[u]+"</option>";s+="</select>"}o||(p+=s+(n||!(k&&
m)?"&#xa0;":""));a.yearshtml="";if(n||!m)p+='<span class="ui-datepicker-year">'+h+"</span>";else{l=this._get(a,"yearRange").split(":");var v=(new Date).getFullYear();q=function(w){w=w.match(/c[+-].*/)?h+parseInt(w.substring(1),10):w.match(/[+-].*/)?v+parseInt(w,10):parseInt(w,10);return isNaN(w)?v:w};d=q(l[0]);l=Math.max(d,q(l[1]||""));d=i?Math.max(d,i.getFullYear()):d;l=j?Math.min(l,j.getFullYear()):l;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+e+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+e+".datepicker._clickMonthYear('#"+a.id+"');\">";d<=l;d++)a.yearshtml+='<option value="'+d+'"'+(d==h?' selected="selected"':"")+">"+d+"</option>";a.yearshtml+="</select>";if(b.browser.mozilla)p+='<select class="ui-datepicker-year"><option value="'+h+'" selected="selected">'+h+"</option></select>";else{p+=a.yearshtml;a.yearshtml=null}}p+=this._get(a,"yearSuffix");if(o)p+=(n||!(k&&m)?"&#xa0;":"")+s;p+="</div>";return p},_adjustInstDate:function(a,d,h){var i=
a.drawYear+(h=="Y"?d:0),j=a.drawMonth+(h=="M"?d:0);d=Math.min(a.selectedDay,this._getDaysInMonth(i,j))+(h=="D"?d:0);i=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(i,j,d)));a.selectedDay=i.getDate();a.drawMonth=a.selectedMonth=i.getMonth();a.drawYear=a.selectedYear=i.getFullYear();if(h=="M"||h=="Y")this._notifyChange(a)},_restrictMinMax:function(a,d){var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");d=h&&d<h?h:d;return d=a&&d>a?a:d},_notifyChange:function(a){var d=this._get(a,
"onChangeMonthYear");if(d)d.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,d){return this._determineDate(a,this._get(a,d+"Date"),null)},_getDaysInMonth:function(a,d){return 32-(new Date(a,d,32)).getDate()},_getFirstDayOfMonth:function(a,d){return(new Date(a,d,1)).getDay()},_canAdjustMonth:function(a,d,h,i){var j=this._getNumberOfMonths(a);
h=this._daylightSavingAdjust(new Date(h,i+(d<0?d:j[0]*j[1]),1));d<0&&h.setDate(this._getDaysInMonth(h.getFullYear(),h.getMonth()));return this._isInRange(a,h)},_isInRange:function(a,d){var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!h||d.getTime()>=h.getTime())&&(!a||d.getTime()<=a.getTime())},_getFormatConfig:function(a){var d=this._get(a,"shortYearCutoff");d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);return{shortYearCutoff:d,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,d,h,i){if(!d){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}d=d?typeof d=="object"?d:this._daylightSavingAdjust(new Date(i,h,d)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),d,this._getFormatConfig(a))}});b.fn.datepicker=
function(a){if(!b.datepicker.initialized){b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv);b.datepicker.initialized=true}var d=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this[0]].concat(d));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this[0]].concat(d));
return this.each(function(){typeof a=="string"?b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this].concat(d)):b.datepicker._attachDatepicker(this,a)})};b.datepicker=new f;b.datepicker.initialized=false;b.datepicker.uuid=(new Date).getTime();b.datepicker.version="1.8.9";window["DP_jQuery_"+e]=b})(jQuery);
(function(b,c){var f={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},g={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};b.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(e){var a=b(this).css(e).offset().top;a<0&&
b(this).css("top",e.top-a)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var e=this,a=e.options,d=a.title||"&#160;",h=b.ui.dialog.getTitleId(e.element),i=(e.uiDialog=b("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+a.dialogClass).css({zIndex:a.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(q){if(a.closeOnEscape&&q.keyCode&&q.keyCode===b.ui.keyCode.ESCAPE){e.close(q);q.preventDefault()}}).attr({role:"dialog","aria-labelledby":h}).mousedown(function(q){e.moveToTop(false,q)});e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(i);var j=(e.uiDialogTitlebar=b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(i),n=b('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){n.addClass("ui-state-hover")},function(){n.removeClass("ui-state-hover")}).focus(function(){n.addClass("ui-state-focus")}).blur(function(){n.removeClass("ui-state-focus")}).click(function(q){e.close(q);return false}).appendTo(j);(e.uiDialogTitlebarCloseText=b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(a.closeText).appendTo(n);b("<span></span>").addClass("ui-dialog-title").attr("id",h).html(d).prependTo(j);if(b.isFunction(a.beforeclose)&&!b.isFunction(a.beforeClose))a.beforeClose=
a.beforeclose;j.find("*").add(j).disableSelection();a.draggable&&b.fn.draggable&&e._makeDraggable();a.resizable&&b.fn.resizable&&e._makeResizable();e._createButtons(a.buttons);e._isOpen=false;b.fn.bgiframe&&i.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var e=this;e.overlay&&e.overlay.destroy();e.uiDialog.hide();e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");e.uiDialog.remove();e.originalTitle&&
e.element.attr("title",e.originalTitle);return e},widget:function(){return this.uiDialog},close:function(e){var a=this,d,h;if(false!==a._trigger("beforeClose",e)){a.overlay&&a.overlay.destroy();a.uiDialog.unbind("keypress.ui-dialog");a._isOpen=false;if(a.options.hide)a.uiDialog.hide(a.options.hide,function(){a._trigger("close",e)});else{a.uiDialog.hide();a._trigger("close",e)}b.ui.dialog.overlay.resize();if(a.options.modal){d=0;b(".ui-dialog").each(function(){if(this!==a.uiDialog[0]){h=b(this).css("z-index");
isNaN(h)||(d=Math.max(d,h))}});b.ui.dialog.maxZ=d}return a}},isOpen:function(){return this._isOpen},moveToTop:function(e,a){var d=this,h=d.options;if(h.modal&&!e||!h.stack&&!h.modal)return d._trigger("focus",a);if(h.zIndex>b.ui.dialog.maxZ)b.ui.dialog.maxZ=h.zIndex;if(d.overlay){b.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",b.ui.dialog.overlay.maxZ=b.ui.dialog.maxZ)}e={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};b.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",b.ui.dialog.maxZ);
d.element.attr(e);d._trigger("focus",a);return d},open:function(){if(!this._isOpen){var e=this,a=e.options,d=e.uiDialog;e.overlay=a.modal?new b.ui.dialog.overlay(e):null;e._size();e._position(a.position);d.show(a.show);e.moveToTop(true);a.modal&&d.bind("keypress.ui-dialog",function(h){if(h.keyCode===b.ui.keyCode.TAB){var i=b(":tabbable",this),j=i.filter(":first");i=i.filter(":last");if(h.target===i[0]&&!h.shiftKey){j.focus(1);return false}else if(h.target===j[0]&&h.shiftKey){i.focus(1);return false}}});
b(e.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();e._isOpen=true;e._trigger("open");return e}},_createButtons:function(e){var a=this,d=false,h=b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),i=b("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);a.uiDialog.find(".ui-dialog-buttonpane").remove();typeof e==="object"&&e!==null&&b.each(e,function(){return!(d=true)});if(d){b.each(e,function(j,
n){n=b.isFunction(n)?{click:n,text:j}:n;j=b('<button type="button"></button>').attr(n,true).unbind("click").click(function(){n.click.apply(a.element[0],arguments)}).appendTo(i);b.fn.button&&j.button()});h.appendTo(a.uiDialog)}},_makeDraggable:function(){function e(j){return{position:j.position,offset:j.offset}}var a=this,d=a.options,h=b(document),i;a.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,n){i=
d.height==="auto"?"auto":b(this).height();b(this).height(b(this).height()).addClass("ui-dialog-dragging");a._trigger("dragStart",j,e(n))},drag:function(j,n){a._trigger("drag",j,e(n))},stop:function(j,n){d.position=[n.position.left-h.scrollLeft(),n.position.top-h.scrollTop()];b(this).removeClass("ui-dialog-dragging").height(i);a._trigger("dragStop",j,e(n));b.ui.dialog.overlay.resize()}})},_makeResizable:function(e){function a(j){return{originalPosition:j.originalPosition,originalSize:j.originalSize,
position:j.position,size:j.size}}e=e===c?this.options.resizable:e;var d=this,h=d.options,i=d.uiDialog.css("position");e=typeof e==="string"?e:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:d._minHeight(),handles:e,start:function(j,n){b(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",j,a(n))},resize:function(j,n){d._trigger("resize",j,a(n))},stop:function(j,
n){b(this).removeClass("ui-dialog-resizing");h.height=b(this).height();h.width=b(this).width();d._trigger("resizeStop",j,a(n));b.ui.dialog.overlay.resize()}}).css("position",i).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(e){var a=[],d=[0,0],h;if(e){if(typeof e==="string"||typeof e==="object"&&"0"in e){a=e.split?e.split(" "):[e[0],e[1]];if(a.length===
1)a[1]=a[0];b.each(["left","top"],function(i,j){if(+a[i]===a[i]){d[i]=a[i];a[i]=j}});e={my:a.join(" "),at:a.join(" "),offset:d.join(" ")}}e=b.extend({},b.ui.dialog.prototype.options.position,e)}else e=b.ui.dialog.prototype.options.position;(h=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(b.extend({of:window},e));h||this.uiDialog.hide()},_setOptions:function(e){var a=this,d={},h=false;b.each(e,function(i,j){a._setOption(i,j);if(i in f)h=true;if(i in
g)d[i]=j});h&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(e,a){var d=this,h=d.uiDialog;switch(e){case "beforeclose":e="beforeClose";break;case "buttons":d._createButtons(a);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+a);break;case "dialogClass":h.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+a);break;case "disabled":a?h.addClass("ui-dialog-disabled"):h.removeClass("ui-dialog-disabled");
break;case "draggable":var i=h.is(":data(draggable)");i&&!a&&h.draggable("destroy");!i&&a&&d._makeDraggable();break;case "position":d._position(a);break;case "resizable":(i=h.is(":data(resizable)"))&&!a&&h.resizable("destroy");i&&typeof a==="string"&&h.resizable("option","handles",a);!i&&a!==false&&d._makeResizable(a);break;case "title":b(".ui-dialog-title",d.uiDialogTitlebar).html(""+(a||"&#160;"));break}b.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var e=this.options,a,d,h=
this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(e.minWidth>e.width)e.width=e.minWidth;a=this.uiDialog.css({height:"auto",width:e.width}).height();d=Math.max(0,e.minHeight-a);if(e.height==="auto")if(b.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();e=this.element.css("height","auto").height();h||this.uiDialog.hide();this.element.height(Math.max(e,d))}else this.element.height(Math.max(e.height-a,0));this.uiDialog.is(":data(resizable)")&&
this.uiDialog.resizable("option","minHeight",this._minHeight())}});b.extend(b.ui.dialog,{version:"1.8.9",uuid:0,maxZ:0,getTitleId:function(e){e=e.attr("id");if(!e){this.uuid+=1;e=this.uuid}return"ui-dialog-title-"+e},overlay:function(e){this.$el=b.ui.dialog.overlay.create(e)}});b.extend(b.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:b.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(e){if(this.instances.length===
0){setTimeout(function(){b.ui.dialog.overlay.instances.length&&b(document).bind(b.ui.dialog.overlay.events,function(d){if(b(d.target).zIndex()<b.ui.dialog.overlay.maxZ)return false})},1);b(document).bind("keydown.dialog-overlay",function(d){if(e.options.closeOnEscape&&d.keyCode&&d.keyCode===b.ui.keyCode.ESCAPE){e.close(d);d.preventDefault()}});b(window).bind("resize.dialog-overlay",b.ui.dialog.overlay.resize)}var a=(this.oldInstances.pop()||b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});b.fn.bgiframe&&a.bgiframe();this.instances.push(a);return a},destroy:function(e){var a=b.inArray(e,this.instances);a!=-1&&this.oldInstances.push(this.instances.splice(a,1)[0]);this.instances.length===0&&b([document,window]).unbind(".dialog-overlay");e.remove();var d=0;b.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var e,a;if(b.browser.msie&&b.browser.version<7){e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
a=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return e<a?b(window).height()+"px":e+"px"}else return b(document).height()+"px"},width:function(){var e,a;if(b.browser.msie&&b.browser.version<7){e=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);a=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return e<a?b(window).width()+"px":e+"px"}else return b(document).width()+"px"},resize:function(){var e=b([]);b.each(b.ui.dialog.overlay.instances,
function(){e=e.add(this)});e.css({width:0,height:0}).css({width:b.ui.dialog.overlay.width(),height:b.ui.dialog.overlay.height()})}});b.extend(b.ui.dialog.overlay.prototype,{destroy:function(){b.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(b){b.ui=b.ui||{};var c=/left|center|right/,f=/top|center|bottom/,g=b.fn.position,e=b.fn.offset;b.fn.position=function(a){if(!a||!a.of)return g.apply(this,arguments);a=b.extend({},a);var d=b(a.of),h=d[0],i=(a.collision||"flip").split(" "),j=a.offset?a.offset.split(" "):[0,0],n,q,l;if(h.nodeType===9){n=d.width();q=d.height();l={top:0,left:0}}else if(h.setTimeout){n=d.width();q=d.height();l={top:d.scrollTop(),left:d.scrollLeft()}}else if(h.preventDefault){a.at="left top";n=q=0;l={top:a.of.pageY,
left:a.of.pageX}}else{n=d.outerWidth();q=d.outerHeight();l=d.offset()}b.each(["my","at"],function(){var k=(a[this]||"").split(" ");if(k.length===1)k=c.test(k[0])?k.concat(["center"]):f.test(k[0])?["center"].concat(k):["center","center"];k[0]=c.test(k[0])?k[0]:"center";k[1]=f.test(k[1])?k[1]:"center";a[this]=k});if(i.length===1)i[1]=i[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(a.at[0]==="right")l.left+=n;else if(a.at[0]==="center")l.left+=n/2;if(a.at[1]==="bottom")l.top+=
q;else if(a.at[1]==="center")l.top+=q/2;l.left+=j[0];l.top+=j[1];return this.each(function(){var k=b(this),m=k.outerWidth(),o=k.outerHeight(),p=parseInt(b.curCSS(this,"marginLeft",true))||0,s=parseInt(b.curCSS(this,"marginTop",true))||0,r=m+p+(parseInt(b.curCSS(this,"marginRight",true))||0),u=o+s+(parseInt(b.curCSS(this,"marginBottom",true))||0),v=b.extend({},l),w;if(a.my[0]==="right")v.left-=m;else if(a.my[0]==="center")v.left-=m/2;if(a.my[1]==="bottom")v.top-=o;else if(a.my[1]==="center")v.top-=
o/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-p,top:v.top-s};b.each(["left","top"],function(y,B){b.ui.position[i[y]]&&b.ui.position[i[y]][B](v,{targetWidth:n,targetHeight:q,elemWidth:m,elemHeight:o,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:a.my,at:a.at})});b.fn.bgiframe&&k.bgiframe();k.offset(b.extend(v,{using:a.using}))})};b.ui.position={fit:{left:function(a,d){var h=b(window);h=d.collisionPosition.left+d.collisionWidth-h.width()-h.scrollLeft();a.left=
h>0?a.left-h:Math.max(a.left-d.collisionPosition.left,a.left)},top:function(a,d){var h=b(window);h=d.collisionPosition.top+d.collisionHeight-h.height()-h.scrollTop();a.top=h>0?a.top-h:Math.max(a.top-d.collisionPosition.top,a.top)}},flip:{left:function(a,d){if(d.at[0]!=="center"){var h=b(window);h=d.collisionPosition.left+d.collisionWidth-h.width()-h.scrollLeft();var i=d.my[0]==="left"?-d.elemWidth:d.my[0]==="right"?d.elemWidth:0,j=d.at[0]==="left"?d.targetWidth:-d.targetWidth,n=-2*d.offset[0];a.left+=
d.collisionPosition.left<0?i+j+n:h>0?i+j+n:0}},top:function(a,d){if(d.at[1]!=="center"){var h=b(window);h=d.collisionPosition.top+d.collisionHeight-h.height()-h.scrollTop();var i=d.my[1]==="top"?-d.elemHeight:d.my[1]==="bottom"?d.elemHeight:0,j=d.at[1]==="top"?d.targetHeight:-d.targetHeight,n=-2*d.offset[1];a.top+=d.collisionPosition.top<0?i+j+n:h>0?i+j+n:0}}}};if(!b.offset.setOffset){b.offset.setOffset=function(a,d){if(/static/.test(b.curCSS(a,"position")))a.style.position="relative";var h=b(a),
i=h.offset(),j=parseInt(b.curCSS(a,"top",true),10)||0,n=parseInt(b.curCSS(a,"left",true),10)||0;i={top:d.top-i.top+j,left:d.left-i.left+n};"using"in d?d.using.call(a,i):h.css(i)};b.fn.offset=function(a){var d=this[0];if(!d||!d.ownerDocument)return null;if(a)return this.each(function(){b.offset.setOffset(this,a)});return e.call(this)}}})(jQuery);
(function(b,c){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(f){if(f===c)return this._value();this._setOption("value",f);return this},_setOption:function(f,g){if(f==="value"){this.options.value=g;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var f=this.options.value;if(typeof f!=="number")f=0;return Math.min(this.options.max,Math.max(this.min,f))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var f=this.value(),g=this._percentage();if(this.oldValue!==f){this.oldValue=f;this._trigger("change")}this.valueDiv.toggleClass("ui-corner-right",f===this.options.max).width(g.toFixed(0)+"%");this.element.attr("aria-valuenow",f)}});b.extend(b.ui.progressbar,{version:"1.8.9"})})(jQuery);
(function(b){b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var c=this,f=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");f.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=b([]);if(f.range){if(f.range===true){this.range=b("<div></div>");if(!f.values)f.values=[this._valueMin(),this._valueMin()];if(f.values.length&&f.values.length!==2)f.values=[f.values[0],f.values[0]]}else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(f.range==="min"||f.range==="max")this.range.addClass("ui-slider-range-"+f.range);this.range.addClass("ui-widget-header")}b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(f.values&&f.values.length)for(;b(".ui-slider-handle",this.element).length<f.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){f.disabled||b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(f.disabled)b(this).blur();
else{b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(g){b(this).data("index.ui-slider-handle",g)});this.handles.keydown(function(g){var e=true,a=b(this).data("index.ui-slider-handle"),d,h,i;if(!c.options.disabled){switch(g.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:e=
false;if(!c._keySliding){c._keySliding=true;b(this).addClass("ui-state-active");d=c._start(g,a);if(d===false)return}break}i=c.options.step;d=c.options.values&&c.options.values.length?(h=c.values(a)):(h=c.value());switch(g.keyCode){case b.ui.keyCode.HOME:h=c._valueMin();break;case b.ui.keyCode.END:h=c._valueMax();break;case b.ui.keyCode.PAGE_UP:h=c._trimAlignValue(d+(c._valueMax()-c._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:h=c._trimAlignValue(d-(c._valueMax()-c._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(d===
c._valueMax())return;h=c._trimAlignValue(d+i);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(d===c._valueMin())return;h=c._trimAlignValue(d-i);break}c._slide(g,a,h);return e}}).keyup(function(g){var e=b(this).data("index.ui-slider-handle");if(c._keySliding){c._keySliding=false;c._stop(g,e);c._change(g,e);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(c){var f=this.options,g,e,a,d,h;if(f.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();g=this._normValueFromMouse({x:c.pageX,y:c.pageY});e=this._valueMax()-this._valueMin()+1;d=this;this.handles.each(function(i){var j=Math.abs(g-d.values(i));if(e>j){e=j;a=b(this);h=i}});if(f.range===true&&this.values(1)===f.min){h+=1;a=b(this.handles[h])}if(this._start(c,
h)===false)return false;this._mouseSliding=true;d._handleIndex=h;a.addClass("ui-state-active").focus();f=a.offset();this._clickOffset=!b(c.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:c.pageX-f.left-a.width()/2,top:c.pageY-f.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(c,h,g);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(c){var f=this._normValueFromMouse({x:c.pageX,y:c.pageY});this._slide(c,this._handleIndex,f);return false},_mouseStop:function(c){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(c,this._handleIndex);this._change(c,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(c){var f;
if(this.orientation==="horizontal"){f=this.elementSize.width;c=c.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{f=this.elementSize.height;c=c.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}f=c/f;if(f>1)f=1;if(f<0)f=0;if(this.orientation==="vertical")f=1-f;c=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+f*c)},_start:function(c,f){var g={handle:this.handles[f],value:this.value()};if(this.options.values&&this.options.values.length){g.value=
this.values(f);g.values=this.values()}return this._trigger("start",c,g)},_slide:function(c,f,g){var e;if(this.options.values&&this.options.values.length){e=this.values(f?0:1);if(this.options.values.length===2&&this.options.range===true&&(f===0&&g>e||f===1&&g<e))g=e;if(g!==this.values(f)){e=this.values();e[f]=g;c=this._trigger("slide",c,{handle:this.handles[f],value:g,values:e});this.values(f?0:1);c!==false&&this.values(f,g,true)}}else if(g!==this.value()){c=this._trigger("slide",c,{handle:this.handles[f],
value:g});c!==false&&this.value(g)}},_stop:function(c,f){var g={handle:this.handles[f],value:this.value()};if(this.options.values&&this.options.values.length){g.value=this.values(f);g.values=this.values()}this._trigger("stop",c,g)},_change:function(c,f){if(!this._keySliding&&!this._mouseSliding){var g={handle:this.handles[f],value:this.value()};if(this.options.values&&this.options.values.length){g.value=this.values(f);g.values=this.values()}this._trigger("change",c,g)}},value:function(c){if(arguments.length){this.options.value=
this._trimAlignValue(c);this._refreshValue();this._change(null,0)}return this._value()},values:function(c,f){var g,e,a;if(arguments.length>1){this.options.values[c]=this._trimAlignValue(f);this._refreshValue();this._change(null,c)}if(arguments.length)if(b.isArray(arguments[0])){g=this.options.values;e=arguments[0];for(a=0;a<g.length;a+=1){g[a]=this._trimAlignValue(e[a]);this._change(null,a)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(c):this.value();
else return this._values()},_setOption:function(c,f){var g,e=0;if(b.isArray(this.options.values))e=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(c){case "disabled":if(f){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(g=0;g<e;g+=1)this._change(null,g);this._animateOff=false;break}},_value:function(){var c=this.options.value;return c=this._trimAlignValue(c)},_values:function(c){var f,g;if(arguments.length){f=this.options.values[c];
return f=this._trimAlignValue(f)}else{f=this.options.values.slice();for(g=0;g<f.length;g+=1)f[g]=this._trimAlignValue(f[g]);return f}},_trimAlignValue:function(c){if(c<=this._valueMin())return this._valueMin();if(c>=this._valueMax())return this._valueMax();var f=this.options.step>0?this.options.step:1,g=(c-this._valueMin())%f;alignValue=c-g;if(Math.abs(g)*2>=f)alignValue+=g>0?f:-f;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var c=this.options.range,f=this.options,g=this,e=!this._animateOff?f.animate:false,a,d={},h,i,j,n;if(this.options.values&&this.options.values.length)this.handles.each(function(q){a=(g.values(q)-g._valueMin())/(g._valueMax()-g._valueMin())*100;d[g.orientation==="horizontal"?"left":"bottom"]=a+"%";b(this).stop(1,1)[e?"animate":"css"](d,f.animate);if(g.options.range===true)if(g.orientation==="horizontal"){if(q===0)g.range.stop(1,1)[e?"animate":"css"]({left:a+"%"},f.animate);
if(q===1)g.range[e?"animate":"css"]({width:a-h+"%"},{queue:false,duration:f.animate})}else{if(q===0)g.range.stop(1,1)[e?"animate":"css"]({bottom:a+"%"},f.animate);if(q===1)g.range[e?"animate":"css"]({height:a-h+"%"},{queue:false,duration:f.animate})}h=a});else{i=this.value();j=this._valueMin();n=this._valueMax();a=n!==j?(i-j)/(n-j)*100:0;d[g.orientation==="horizontal"?"left":"bottom"]=a+"%";this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);if(c==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:a+"%"},f.animate);if(c==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-a+"%"},{queue:false,duration:f.animate});if(c==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:a+"%"},f.animate);if(c==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-a+"%"},{queue:false,duration:f.animate})}}});b.extend(b.ui.slider,{version:"1.8.9"})})(jQuery);
(function(b,c){function f(){return++e}function g(){return++a}var e=0,a=0;b.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(d,h){if(d=="selected")this.options.collapsible&&
h==this.options.selected||this.select(h);else{this.options[d]=h;this._tabify()}},_tabId:function(d){return d.title&&d.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+f()},_sanitizeSelector:function(d){return d.replace(/:/g,"\\:")},_cookie:function(){var d=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+g());return b.cookie.apply(null,[d].concat(b.makeArray(arguments)))},_ui:function(d,h){return{tab:d,panel:h,index:this.anchors.index(d)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var d=
b(this);d.html(d.data("label.tabs")).removeData("label.tabs")})},_tabify:function(d){function h(r,u){r.css("display","");!b.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var i=this,j=this.options,n=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=b(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return b("a",this)[0]});this.panels=b([]);this.anchors.each(function(r,u){var v=b(u).attr("href"),w=v.split("#")[0],y;if(w&&(w===location.toString().split("#")[0]||
(y=b("base")[0])&&w===y.href)){v=u.hash;u.href=v}if(n.test(v))i.panels=i.panels.add(i.element.find(i._sanitizeSelector(v)));else if(v&&v!=="#"){b.data(u,"href.tabs",v);b.data(u,"load.tabs",v.replace(/#.*$/,""));v=i._tabId(u);u.href="#"+v;u=i.element.find("#"+v);if(!u.length){u=b(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[r-1]||i.list);u.data("destroy.tabs",true)}i.panels=i.panels.add(u)}else j.disabled.push(r)});if(d){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===c){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(i._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=b.unique(j.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"),function(r){return i.lis.index(r)}))).sort();b.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(b.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");i.element.queue("tabs",function(){i._trigger("show",null,i._ui(i.anchors[j.selected],i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash))[0]))});this.load(j.selected)}b(window).bind("unload",function(){i.lis.add(i.anchors).unbind(".tabs");i.lis=i.anchors=i.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);d=0;for(var q;q=this.lis[d];d++)b(q)[b.inArray(d,j.disabled)!=-1&&!b(q).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var l=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){l("hover",b(this))});this.lis.bind("mouseout.tabs",function(){k("hover",b(this))});this.anchors.bind("focus.tabs",function(){l("focus",b(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",b(this).closest("li"))})}var m,o;if(j.fx)if(b.isArray(j.fx)){m=j.fx[0];o=j.fx[1]}else m=o=j.fx;var p=o?function(r,u){b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){h(u,o);i._trigger("show",null,i._ui(r,u[0]))})}:function(r,u){b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");i._trigger("show",null,i._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");h(u,m);i.element.dequeue("tabs")})}:function(r,u){i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");i.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=b(r).closest("li"),v=i.panels.filter(":not(.ui-tabs-hide)"),w=i.element.find(i._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||i.panels.filter(":animated").length||i._trigger("select",null,i._ui(this,w[0]))===false){this.blur();return false}j.selected=i.anchors.index(this);i.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){p(r,w)});i.load(i.anchors.index(this));this.blur();return false}j.cookie&&i._cookie(j.selected,j.cookie);if(w.length){v.length&&i.element.queue("tabs",function(){s(r,v)});i.element.queue("tabs",function(){p(r,w)});i.load(i.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
b.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(d){if(typeof d=="string")d=this.anchors.index(this.anchors.filter("[href$="+d+"]"));return d},destroy:function(){var d=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var h=
b.data(this,"href.tabs");if(h)this.href=h;var i=b(this).unbind(".tabs");b.each(["href","load","cache"],function(j,n){i.removeData(n+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){b.data(this,"destroy.tabs")?b(this).remove():b(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});d.cookie&&this._cookie(null,d.cookie);return this},add:function(d,
h,i){if(i===c)i=this.anchors.length;var j=this,n=this.options;h=b(n.tabTemplate.replace(/#\{href\}/g,d).replace(/#\{label\}/g,h));d=!d.indexOf("#")?d.replace("#",""):this._tabId(b("a",h)[0]);h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var q=j.element.find("#"+d);q.length||(q=b(n.panelTemplate).attr("id",d).data("destroy.tabs",true));q.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(i>=this.lis.length){h.appendTo(this.list);q.appendTo(this.list[0].parentNode)}else{h.insertBefore(this.lis[i]);
q.insertBefore(this.panels[i])}n.disabled=b.map(n.disabled,function(l){return l>=i?++l:l});this._tabify();if(this.anchors.length==1){n.selected=0;h.addClass("ui-tabs-selected ui-state-active");q.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[i],this.panels[i]));return this},remove:function(d){d=this._getIndex(d);var h=this.options,i=this.lis.eq(d).remove(),j=this.panels.eq(d).remove();
if(i.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(d+(d+1<this.anchors.length?1:-1));h.disabled=b.map(b.grep(h.disabled,function(n){return n!=d}),function(n){return n>=d?--n:n});this._tabify();this._trigger("remove",null,this._ui(i.find("a")[0],j[0]));return this},enable:function(d){d=this._getIndex(d);var h=this.options;if(b.inArray(d,h.disabled)!=-1){this.lis.eq(d).removeClass("ui-state-disabled");h.disabled=b.grep(h.disabled,function(i){return i!=d});this._trigger("enable",null,
this._ui(this.anchors[d],this.panels[d]));return this}},disable:function(d){d=this._getIndex(d);var h=this.options;if(d!=h.selected){this.lis.eq(d).addClass("ui-state-disabled");h.disabled.push(d);h.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[d],this.panels[d]))}return this},select:function(d){d=this._getIndex(d);if(d==-1)if(this.options.collapsible&&this.options.selected!=-1)d=this.options.selected;else return this;this.anchors.eq(d).trigger(this.options.event+".tabs");return this},
load:function(d){d=this._getIndex(d);var h=this,i=this.options,j=this.anchors.eq(d)[0],n=b.data(j,"load.tabs");this.abort();if(!n||this.element.queue("tabs").length!==0&&b.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(d).addClass("ui-state-processing");if(i.spinner){var q=b("span",j);q.data("label.tabs",q.html()).html(i.spinner)}this.xhr=b.ajax(b.extend({},i.ajaxOptions,{url:n,success:function(l,k){h.element.find(h._sanitizeSelector(j.hash)).html(l);h._cleanup();i.cache&&b.data(j,
"cache.tabs",true);h._trigger("load",null,h._ui(h.anchors[d],h.panels[d]));try{i.ajaxOptions.success(l,k)}catch(m){}},error:function(l,k){h._cleanup();h._trigger("load",null,h._ui(h.anchors[d],h.panels[d]));try{i.ajaxOptions.error(l,k,d,j)}catch(m){}}}));h.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(d,h){this.anchors.eq(d).removeData("cache.tabs").data("load.tabs",h);return this},length:function(){return this.anchors.length}});b.extend(b.ui.tabs,{version:"1.8.9"});b.extend(b.ui.tabs.prototype,{rotation:null,rotate:function(d,h){var i=this,j=this.options,n=i._rotate||(i._rotate=function(q){clearTimeout(i.rotation);i.rotation=setTimeout(function(){var l=j.selected;i.select(++l<i.anchors.length?l:0)},d);q&&q.stopPropagation()});h=i._unrotate||(i._unrotate=!h?function(q){q.clientX&&
i.rotate(null)}:function(){t=j.selected;n()});if(d){this.element.bind("tabsshow",n);this.anchors.bind(j.event+".tabs",h);n()}else{clearTimeout(i.rotation);this.element.unbind("tabsshow",n);this.anchors.unbind(j.event+".tabs",h);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
/*
 * jQuery Nivo Slider v2.1
 * http://nivo.dev7studios.com
 *
 * Copyright 2010, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * May 2010 - Pick random effect from specified set of effects by toronegro
 * May 2010 - controlNavThumbsFromRel option added by nerd-sh
 * May 2010 - Do not start nivoRun timer if there is only 1 slide by msielski
 * April 2010 - controlNavThumbs option added by Jamie Thompson (http://jamiethompson.co.uk)
 * March 2010 - manualAdvance option added by HelloPablo (http://hellopablo.co.uk)
 */


eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(9($){$.1k.1o=9(2b){b 3=$.2g({},$.1k.1o.21,2b);N g.H(9(){b 4={f:0,u:\'\',W:0,r:\'\',L:n,1j:n,1S:n};b 5=$(g);5.1T(\'7:4\',4);5.e(\'2o\',\'2m\');5.1f(\'1o\');b d=5.2n();d.H(9(){b l=$(g);b 1t=\'\';6(!l.J(\'B\')){6(l.J(\'a\')){l.1f(\'7-2h\');1t=l}l=l.1m(\'B:1r\')}b 18=l.x();6(18==0)18=l.t(\'x\');b 1b=l.y();6(1b==0)1b=l.t(\'y\');6(18>5.x()){5.x(18)}6(1b>5.y()){5.y(1b)}6(1t!=\'\'){1t.e(\'P\',\'1q\')}l.e(\'P\',\'1q\');4.W++});6(3.19>0){6(3.19>=4.W)3.19=4.W-1;4.f=3.19}6($(d[4.f]).J(\'B\')){4.u=$(d[4.f])}k{4.u=$(d[4.f]).1m(\'B:1r\')}6($(d[4.f]).J(\'a\')){$(d[4.f]).e(\'P\',\'1A\')}5.e(\'11\',\'10(\'+4.u.t(\'E\')+\') Z-Y\');23(b i=0;i<3.h;i++){b G=U.29(5.x()/3.h);6(i==3.h-1){5.O($(\'<D A="7-c"></D>\').e({2a:(G*i)+\'1c\',x:(5.x()-(G*i))+\'1c\'}))}k{5.O($(\'<D A="7-c"></D>\').e({2a:(G*i)+\'1c\',x:G+\'1c\'}))}}5.O($(\'<D A="7-K"><p></p></D>\').e({P:\'1q\',z:3.1U}));6(4.u.t(\'w\')!=\'\'){b w=4.u.t(\'w\');6(w.24(0,1)==\'#\')w=$(w).1d();$(\'.7-K p\',5).1d(w);$(\'.7-K\',5).1z(3.o)}b m=0;6(!3.1p&&d.1g>1){m=1E(9(){F(5,d,3,n)},3.1u)}6(3.S){5.O(\'<D A="7-S"><a A="7-27">2k</a><a A="7-25">2i</a></D>\');6(3.1R){$(\'.7-S\',5).26();5.1V(9(){$(\'.7-S\',5).2j()},9(){$(\'.7-S\',5).26()})}$(\'a.7-27\',5).1C(\'1F\',9(){6(4.L)N n;T(m);m=\'\';4.f-=2;F(5,d,3,\'1y\')});$(\'a.7-25\',5).1C(\'1F\',9(){6(4.L)N n;T(m);m=\'\';F(5,d,3,\'1x\')})}6(3.M){b 14=$(\'<D A="7-M"></D>\');5.O(14);23(b i=0;i<d.1g;i++){6(3.1P){b l=d.1B(i);6(!l.J(\'B\')){l=l.1m(\'B:1r\')}6(3.1O){14.O(\'<a A="7-1s" 1a="\'+i+\'"><B E="\'+l.t(\'1a\')+\'" 2e="" /></a>\')}k{14.O(\'<a A="7-1s" 1a="\'+i+\'"><B E="\'+l.t(\'E\').2l(3.1M,3.1N)+\'" 2e="" /></a>\')}}k{14.O(\'<a A="7-1s" 1a="\'+i+\'">\'+(i+1)+\'</a>\')}}$(\'.7-M a:1B(\'+4.f+\')\',5).1f(\'1h\');$(\'.7-M a\',5).1C(\'1F\',9(){6(4.L)N n;6($(g).2f(\'1h\'))N n;T(m);m=\'\';5.e(\'11\',\'10(\'+4.u.t(\'E\')+\') Z-Y\');4.f=$(g).t(\'1a\')-1;F(5,d,3,\'1s\')})}6(3.1X){$(2s).2F(9(1D){6(1D.1Q==\'2D\'){6(4.L)N n;T(m);m=\'\';4.f-=2;F(5,d,3,\'1y\')}6(1D.1Q==\'2C\'){6(4.L)N n;T(m);m=\'\';F(5,d,3,\'1x\')}})}6(3.1W){5.1V(9(){4.1j=Q;T(m);m=\'\'},9(){4.1j=n;6(m==\'\'&&!3.1p){m=1E(9(){F(5,d,3,n)},3.1u)}})}5.2E(\'7:X\',9(){4.L=n;$(d).H(9(){6($(g).J(\'a\')){$(g).e(\'P\',\'1q\')}});6($(d[4.f]).J(\'a\')){$(d[4.f]).e(\'P\',\'1A\')}6(m==\'\'&&!4.1j&&!3.1p){m=1E(9(){F(5,d,3,n)},3.1u)}3.20.1w(g)})});9 F(5,d,3,17){b 4=5.1T(\'7:4\');6((!4||4.1S)&&!17)N n;3.1Y.1w(g);6(!17){5.e(\'11\',\'10(\'+4.u.t(\'E\')+\') Z-Y\')}k{6(17==\'1y\'){5.e(\'11\',\'10(\'+4.u.t(\'E\')+\') Z-Y\')}6(17==\'1x\'){5.e(\'11\',\'10(\'+4.u.t(\'E\')+\') Z-Y\')}}4.f++;6(4.f==4.W){4.f=0;3.2d.1w(g)}6(4.f<0)4.f=(4.W-1);6($(d[4.f]).J(\'B\')){4.u=$(d[4.f])}k{4.u=$(d[4.f]).1m(\'B:1r\')}6(3.M){$(\'.7-M a\',5).2B(\'1h\');$(\'.7-M a:1B(\'+4.f+\')\',5).1f(\'1h\')}6(4.u.t(\'w\')!=\'\'){b w=4.u.t(\'w\');6(w.24(0,1)==\'#\')w=$(w).1d();6($(\'.7-K\',5).e(\'P\')==\'1A\'){$(\'.7-K p\',5).2c(3.o,9(){$(g).1d(w);$(g).1z(3.o)})}k{$(\'.7-K p\',5).1d(w)}$(\'.7-K\',5).1z(3.o)}k{$(\'.7-K\',5).2c(3.o)}b i=0;$(\'.7-c\',5).H(9(){b G=U.29(5.x()/3.h);$(g).e({y:\'R\',z:\'0\',11:\'10(\'+4.u.t(\'E\')+\') Z-Y -\'+((G+(i*G))-G)+\'1c 0%\'});i++});6(3.j==\'1l\'){b V=2H 2G("1K","12","1H","1e","1G","13","1I","1v");4.r=V[U.22(U.1l()*(V.1g+1))];6(4.r==2I)4.r=\'1v\'}6(3.j.2p(\',\')!=-1){b V=3.j.2t(\',\');4.r=$.2A(V[U.22(U.1l()*V.1g)])}4.L=Q;6(3.j==\'2r\'||3.j==\'1K\'||4.r==\'1K\'||3.j==\'12\'||4.r==\'12\'){b q=0;b i=0;b h=$(\'.7-c\',5);6(3.j==\'12\'||4.r==\'12\')h=$(\'.7-c\',5).1n();h.H(9(){b c=$(g);c.e(\'1L\',\'R\');6(i==3.h-1){I(9(){c.C({y:\'s%\',z:\'1.0\'},3.o,\'\',9(){5.16(\'7:X\')})},(s+q))}k{I(9(){c.C({y:\'s%\',z:\'1.0\'},3.o)},(s+q))}q+=1i;i++})}k 6(3.j==\'2q\'||3.j==\'1H\'||4.r==\'1H\'||3.j==\'1e\'||4.r==\'1e\'){b q=0;b i=0;b h=$(\'.7-c\',5);6(3.j==\'1e\'||4.r==\'1e\')h=$(\'.7-c\',5).1n();h.H(9(){b c=$(g);c.e(\'28\',\'R\');6(i==3.h-1){I(9(){c.C({y:\'s%\',z:\'1.0\'},3.o,\'\',9(){5.16(\'7:X\')})},(s+q))}k{I(9(){c.C({y:\'s%\',z:\'1.0\'},3.o)},(s+q))}q+=1i;i++})}k 6(3.j==\'1G\'||3.j==\'2u\'||4.r==\'1G\'||3.j==\'13\'||4.r==\'13\'){b q=0;b i=0;b v=0;b h=$(\'.7-c\',5);6(3.j==\'13\'||4.r==\'13\')h=$(\'.7-c\',5).1n();h.H(9(){b c=$(g);6(i==0){c.e(\'1L\',\'R\');i++}k{c.e(\'28\',\'R\');i=0}6(v==3.h-1){I(9(){c.C({y:\'s%\',z:\'1.0\'},3.o,\'\',9(){5.16(\'7:X\')})},(s+q))}k{I(9(){c.C({y:\'s%\',z:\'1.0\'},3.o)},(s+q))}q+=1i;v++})}k 6(3.j==\'1I\'||4.r==\'1I\'){b q=0;b i=0;$(\'.7-c\',5).H(9(){b c=$(g);b 1J=c.x();c.e({1L:\'R\',y:\'s%\',x:\'R\'});6(i==3.h-1){I(9(){c.C({x:1J,z:\'1.0\'},3.o,\'\',9(){5.16(\'7:X\')})},(s+q))}k{I(9(){c.C({x:1J,z:\'1.0\'},3.o)},(s+q))}q+=1i;i++})}k 6(3.j==\'1v\'||4.r==\'1v\'){b i=0;$(\'.7-c\',5).H(9(){$(g).e(\'y\',\'s%\');6(i==3.h-1){$(g).C({z:\'1.0\'},(3.o*2),\'\',9(){5.16(\'7:X\')})}k{$(g).C({z:\'1.0\'},(3.o*2))}i++})}}};$.1k.1o.21={j:\'1l\',h:15,o:2v,1u:2y,19:0,S:Q,1R:Q,M:Q,1P:n,1O:n,1M:\'.1Z\',1N:\'2x.1Z\',1X:Q,1W:Q,1p:n,1U:0.8,1Y:9(){},20:9(){},2d:9(){}};$.1k.1n=[].2w})(2z);',62,169,'|||settings|vars|slider|if|nivo||function||var|slice|kids|css|currentSlide|this|slices||effect|else|child|timer|false|animSpeed||timeBuff|randAnim|100|attr|currentImage||title|width|height|opacity|class|img|animate|div|src|nivoRun|sliceWidth|each|setTimeout|is|caption|running|controlNav|return|append|display|true|0px|directionNav|clearInterval|Math|anims|totalSlides|animFinished|repeat|no|url|background|sliceDownLeft|sliceUpDownLeft|nivoControl||trigger|nudge|childWidth|startSlide|rel|childHeight|px|html|sliceUpLeft|addClass|length|active|50|paused|fn|random|find|_reverse|nivoSlider|manualAdvance|none|first|control|link|pauseTime|fade|call|next|prev|fadeIn|block|eq|live|event|setInterval|click|sliceUpDown|sliceUpRight|fold|origWidth|sliceDownRight|top|controlNavThumbsSearch|controlNavThumbsReplace|controlNavThumbsFromRel|controlNavThumbs|keyCode|directionNavHide|stop|data|captionOpacity|hover|pauseOnHover|keyboardNav|beforeChange|jpg|afterChange|defaults|floor|for|substr|nextNav|hide|prevNav|bottom|round|left|options|fadeOut|slideshowEnd|alt|hasClass|extend|imageLink|Next|show|Prev|replace|relative|children|position|indexOf|sliceUp|sliceDown|window|split|sliceUpDownRight|500|reverse|_thumb|3000|jQuery|trim|removeClass|39|37|bind|keypress|Array|new|undefined'.split('|'),0,{}))
;
(function() {


}).call(this);
function PlayIt(Option){
	var s = document.getElementById('cancion').value;
	alert(Option);
	var str_array = Option.split(',');
	alert(str_array[0]);
document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="470" height="400" '
+'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" '
+'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
+'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">'
+'<param name="fileName" value="'+str_array[0]+'">'
+'<param name="animationatStart" value="true">'
+'<param name="transparentatStart" value="true">'
+'<param name="autoStart" value="1">'
+'<param name="showControls" value="true">'
+'<param name="loop" value="true">'
+'<param name="ShowStatusBar" value="true">'
+'<param name="ShowPositionControls" value="true">'
+'<param name="enableContextMenu" value="1" />'
+'<param name="fullScreen" value="0" />'
+'<embed type="application/x-mplayer2" '
+'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '
+'bgcolor="darkblue" showcontrols="true" showpositioncontrols="true" showstatusbar="true" showgotobar="true" width="470" height="400" '
+'src="'+str_array[0]+'" autostart="true" designtimesp="5311" loop="true">'
+'</embed>'
+'</object>'
}
/*
function showDiv(which) {
	//var currentImage = 1;
  // for(i = 0; i < 13; i++) {
      //document.getElementById("image"+i).style.display="none";
	  document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="470" height="400" '
+'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" '
+'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
+'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">'
+'<param name="fileName" value="'+document.getElementById('cancion'+i).value+'">'
+'<param name="animationatStart" value="true">'
+'<param name="transparentatStart" value="true">'
+'<param name="autoStart" value="1">'
+'<param name="showControls" value="true">'
+'<param name="loop" value="true">'
+'<param name="ShowStatusBar" value="true">'
+'<param name="ShowPositionControls" value="true">'
+'<param name="enableContextMenu" value="1" />'
+'<param name="fullScreen" value="0" />'
+'<embed type="application/x-mplayer2" '
+'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '
+'bgcolor="darkblue" showcontrols="true" showpositioncontrols="true" showstatusbar="true" showgotobar="true" width="470" height="400" '
+'src="'+document.getElementById('cancion'+i).value+'" autostart="true" designtimesp="5311" loop="true">'
+'</embed>'
+'</object>'
  // }
   //in the next 2 lines, you make sure which isn't lower than 1, and isn't greater than the number of images
  // if(which < 1) which = 1;
  // if(which > 13) which = 13;
  // document.getElementById("image" + which).style.display = "block";
  // currentImage = which;
} 
*/

       function showDiv(direction) {
       var currentTrack = 1;
             if(direction == "prev") {
                 // previous pressed
                 if(currentTrack > 1) {
                     currentTrack--;
                 }
             } else {
                 // next pressed
                 if(currentTrack < 13) {
                     currentTrack++;
                 }
             }

           //  document.getElementById("image" + currentTrack).style.display = "block";

             document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="470" height="400" '
                    +'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" '
                    +'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
                    +'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">'
                    +'<param name="fileName" value="'+document.getElementById('cancion').options[currentTrack].value+'">'
                    +'<param name="animationatStart" value="true">'
                    +'<param name="transparentatStart" value="true">'
                    +'<param name="autoStart" value="1">'
                    +'<param name="showControls" value="true">'
                    +'<param name="loop" value="true">'
                    +'<param name="ShowStatusBar" value="true">'
                    +'<param name="ShowPositionControls" value="true">'
                    +'<param name="enableContextMenu" value="1" />'
                    +'<param name="fullScreen" value="0" />'
                    +'<embed type="application/x-mplayer2" '
                    +'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '
                    +'bgcolor="darkblue" showcontrols="true" showpositioncontrols="true" showstatusbar="true" showgotobar="true" width="470" height="400" '
                    +'src="'+document.getElementById('cancion').options[currentTrack].value+'" autostart="true" designtimesp="5311" loop="true">'
                    +'</embed>'
                    +'</object>'
       }
;
/**
* DD_belatedPNG: Adds IE6 support: PNG images for CSS background-image and HTML <IMG/>.
* Author: Drew Diller
* Email: drew.diller@gmail.com
* URL: http://www.dillerdesign.com/experiment/DD_belatedPNG/
* Version: 0.0.8a
* Licensed under the MIT License: http://dillerdesign.com/experiment/DD_belatedPNG/#license
*
* Example usage:
* DD_belatedPNG.fix('.png_bg'); // argument is a CSS selector
* DD_belatedPNG.fixPng( someNode ); // argument is an HTMLDomElement
**/

/*
PLEASE READ:
Absolutely everything in this script is SILLY.  I know this.  IE's rendering of certain pixels doesn't make sense, so neither does this code!
*/


var DD_belatedPNG = {
	ns: 'DD_belatedPNG',
	imgSize: {},
	delay: 10,
	nodesFixed: 0,
	createVmlNameSpace: function () { /* enable VML */
		if (document.namespaces && !document.namespaces[this.ns]) {
			document.namespaces.add(this.ns, 'urn:schemas-microsoft-com:vml');
		}
	},
	createVmlStyleSheet: function () { /* style VML, enable behaviors */
		/*
			Just in case lots of other developers have added
			lots of other stylesheets using document.createStyleSheet
			and hit the 31-limit mark, let's not use that method!
			further reading: http://msdn.microsoft.com/en-us/library/ms531194(VS.85).aspx
		*/
		var screenStyleSheet, printStyleSheet;
		screenStyleSheet = document.createElement('style');
		screenStyleSheet.setAttribute('media', 'screen');
		document.documentElement.firstChild.insertBefore(screenStyleSheet, document.documentElement.firstChild.firstChild);
		if (screenStyleSheet.styleSheet) {
			screenStyleSheet = screenStyleSheet.styleSheet;
			screenStyleSheet.addRule(this.ns + '\\:*', '{behavior:url(#default#VML)}');
			screenStyleSheet.addRule(this.ns + '\\:shape', 'position:absolute;');
			screenStyleSheet.addRule('img.' + this.ns + '_sizeFinder', 'behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;'); /* large negative top value for avoiding vertical scrollbars for large images, suggested by James O'Brien, http://www.thanatopsic.org/hendrik/ */
			this.screenStyleSheet = screenStyleSheet;
			
			/* Add a print-media stylesheet, for preventing VML artifacts from showing up in print (including preview). */
			/* Thanks to Rémi Prévost for automating this! */
			printStyleSheet = document.createElement('style');
			printStyleSheet.setAttribute('media', 'print');
			document.documentElement.firstChild.insertBefore(printStyleSheet, document.documentElement.firstChild.firstChild);
			printStyleSheet = printStyleSheet.styleSheet;
			printStyleSheet.addRule(this.ns + '\\:*', '{display: none !important;}');
			printStyleSheet.addRule('img.' + this.ns + '_sizeFinder', '{display: none !important;}');
		}
	},
	readPropertyChange: function () {
		var el, display, v;
		el = event.srcElement;
		if (!el.vmlInitiated) {
			return;
		}
		if (event.propertyName.search('background') != -1 || event.propertyName.search('border') != -1) {
			DD_belatedPNG.applyVML(el);
		}
		if (event.propertyName == 'style.display') {
			display = (el.currentStyle.display == 'none') ? 'none' : 'block';
			for (v in el.vml) {
				if (el.vml.hasOwnProperty(v)) {
					el.vml[v].shape.style.display = display;
				}
			}
		}
		if (event.propertyName.search('filter') != -1) {
			DD_belatedPNG.vmlOpacity(el);
		}
	},
	vmlOpacity: function (el) {
		if (el.currentStyle.filter.search('lpha') != -1) {
			var trans = el.currentStyle.filter;
			trans = parseInt(trans.substring(trans.lastIndexOf('=')+1, trans.lastIndexOf(')')), 10)/100;
			el.vml.color.shape.style.filter = el.currentStyle.filter; /* complete guesswork */
			el.vml.image.fill.opacity = trans; /* complete guesswork */
		}
	},
	handlePseudoHover: function (el) {
		setTimeout(function () { /* wouldn't work as intended without setTimeout */
			DD_belatedPNG.applyVML(el);
		}, 1);
	},
	/**
	* This is the method to use in a document.
	* @param {String} selector - REQUIRED - a CSS selector, such as '#doc .container'
	**/
	fix: function (selector) {
		if (this.screenStyleSheet) {
			var selectors, i;
			selectors = selector.split(','); /* multiple selectors supported, no need for multiple calls to this anymore */
			for (i=0; i<selectors.length; i++) {
				this.screenStyleSheet.addRule(selectors[i], 'behavior:expression(DD_belatedPNG.fixPng(this))'); /* seems to execute the function without adding it to the stylesheet - interesting... */
			}
		}
	},
	applyVML: function (el) {
		el.runtimeStyle.cssText = '';
		this.vmlFill(el);
		this.vmlOffsets(el);
		this.vmlOpacity(el);
		if (el.isImg) {
			this.copyImageBorders(el);
		}
	},
	attachHandlers: function (el) {
		var self, handlers, handler, moreForAs, a, h;
		self = this;
		handlers = {resize: 'vmlOffsets', move: 'vmlOffsets'};
		if (el.nodeName == 'A') {
			moreForAs = {mouseleave: 'handlePseudoHover', mouseenter: 'handlePseudoHover', focus: 'handlePseudoHover', blur: 'handlePseudoHover'};
			for (a in moreForAs) {			
				if (moreForAs.hasOwnProperty(a)) {
					handlers[a] = moreForAs[a];
				}
			}
		}
		for (h in handlers) {
			if (handlers.hasOwnProperty(h)) {
				handler = function () {
					self[handlers[h]](el);
				};
				el.attachEvent('on' + h, handler);
			}
		}
		el.attachEvent('onpropertychange', this.readPropertyChange);
	},
	giveLayout: function (el) {
		el.style.zoom = 1;
		if (el.currentStyle.position == 'static') {
			el.style.position = 'relative';
		}
	},
	copyImageBorders: function (el) {
		var styles, s;
		styles = {'borderStyle':true, 'borderWidth':true, 'borderColor':true};
		for (s in styles) {
			if (styles.hasOwnProperty(s)) {
				el.vml.color.shape.style[s] = el.currentStyle[s];
			}
		}
	},
	vmlFill: function (el) {
		if (!el.currentStyle) {
			return;
		} else {
			var elStyle, noImg, lib, v, img, imgLoaded;
			elStyle = el.currentStyle;
		}
		for (v in el.vml) {
			if (el.vml.hasOwnProperty(v)) {
				el.vml[v].shape.style.zIndex = elStyle.zIndex;
			}
		}
		el.runtimeStyle.backgroundColor = '';
		el.runtimeStyle.backgroundImage = '';
		noImg = true;
		if (elStyle.backgroundImage != 'none' || el.isImg) {
			if (!el.isImg) {
				el.vmlBg = elStyle.backgroundImage;
				el.vmlBg = el.vmlBg.substr(5, el.vmlBg.lastIndexOf('")')-5);
			}
			else {
				el.vmlBg = el.src;
			}
			lib = this;
			if (!lib.imgSize[el.vmlBg]) { /* determine size of loaded image */
				img = document.createElement('img');
				lib.imgSize[el.vmlBg] = img;
				img.className = lib.ns + '_sizeFinder';
				img.runtimeStyle.cssText = 'behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;'; /* make sure to set behavior to none to prevent accidental matching of the helper elements! */
				imgLoaded = function () {
					this.width = this.offsetWidth; /* weird cache-busting requirement! */
					this.height = this.offsetHeight;
					lib.vmlOffsets(el);
				};
				img.attachEvent('onload', imgLoaded);
				img.src = el.vmlBg;
				img.removeAttribute('width');
				img.removeAttribute('height');
				document.body.insertBefore(img, document.body.firstChild);
			}
			el.vml.image.fill.src = el.vmlBg;
			noImg = false;
		}
		el.vml.image.fill.on = !noImg;
		el.vml.image.fill.color = 'none';
		el.vml.color.shape.style.backgroundColor = elStyle.backgroundColor;
		el.runtimeStyle.backgroundImage = 'none';
		el.runtimeStyle.backgroundColor = 'transparent';
	},
	/* IE can't figure out what do when the offsetLeft and the clientLeft add up to 1, and the VML ends up getting fuzzy... so we have to push/enlarge things by 1 pixel and then clip off the excess */
	vmlOffsets: function (el) {
		var thisStyle, size, fudge, makeVisible, bg, bgR, dC, altC, b, c, v;
		thisStyle = el.currentStyle;
		size = {'W':el.clientWidth+1, 'H':el.clientHeight+1, 'w':this.imgSize[el.vmlBg].width, 'h':this.imgSize[el.vmlBg].height, 'L':el.offsetLeft, 'T':el.offsetTop, 'bLW':el.clientLeft, 'bTW':el.clientTop};
		fudge = (size.L + size.bLW == 1) ? 1 : 0;
		/* vml shape, left, top, width, height, origin */
		makeVisible = function (vml, l, t, w, h, o) {
			vml.coordsize = w+','+h;
			vml.coordorigin = o+','+o;
			vml.path = 'm0,0l'+w+',0l'+w+','+h+'l0,'+h+' xe';
			vml.style.width = w + 'px';
			vml.style.height = h + 'px';
			vml.style.left = l + 'px';
			vml.style.top = t + 'px';
		};
		makeVisible(el.vml.color.shape, (size.L + (el.isImg ? 0 : size.bLW)), (size.T + (el.isImg ? 0 : size.bTW)), (size.W-1), (size.H-1), 0);
		makeVisible(el.vml.image.shape, (size.L + size.bLW), (size.T + size.bTW), (size.W), (size.H), 1 );
		bg = {'X':0, 'Y':0};
		if (el.isImg) {
			bg.X = parseInt(thisStyle.paddingLeft, 10) + 1;
			bg.Y = parseInt(thisStyle.paddingTop, 10) + 1;
		}
		else {
			for (b in bg) {
				if (bg.hasOwnProperty(b)) {
					this.figurePercentage(bg, size, b, thisStyle['backgroundPosition'+b]);
				}
			}
		}
		el.vml.image.fill.position = (bg.X/size.W) + ',' + (bg.Y/size.H);
		bgR = thisStyle.backgroundRepeat;
		dC = {'T':1, 'R':size.W+fudge, 'B':size.H, 'L':1+fudge}; /* these are defaults for repeat of any kind */
		altC = { 'X': {'b1': 'L', 'b2': 'R', 'd': 'W'}, 'Y': {'b1': 'T', 'b2': 'B', 'd': 'H'} };
		if (bgR != 'repeat' || el.isImg) {
			c = {'T':(bg.Y), 'R':(bg.X+size.w), 'B':(bg.Y+size.h), 'L':(bg.X)}; /* these are defaults for no-repeat - clips down to the image location */
			if (bgR.search('repeat-') != -1) { /* now let's revert to dC for repeat-x or repeat-y */
				v = bgR.split('repeat-')[1].toUpperCase();
				c[altC[v].b1] = 1;
				c[altC[v].b2] = size[altC[v].d];
			}
			if (c.B > size.H) {
				c.B = size.H;
			}
			el.vml.image.shape.style.clip = 'rect('+c.T+'px '+(c.R+fudge)+'px '+c.B+'px '+(c.L+fudge)+'px)';
		}
		else {
			el.vml.image.shape.style.clip = 'rect('+dC.T+'px '+dC.R+'px '+dC.B+'px '+dC.L+'px)';
		}
	},
	figurePercentage: function (bg, size, axis, position) {
		var horizontal, fraction;
		fraction = true;
		horizontal = (axis == 'X');
		switch(position) {
			case 'left':
			case 'top':
				bg[axis] = 0;
				break;
			case 'center':
				bg[axis] = 0.5;
				break;
			case 'right':
			case 'bottom':
				bg[axis] = 1;
				break;
			default:
				if (position.search('%') != -1) {
					bg[axis] = parseInt(position, 10) / 100;
				}
				else {
					fraction = false;
				}
		}
		bg[axis] = Math.ceil(  fraction ? ( (size[horizontal?'W': 'H'] * bg[axis]) - (size[horizontal?'w': 'h'] * bg[axis]) ) : parseInt(position, 10)  );
		if (bg[axis] % 2 === 0) {
			bg[axis]++;
		}
		return bg[axis];
	},
	fixPng: function (el) {
		el.style.behavior = 'none';
		var lib, els, nodeStr, v, e;
		if (el.nodeName == 'BODY' || el.nodeName == 'TD' || el.nodeName == 'TR') { /* elements not supported yet */
			return;
		}
		el.isImg = false;
		if (el.nodeName == 'IMG') {
			if(el.src.toLowerCase().search(/\.png$/) != -1) {
				el.isImg = true;
				el.style.visibility = 'hidden';
			}
			else {
				return;
			}
		}
		else if (el.currentStyle.backgroundImage.toLowerCase().search('.png') == -1) {
			return;
		}
		lib = DD_belatedPNG;
		el.vml = {color: {}, image: {}};
		els = {shape: {}, fill: {}};
		for (v in el.vml) {
			if (el.vml.hasOwnProperty(v)) {
				for (e in els) {
					if (els.hasOwnProperty(e)) {
						nodeStr = lib.ns + ':' + e;
						el.vml[v][e] = document.createElement(nodeStr);
					}
				}
				el.vml[v].shape.stroked = false;
				el.vml[v].shape.appendChild(el.vml[v].fill);
				el.parentNode.insertBefore(el.vml[v].shape, el);
			}
		}
		el.vml.image.shape.fillcolor = 'none'; /* Don't show blank white shapeangle when waiting for image to load. */
		el.vml.image.fill.type = 'tile'; /* Makes image show up. */
		el.vml.color.fill.on = false; /* Actually going to apply vml element's style.backgroundColor, so hide the whiteness. */
		lib.attachHandlers(el);
		lib.giveLayout(el);
		lib.giveLayout(el.offsetParent);
		el.vmlInitiated = true;
		lib.applyVML(el); /* Render! */
	}
};
try {
	document.execCommand("BackgroundImageCache", false, true); /* TredoSoft Multiple IE doesn't like this, so try{} it */
} catch(r) {}
DD_belatedPNG.createVmlNameSpace();
DD_belatedPNG.createVmlStyleSheet();
$(function(){
	
	// Checking for CSS 3D transformation support
	$.support.css3d = supportsCSS3D();
	
	var formContainer = $('#formContainer');
	
	// Listening for clicks on the ribbon links
	$('.flipLink').click(function(e){
		
		// Flipping the forms
		formContainer.toggleClass('flipped');
		
		// If there is no CSS3 3D support, simply
		// hide the login form (exposing the recover one)
		if(!$.support.css3d){
			$('#login').toggle();
		}
		e.preventDefault();
	});
	
	formContainer.find('form').submit(function(e){
		// Preventing form submissions. If you implement
		// a backend, you might want to remove this code
		e.preventDefault();
	});
	
	
	// A helper function that checks for the 
	// support of the 3D CSS3 transformations.
	function supportsCSS3D() {
		var props = [
			'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
		], testDom = document.createElement('a');
		  
		for(var i=0; i<props.length; i++){
			if(props[i] in testDom.style){
				return true;
			}
		}
		
		return false;
	}
});
var persisteduls=new Object()
var ddtreemenu=new Object()

ddtreemenu.closefolder="closed.gif" //set image path to "closed" folder image
ddtreemenu.openfolder="open.gif" //set image path to "open" folder image

//////////No need to edit beyond here///////////////////////////

ddtreemenu.createTree=function(treeid, enablepersist, persistdays){
var ultags=document.getElementById(treeid).getElementsByTagName("ul")
if (typeof persisteduls[treeid]=="undefined")
persisteduls[treeid]=(enablepersist==true && ddtreemenu.getCookie(treeid)!="")? ddtreemenu.getCookie(treeid).split(",") : ""
for (var i=0; i<ultags.length; i++)
ddtreemenu.buildSubTree(treeid, ultags[i], i)
if (enablepersist==true){ //if enable persist feature
var durationdays=(typeof persistdays=="undefined")? 1 : parseInt(persistdays)
ddtreemenu.dotask(window, function(){ddtreemenu.rememberstate(treeid, durationdays)}, "unload") //save opened UL indexes on body unload
}
}

ddtreemenu.buildSubTree=function(treeid, ulelement, index){
ulelement.parentNode.className="submenu"
if (typeof persisteduls[treeid]=="object"){ //if cookie exists (persisteduls[treeid] is an array versus "" string)
if (ddtreemenu.searcharray(persisteduls[treeid], index)){
ulelement.setAttribute("rel", "open")
ulelement.style.display="block"
ulelement.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
}
else
ulelement.setAttribute("rel", "closed")
} //end cookie persist code
else if (ulelement.getAttribute("rel")==null || ulelement.getAttribute("rel")==false) //if no cookie and UL has NO rel attribute explicted added by user
ulelement.setAttribute("rel", "closed")
else if (ulelement.getAttribute("rel")=="open") //else if no cookie and this UL has an explicit rel value of "open"
ddtreemenu.expandSubTree(treeid, ulelement) //expand this UL plus all parent ULs (so the most inner UL is revealed!)
ulelement.parentNode.onclick=function(e){
var submenu=this.getElementsByTagName("ul")[0]
if (submenu.getAttribute("rel")=="closed"){
submenu.style.display="block"
submenu.setAttribute("rel", "open")
ulelement.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
}
else if (submenu.getAttribute("rel")=="open"){
submenu.style.display="none"
submenu.setAttribute("rel", "closed")
ulelement.parentNode.style.backgroundImage="url("+ddtreemenu.closefolder+")"
}
ddtreemenu.preventpropagate(e)
}
ulelement.onclick=function(e){
ddtreemenu.preventpropagate(e)
}
}

ddtreemenu.expandSubTree=function(treeid, ulelement){ //expand a UL element and any of its parent ULs
var rootnode=document.getElementById(treeid)
var currentnode=ulelement
currentnode.style.display="block"
currentnode.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
while (currentnode!=rootnode){
if (currentnode.tagName=="UL"){ //if parent node is a UL, expand it too
currentnode.style.display="block"
currentnode.setAttribute("rel", "open") //indicate it's open
currentnode.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
}
currentnode=currentnode.parentNode
}
}

ddtreemenu.flatten=function(treeid, action){ //expand or contract all UL elements
var ultags=document.getElementById(treeid).getElementsByTagName("ul")
for (var i=0; i<ultags.length; i++){
ultags[i].style.display=(action=="expand")? "block" : "none"
var relvalue=(action=="expand")? "open" : "closed"
ultags[i].setAttribute("rel", relvalue)
ultags[i].parentNode.style.backgroundImage=(action=="expand")? "url("+ddtreemenu.openfolder+")" : "url("+ddtreemenu.closefolder+")"
}
}

ddtreemenu.rememberstate=function(treeid, durationdays){ //store index of opened ULs relative to other ULs in Tree into cookie
var ultags=document.getElementById(treeid).getElementsByTagName("ul")
var openuls=new Array()
for (var i=0; i<ultags.length; i++){
if (ultags[i].getAttribute("rel")=="open")
openuls[openuls.length]=i //save the index of the opened UL (relative to the entire list of ULs) as an array element
}
if (openuls.length==0) //if there are no opened ULs to save/persist
openuls[0]="none open" //set array value to string to simply indicate all ULs should persist with state being closed
ddtreemenu.setCookie(treeid, openuls.join(","), durationdays) //populate cookie with value treeid=1,2,3 etc (where 1,2... are the indexes of the opened ULs)
}

////A few utility functions below//////////////////////

ddtreemenu.getCookie=function(Name){ //get cookie value
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return ""
}

ddtreemenu.setCookie=function(name, value, days){ //set cookei value
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=expireDate.setDate(expireDate.getDate()+parseInt(days))
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

ddtreemenu.searcharray=function(thearray, value){ //searches an array for the entered value. If found, delete value from array
var isfound=false
for (var i=0; i<thearray.length; i++){
if (thearray[i]==value){
isfound=true
thearray.shift() //delete this element from array for efficiency sake
break
}
}
return isfound
}

ddtreemenu.preventpropagate=function(e){ //prevent action from bubbling upwards
if (typeof e!="undefined")
e.stopPropagation()
else
event.cancelBubble=true
}

ddtreemenu.dotask=function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
if (target.addEventListener)
target.addEventListener(tasktype, functionref, false)
else if (target.attachEvent)
target.attachEvent(tasktype, functionref)
}
;
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

stuHover = function() {
	var cssRule;
	var newSelector;
	for (var i=0; i< document.styleSheets.length; i++)
		for (var x=0; x< document.styleSheets[i].rules.length; x++)
			{
			cssRule = document.styleSheets[i].rules[x];
			if (cssRule.selectorText.indexOf("LI:hover") >= 0)
			{
				 newSelector = cssRule.selectorText.replace(/LI:hover/gi, "LI.iehover");
				document.styleSheets[i].addRule(newSelector , cssRule.style.cssText);
			}
		}
	var getElm = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<getElm.length; i++) {
		getElm[i].onmouseover=function() {
			this.className+=" iehover";
		}
		getElm[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" iehover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", stuHover);


(function() {


}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//




;
