// import React from 'react';





// export default class CustomerForm extends React.Component {
//     description;
//     destination;
//     img;
//     startdate;
//     enddate;
//     price;

//     constructor(props) {
//         super(props);
//         this.state = {
//             vacation: {
//                 description: "aiman",
//                 destination: "zidane",
//                 img: "",
//                 startdate: "",
//                 enddate: "",
//                 price: ""
//             }
//         }
//     }

//     handledescriptionChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.description = event.target.value;
//         this.setState({ vacation: vacation });
//     }

//     handledestinationChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.destination = event.target.value;
//         this.setState({ vacation: vacation });
//     }
//     handleimgChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.img = event.target.value;
//         this.setState({ vacation: vacation });
//     }
//     handlestartdateChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.startdate = event.target.value;
//         this.setState({ vacation: vacation });
//     }
//     handleenddateChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.enddate = event.target.value;
//         this.setState({ vacation: vacation });
//     }
//     handlepriceChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.price = event.target.value;
//         this.setState({ vacation: vacation });
//     }

//     handleStatusChanged(event) {
//         var vacation = this.state.vacation;
//         vacation.status = event.target.value;
//         this.setState({ vacation: vacation });
//     }

//     handleButtonClicked() {
//         console.log(this.state.vacation);
//     }

//     render() {
//         return (
//             <div>
//                 <label>
//                     description:
//                 </label>
//                 <input type="text" value={this.state.vacation.description} onChange={this.handledescriptionChanged.bind(this)} />
//                 <br />
//                 <label>
//                     destination:
//                 </label>
//                 <input type="text" value={this.state.vacation.destination} onChange={this.handledestinationChanged.bind(this)} />
//                 <br />
//                 <label>
//                     start date:
//                 </label>
//                 <input type="text" value={this.state.vacation.startdate} onChange={this.handlestartdateChanged.bind(this)} />
//                 <br />
//                 <label>
//                     end date:
//                 </label>
//                 <input type="text" value={this.state.vacation.enddate} onChange={this.handleenddateChanged.bind(this)} />
//                 <br />
//                 <label>
//                     price:
//                 </label>
//                 <input type="text" value={this.state.vacation.price} onChange={this.handlepriceChanged.bind(this)} />
//                 <br />
//                 <label>
//                     img:
//                 </label>
//                 <input type="text" value={this.state.vacation.img} onChange={this.handleimgChanged.bind(this)} />
//                 <br />

//                 {/* <label>
//                     Status:
//                 </label>
//                 <select value={this.state.vacation.status} onChange={this.handleStatusChanged.bind(this)}>
//                     <option value="PENDING">
//                         Pending
//                     </option>
//                     <option value="APPROVED">
//                         Approved
//                     </option>
//                 </select>
//                 <hr /> */}
//                 <button onClick={this.handleButtonClicked.bind(this)}>
//                     Save Record
//                 </button>
//             </div>
//         );
//     }
// }
