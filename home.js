let askBtn = document.getElementById("ask-btn");
let errorMsg = document.getElementById("error-msg");

async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

askBtn.onclick = async function() {
    errorMsg.innerHTML = "This action cannot be<br>completed at this time.";
    errorMsg.style = "opacity: 50%;"
    await sleep(5)
    errorMsg.innerText = "";
}