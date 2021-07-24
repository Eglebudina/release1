"use strict";

const stationAnalytics = {
  
  getPressure(station){
    if (station.readings.length >= 1){
      station.pressure = station.readings[station.readings.length-1].pressure; 
    }
    return station.pressure;
  },
  
  getCalculateCelcius(station){
    if (station.readings.length >= 1){
      station.temperature = station.readings[station.readings.length-1].temperature; 
    }
    return station.temperature;
  },
  
  getCalculateFahrenheit(station){
    if (station.readings.length >= 1){
      station.temperature = station.readings[station.readings.length-1].temperature; 
    }
    return (station.temperature * 9/5 + 32).toFixed(1);
  },

  getCodeToText(station){
    let code = 0;
    let codeToText = " ";
    if (station.readings.length >= 1){
      code = station.readings[station.readings.length-1].code; 
    }
    
    if (code == 100){
      codeToText = "Clear"; 
    }
    else if (code == 200){
      codeToText = "Partial Clouds"
    }
    else if (code == 300){
      codeToText = "Cloudy"
    }
    else if (code == 400){
      codeToText = "Light showers"
    }
    else if (code == 500){
      codeToText = "Heavy showers"
    }
    else if (code == 600){
      codeToText = "Rain"
    }
    else if (code == 700){
      codeToText = "Snow"
    }
    else if (code == 800){
      codeToText = "Thunder"
    }
    return codeToText;
  },
  
  
  getWindBeauford(station) {
    let windSpeed = 0;
    if (station.readings.length >= 1){
      windSpeed = station.readings[station.readings.length-1].windSpeed; 
    }
    
     if (windSpeed <= 1){
      return 0;
    } else if (windSpeed > 1 || windSpeed <= 5){
      return 1;
    } else if (windSpeed >= 6 || windSpeed <= 11) {
      return 2;
    } else if (windSpeed >= 12 || windSpeed <= 19) {
      return 3;
    } else if (windSpeed >= 20|| windSpeed <= 28) {
      return 4;
    } else if (windSpeed >= 29 || windSpeed <= 38) {
      return 5;
    } else if (windSpeed >= 39 || windSpeed <= 49) {
      return 6;
    } else if (windSpeed >= 50 || windSpeed <= 61) {
      return 7;
    } else if (windSpeed >= 62 || windSpeed <= 74) {
      return 8;
    } else if (windSpeed >= 75 || windSpeed <= 88) {
      return 9;
    } else if (windSpeed >= 89 || windSpeed <= 102) {
      return 10;
    } else {
      return 11;
    }
  },
  
  getWindDirection(station) {
  let windDirection = 0;
    if (station.readings.length >= 1){
      windDirection = station.readings[station.readings.length-1].windDirection; 
    }
  
  if (windDirection <= 11.25) {
   return "North";
  } else if (windDirection <= 33.75) {
   return "North North-East";
  } else if (windDirection <= 56.25) {
   return "North East";
  } else if (windDirection <= 78.75) {
   return "East North-East";
  } else if (windDirection <= 101.25) {
   return "East";
  } else if (windDirection <= 123.75) {
   return "East South-East";
  } else if (windDirection <= 146.25) {
   return "South-East";
  } else if (windDirection <= 168.75) {
   return "South South-East";
  } else if (windDirection <= 191.25) {
   return "South";
  } else if (windDirection <= 213.75) {
   return "South South-West";
  } else if (windDirection <= 236.25) {
   return "South-West";
  } else if (windDirection <= 258.75) {
   return "West South-West";
  } else if (windDirection <= 281.25) {
   return "West";
  } else if (windDirection <= 303.75) {
   return "West North-West";
  } else if (windDirection <= 326.25) {
   return "North-West";
  } else {
   return "North North-West";
  }
  
},
  
  getWindChill(station){
    if (station.readings.length >= 1){
      station.temperature = station.readings[station.readings.length-1].temperature; 
      station.windSpeed = station.readings[station.readings.length-1].windSpeed; 
    }
    let windChill = 13.12 + 0.6215* station.temperature- 11.37 * Math.pow(station.windSpeed, 0.16)
          + 0.3965 * (station.temperature * Math.pow(station.windSpeed,0.16));
    return windChill.toFixed(1);
  }

  
};

module.exports = stationAnalytics;





