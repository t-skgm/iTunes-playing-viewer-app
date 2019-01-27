export const helpers = {
  tdtaToBuffer: (tdtaStr: string) => {
    const hexStr = tdtaStr.replace(/^\'tdta\'\(\$|\$\)$/g, '')
    const byteAry = helpers.hexStrings2byteAry(hexStr)
    return new Uint8Array(byteAry)
  },
  hexStrings2byteAry: (str: string) =>
    helpers.splitByLength(str, 2).map(h => parseInt(h, 16)),
  splitByLength: (str: string, length: number) =>
    str.split(new RegExp(`(.{${length}})`)).filter(e => e) // 空文字削除
}
