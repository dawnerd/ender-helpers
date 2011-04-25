/**
 * ender.helpers.js
 * Requires: ender.js (and probably submodules...)
 * 
 * https://github.com/ded/Ender.js
 *
 * A nice collection of methods missing from ender that are found in jQuery.
 */

$.ender({
 	width: function() {
 		try {
 			return this[0].clientWidth;
 		} catch(e) {
 			return this[0].innerWidth;
 		}
 	},
 	height: function() {
 		try {
 			return this[0].clientHeight;
 		} catch(e) {
 			return this[0].innerHeight;
 		}
 	},
 	parent: function(selector) {
 		if(this.elements.length === 0){
 			return this;
 		}
 		var el = this[0],
 			selector = selector || false;
 		if(el.nodeName === 'HTML') {
 			return false;
 		}
 		if(selector) {
	 		return this.parents(selector);
	 	} else {
	 		return $(el.parentNode);
	 	}
 	},
 	parents: function(selector) {
 		var el = this[0];
 		if(el.nodeName === 'HTML') {
 			return false;	
 		} 
 		var els = $(selector, el.parentNode);
 		if(els.length > 0) {
 			if(els[0] !== el.parentNode) {
 				return false;
 			}
 			return els;
 		} else {
 			return $(el.parentNode);
 		}
 	},

 	/* Override Ender prev/next to work correctly */
 	previous: function() {
 		if(this.elements.length === 0 || this[0].previousElementSibling === null) {
 			return this;
 		}
 		return $(this[0].previousElementSibling);
 	},
 	next: function() {
 		if(this.elements.length === 0 || this[0].nextElementSibling === null) {
 			return this;
 		}
 		return $(this[0].nextElementSibling);
 	},

 	random: function() {
 		return $(this[Math.floor(Math.random() * this.elements.length)]);
 	},

 	index: function() {
 		var c = 0, e = this[0];
 		while(e = e.previousSibling) { ++c; }
 		return c;
 	}
}, true);
