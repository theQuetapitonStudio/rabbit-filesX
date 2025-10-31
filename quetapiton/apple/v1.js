let a = document.getElementById("downloadBTN")

a.addEventListener("click", () => {
    let lnk = document.createElement("a")
    lnk.href = "files/3dmodel.obj"
    lnk.download = "APPLE_FREE_MODEL.obj"
    lnk.click()
})