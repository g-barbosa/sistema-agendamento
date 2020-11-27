const ConvertTime = (date: string, periodo: boolean) => {
    let d = new Date(date)
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
    return `${hour}:${minute}`
}

const ConvertDateTime = (date: string) => {
    let d = new Date(date)
    let year = d.getFullYear()
    let fixedMonth = d.getMonth() + 1
    let month = fixedMonth < 10 ? "0" + fixedMonth : fixedMonth
    let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
    let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
}

const GenNewDate = (date: string) => {
    let d = new Date()
    let [hours, minutes] = date.split(":")
    d.setHours(+hours)
    d.setMinutes(+minutes)

    return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

export { ConvertTime, ConvertDateTime, GenNewDate }