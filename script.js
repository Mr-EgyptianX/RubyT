const downloadButton = document.querySelector("button");

downloadButton.addEventListener("click", function () {
    const downloadUrl = "Mr-Egyptian.apk";

    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "Mr-Egyptian.apk";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});