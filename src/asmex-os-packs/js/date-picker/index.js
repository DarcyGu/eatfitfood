
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
var moment = require("moment");
var React = require("react");
var react_dates_1 = require("react-dates");
require("react-dates/initialize");
require("react-dates/lib/css/_datepicker.css");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            date: (_this.props.date) ? moment(_this.props.date, 'YYYY-MM-DD') : null,
            focused: null,
        };
        _this.changeDate = _this.changeDate.bind(_this);
        _this.onFocusChange = _this.onFocusChange.bind(_this);
        return _this;
    }
    DatePicker.prototype.changeDate = function (dt) {
        var date = (dt !== null) ? dt.format('YYYY-MM-DD') : null;
        this.setState({ date: date });
        this.props.onChange(date);
    };
    DatePicker.prototype.onFocusChange = function (ev) {
        this.setState({ 'focused': ev.focused });
    };
    DatePicker.prototype.render = function () {
        var date = null;
        if (this.props.date !== null) {
            date = moment(this.props.date, 'YYYY-MM-DD');
        }
        if (!date || !date.isValid || !date.isValid()) {
            date = null;
        }
        var disabled = this.props.disabled;
        var props = {};
        if (this.props.isOutsideRange) {
            props.isOutsideRange = this.props.isOutsideRange;
        }
        else if (this.props.allowPastDates) {
            props.isOutsideRange = function () { return false; };
        }
        props.id = (!this.props.id) ? 'thisisadate' : this.props.id;
        return (React.createElement("div", { className: "date-picker" },
            React.createElement("div", { className: "input-group date" },
                React.createElement("div", { className: "input-group-addon" },
                    React.createElement("i", { className: "fa fa-calendar calendar-icon" })),
                React.createElement(react_dates_1.SingleDatePicker, __assign({ date: date, onDateChange: this.changeDate, focused: this.state.focused, onFocusChange: this.onFocusChange, displayFormat: 'DD/MM/YYYY', disabled: disabled }, props)))));
    };
    return DatePicker;
}(React.Component));
exports.default = DatePicker;
