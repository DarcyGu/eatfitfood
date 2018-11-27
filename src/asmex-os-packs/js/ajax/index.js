
Object.defineProperty(exports, "__esModule", { value: true });
var params = function (data) {
    var internalParams = function (element, key, list) {
        if (list === void 0) { list = []; }
        var newlist = list.slice(0);
        if (typeof element === 'object') {
            for (var i in element) {
                if (element.hasOwnProperty(i)) {
                    var newkey = i;
                    if (key) {
                        newkey = key + "[" + i + "]";
                    }
                    newlist = internalParams(element[i], newkey, newlist);
                }
            }
        }
        else {
            if (typeof element === 'boolean') {
                element = +element;
            }
            if (typeof key === 'string') {
                newlist.push(encodeURIComponent(key) + "=" + encodeURIComponent(element));
            }
        }
        return newlist;
    };
    return internalParams(data).join('&');
};
var request = function (props) {
    return new Promise(function (resolve, reject) {
        var defaultargs = {
            method: 'GET',
            url: false,
        };
        var args = Object.assign({}, defaultargs);
        for (var i in props) {
            if (props.hasOwnProperty(i)) {
                args[i] = props[i];
            }
        }
        if (!args.url) {
            return reject({ message: 'Invalid URL.' });
        }
        var xhr = new XMLHttpRequest();
        xhr.open(args.method, args.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    var result = JSON.parse(xhr.responseText);
                    if (!result.success) {
                        return reject({ message: result.message });
                    }
                    return resolve(result);
                }
                catch (e) {
                    console.error('Result not JSON.', e);
                    return reject({ message: 'Invalid response from API.' });
                }
            }
            else {
                console.error('Request failed.', xhr.status);
                return reject({ message: 'An ajax error has happened. Verify your log.' });
            }
        };
        if (args.data) {
            var encodedString = params(args.data);
            xhr.send(encodedString);
        }
        else {
            xhr.send();
        }
    });
};
var ajax = {
    get: function (args) {
        args.method = 'GET';
        return request(args);
    },
    post: function (args) {
        args.method = 'POST';
        return request(args);
    }
};
exports.default = ajax;
