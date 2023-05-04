function healthcheck(obj) {
    let value = obj.health;
    if (value > 50) return "healthy";
    else if (value <= 50 && value > 15) return "norm";
    else return "critical";
}

export default healthcheck;