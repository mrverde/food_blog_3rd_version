

let loadYoutubeVideo = (selector, videoLink) => {
    const htmlVideoCode = `<figure class="iframe-div">
                                <iframe width="600" height="338" src="${videoLink}?autoplay=1&mute=1">
                                </iframe>
                           </figure>`

    document.querySelector(selector).innerHTML = htmlVideoCode
}

let loadVideo1 = () => loadYoutubeVideo("#video-pepes-pot-1", "https://www.youtube.com/embed/pffC9la_pOc")
let loadVideo2 = () => loadYoutubeVideo("#video-pepes-pot-2", "https://www.youtube.com/embed/bbepkTAtVAY")

document.getElementById("video-pepes-pot-1").addEventListener("click", loadVideo1, false);
document.getElementById("video-pepes-pot-2").addEventListener("click", loadVideo2, false);
