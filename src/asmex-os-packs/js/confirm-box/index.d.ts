import * as React from 'react';
import './confirmbox.css';
declare const confirm: (args: any) => void;
declare class ConfirmBox extends React.Component {
    state: any;
    confirmRef: any;
    constructor(props: any);
    componentDidMount(): void;
    ccancel(): void;
    render(): JSX.Element;
}
export { confirm, ConfirmBox };
