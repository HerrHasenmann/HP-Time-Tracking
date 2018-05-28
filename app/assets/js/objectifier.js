var Objectifier = (function() {

    // Utility method to get and set objects that may or may not exist
    var objectifier = function(splits, create, context) {
        var result = context || window;
        for(var i = 0, s; result && (s = splits[i]); i++) {
            result = (s in result ? result[s] : (create ? result[s] = {} : undefined));
        }
        return result;
    };

    return {
        // Creates an object if it doesn't already exist
        set: function(object, path, value) {
            var splits = path.split('.'), s = splits.pop(), result = objectifier(splits, true, object);
            return result && s ? (result[s] = value) : undefined;
        },
        get: function(object, path, create) {
            return objectifier(path.split('.'), create, object);
        },
        exists: function(object, path) {
            return this.get(object, path, false) !== undefined;
        }
    };

})();
