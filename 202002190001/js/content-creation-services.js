/*! franken-dev 2020-02-19 00:01:05 */
var _contentCreation=_contentCreation||{};_contentCreation.init=function(){function t(t,n){return Math.floor(Math.random()*(n-t+1))+t}function n(){$(this.element).css(e),this.destroy()}var e={transform:"translate(0)",opacity:"1"};$(".section-title .inner01").waypoint({handler:n,offset:"75%"}),$(".section-title .inner02").waypoint({handler:n,offset:"75%"}),$(".section-title .inner03").waypoint({handler:n,offset:"75%"}),$(".event-target").waypoint({handler:n,offset:"80%"}),$(".content .brand-blog .cont .item").waypoint({handler:function(){$(this.element).css({transform:"translate(0)",opacity:"1",transition:"1s ease "+t(1,8)/10+"s"}),this.destroy()},offset:"80%"}),$(".content .posting .cont .item").waypoint({handler:function(){$(this.element).css({transform:"translate(0)",opacity:"1",transition:"1s ease "+t(1,10)/10+"s"}),this.destroy()},offset:"80%"}),$(".content .video .cont .item").waypoint({handler:function(){$(this.element).css({transform:"translate(0)",opacity:"1",transition:"1s ease "+t(1,6)/10+"s"}),this.destroy()},offset:"80%"}),$(".init-event").css(e)};