function add(a, b) {
    let rtnStr = "";
    let carryNum = 0;
    let largerLength = Math.max(a.length, b.length);
    for (let i = 1; i <= largerLength; i++) {
        let aNum = a.length - i >= 0 ? Number(a[a.length - i]) : 0;
        let bNum = b.length - i >= 0 ? Number(b[b.length - i]) : 0;
        let sum = aNum + bNum + carryNum;
        carryNum = sum >= 10 ? 1 : 0;
        sum = sum >= 10 ? sum - 10 : sum;
        rtnStr = sum.toString() + rtnStr;
        if (i == largerLength && carryNum == 1) {
            rtnStr = carryNum + rtnStr;
        }
    }
    return rtnStr;
}

module.exports = add;