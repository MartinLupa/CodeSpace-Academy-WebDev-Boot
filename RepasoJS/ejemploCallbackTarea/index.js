//Callback example of a bicycle electronic derraulier.
//Objective: to always maintain the most efficient gear.
//Given a currentGear, if rpm of the pedaling cyclist is <= 80 or >=120, the derraulier will wait 3 seconds for the cyclist to change it manually,
//or it will automatically modify it.

let rpm = 80;
let currentGear = 2;

const changeGear = () => {
  if (rpm >= 120) {
    currentGear++;
  } else if (rpm <= 80) {
    currentGear--;
  }
};

const cadencySensor = (rpm, changeGear) => {
  console.log("RPM outside efficient values, please change gear.");
  console.log("Current gear: ", currentGear);
  setTimeout(() => {
    changeGear(rpm);
    console.log("Gear changed to: ", currentGear);
  }, 3000);
};

cadencySensor(rpm, changeGear);
