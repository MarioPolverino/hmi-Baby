function updateLogicalStringSection_2() {
  var RowString = generateString3nummbers(StatusCarrierActPositon_logicalRow);
  var ColString = generateString2nummbers(StatusCarrierActPositon_logicalCol);
  var DirectionString;

  if (Number(StatusCarrierActPositon_logicalDir) == 0) {
    DirectionString = "A";
  } else {
    DirectionString = "B";
  }
  var StringaTitolo = "A-L01R" + RowString + DirectionString + ColString;
  $("#current-logical-position").text(StringaTitolo);
}

function updateStatusSector2() {
  $("#current-position").text(CarrierActPosition_mm);
  $("#current-speed").text(CarrierActSpeed);
  $("#physical-pos-shuttle").text(CarrierActPosition_mm);

  // Update the battery level indicator
  const batteryLevelElement = document.getElementById("sensorBattery");
  const batteryLabel = document.getElementById("sensorBatteryLabel");
  if (batteryLevelElement) {
    batteryLevelElement.style.width = `${BatteryLevel}%`;
    batteryLabel.textContent = `${BatteryLevel}%`;
    if (BatteryLevel == 100) {
      batteryLabel.style.left = "40%";
      batteryLevelElement.classList.add("activeBatterySensor");
      batteryLevelElement.classList.remove("low-batterySensor");
    } else if (BatteryLevel > 20) {
      batteryLabel.style.left = "45%";
      batteryLevelElement.classList.add("activeBatterySensor");
      batteryLevelElement.classList.remove("low-batterySensor");
    } else if(BatteryLevel == 0) {
      batteryLabel.style.left = "45%";
      batteryLevelElement.classList.remove("activeBatterySensor");
      batteryLevelElement.classList.remove("low-batterySensor");
      batteryLevelElement.style.border="0px";
    }else{
        batteryLabel.style.left = "45%";
        batteryLevelElement.classList.remove("activeBatterySensor");
      batteryLevelElement.classList.add("low-batterySensor");
      
    }

  }

  // Sensors
  if (LifterInPositionUp) {
    document.getElementById("sensor-lift-up").classList.add("green");
  } else {
    document.getElementById("sensor-lift-up").classList.remove("green");
  }

  if (LifterInPositionDown) {
    document.getElementById("sensor-lift-down").classList.add("green");
  } else {
    document.getElementById("sensor-lift-down").classList.remove("green");
  }

  if (PalletDetectedSide_A) {
    document
      .getElementById("sensor-Before-Cargo-side-A")
      .classList.add("green");
    document.getElementById("sensor-After-Cargo-side-A").classList.add("green");
  } else {
    document
      .getElementById("sensor-Before-Cargo-side-A")
      .classList.remove("green");
    document
      .getElementById("sensor-After-Cargo-side-A")
      .classList.remove("green");
  }

  if (PalletDetectedSide_B) {
    document
      .getElementById("sensor-Before-Cargo-side-B")
      .classList.add("green");
    document.getElementById("sensor-After-Cargo-side-B").classList.add("green");
  } else {
    document
      .getElementById("sensor-Before-Cargo-side-B")
      .classList.remove("green");
    document
      .getElementById("sensor-After-Cargo-side-B")
      .classList.remove("green");
  }

  if (MotherDetectedSide_A) {
    document
      .getElementById("sensor-Mother-detects-side-A")
      .classList.add("green");
  } else {
    document
      .getElementById("sensor-Mother-detects-side-A")
      .classList.remove("green");
  }

  if (MotherDetectedSide_B) {
    document
      .getElementById("sensor-Mother-detects-side-B")
      .classList.add("green");
  } else {
    document
      .getElementById("sensor-Mother-detects-side-B")
      .classList.remove("green");
  }

  if (PathNotFreeSide_A) {
    document
      .getElementById("sensor-side-Goods-Close-side-A")
      .classList.add("green");
  } else {
    document
      .getElementById("sensor-side-Goods-Close-side-A")
      .classList.remove("green");
  }

  if (PathNotFreeSide_B) {
    document
      .getElementById("sensor-side-Goods-Close-side-B")
      .classList.add("green");
  } else {
    document
      .getElementById("sensor-side-Goods-Close-side-B")
      .classList.remove("green");
  }

  if (ShuttleOnBoard) {
    document.getElementById("sensor-On-Mother").classList.add("green");
  } else {
    document.getElementById("sensor-On-Mother").classList.remove("green");
  }
}

function updateStatusPosition() {
  if (CarrierInPosition) {
    document.getElementById("status-position").textContent = "IN POSITION";
  } else if (CarrierIsMoving) {
    document.getElementById("status-position").textContent = "IS MOVING";
  } else if (CarrierIsFault) {
    document.getElementById("status-position").textContent = "IN FAULT";
  } else {
    document.getElementById("status-position").textContent = "UNKNOWN";
  }
}

function updateStatusLogicalPhysical(){
  if(SelPhysicalLogical){
    document.getElementById("btn_Physical").classList.remove("selected");
    document.getElementById("btn_Logical").classList.add("selected");
  }else{
    document.getElementById("btn_Logical").classList.remove("selected");
    document.getElementById("btn_Physical").classList.add("selected");
  }

}


function updateSection2Data() {
  updateStatusSector2();
  updateLogicalStringSection_2();
  updateStatusPosition();
}

setInterval(updateSection2Data, 1000);
