import { Moment } from 'moment';
import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
interface Props {
    allowPastDates?: boolean;
    className?: string;
    date: string | null;
    disabled?: boolean;
    isOutsideRange?: (dt?: Moment | null) => boolean;
    id?: string;
    onChange: (dt: string | null) => void;
    placeholder?: string;
}
export default class DatePicker extends React.Component<Props> {
    state: any;
    constructor(props: Props);
    changeDate(dt: Moment | null): void;
    onFocusChange(ev: any): void;
    render(): JSX.Element;
}
export {};
