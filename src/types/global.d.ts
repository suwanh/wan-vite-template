export {};
// declare 声明全局
declare global {
  // 对象
  type EmptyObjectType<T = any> = {
    [key: string]: T;
  };
  // 数组
  type EmptyArrayType<T = any> = T[];

  // optionTypes 下拉选项
  interface SelectOptionType<T = any> {
    label?: string | number;
    value?: string | number | string[];
    children?: SelectOptionType<T>[];
    [key: string]: T;
  }
}
