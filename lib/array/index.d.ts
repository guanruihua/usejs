import { iAnyObject } from '../type';
import initMultArray from './initMultArray';
import { arrayFilterByObject, compact } from './filter';
import { arraySelectItems, arraySelectOne, difference } from './select';
export { initMultArray, arrayFilterByObject, difference, compact, arraySelectItems, arraySelectOne };
export declare function pick(list: any[]): string;
export declare function arrayUniqueItem(list: any[]): any[];
export declare function chunk(list: any[], size: number): any[];
export declare function concat(...list: any[]): any[];
export declare function drop(list?: any[], n?: number): any[];
export declare function dropRight(list: any[], n?: number): any[];
export declare function fill<T>(array: T[], value?: any, start?: number, end?: number): T[];
export declare function findIndex<T>(array: T[], predicate: T[] | ((val: T) => T) | iAnyObject | string, fromIndex?: number): number;
export declare function findLastIndex<T>(array: T[], predicate: T[] | ((val: T) => T) | iAnyObject | string, fromIndex: number): number;
