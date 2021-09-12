import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Maininterview() {
  let [val1, setVal1] = useState(99);
  let [val2, setVal2] = useState(0);
  let [val3, setVal3] = useState(0);
  let [val1Check, setVal1Check] = useState(0);

  let checked = val1;
  let checkvalue = val2 + val3;
  let checkedsum = checked + checkvalue;

  function handleVal1Change(index, value) {
      setVal1Check(index);
      setVal1(value);
  }

  function checksumHander2(e) {
    const ch = e.target.checked;
    setVal2(ch ? 100 : 0);
  }

  function checksumHander3(e) {
    const ch = e.target.checked;
    setVal3(ch ? 100 : 0);
  }

  return (
    <div>
      <div>
        <div>
          <div className="parkagecontent">
            <div className="parkagebody">
              <div className="parkageheader">
                <Link to="/interview2">
                  <Button variant="outline-success ">Back</Button>
                </Link>
              </div>

              <div className="ideamain">
                <div className="ideabody">
                  <div className="conta">
                    <div className="ideaheader">
                      <h1 className="text-black fs-5 ">
                        HOW MANY IDEAS YOU LIKE TO SEE OF LOGO{" "}
                      </h1>
                    </div>
                    <div className="ideacontent">
                      <div className="thecontent">
                        <div
                          className="contentiten"
                          onClick={() => handleVal1Change(0, 99)}
                        >
                          <input type="checkbox" onChange={() => handleVal1Change(0, 99)} checked={val1Check === 0} name="" id="" />
                          <div className="itemumber">3</div>
                          <div className="itenprice">99</div>
                        </div>

                        <div
                          className="contentiten"
                          onClick={() => handleVal1Change(1, 124)}
                        >
                          <input type="checkbox" onChange={() => handleVal1Change(1, 124)} checked={val1Check === 1} name="" id="" />
                          <div className="itemumber">4</div>
                          <div className="itenprice">124</div>
                        </div>

                        <div
                          className="contentiten"
                          onClick={() => handleVal1Change(2, 149)}
                        >
                          <input type="checkbox" onChange={() => handleVal1Change(2, 149)} checked={val1Check === 2} name="" id="" />
                          <div className="itemumber">5</div>
                          <div className="itenprice">149</div>
                        </div>

                        <div
                          className="contentiten"
                          onClick={() => handleVal1Change(3, 174)}
                        >
                          <input type="checkbox" onChange={() => handleVal1Change(3, 174)} checked={val1Check === 3} name="" id="" />
                          <div className="itemumber">6</div>
                          <div className="itenprice">174</div>
                        </div>
                      </div>
                    </div>

                    <div className="showresult">
                      <div className="resultbody ">
                        <div className="checkarea">
                          <div
                            className="firstcjeck d-flex"
                            onChange={checksumHander2}
                          >
                            <div className="checkitself">
                              <input type="checkbox" name="checked" id="" />
                            </div>
                            <div className="checkinput d-flex">
                              3D Logo Conversion{" "}
                              <span className="spanamount">100</span>
                            </div>
                          </div>
                          <p className="text-danger">
                            3D Logo Conversion£100 Your final logo will be
                            enhanced with 3D shading
                          </p>

                          <div className="firstcjeck d-flex">
                            <div
                              className="checkitself"
                              onChange={checksumHander3}
                            >
                              <input type="checkbox" name="checked" id="" />
                            </div>
                            <div className="checkinput d-flex">
                              Flash Animated Logo{" "}
                              <span className="spanamount">100</span>
                            </div>
                          </div>
                        </div>
                        <div className="showoutput">
                          <div className="mainitemshow">{checkedsum}</div>
                          <div className="logoseleced">LOGO SELECTED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maininterview;
