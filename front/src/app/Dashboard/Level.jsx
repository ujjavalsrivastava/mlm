import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const Level = () => {
 const [data, setdata] = useState(null);

 const LevelFatch = async()=>{
    try{
        const response =  await axios.get('level-percentage');
        setdata(response.data[0]);
    }catch(error){
        console.log(error);
    }

 }
 const handle =(e)=>{
  setdata((pre)=>({
    ...pre,
  [e.target.name]:e.target.value
  }))
 }

 const save = async(e)=>{
  e.preventDefault()
  try{
    const response =  await axios.post('level-percentage',data);
    if(response){
      toast.success('updated success');
      LevelFatch();
    }else{
      toast.success('not updated');
    }
  }catch(error){
    console.log(error);
  }
  

 }

console.log('data' + JSON.stringify(data));
  useEffect(() => {
    LevelFatch();
  }, []);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">Level Update</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="sub-bread">
              <i class="fa fa-angle-right"></i> Level
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Level
            </li>
          </ol>
        </div>

       
        <div class="content">
         
          <div class="row m-t-3">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-header bg-blue">
                  <h5 class="text-white m-b-0">Level</h5>
                </div>
                <div class="card-body">
                  <form onSubmit={save}>
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 1</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level0}
                            name="level0"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 2</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level1}
                            name="level1"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 3</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level2}
                            name="level2"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 4</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level3}
                            name="level3"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 5</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level4}
                            name="level4"
                            onChange={handle}

                          />
                          
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 6</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level5}
                            name="level5"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 7</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level6}
                            name="level6"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group has-feedback">
                          <label class="control-label">Level 8</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={data && data.level7}
                            name="level7"
                            onChange={handle}
                          />
                          
                        </div>
                      </div>

                     <br/><br/>
                      <div class="col-md-12 p-3">
                        <button type="submit" class="btn btn-success">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Level;
