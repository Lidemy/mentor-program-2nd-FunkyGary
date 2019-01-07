function capitalize(str) {
    if ((str >= 'A' && str <= 'Z') || (str >= 'a' && str <= 'z')) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return str;
    }
}