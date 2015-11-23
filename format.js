/**
 * format
 * @authors pingyf(koakumaping@163.com)
 * @date    2015-11-03 14:00:21
 * @version $Id$
 */

(function(window){
	var format = function(){
		if (arguments.length == 0){
			return '';
		} else {
			if (arguments.length == 1){
				return arguments[0];
			} else {
				var toReplace = arguments[0]
				for(var index = 1; index < arguments.length; index++){
					toReplace = toReplace.replace('{'+ (index-1) +'}', arguments[index]);
				}
				return toReplace;
			}
		}
	};

	window.format = window.format || format;
})(window);