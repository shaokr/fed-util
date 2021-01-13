export default (promise: Promise<any>, time: number = 10000, data: any = false) => {
  const overtime = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
  return Promise.race([overtime, promise])
}
