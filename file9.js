// 5. Basic Weather Data Processor
class WeatherStation {
  constructor(cityName) {
    this.cityName = cityName;
    this.readings = [];
  }

  addReading(tempCelsius, humidity) {
    this.readings.push({
      temp: tempCelsius,
      humidity: humidity,
      timestamp: new Date(),
    });
  }

  getAverageTemperature() {
    if (this.readings.length === 0) return 0;
    const total = this.readings.reduce((sum, r) => sum + r.temp, 0);
    return (total / this.readings.length).toFixed(1);
  }

  getHighestTemperature() {
    if (this.readings.length === 0) return null;
    return Math.max(...this.readings.map((r) => r.temp));
  }

  generateReport() {
    console.log(`\n=== Weather Report: ${this.cityName} ===`);
    console.log(`Total Readings: ${this.readings.length}`);
    console.log(`Average Temp: ${this.getAverageTemperature()}°C`);
    console.log(`Peak Temp: ${this.getHighestTemperature()}°C`);
    console.log("=================================\n");
  }
}

// Usage Example
const station = new WeatherStation("New York");
station.addReading(22.5, 60);
station.addReading(25.0, 55);
station.addReading(19.8, 70);
station.generateReport();
