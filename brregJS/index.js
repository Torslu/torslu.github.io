let query = document.querySelector("#query");
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

const apiUrl = "https://data.brreg.no/enhetsregisteret/api/enheter/";

button.addEventListener("click", async function() {
    let queryTrimmed = query.value.replace(/\s+/g, '');

    const response = await fetch (apiUrl + queryTrimmed);
    const data = await response.json();

    // Hardkodet, ref. https://www.arbeidstilsynet.no/regelverk/forskrifter/forskrift-om-organisering-ledelse-og-medvirkning/13/13-1/
    const array = data.naeringskode1.kode
    const substring = ['02.','03.2','05.','07.','08.','09.9','10.','11.','12.','13.','14.','15.','16.','17.','18.1','19.','20.','21.','22.','23.','24.','25.','26.1','26.2','26.3','26.4','26.51','26.6','26.7','26.8','27.','28.','29.','30.1','30.200','30.300','30.400','30.910','30.920','30.990','31.','32.300','32.400','32.500','32.990','33.110','33.120','33.130','33.140','33.150','33.160','33.170','33.190','33.200','35.','36','37','38','39','41.2','42.','43.','45.2','45.403','46.77','49','52.21','52.221','52.223','52.229','52.23','52.24','53','55.1','56.101','56.290','56.3','61','75','77.1','80.1','80.2','81.2','84.23','84.24','84.25','85','86','87','88','95.230','95.240','95.290','96.01','96.02'];

    for (i = 0; i < substring.length; i++) {
        if (array.includes(substring[i]) ) {
            answer.innerHTML = "Ja, " + data.navn + " er pålagt å tilknytte seg en offentlig godkjent bedriftshelsetjeneste!";
            break
        } else {
            answer.innerHTML = "Nei, " + data.navn + "er ikke pålagt å tilknytte seg en offentlig godkjent bedriftshelsetjeneste";
        }
    }
});