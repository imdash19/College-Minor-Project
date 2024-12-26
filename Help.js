document.getElementById("calculateFare").addEventListener("click", function () {
    const source = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const journeyDate = document.getElementById("date").value;
    const travelClass = document.getElementById("class").value;
    const passengers = parseInt(document.getElementById("passengers").value, 10);
  
    if (!source || !destination || !journeyDate || isNaN(passengers) || passengers < 1) {
      alert("Please fill all the fields correctly.");
      return;
    }
  
    const classRates = {
      "1AC": 2000,
      "2AC": 1500,
      "3AC": 1000,
      "3ACE": 800,
      "SL": 500,
      "2S": 200,
    };
  
    const fare = classRates[travelClass] * passengers;
  
    document.getElementById("result").textContent = `Total Fare: ₹${fare}`;
  });
  