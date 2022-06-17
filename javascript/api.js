let patientListDemo = require("./patientDemoData.json");
let observationDemo = require("./observationDemoData.json");

const SERVER_URL="https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/FamilyMemberHistory?patient=12504018";


const moment = require("moment");

function getPatientDemo() {
    return;
    1(patientListDemo);
}

const getObservationDemo = () => {
  return combinePatientsBundle(observationDemo);
};

function combinePatientsBundle(json) {
  let result = [];
  for (let bundle of json) {
    result = result.concat(bundle.entry);
  }
  console.log(result);
  return result;
}

function requestObservation(id) {
  return new Promise((resolve, reject) => {
    fetch(SERVER_URL + "Observation/" + id)
      .then(async res => {
        let json = await res.json();
        console.log(json);
        json = combinePatientsBundle(json);
        resolve(json);
      })
      .catch(e => {
        reject(e);
        console.log(e);
      });
  });
}

function requestPatientList() {
  return new Promise((resolve, reject) => {
    let localCache = localStorage.getItem("Patients");
    if (localCache) {
      setTimeout(() => {
        resolve(JSON.parse(localCache));
      }, 1000);
    } else {
      fetch(SERVER_URL + "Patient/")
        .then(async res => {
          let json = await res.json();
          console.log(json);
          json = combinePatientsBundle(json);
          localStorage.setItem("Patients", JSON.stringify(json));
          resolve(json);
        })
        .catch(e => {
          reject(e);
          console.log(e);
        });
    }
  });
}

function getPatientList(message) {
  return new Promise(async resolve => {
    let json = null;
    if (window.$globalPatients) {
      json = window.$globalPatients;
    } else {
      // start load api, show loading
      const hideLoading = message.loading("Please wait, fetching patient data...", 0);
      try {
        json = await requestPatientList();
        message.success({ content: "Patient data loaded!", duration: 2 });
      } catch (e) {
        json = getPatientDemo();
        message.warn({
          content: "Network Error, the server might be down. Local demo data is loaded.",
          duration: 5
        });
      }
      window.$globalPatients = json;
      hideLoading();
    }
    resolve(json);
  });
}

function parseAllPatientData(Patients) {
  const tableData = [];
  Patients.forEach(elementRaw => {
    if (!elementRaw) {
      return null;
    }
    let element = elementRaw.resource;
    let patient = new Object();
    patient.name = element.name?.[0]?.family + " " + element.name?.[0]?.given?.[0];
    patient.id = element.id;
    
    patient.language = element.communication?.[0]?.language?.text;
    patient.relationship = element.relationship?.text;
    patient.sex = element.sex;
    patient.date = element.date;
    patient.bornDate = moment(element.bornDate).format("MMMM");
    patient.age = moment().diff(element.bornDate, "years");
    patient.condition = element.condition;
    tableData.push(patient);
  });

  return tableData;
}

export {
  requestPatientList,
  requestObservation,
  getPatientDemo,
  getObservationDemo,
  parseAllPatientData,
  getPatientList
};
