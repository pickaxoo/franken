/*! franken-dev 2019-10-27 14:00:35 */
var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var a,i=1,s=arguments.length;i<s;i++)for(var n in a=arguments[i])Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,a,i){var u=this;this.target=t,this.endVal=a,this.options=i,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){u.startTime||(u.startTime=t);var a=t-u.startTime;u.remaining=u.duration-a,u.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(a,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(a,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(a/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(a/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.decimalMult)/u.decimalMult,u.printValue(u.frameVal),a<u.duration?u.rAF=requestAnimationFrame(u.count):null!==u.finalEndVal?u.update(u.finalEndVal):u.callback&&u.callback()},this.formatNumber=function(t){var a,i,s,n,e,r=t<0?"-":"";if(a=Math.abs(t).toFixed(u.options.decimalPlaces),s=(i=(a+="").split("."))[0],n=1<i.length?u.options.decimal+i[1]:"",u.options.useGrouping){e="";for(var o=0,l=s.length;o<l;++o)0!==o&&o%3==0&&(e=u.options.separator+e),e=s[l-o-1]+e;s=e}return u.options.numerals&&u.options.numerals.length&&(s=s.replace(/[0-9]/g,function(t){return u.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return u.options.numerals[+t]})),r+u.options.prefix+s+n+u.options.suffix},this.easeOutExpo=function(t,a,i,s){return i*(1-Math.pow(2,-10*t/s))*1024/1023+a},this.options=__assign({},this.defaults,i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(a),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var a=t-this.startVal;if(Math.abs(a)>this.options.smartEasingThreshold){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,0<this.duration?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var a=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=a:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=a:this.el.innerHTML=a},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var a=Number(t);return this.ensureNumber(a)?a:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),_home=_home||{};_home.init=function(){var t={transform:"translate(0)",opacity:"1"},a=new CountUp("count-value1",66462),i=new CountUp("count-value2",31357),s=new CountUp("count-value3",107),n=new CountUp("count-value4",96.3,{decimalPlaces:1});$("#count-area").waypoint({handler:function(){$(".count-value").css(t),$(".count-penc").css(t),$(".count-delimeter").css(t),$(".count-desc").css(t),a.start(),i.start(),s.start(),n.start(),this.destroy()},offset:"80%"});var e=$("#banner-area");e.waypoint({handler:function(){e.children().css(t),this.destroy()},offset:"80%"})};