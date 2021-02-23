console.log("Covid-details");


let getData = document.getElementById('getData');
getData.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.covid19api.com/summary',true);
    xhr.onload = function(){
        let json = JSON.parse(this.responseText);
        let Countries = json.Countries;
        let SecondSection = document.getElementById('SecondSection');
        let data = '';
        Countries.forEach(element => {
            let html = `<div id="globalData">
                          <div id="nameDate">
                              <h3> ${element.Country}</h3>
                              <p>${element.Date}</p>
                          </div>
                          <ul>
                              <li>NewConfirmed : ${element.NewConfirmed}</li>
                              <li>TotalConfirmed : ${element.TotalConfirmed}</li>
                              <li>NewDeaths : ${element.NewDeaths}</li>
                              <li>TotalDeaths : ${element.TotalDeaths}</li>
                              <li>NewRecovered :${element.NewRecovered}</li>
                              <li>TotalRecovered :${element.TotalRecovered}</li>
                          </ul>
                         </div> `;
            data += html;
        });
        SecondSection.innerHTML = data;

    }
    xhr.send();

});
 
