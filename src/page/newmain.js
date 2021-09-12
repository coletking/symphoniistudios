
// import React from "react";
// import {Link} from 'react-router-dom'
// import Button from "react-bootstrap/Button";

// class Newmain extends React.Component{
// state={
//     price:{
//         price1: 100,
//         price2: 200,
//         price3: 300,
//         price4: 400,

//     }

// }
//     checked = (e)=>{
//        var {value} = e.target;
//        this.setState((e)=>{
//             var Selectedsport =e.price
//             return Selectedsport[value]= value;
//        })

//     }

// render(){

//     var displaye = Object.keys(this.state.price).filter((x)=>this.state.price[x])

//     return(
//         <>
//             <div>
//              <div>
//       <div>
//         <div className="parkagecontent">
//           <div className="parkagebody">
//             <div className="parkageheader">
//               <Link to="/interview2">
//                 <Button variant="outline-success ">Back</Button>
//               </Link>
//             </div>

// <div className="ideamain">
//     <div className="ideabody">
//         <div className="conta">
//         <div className="ideaheader">
//         <h1 className='text-black fs-5 '>HOW MANY IDEAS YOU LIKE TO SEE OF LOGO </h1>
// </div>
// <div className="ideacontent">
//     <div className="thecontent"  >
//         <div className="contentiten" onChange={this.price1} >
//             <input type="checkbox"  name="" id="" onChange={this.checked} />
//             <div className="itemumber" >
//                  3
//             </div>
//             <div className="itenprice" >
//                     99
//             </div>
//         </div>

//         <div className="contentiten" onChange={this.price}>
//         <input type="checkbox" name="" id="" onChange={this.checked} />
//             <div className="itemumber" >
//            4
//             </div>
//             <div className="itenprice" >
//             124
//             </div>
//         </div>

//         <div className="contentiten" onChange={this.price}>
//         <input type="checkbox" name="" id="" onChange={this.checked} />
//             <div className="itemumber">
//             5
//             </div>
//             <div className="itenprice" >
//             149
//             </div>
//         </div>

//         <div className="contentiten" onChange={this.price1} >
//         <input type="checkbox" name="" id="" onChange={this.checked} />
//             <div className="itemumber" >
//             6
//             </div>
//             <div className="itenprice" >
//            174
//             </div>
//         </div>
//     </div>
// </div>



// <div className="showresult">
//     <div className="resultbody ">
//         <div className="checkarea">
//             <div className="firstcjeck d-flex" onChange={this.checked}>
//                 <div className="checkitself">
//                     <input type="checkbox"  name="checked" id="" />
//                 </div>
//                 <div className="checkinput d-flex">
//                     3D Logo Conversion <span className='spanamount'>100</span>
//                 </div>
                
//             </div>
//             <p className='text-danger'>3D Logo Conversion£100 Your final logo will be enhanced with 3D shading</p>

//             <div className="firstcjeck d-flex">
//                 <div className="checkitself" onChange={this.checked}>
//                     <input  type="checkbox"  name="checked" id="" />
//                 </div>
//                 <div className="checkinput d-flex">
//                    Flash Animated Logo <span className='spanamount'>100</span> 
//                 </div>
//             </div>
//         </div>
//         <div className="showoutput">
//             <div className="mainitemshow">
//              {displaye}
//             </div>
//             <div className="logoseleced">
//                 LOGO SELECTED 
//             </div>
//         </div>
//     </div>
// </div>
//         </div>
//         </div>
//     </div>
// </div>
    
//         </div>
//       </div>
//     </div>
//         </div>
//         </>

//     );
// }

// }




// export default Newmain




import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Maininterview() {
    let [val1, setVal1] = useState();
    let [val2, setVal2] = useState(0);
    let [val3, setVal3] = useState(0);
    let [val4, setVal4] = useState(-100);
    
let fort = --val4
let checked = val1 
let checkedsum = checked + val2 + val3  + fort



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
        <h1 className='text-black fs-5 '>HOW MANY IDEAS YOU LIKE TO SEE OF LOGO </h1>
</div>
<div className="ideacontent">
    <div className="thecontent"  >
        <div className="contentiten" onClick={() => setVal1 (99)} >
            <input type="checkbox"  name="" id="" />
            <div className="itemumber" >
                 3
            </div>
            <div className="itenprice" >
                    99
            </div>
        </div>

        <div className="contentiten" onClick={() => setVal1 (124)}>
        <input type="checkbox" name="" id="" />
            <div className="itemumber" >
           4
            </div>
            <div className="itenprice" >
            124
            </div>
        </div>

        <div className="contentiten" onClick={() => setVal1 (149)}>
        <input type="checkbox" name="" id="" />
            <div className="itemumber">
            5
            </div>
            <div className="itenprice" >
            149
            </div>
        </div>

        <div className="contentiten" onClick={() => setVal1 (174)} >
        <input type="checkbox" name="" id="" />
            <div className="itemumber" >
            6
            </div>
            <div className="itenprice" >
           174
            </div>
        </div>
    </div>
</div>



<div className="showresult">
    <div className="resultbody ">
        <div className="checkarea">
            <div className="firstcjeck d-flex" >
                <div className="checkitself" onClick={() => setVal2 (100)}>
                    <button>+</button>
                </div>
                <div className="checkitself" onClick={() => setVal4 (100)}>
                    <button>-</button>
                </div>
                <div className="checkinput d-flex">
                    3D Logo Conversion <span className='spanamount'>100</span>
                </div>
                
            </div>
            <p className='text-danger'>3D Logo Conversion£100 Your final logo will be enhanced with 3D shading</p>

            <div className="firstcjeck d-flex">
                <div className="checkitself" onChange={() => setVal3 (100)}>
                    <input  type="checkbox"  name="checked" id="" />
                </div>
                <div className="checkinput d-flex">
                   Flash Animated Logo <span className='spanamount'>100</span> 
                </div>
            </div>
        </div>
        <div className="showoutput">
            <div className="mainitemshow">
               {checkedsum}
            </div>
            <div className="logoseleced">
                LOGO SELECTED 
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
        </div>
    )
}

export default Maininterview
