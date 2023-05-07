export declare class DevLogger {
    static loggingDisabled: boolean;
    static disableStyle: boolean;
    static setDisableStyle(boo?: boolean): void;
    static disableLogging(): void;
    static log(...args: any[]): void;
    static logSystem(options: {
        title: string;
        subtitle: string;
        color: string;
        backgroundColor: string;
    }, ...args: any[]): void;
    static logSuccess(title: string, subtitle: string, ...args: any[]): void;
    static logError(title: string, subtitle: string, ...args: any[]): void;
    static logInfo(title: string, subtitle: string, ...args: any[]): void;
}
