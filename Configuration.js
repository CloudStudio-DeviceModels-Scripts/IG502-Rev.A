function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  config.addressLabel = {en: "Compressor Number", es: "Número de Compresor"};
}

function getEndpoints(deviceAddress, endpoints)
{
 
 endpoints.addEndpoint("1","Suction Pressure",endpointType.pressureSensor);
 /*
 endpoints.addEndpoint("2","Discharge Pressure",endpointType.pressureSensor);
 endpoints.addEndpoint("3","Oil Pressure After Filter",endpointType.pressureSensor);
 endpoints.addEndpoint("4","Oil Pressure Before Filter",endpointType.pressureSensor);
 endpoints.addEndpoint("5","Discharge Temperature",endpointType.temperatureSensor);
 endpoints.addEndpoint("6","Oil Temperature",endpointType.temperatureSensor);
 endpoints.addEndpoint("7","Oil Sump Temperature",endpointType.temperatureSensor);
 endpoints.addEndpoint("8","Suction Temperature",endpointType.temperatureSensor);
 endpoints.addEndpoint("9","Motor Current",endpointType.currentSensor);
 endpoints.addEndpoint("10","Slide Valve Position",endpointType.genericSensor);
 endpoints.addEndpoint("11","Oil Pressure",endpointType.pressureSensor);
 endpoints.addEndpoint("12","Oil Filter Differential Pressure",endpointType.pressureSensor);
 endpoints.addEndpoint("13","Display Setpoint",endpointType.pressureSensor);
 endpoints.addEndpoint("14","Present Kw",endpointType.activePowerSensor);
 endpoints.addEndpoint("15","Demand Kw",endpointType.activePowerSensor);
 endpoints.addEndpoint("16","AlarmS Status",endpointType.genericSensor);
 */
 /*
  var e = endpoints.addEndpoint("17", "Compressor Mode",endpointType.genericSensor );
  e.variableTypeId = 1268;

  var f = endpoints.addEndpoint("18", "Compressor State",endpointType.genericSensor );
  f.variableTypeId = 1269;

   var g = endpoints.addEndpoint("19", "Last Start State",endpointType.genericSensor );
  g.variableTypeId = 1270;
*/
  
}


function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
