function shortenURL() {

    let url = document.getElementById("urlInput").value;

    if(url === "") {
        alert("Please enter a URL");
        return;
    }

    fetch("/shorten", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            url: url
        })
    })

    .then(response => response.json())
    .then(data => {

        document.getElementById("result").innerHTML = `
            <div class="result-box">
                <p>URL shortened successfully!</p>

                <div class="short-url">
                    ${data.short_url}
                </div>

                <button class="copy-btn"
                onclick="copyURL('${data.short_url}')">
                Copy
                </button>
            </div>
        `;
    });
}

function copyURL(url) {
    navigator.clipboard.writeText(url);
    alert("Copied!");
}