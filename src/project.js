window.__require=function i(t,e,n){function s(o,h){if(!e[o]){if(!t[o]){var r=o.split("/");if(r=r[r.length-1],!t[r]){var a="function"==typeof __require&&__require;if(!h&&a)return a(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+o+"'")}}var _=e[o]={exports:{}};t[o][0].call(_.exports,function(i){return s(t[o][1][i]||i)},_,_.exports,i,t,e,n)}return e[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<n.length;o++)s(n[o]);return s}({GameController:[function(i,t,e){"use strict";cc._RF.push(t,"392d9qlrWhIcJcsLCkytltH","GameController"),cc.Class({extends:cc.Component,properties:{nodeTrafficLight:cc.Node,nodeChicken:cc.Node,nodeCar:cc.Node,nodeGameOver:cc.Node,_isCallTrafficLight:!1,_isCallChicken:!1,_isCallGameOver:!1,_timer:0},onLoad:function(){this.node.getComponent(cc.AudioSource).play(),this._isCallTrafficLight=!1,this._isCallChicken=!1,this._isCallGameOver=!1},update:function(i){0==this._timer&&(this._isCallTrafficLight||(this.nodeTrafficLight.getComponent("trafficLights")._isActive=!0,this._isCallTrafficLight=!0)),this._timer+=i,this._timer>13&&(this._isCallChicken||(this.nodeChicken.getComponent("chicken")._isActive=!0,this.nodeCar.getComponent("car")._isActive=!0,this._isCallChicken=!0)),this.nodeChicken.y<this.nodeCar.y&&0==this.nodeChicken.getComponent("chicken")._isDie&&(this.nodeChicken.getComponent("chicken")._isDie=!0,this.nodeChicken.getComponent("chicken").anim.play("die"),this.nodeChicken.getComponent(cc.AudioSource).play(),this.nodeChicken._isActive=!1),this._timer>19&&(this._isCallGameOver||(this.nodeGameOver.getComponent("GameOver")._isActive=!0,this._isCallGameOver=!0))}}),cc._RF.pop()},{}],GameOver:[function(i,t,e){"use strict";cc._RF.push(t,"d97fcqmtDlOyoYQwJ8HY529","GameOver"),cc.Class({extends:cc.Component,properties:{_isActive:!1,anim:cc.Animation},onLoad:function(){this.anim=this.node.getComponent(cc.Animation),this._isActive=!1},start:function(){},update:function(i){1==this._isActive&&(this.anim.play("GameOver"),this._isActive=!1)}}),cc._RF.pop()},{}],car:[function(i,t,e){"use strict";cc._RF.push(t,"986314ZQiRBkY0xFJvica/a","car"),cc.Class({extends:cc.Component,properties:{_isActive:!0,_counter:0,_timer:0,anim:cc.Animation,_isRoll:!1},onLoad:function(){this._isActive=!1,this.anim=this.node.getComponent(cc.Animation)},update:function(i){if(1==this._isActive){0==this._isRoll&&(this.anim.play("roll"),this._isRoll=!0),this._timer+=i,this._counter+=2.5,this.node.y++;var t=Math.max(0,3-this._counter/320);this.node.scale=cc.v2(t,t),this.node.y>300&&(this.node.active=!1)}}}),cc._RF.pop()},{}],chicken:[function(i,t,e){"use strict";cc._RF.push(t,"7d792grimdFZZ0a0wm/EEuX","chicken"),cc.Class({extends:cc.Component,properties:{anim:cc.Animation,_isDie:!1,_isMove:!1,_isActive:!1},onLoad:function(){this._isDie=!1,this._isMove=!1,this._isActive=!1,this.anim=this.node.getComponent(cc.Animation),this.anim.play("idle")},start:function(){},update:function(i){1==this._isActive&&(0==this._isMove&&(this.anim.play("walk"),this._isMove=!0),0==this._isDie&&(this.node.x+=.5))}}),cc._RF.pop()},{}],light:[function(i,t,e){"use strict";cc._RF.push(t,"857b2B7kjhOXomCj/x7sPWo","light"),cc.Class({extends:cc.Component,properties:{colorDefaul:cc.Color,colorAfter:cc.Color,_flag:!0,_timer:0,_isGreen:!1,_isActive:!1,_isBlink:!1,_couterBlink:0},onLoad:function(){},start:function(){},update:function(i){1==this._isActive&&(this._timer+=i,0==this._isBlink?this._timer>1&&this._timer<2?(this.changeColor(),this._timer=2):this._timer>3.5&&this._timer<5&&(this.changeColor(),this._timer=0,this._isBlink=!0):this._couterBlink<6?this._timer>.2&&(this._timer=0,this.changeColor(),this._couterBlink++):(this._isActive=!1,1==this._isGreen&&this.changeColor()))},changeColor:function(){1==this._flag?this.node.color=this.colorDefaul:this.node.color=this.colorAfter,this._flag=!this._flag}}),cc._RF.pop()},{}],trafficLights:[function(i,t,e){"use strict";cc._RF.push(t,"8c52akJrehF4Y4Pf3KjdG8a","trafficLights"),cc.Class({extends:cc.Component,properties:{lights:[cc.Node],_indexLight:0,_isActive:!1,_timer:0},onLoad:function(){this._isActive=!1,this._timer=3},start:function(){},update:function(i){1==this._isActive&&(this._timer+=i,this._timer>=4&&this._indexLight<3&&(this.lights[this._indexLight].getComponent("light")._isActive=!0,this._timer=0,this._indexLight++,2==this._indexLight&&(this.lights[this._indexLight].getComponent("light")._isGreen=!0,this._isActive)))}}),cc._RF.pop()},{}]},{},["GameController","GameOver","car","chicken","light","trafficLights"]);