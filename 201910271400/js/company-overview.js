/*! franken-dev 2019-10-27 14:00:35 */
var _companyOverview=_companyOverview||{};_companyOverview.init=function(){function t(){$(this.element).css(e),this.destroy()}var e={transform:"translate(0)",opacity:"1"};$(".section-title>div").waypoint({handler:t,offset:"75%"}),$(".officer > div > div").waypoint({handler:t,offset:"100%"}),$(".intro > div > a > div").waypoint({handler:t,offset:"90%"}),$(".partner > .list > div").waypoint({handler:function(){$(this.element).css({transform:"translate(0)",opacity:"1",transition:"2s ease "+function(t,e){return Math.floor(Math.random()*(e-t+1))+t}(1,15)/10+"s"}),this.destroy()},offset:"85%"}),$(".event-target").waypoint({handler:t,offset:"80%"}),$(".init-event").css(e)};