import * as React from 'react';
declare global {
    interface Window {
        jQuery: any;
    }
}
export default class SelectPicker extends React.Component<any> {
    selectPicker: React.RefObject<HTMLSelectElement>;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    picker(): void;
    render(): JSX.Element;
}
