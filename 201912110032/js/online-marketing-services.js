/*! franken-dev 2019-12-11 00:32:53 */
String.prototype.startsWith||(String.prototype.startsWith=function(t,n){return this.substr(!n||n<0?0:+n,t.length)===t});var _onlineMarketing=_onlineMarketing||{};_onlineMarketing.init=function(){function t(t,n){return Math.floor(Math.random()*(n-t+1))+t}function n(){$(this.element).css(e),this.destroy()}var e={transform:"translate(0)",opacity:"1"};$(".section-title .inner01").waypoint({handler:n,offset:"75%"}),$(".section-title .inner02").waypoint({handler:n,offset:"75%"}),$(".section-title .inner03").waypoint({handler:n,offset:"75%"}),$(".event-target").waypoint({handler:n,offset:"80%"}),$(".content .blog .manage .item").waypoint({handler:function(){$(this.element).css({transform:"translate(0)",opacity:"1",transition:"1s ease "+t(1,10)/10+"s"}),this.destroy()},offset:"80%"}),$(".content .press .service .item").waypoint({handler:function(){$(this.element).css({transform:"translate(0)",opacity:"1",transition:"1s ease "+t(1,8)/10+"s"}),this.destroy()},offset:"80%"}),$(".init-event").css(e),window.location.hash&&window.location.hash.startsWith("#")&&(window.location.href=window.location.hash)};