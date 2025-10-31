function create_site(img, link, title, creator = "THE QUETAPITON STUDIO"){
    let foto = document.createElement("img")
    foto.src = img
    foto.style.borderRadius = "500px"
    foto.style.width = "200px"

    let titulu = document.createElement("p")
    titulu.textContent = title

    let body = document.body
    body.style.textAlign = "center"
    body.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"

    let btn1 = document.createElement("button")
    btn1.textContent = "DOWNLOAD"
    btn1.style.padding = "20px"
    btn1.style.borderRadius = "20px"
    btn1.style.border = 0
    btn1.style.background = "linear-gradient(135deg, #0f0, #028d30)"

    btn1.addEventListener("click", () => {
        let lnk = document.createElement("a")
        lnk.href = link
        lnk.download = title
        lnk.click()
    })
    body.appendChild(foto)
    body.appendChild(titulu)
    body.appendChild(btn1)
}