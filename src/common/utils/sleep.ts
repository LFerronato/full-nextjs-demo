export const sleep = async (milliseconds: number) => {
  return await new Promise(fn => setTimeout(fn, milliseconds))
}
