declare global {
    interface Window {
        alert_float: any;
    }
}
declare const defaultFunction: (type: string, message: string) => void;
export default defaultFunction;
