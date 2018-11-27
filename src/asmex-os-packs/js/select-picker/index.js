
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var $ = window.jQuery;
var SelectPicker = /** @class */ (function (_super) {
    __extends(SelectPicker, _super);
    function SelectPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.selectPicker = React.createRef();
        return _this;
    }
    SelectPicker.prototype.componentDidMount = function () {
        this.picker();
    };
    SelectPicker.prototype.componentDidUpdate = function () {
        this.picker();
    };
    SelectPicker.prototype.picker = function () {
        if (this.selectPicker) {
            $(this.selectPicker.current).selectpicker('destroy');
            $(this.selectPicker.current).selectpicker();
        }
    };
    SelectPicker.prototype.render = function () {
        return (React.createElement("select", __assign({ "data-live-search": "true", ref: this.selectPicker }, this.props), this.props.children));
    };
    return SelectPicker;
}(React.Component));
exports.default = SelectPicker;
