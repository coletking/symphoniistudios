import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function interview2() {
  return (
    <div>
      <div>
        <div className="parkagecontent">
          <div className="parkagebody">
            <div className="parkageheader">
              <Link to="/">
                <Button variant="outline-success ">Back</Button>
              </Link>
            </div>

            <Link to="/maininterview" className="list">
              <div className="logmain">
                <div className="logocarry">
                  <div className="logotopick">
                    <div className="text-white"> LOGO</div>
                    <img src="/img/a1.png" alt="" />
                  </div>
                  
                </div>

                <div className="logocarry">
                  <div className="logotopick">
                    <div className="text-white"> STATIONERY</div>
                    <img src="/img/a1.png" alt="" />
                  </div>
                  
                </div>

                <div className="logocarry">
                  <div className="logotopick">
                    <div className="text-white"> WEBSITE</div>
                    <img src="/img/a1.png" alt="" />
                  </div>
                  
                </div>

                <div className="logocarry">
                  <div className="logotopick">
                    <div className="text-white">BROCHURE</div>
                    <img src="/img/a1.png" alt="" />
                  </div>
                  
                </div>

               
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default interview2;
