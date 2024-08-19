
const setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cName}=${cValue}; ${expires}; path=/`;
}

const getCookie = (cName) => {
    const name = `${cName}=`;
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
}

document.querySelector("#cookies-accept-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", "accepted", 30);
});

document.querySelector("#cookies-reject-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", "rejected", 30);
});

const cookieMessage = () => {
    const cookieStatus = getCookie("cookie");
    if (cookieStatus === "accepted") {
        document.querySelector("#cookies").style.display = "none";
    } else if (cookieStatus === "rejected") {
        document.querySelector("#cookies").style.display = "none";
    } else {
        document.querySelector("#cookies").style.display = "block";
    }
}

window.addEventListener("load", cookieMessage);