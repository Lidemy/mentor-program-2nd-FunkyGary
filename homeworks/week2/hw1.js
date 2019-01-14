function stars(n) {
    let stararray = [];
    for (let i = 1; i <= n; i++) {
        let starstr = '';
        for (let j = 0; j < i; j++) {
            starstr += '*';
        }
        stararray.push(starstr)
    }
    return stararray
}

module.exports = stars;