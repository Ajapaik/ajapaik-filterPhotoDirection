!function(){var a=L.Marker.prototype._initIcon,b=L.Marker.prototype._setPos,c="msTransform"===L.DomUtil.TRANSFORM;L.Marker.addInitHook(function(){var a=this.options.icon&&this.options.icon.options,b=a&&this.options.icon.options.iconAnchor;b&&(b=b[0]+"px "+b[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||b||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0}),L.Marker.include({_initIcon:function(){a.call(this)},_setPos:function(a){b.call(this,a),this.options.rotationAngle&&(this._icon.style[L.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,c?this._icon.style[L.DomUtil.TRANSFORM]="rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(a){return this.options.rotationAngle=a,this.update(),this},setRotationOrigin:function(a){return this.options.rotationOrigin=a,this.update(),this}})}();
