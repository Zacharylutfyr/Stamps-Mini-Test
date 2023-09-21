const apiKey = "f402b5017ad690d029eceb4d3204a0ee";
const jakarta = "Jakarta";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${jakarta}&appid=${apiKey}&units=metric`;

function ramalanCuaca() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tanggal = {};

      data.list.map((item) => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString("id-ID", { weekday: "long" });
        const formattedDate = date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        if (!tanggal[day]) {
          tanggal[day] = [];
        }

        tanggal[day].push({
          date: formattedDate,
          temperature: item.main.temp,
        });
      });

      for (const day in tanggal) {
        const temperature = tanggal[day][0].temperature;

        console.log(`${day}, ${tanggal[day][0].date} : ${temperature}°C`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

ramalanCuaca();
