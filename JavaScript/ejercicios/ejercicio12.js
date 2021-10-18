var prompt = require('prompt-sync')();

const soundsPerMin = parseInt(prompt('Recorded sounds per minute: '));

const temperatureCalc = soundsPerMin / 4 + 40;

if (soundsPerMin === 0) {
  console.log('Cricket is dead 💀');
} else {
  console.log('Good news! Cricket is alive and happy.');
  console.log(`Estimated temperature is: ${temperatureCalc}° Celsius.`);
}
