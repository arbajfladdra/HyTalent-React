import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FormSelect from "./Select";

import { URL } from "../config";

{
  /* <Try></Try> */
}

{
  /* <Try></Try> */
}
let url = URL;
url = "http://202.53.174.5:7000/api/states";
console.log(url);
const SignInPage = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    async function getData() {
      const controller = new AbortController();
      const signal = controller.signal;
      const res = await axios.get(url);
      console.log("sasynctate", state);
      let of = res.data;
      console.log(res);
      setstate(of.data);
    }
    getData();
  });
  console.log("state", state);

  return (
    <div className="row">
      <div className="container">
        <h2 className="register-wrapper-header">Register - Student</h2>
        {/* //*TODO : onSubmit */}
        <form action="" className="register-form-wrapper">
          {/* Form <Items></Items> */}

          {/* //! PERSONAL INFORMATION */}
          <div className="register-form-item">
            <h3 className="register-form-item-header">Personal Information</h3>
            <div className="register-input-wrapper">
              <label htmlFor="userName">Name of the Application:</label>
              <input type="text" name="userName" id="userName" required />
            </div>
            <div className="register-input-wrapper">
              <label htmlFor="userNRIC">NRIC No:</label>
              <input type="text" name="userNRIC" id="userNRIC" required />
            </div>
            <div className="register-input-wrapper grid-form-3">
              <label htmlFor="userAddress">Address:</label>
              <input type="text" name="userAddress" id="userAddress" required />
            </div>

            <div className="register-input-wrapper grid-form-3 ">
              <label htmlFor=""></label>

              <div className="input-flex">
                <input
                  type="text"
                  name="userPINCODE"
                  placeholder="pincode"
                  id="userPINCODE"
                  required
                />
                <select name="userState" id="userState" required>
                  {}
                  <option value="0" selected>
                    {" "}
                    State{" "}
                  </option>
                  <option value="1">Dhaka 2</option>
                </select>
                <select name="userDistrict" id="userDistrict" required>
                  <option value="0" selected>
                    {" "}
                    District{" "}
                  </option>
                  <option value="1">District 2</option>
                </select>
              </div>
            </div>

            <div className="register-input-wrapper">
              <label htmlFor="userEmail">Email:</label>
              <input type="email" name="userEmail" id="userEmail" required />
            </div>
            <div className="register-input-wrapper">
              <label htmlFor="userTel">Cell Phone No:</label>
              <input type="tel" name="userTel" id="userTel" required />
            </div>
            <div className="register-input-wrapper">
              <label htmlFor="Gender">Gender:</label>

              <div className="input-flex" id="Gender">
                <div className="register-input-wrapper flex2">
                  <input type="radio" id="male" name="userGender" required />
                  <label htmlFor="male"> Male</label>
                </div>

                <div className="register-input-wrapper flex2">
                  <input type="radio" id="female" name="userGender" required />
                  <label htmlFor="female"> Female</label>
                </div>
              </div>
            </div>
          </div>
          {/* //!RECENT ACADMIC INFORMATION */}
          <div className="register-form-item">
            <h3 className="register-form-item-header">
              Personal Acadamic Information
            </h3>
            <div className="register-input-wrapper">
              <label htmlFor="userInst">Institute:</label>

              {/* <FormSelect name="userInst" data={state} /> */}
            </div>

            <div className="register-input-wrapper">
              <label htmlFor="userStudentID">Student ID:</label>

              <select name="userStudentID" id="userStudentID" required>
                <option value="0" selected>
                  {" "}
                  STU0909090923{" "}
                </option>
                <option value="1">STU0909090924</option>
              </select>
            </div>

            <div className="register-input-wrapper">
              <label htmlFor="userDegree">Degree Level:</label>

              <select name="userDegree" id="userDegree" required>
                <option value="0" selected>
                  {" "}
                  Bachelor{" "}
                </option>
                <option value="1">Master</option>
              </select>
            </div>

            <div className="register-input-wrapper">
              <label htmlFor="userProgramme">Programme:</label>

              <select name="userProgramme" id="userProgramme" required>
                <option value="0" selected>
                  {" "}
                  MArketing Management{" "}
                </option>
                <option value="1">MArketing Management Advanced</option>
              </select>
            </div>

            <div className="register-input-wrapper">
              <label htmlFor="userCGPA">Grade Achieved (CGPA):</label>
              <input
                type="number"
                name="userCGPA"
                placeholder="6.7"
                id="userCGPA"
                required
              />
            </div>
            <div className="register-input-wrapper">
              <label htmlFor="userPassingYear">Passing Year:</label>

              <select name="userPassingYear" id="userPassingYear" required>
                <option value="0" selected>
                  {" "}
                  2021{" "}
                </option>
                <option value="1">2020</option>
              </select>
            </div>

            <div className="register-input-wrapper  ">
              <label htmlFor="">Upload Attatchment</label>

              <div className="input-no-flex  input-file-wrapper">
                <div className="register-input-wrapper input-file ">
                  <div className="YT09hj">
                    <i className="fas fa-plus-circle"></i>
                  </div>
                  <label htmlFor="userFile1">Attached document_v1.0:</label>
                  <input type="file" name="userFile1" id="userFile1" required />
                </div>
                <div className="register-input-wrapper input-file ">
                  <div className="YT09hj">
                    <i className="fas fa-plus-circle"></i>
                  </div>
                  <label htmlFor="userFile2">Attached document_v2s.0:</label>
                  <input type="file" name="userFile2" id="userFile2" required />
                </div>
              </div>
            </div>
          </div>

          {/* WORK EXPRIENCE AND CAREER PLAN */}
          <div className="register-form-item">
            <h3 className="register-form-item-header">
              Work Exprience and Career Plan
            </h3>

            <div className="register-input-wrapper grid-form-3">
              <label htmlFor="useExprience">
                Employment Status/ Work Exprience:
              </label>
              <input
                type="text"
                name="useExprience"
                id="useExprience"
                required
              />
            </div>
            <div className="register-input-wrapper grid-form-3">
              <label htmlFor="userInterest">Career Plan/ Interest:</label>
              <input
                type="text"
                name="userInterest"
                id="userInterest"
                required
              />
            </div>

            <div className="register-input-wrapper register-textbox">
              <label htmlFor="userReason">
                Reasons for Joining HyTalent Program:
              </label>
              <textarea
                name="userReason"
                id="userReason"
                cols=""
                rows=""
              ></textarea>
            </div>
          </div>
          {/* OTHER INFORMATION */}
          <div className="register-form-item">
            <h3 className="register-form-item-header">Other Information</h3>
            <div className="register-input-wrapper">
              <label htmlFor="userFatherJob">Father's Job Status:</label>

              <select name="userFatherJob" id="userFatherJob" required>
                <option value="0" selected>
                  {" "}
                  Buisness{" "}
                </option>
                <option value="1">2020</option>
              </select>
            </div>
            <div className="register-input-wrapper grid-form-3">
              <label htmlFor="userFatherIncome">
                Father's Monthly Average Income (MYR):
                <div className="label-lead">(Optional)</div>
              </label>
              <input
                type="text"
                name="userFatherIncome"
                id="userFatherIncome"
                required
              />
            </div>
            <hr />
            <div className="register-input-wrapper">
              <label htmlFor="userMotherJob">Mother's Job Status:</label>

              <select name="userMotherJob" id="userMotherJob" required>
                <option value="0" selected>
                  {" "}
                  Not Working{" "}
                </option>
                <option value="1">2020</option>
              </select>
            </div>
            <div className="register-input-wrapper grid-form-3">
              <label htmlFor="userMotherIncome">
                Mother's Monthly Average Income (MYR):
                <div className="label-lead">(Optional)</div>
              </label>
              <input
                type="text"
                name="userMotherIncome"
                id="userMotherIncome"
                required
              />
            </div>
          </div>
          <h3 className="register-form-item-header text-center">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            {/* <button type="submit"></button> */}
          </h3>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
