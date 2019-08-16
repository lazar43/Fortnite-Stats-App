const selector = name => {
  return document.querySelector(name);
};

const headers = {
  "TRN-Api-Key": "276d7709-9fa1-4cfd-b033-39d67ecd819c"
};

const Stats = e => {
  e.preventDefault();
  const name = document.getElementById("nickname").value;
  const platform = document.getElementById("inputState").value;

  selector(
    ".spinner_div"
  ).innerHTML = `<div id="spinner" class="spinner-border text-primary"></div>`;
  selector(".content").innerHTML = null;

  // Fetching DATA
  const proxy = "https://cors-anywhere.herokuapp.com/";
  fetch(
    `${proxy}https://api.fortnitetracker.com/v1/profile/${platform}/${name}`,
    {
      headers
    }
  )
    .then(res => {
      const status = res.status;
      status == 429 ? console.log("To many request") : null;
      return res.json();
    })
    .then(data => {
      console.log(data);
      let element = document.getElementById("spinner");
      element.classList.remove("spinner-border");

      // const output = jsx;

      selector(".content").innerHTML = `
      <div class="details">
              <table class="table table-light">
                <thead>
                  <tr class="solo" style="color:white;">
                    <td colspan="3">SOLO</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    Wins: <span class="text-primary">${
                      data.stats.p2.top1.value
                    }</td>
                    <td>
                    Kills: <span class="duo text-primary">${
                      data.stats.p2.kills.value
                    }</td>
                    <td>
                    Win%:
                    <span class="squad text-primary">${
                      data.stats.p2.winRatio.displayValue
                    }</td>
                  </tr>
                  <tr>
                    <td>
                    Top 25: <span class="text-primary">${
                      data.stats.p2.top25.value
                    }</td>
                    <td>
                    Top 10: <span class="duo text-primary">${
                      data.stats.p2.top10.value
                    }</td>
                    <td>
                    Score:
                    <span class="squad text-primary">${
                      data.stats.p2.score.value
                    }</td>
                  </tr>
                </tbody>
              </table>
      </div>
      <div class="details">
              <table class="table table-light">
                <thead>
                  <tr class="solo" style="color:white;">
                    <td colspan="3">DUOS</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    Wins: <span class="text-primary">${
                      data.stats.p10.top1.value
                    }</td>
                    <td>
                    Kills: <span class="duo text-primary">${
                      data.stats.p10.kills.value
                    }</td>
                    <td>
                    Win%:
                    <span class="squad text-primary">${
                      data.stats.p10.winRatio.displayValue
                    }</td>
                  </tr>
                  <tr>
                    <td>
                    Top 25: <span class="text-primary">${
                      data.stats.p10.top25.value
                    }</td>
                    <td>
                    Top 10: <span class="duo text-primary">${
                      data.stats.p10.top10.value
                    }</td>
                    <td>
                    Score:
                    <span class="squad text-primary">${
                      data.stats.p10.score.value
                    }</td>
                  </tr>
                </tbody>
              </table>
      </div>
      <div class="details">
              <table class="table table-light">
                <thead>
                  <tr class="solo" style="color:white;">
                    <td colspan="3">SQUAD</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    Wins: <span class="text-primary">${
                      data.stats.p9.top1.value
                    }</td>
                    <td>
                    Kills: <span class="duo text-primary">${
                      data.stats.p9.kills.value
                    }</td>
                    <td>
                    Win%:
                    <span class="squad text-primary">${
                      data.stats.p9.winRatio.displayValue
                    }</td>
                  </tr>
                  <tr>
                    <td>
                    Top 25: <span class="text-primary">${
                      data.stats.p9.top25.value
                    }</td>
                    <td>
                    Top 10: <span class="duo text-primary">${
                      data.stats.p9.top10.value
                    }</td>
                    <td>
                    Score:
                    <span class="squad text-primary">${
                      data.stats.p9.score.value
                    }</td>
                  </tr>
                </tbody>
              </table>
      </div>`;
    })
    .catch(err => console.log(err.message));
};

document.getElementById("submit").addEventListener("click", e => Stats(e));
