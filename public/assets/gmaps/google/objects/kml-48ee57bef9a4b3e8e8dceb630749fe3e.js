(function(){var t={}.hasOwnProperty,e=function(e,o){function r(){this.constructor=e}for(var n in o)t.call(o,n)&&(e[n]=o[n]);return r.prototype=o.prototype,e.prototype=new r,e.__super__=o.prototype,e};this.Gmaps.Google.Objects.Kml=function(t){function o(t){this.serviceObject=t}return e(o,t),o.prototype.updateBounds=function(){},o.prototype.setMap=function(t){return this.getServiceObject().setMap(t)},o.prototype.getServiceObject=function(){return this.serviceObject},o.prototype.primitives=function(){return this.constructor.PRIMITIVES},o}(Gmaps.Base)}).call(this);