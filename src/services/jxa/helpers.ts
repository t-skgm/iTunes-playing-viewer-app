export const helpers = {
  writeToFile: (
    app: any,
    text: string,
    path: string,
    overwriteExistingContent?: boolean
  ) => {
    try {
      // Open the file for writing
      // @ts-ignore: Path
      let openedFile = app.openForAccess(Path(path), {
        writePermission: true
      })
      // Clear the file if content should be overwritten
      if (overwriteExistingContent) {
        app.setEof(openedFile, { to: 0 })
      }
      // Write the new content to the file
      app.write(text, {
        to: openedFile,
        startingAt: app.getEof(openedFile)
      })
      // Close the file
      app.closeAccess(openedFile)
      // Return a boolean indicating that writing was successful
      return true
    } catch (error) {
      try {
        // Close the file
        app.closeAccess(path)
      } catch (error) {
        // Report the error is closing failed
        console.log(`Couldn't close file: ${error}`)
      }
      // Return a boolean indicating that writing was successful
      return false
    }
  },
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
