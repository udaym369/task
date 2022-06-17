// import React, { Component } from "react";
// import PatientsListDisplay from "../components/PatientsListDisplay";
// import { getPatientList } from "../javascript/api";
// import Header from "./Header";
// import Overlay from "../components/Overlay";
// import { message } from "antd";

import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';


function Patients() {
  return (
    <div>
      <Header/>
    <Menu/>
    <div className='form'>
      <table>
        <tr>
          <th>id</th>
          <th>Status</th>
          <th>Data absent reason</th>
          <th>Patient</th>
          <th>date</th>
          <th>Name</th>
          <th>Relationship</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Age</th>
          <th>Deceased</th>
          <th>Extension</th>
          <th>Condition</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    </div>
  );
}

export default Patients;
// const moment = require("moment");


// class PatientsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       awaitingData: true,
//       Patients: null,
//       page: 0
//     };
//   }

//   async componentDidMount() {
//     let json = await getPatientList(message);

//     this.setState({
//       awaitingData: false,
//       Patients: json
//     });
//   }

//   render() {
//     let patientData = this.state.Patients;
//     if (this.props.filter && this.state.Patients) {
//       patientData = doFilter(this.state.Patients, this.props.filter);
//       if (patientData.length > 0) {
//         message.success({ content: `Found ${patientData.length} matching records`, duration: 3 });
//       } else {
//         message.warn({ content: `No records found`, duration: 3 });
//       }
//     }
//     return (
//       <div>
//         <Overlay show={this.state.awaitingData}></Overlay>
//         {!this.props.filter && <Header title="Patients List"></Header>}
//         <PatientsListDisplay Patients={patientData} loading={this.state.awaitingData} />
//       </div>
//     );
//   }
// }

// function recursiveFind(obj, value, exact) {
//   let json = JSON.stringify(obj);
//   const regex = exact
//     ? new RegExp('"' + value.toLowerCase() + '"', "g")
//     : new RegExp(".*" + value.toLowerCase() + ".*", "g");
//   return json.toLowerCase().search(regex) !== -1;
// }

// function doFilter(Patients, filter) {
//   let result = [];
//   for (let patient of Patients) {
//     let data = patient.resource;
//     let match = [];
//     if (filter.name) {
//       match.push(recursiveFind(data.name, filter.name, filter.exactMatch));
//     }
//     if (filter.bornDate) {
//       let isWithIn =
//         filter.bornDate[0] <= moment(data.bornDate) &&
//         moment(data.bornDate) <= filter.bornDate[1];
//       match.push(isWithIn);
//     }
//     if (filter.sex) {
//       match.push(data.sex == filter.sex);
//     }
//     // if (filter.phone) {
//     //   match.push(recursiveFind(data.telecom, filter.phone, filter.exactMatch));
//     // }
//     // if (filter.address) {
//     //   match.push(recursiveFind(data.address, filter.address, filter.exactMatch));
//     // }
//     if (filter.relationship) {
//       match.push(recursiveFind(data.relationship, filter.relationship, filter.exactMatch));
//     }
//     if (filter.id) {
//       match.push(recursiveFind(data.id, filter.id, filter.exactMatch));
//     }
//     if (filter.anythingElse) {
//       match.push(recursiveFind(data, filter.anythingElse, filter.exactMatch));
//     }

//     // result
//     if (match.every(x => x === true)) {
//       result.push(patient);
//     }
//   }
//   console.log(result);
//   return result;
// }



// export default PatientsPage;