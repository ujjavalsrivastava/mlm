import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import VimeoPlayer from "./VimeoPlayer";
const MyCouseDetails = () => {

  const [course, setcourse] = useState([]);
  const [video, setvideo] = useState(null);
  const {id} =  useParams();
  console.log('courseId '+ id);

 const courseVideo = async()=>{
  try{
    const response= await axios.get(`vimeo/video?courseId=${id}`);
    setcourse(response.data.data);
  }catch(error){
    console.log(error)
  }
 
 }
 const getVideo = (videoId)=>{
  let v = videoId.replace("/videos/", "");
  console.log(v);
  setvideo(v)
 }

 useEffect(()=>{
  courseVideo();
 },[])

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>My Course </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li>
          </ol>
        </div>

        <div class="content">
          
        
          <div class="row">
            <div class="col-lg-8">
              <div class="info-box">
                <div class="col-12">
                  <div class="d-flex flex-wrap">
                    <div>
                      <h6>What is Digital Marketing</h6>
                    </div>
                    <div class="ml-auto">
                      {video && (<VimeoPlayer videoId={video} />)}
                    
                    </div>
                  </div>
                </div>
                <div id="area"></div>
              </div>
              
            </div>
            <div class="col-lg-4 m-b-3">
              <div>
                <div class="box box-widget widget-user-2">
                  <div class="widget-user-header bg-yellow">
                    <h3>Digital Marketing</h3>
                    {/* <h5>Checkout my contacts here</h5> */}
                  </div>
                  <ul class="products-list product-list-in-box">
                    {course && course.map(row=>(
                      <li class="item">
                        <div class="">
                          <img src="https://www.bizgurukul.com/Biz/members/BizPro/imgs/play-button.png" alt="Product Image" />
                          <a href="javascript:void(0)" onClick={() => getVideo(row.uri)} class="product-title">
                           {row.name}
                          </a>
                        </div>
                         </li>
                    ))}
                      
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCouseDetails;
