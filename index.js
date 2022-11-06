superbowlWin = (record) => {
    const result = record.find(record => result === "W")
    return result? result.year : undefined
}


