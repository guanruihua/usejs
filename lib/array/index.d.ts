export { filter } from './filter';
export { selects, select } from './select';
export declare function isArray(value: any): boolean;
export declare function pick(list: any[]): string;
export declare function unique(list: any[]): any[];
export declare function chunk(list: any[], size: number): any[];
export declare function concat(...list: any[]): any[];
export declare function drop(list?: any[], n?: number): any[];
export declare function dropRight(list: any[], n?: number): any[];
export declare function fill<T>(array: T[], value?: any, start?: number, end?: number): T[];
export declare function difference(list: any[], ...filterConditions: any[]): any[];