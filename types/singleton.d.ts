export declare class Singleton {
    private static instance;
    readonly name: string;
    private constructor();
    static getInstance(name: string): Singleton;
}
