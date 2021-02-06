export const convert = async (base: string, destination: string) => {
  try {
    const result = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
    const data = await result.json()
    console.log(data.rates[destination])
    return data.rates[destination]
  } catch (e) {
    // console.error(e)
    return null
  }
}
