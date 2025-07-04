/**
 * 必填校验规则
 * @param { string } message 错误提示信息
 * @returns { Array } 返回验证规则数组
 */
export function valid(message: string) {
  return [{ required: true, message }];
}
