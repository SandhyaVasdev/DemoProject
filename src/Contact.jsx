import React ,{useState} from "react";
const Contact=()=>{
    // state is use and use as object
    const [data,setData] = useState(
        {
            fullname:"",
            phone:"",
            email:"",
            msg:"",
        }
    );

    const InputEvent=(event)=>{
        // object destructing
        const {name,value}=event.target;
        //  access previous  value through preVal
        setData((preVal) => {
            return{
                ...preVal,
                [name]:value,
            }
        });
    }
   
    const formSubmit=(e)=>{
        // stop page refresh at submit button time
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone}`)
        
    };
    return(
        <>
      <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
              <div className="mb-3">
                      <label for="exampleFormControlInput" className="form-label">Full Name</label>
                      <input type="text" 
                      className="form-control" 
                      id="exampleFormControlInput" 
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                     placeholder="Enter your name"/>
                 </div>
                 <div className="mb-3">
                      <label for="exampleInputEmail1">Phone No:</label>
                      <input type="number" 
                      className="form-control" 
                      id="exampleInputEmail1"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}  
                      placeholder="mobile number"/>
        
                 </div>
                 <div className="mb-3">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" 
                      className="form-control" 
                      id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}  
                      placeholder="name@example.com"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                 </div>
                 <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                      <textarea  
                      className="form-control" 
                      id="exampleFormControlTextarea1"  
                      name="msg"
                      value={data.msg}
                      onChange={InputEvent}  
                     rows="3"></textarea>
                 </div>
                 <div class="mb-3">
                     <label for="exampleInputPassword1">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="col-12">
                <button className="btn btn-outline-primary" type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
               
            </form>
            </div> 
          </div>
      </div>
        </>
    );

};
export default Contact;