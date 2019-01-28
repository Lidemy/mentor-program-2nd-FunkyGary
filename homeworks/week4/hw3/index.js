const Http = new XMLHttpRequest();
const url = 'https://api.twitch.tv/kraken/streams/?client_id=mwbn7fzrzcttdg983lq9i1oyctzyaa&limit=20&game=League%20of%20Legends';
Http.open("GET", url);
Http.send();
let top20games = [];
Http.onreadystatechange = (e, cb) => {
    JSON.parse(Http.responseText).streams.forEach(element => {
        let obj = {
            url: '',
            logo: '',
            status: '',
            display_name: '',
            preview: '',
            created_at: '',
        }
        obj.url = element.channel.url;
        obj.logo = element.channel.logo;
        obj.status = element.channel.status;
        obj.display_name = element.channel.display_name;
        obj.preview = element.preview.medium;
        obj.created_at = element.created_at;
        top20games.push(obj);
    });
    console.log(top20games)
    for (let i = 0; i < top20games.length; i++) {
        let url = top20games[i].url;
        let logo = top20games[i].logo;
        let status = top20games[i].status;
        let display_name = top20games[i].display_name;
        let preview = top20games[i].preview;
        let created_at = top20games[i].created_at;
        document.querySelector('.container').innerHTML += renderStream(url, preview, logo, status, display_name, created_at)
        console.log(i)
    }
}
console.log(top20games.length)

function renderStream(url, preview, logo, status, display_name, created_at) {
    return `
    <div class="container__box">
        <div class="box__video">
            <a href="${url}" target="_blank">
                <img src=${preview}>
            </a>
        </div>
        <div class="box__avatar">
            <img class="avatar__img" src=${logo}>
            <div class="avatar__info">
                <h6 class="info__status"> ${status}</h6>
                <h6 class="info__host"> ${display_name}</h6>
            </div>
        </div>
    </div>`
}