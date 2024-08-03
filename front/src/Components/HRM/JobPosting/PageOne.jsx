import CustomEditor from "@/Components/Common/TextEditor/CustomEditor";
import { getDepartmentsService } from "@/services/base/commonService";
import { useEffect, useState } from "react";
import JobOpeningSidePanel from "./SidePanel";
import CustomSelect from "@/Components/ui/CustomSelect";
import RichTextEditor from "@/Components/Common/TextEditor/RichTextEditor";
import { httpAxios } from "@/helper/httpHelper";
import Select from "react-select";
const PageOne = (props) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");

  const [options, setOptions] = useState([]);
  const [optionshiringManagers, setOptionshiringManagers] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [dropDownDefaultVal, setDropDownDefaultVal] = useState();
  const [editorContent, setEditorContent] = useState("");
  const [jobTypesList, setjobTypesList] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState([]);
  const [selectedOptionHire, setSelectedOptionHire] = useState(null);
  const [selectedPanalMember, setSelectedPanalMember] = useState(null);
  const [OpenHirManager, setOpenHirManager] = useState(false);
  const [openPanalMember, setOpenPanalMember] = useState(false);

  const [currency, setcurrency] = useState([]);
  const getDepartments = async () => {
    const deptData = await getDepartmentsService();
    const transformedDepartments = await deptData.payload.map((dept) => ({
      label: dept.name,
      value: dept.code,
    }));
    setDepartments(transformedDepartments);
    if (props.deptCode == "") {
      setDropDownDefaultVal(transformedDepartments[0]);
    }
  };

  const empList = async () => {
    const response = await httpAxios.get("common/recruiters");
    const transformedEmp = response.data.payload.map((row) => ({
      label: row.emp_first_name,
      value: row.emp_number,
    }));
    setOptions(transformedEmp);

    //setEmp(result.data.payload);
  };

  const empListHireManagerFun = async () => {
    const response = await httpAxios.get("common/hiringManagers");
    const transformedEmp = response.data.payload.map((row) => ({
      label: row.emp_first_name,
      value: row.emp_number,
    }));
    setOptionshiringManagers(transformedEmp);

    //setEmp(result.data.payload);
  };

  const OpenHirManagerFun = () => {
    setOpenHirManager(true);
  };
  const OpenPanalMemerFun = () => {
    setOpenPanalMember(true);
  };

  const jobTypesFun = async () => {
    const response = await httpAxios.get("common/jobTypes");
    setjobTypesList(response.data.payload);
  };
  const currencyFun = async () => {
    const response = await httpAxios.get("common/currencies");
    setcurrency(response.data.payload);
  };

  const handleRecruiters = (selected) => {
    const selectedValues = selected
      ? selected.map((option) => option.value)
      : [];
    props.handleData("recruiters", selectedValues.join());
    setSelectedOption1(selected || []);
  };
  const haldleHire_manager = (selected) => {
    const selectedValuesHire = selected
      ? selected.map((option) => option.value)
      : [];
    props.handleData("hire_manager", selectedValuesHire.join());
    setSelectedOptionHire(selected || []);
  };

  const haldlePanal_mamber = (selected) => {
    const selectedValuesHire = selected
      ? selected.map((option) => option.value)
      : [];
    props.handleData("panal_member", selectedValuesHire.join());
    setSelectedPanalMember(selected || []);
  };

  // Extract values from selected options safely

  //props.handleData('recruiters',selectedValues);

  // Extract values from selected options safely

  useEffect(() => {
    getDepartments();
    setJobTitle(props.jobTitle);
    jobTypesFun();
    currencyFun();
    empList();
    empListHireManagerFun();
  }, []);

  useEffect(() => {
    if (departments.length !== 0 || props.deptCode !== "" || props.deptCode) {
      const index = departments.findIndex((obj) => {
        return obj.value === props.deptCode;
      });
      if (index !== -1) {
        setDropDownDefaultVal(departments[index]);
      }
    }
    props.handleData("job_description", editorContent);
    props.handleData(
      "dept_code",
      dropDownDefaultVal && dropDownDefaultVal.value
    );
    props.handleData("job_title", props.jobTitle);
    props.handleData("openings_count", props.noOpening);
    props.handleData("job_location", props.location);
  }, [departments, dropDownDefaultVal, editorContent]);

  return (
    <>
      {props.step === 1 && (
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 w-full">
              <div className="flex w-full gap-4 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="job_title"
                    onChange={(e) => {
                      setJobTitle(e.target.value),
                        props.handleData(e.target.name, e.target.value);
                    }}
                    className=" border border-gray-500 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Backend Engineer"
                    value={props.jobData.job_title}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  {departments &&
                    departments.length !== 0 &&
                    dropDownDefaultVal && (
                      <CustomSelect
                        defaultValue={dropDownDefaultVal}
                        options={departments}
                        name={"department"}
                        setSelectedOption={setSelectedDept}
                      />
                    )}
                </div>
              </div>
              <div className="w-full mb-4 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Job Description<span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div>
                    <JobOpeningSidePanel setEditorContent={setEditorContent} />
                  </div>
                </div>
                <div className="bg-white p-1">
                  <RichTextEditor
                    selectedContent={editorContent}
                    setEditorContent={setEditorContent}
                  />
                  {/* <CustomEditor selectedContent={editorContent} setEditorContent={setEditorContent} /> */}
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden py-2">
                <div className="px-4 py-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Do{`'`}s
                  </h2>
                  <p className="text-gray-600 mt-2">
                    This is your opportunity to convey the aspirants why its
                    important to them.
                  </p>
                </div>
                <ul className="list-disc list-inside">
                  <li className="px-4 py-px">
                    <span className="text-gray-700">Item 1</span>
                  </li>
                  <li className="px-4 py-px">
                    <span className="text-gray-700">Item 1</span>
                  </li>
                  <li className="px-4 py-px">
                    <span className="text-gray-700">Item 1</span>
                  </li>
                </ul>
                <div className="px-4 py-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Don{`'`}ts
                  </h2>
                  <p className="text-gray-600 mt-2">
                    This is your opportunity to convey the aspirants why its
                    important to them.
                  </p>
                </div>
                <ul className="list-disc list-inside">
                  <li className="px-4 py-px">
                    <span className="text-gray-700">Item 1</span>
                  </li>
                  <li className="px-4 py-px">
                    <span className="text-gray-700">Item 1</span>
                  </li>
                  <li className="px-4 py-px">
                    <span className="text-gray-700">Item 1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {props.step === 2 && (
        <>
          <div class="w-100">
            <div class="px-20 py-4">
              <div className="row  gap-y-2.5	">
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    {" "}
                    No Of Openning
                  </label>
                  <input
                    type="text"
                    value={
                      props.jobData.openings_count &&
                      props.jobData.openings_count
                    }
                    class="form-control"
                    name="openings_count"
                    onChange={(e) =>
                      props.handleData(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    {" "}
                    Target Hire Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    value={
                      props.jobData.target_hire_date &&
                      props.jobData.target_hire_date
                    }
                    name="target_hire_date"
                    onChange={(e) =>
                      props.handleData(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    {" "}
                    Currency
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="currency"
                    onChange={(e) =>
                      props.handleData(e.target.name, e.target.value)
                    }
                  >
                    <option value="" selected="">
                      India Rupee -INR{" "}
                    </option>
                    {currency &&
                      currency.map((row) => (
                        <option
                          value={row.control_code}
                          selected={
                            props.jobData.currency &&
                            props.jobData.currency == row.control_code
                              ? true
                              : false
                          }
                        >
                          {row.meaning}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    {" "}
                    Salary Range
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        class="form-control"
                        value={
                          props.jobData.salary_range_from &&
                          props.jobData.salary_range_from
                        }
                        name="salary_range_from"
                        onChange={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        class="form-control"
                        value={
                          props.jobData.salary_range_to &&
                          props.jobData.salary_range_to
                        }
                        name="salary_range_to"
                        onChange={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    {" "}
                    Job Type
                  </label>
                  <select
                    class="form-control "
                    aria-label="Default select example"
                    name="job_type"
                    onChange={(e) =>
                      props.handleData(e.target.name, e.target.value)
                    }
                  >
                    <option value="" selected="">
                      Full Time
                    </option>
                    {jobTypesList &&
                      jobTypesList.map((row) => (
                        <option
                          value={row.control_code}
                          selected={
                            props.jobData.job_type &&
                            props.jobData.job_type == row.control_code
                              ? true
                              : false
                          }
                        >
                          {row.meaning}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="job_location"
                    value={
                      props.jobData.job_location && props.jobData.job_location
                    }
                    onChange={(e) =>
                      props.handleData(e.target.name, e.target.value)
                    }
                  />
                  {/* <select class="form-select" aria-label="Default select example" name="job_location" onChange={(e) => props.handleData(e.target.name,e.target.value)}>
                 <option selected="">Location</option>
                     <option selected="">Location</option>
                 </select> */}
                </div>
                {/* <div className="col-12">
                 <label htmlFor="" className="form-label">Hiring Flow</label>
                 <div className="row">
                     <div className="col-2">
                         <div class="card">
                             <div class="card-body ">
                                 <div class="d-flex justify-center">
                                     <div class="flex-shrink-0">
                                         <h4>Sourced</h4>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-2">
                         <div class="card">
                             <div class="card-body">
                                 <div class="d-flex justify-center">
                                     <div class="flex-shrink-0">
                                         <h4>Screening</h4>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-2">
                         <div class="card">
                             <div class="card-body">
                                 <div class="d-flex justify-center" >
                                     <div class="flex-shrink-0">
                                         <h4>Interview</h4>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-2">
                         <div class="card">
                             <div class="card-body">
                                 <div class="d-flex justify-center">
                                     <div class="flex-shrink-0">
                                         <h4>Preboarding</h4>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-2">
                         <div class="card">
                             <div class="card-body">
                                 <div class="d-flex justify-center">
                                     <div class="flex-shrink-0">
                                         <h4>Hired</h4>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-2">
                         <div class="card">
                             <div class="card-body">
                                 <div class="d-flex justify-center">
                                     <div class="flex-shrink-0">
                                         <h4>Archived</h4>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div> */}
                <div className="col-6">
                  <label htmlFor="" className="form-label">
                    {" "}
                    Experience
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="req_experience"
                    value={
                      props.jobData.req_experience &&
                      props.jobData.req_experience
                    }
                    onChange={(e) =>
                      props.handleData(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="row flex items-center justify-center">
                    <div className="col-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          checked={
                            props.jobData.can_apply_later &&
                            props.jobData.can_apply_later == "on"
                              ? true
                              : false
                          }
                          name="can_apply_later"
                          onChange={(e) =>
                            props.handleData(e.target.name, e.target.value)
                          }
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Allow applicant to apply for the same job offer{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col-2">
                      <div class="info-icon">
                        <button type="button">
                          <i
                            class="fa fa-info-circle text-lg"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        class="form-control"
                        checked={
                          props.jobData.apply_later_after_number &&
                          props.jobData.apply_later_after_number == "on"
                            ? true
                            : false
                        }
                        name="apply_later_after_number"
                        onChange={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-4">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">Months</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row flex items-center justify-start	">
                    <div className="col-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          checked={
                            props.jobData.is_job_priority &&
                            props.jobData.is_job_priority == "on"
                              ? true
                              : false
                          }
                          name="is_job_priority"
                          onChange={(e) =>
                            props.handleData(e.target.name, e.target.value)
                          }
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Mark the job as a priority{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6"></div>
                <div className="col-6 ">
                  <div className="row flex items-center justify-start	">
                    <div className="col-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          checked={
                            props.jobData.career_site_publish_status &&
                            props.jobData.career_site_publish_status == "on"
                              ? true
                              : false
                          }
                          name="career_site_publish_status"
                          onChange={(e) =>
                            props.handleData(e.target.name, e.target.value)
                          }
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Publish on careers site{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="row flex items-center justify-start	">
                    <div className="col-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          checked={
                            props.jobData.job_portal_publish &&
                            props.jobData.job_portal_publish == "on"
                              ? true
                              : false
                          }
                          name="job_portal_publish"
                          onChange={(e) =>
                            props.handleData(e.target.name, e.target.value)
                          }
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Publish job on internal job portal{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 "></div>
                <div className="col-6">
                  <div className="row flex items-center justify-start	">
                    <div className="col-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          name="can_emp_apply"
                          checked={
                            props.jobData.can_emp_apply &&
                            props.jobData.can_emp_apply == "on"
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            props.handleData(e.target.name, e.target.value)
                          }
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Allow internal employees to apply
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 "></div>
                <div className="col-6">
                  <div className="row flex items-center justify-start	">
                    <div className="col-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          checked={
                            props.jobData.screening_ques &&
                            props.jobData.screening_ques == "on"
                              ? true
                              : false
                          }
                          name="screening_ques"
                          onChange={(e) =>
                            props.handleData(e.target.name, e.target.value)
                          }
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          {" "}
                          show screening question while appling for internal job
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {props.step === 3 && (
        <>
          <div class="w-100">
            <div class="px-20 py-4">
              <div className="row">
                <div
                  className="col-6"
                  style={{ maxHeight: "75vh", overflowY: "scroll" }}
                >
                  <div className="row">
                    <div className="col-10">
                      <div className="custom-card">
                        <label class="form-label" for="exampleRadios1">
                          Requiter
                        </label>
                        {/* <div className="flex gap-0.5">
                                <div className="form-group">
                                    <input type="text" name="" id="" className='form-control' />
                                </div>
                                <button >
                                    <i class=" ri-close-fill text-base"></i>
                                </button>
                            </div> */}
                        <Select
                          isMulti
                          defaultValue={selectedOption1}
                          onChange={handleRecruiters}
                          name={"recruiters"}
                          options={options}
                        />
                      </div>
                    </div>
                    <div className="col-7"></div>

                    <div className="col-7">
                      <div className="flex items-center gap-0.5">
                        <h3 className="font-bold">
                          Inbound candidate owner assignment
                        </h3>
                        <button type="button">
                          <i
                            class=" ri-information-line"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-5"></div>

                    <div className="col-10">
                      <div class=" mt-2">
                        <div class="custom-radio">
                          .
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="candidate_owner"
                              id="exampleRadios1"
                              value="Round robin assignment"
                              onClick={(e) =>
                                props.handleData(e.target.name, e.target.value)
                              }
                            />
                            <label class="form-label" for="exampleRadios1">
                              Round robin assignment
                              <p class="mb-0">
                                Any new candidates is assigned to a different
                                recruiter untill everyone has equal number of
                                active candidates owned
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2"></div>

                    <div className="col-10">
                      <div class=" mt-2">
                        <div class="custom-radio">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="candidate_owner"
                              id="exampleRadios2"
                              value="Assign to individual"
                              onClick={(e) =>
                                props.handleData(e.target.name, e.target.value)
                              }
                            />
                            <label class="form-label" for="exampleRadios2">
                              Assign to individual
                              <p class="mb-0">
                                Each candidate will be assigned to a selected
                                recruiter as their owner{" "}
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2"></div>

                    <div className="col-10">
                      <div class=" mt-2">
                        <div class="custom-radio">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="candidate_owner"
                              id="exampleRadios3"
                              value="Do not assign owner"
                              onClick={(e) =>
                                props.handleData(e.target.name, e.target.value)
                              }
                            />
                            <label class="form-label" for="exampleRadios3">
                              Do not assign owner
                              <p class="mb-0">
                                Candidates will not be automatically assigned to
                                any recruiter as their owner
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2"></div>

                    <div className="col-10 mt-2">
                      <div className="flex items-center gap-0.5">
                        <h3 className="font-bold">Hiring Managers</h3>
                      </div>
                    </div>
                    <div className="col-5"></div>
                    <div className="col-10">
                      <div class="mt-2    ">
                        {OpenHirManager ? (
                          <Select
                            isMulti
                            defaultValue={selectedOptionHire}
                            onChange={haldleHire_manager}
                            options={optionshiringManagers}
                            name={"hire_manager"}
                          />
                        ) : (
                          <div
                            onClick={OpenHirManagerFun}
                            class="custom-button"
                          >
                            <i class=" ri-add-circle-fill"></i>
                            <span>Add hiring manager</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-10 mt-2">
                      <div className="flex items-center gap-0.5">
                        <h3 className="font-bold">Interview Panal Member</h3>
                      </div>
                    </div>
                    <div className="col-5"></div>
                    <div className="col-10">
                      <div class="mt-2    ">
                        {openPanalMember ? (
                          <Select
                            isMulti
                            defaultValue={selectedPanalMember}
                            onChange={haldlePanal_mamber}
                            options={optionshiringManagers}
                            name={"panal_member"}
                          />
                        ) : (
                          <div
                            onClick={OpenPanalMemerFun}
                            class="custom-button"
                          >
                            <i class=" ri-add-circle-fill"></i>
                            <span>Add Panal Member</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="flex mb-2">
                    <h3 className="font-bold">Accessibillity & notification</h3>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="form-check form-switch form-switch-left form-switch-md mb-2">
                      <input
                        class="form-check-input code-switcher"
                        type="checkbox"
                        id="default-modal"
                        name="recr_access_to_candidate"
                        onClick={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                      <label for="default-modal" class="form-label text-muted">
                        Recruiters can only access to the candidate
                        sourced/owned by them
                      </label>
                    </div>
                    <div class="form-check form-switch form-switch-left form-switch-md mb-2">
                      <input
                        class="form-check-input code-switcher"
                        type="checkbox"
                        id="default-modal"
                        name="profile_access_interviewer"
                        onClick={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                      <label for="default-modal" class="form-label text-muted">
                        Interviewers can only access profile of their
                        Interviewees{" "}
                      </label>
                    </div>
                    <div class="form-check form-switch form-switch-left form-switch-md mb-2">
                      <input
                        class="form-check-input code-switcher"
                        type="checkbox"
                        id="default-modal"
                        name="notify_recr_cand_add"
                        onClick={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                      <label for="default-modal" class="form-label text-muted">
                        Notify recruiter when new candidate is added to job
                      </label>
                      <button>
                        <i className=" ri-information-line ml-1"></i>
                      </button>
                    </div>
                    <div class="form-check form-switch form-switch-left form-switch-md mb-2">
                      <input
                        class="form-check-input code-switcher"
                        type="checkbox"
                        id="default-modal"
                        name="notify_mng_cand_add"
                        onClick={(e) =>
                          props.handleData(e.target.name, e.target.value)
                        }
                      />
                      <label for="default-modal" class="form-label text-muted">
                        Notify hiring manager when new candidate is added to job{" "}
                      </label>
                      <button>
                        <i className=" ri-information-line ml-1"></i>
                      </button>
                    </div>
                    <div className="flex mb-2 mt-2">
                      <h3 className="font-bold">
                        Interview feedback visibility
                      </h3>
                    </div>

                    <div className="custom-tex bg-indigo-200 flex justify-between p-2.5	">
                      <i className=" ri-information-line ml-1"></i>
                      <p style={{ fontSize: "small" }}>
                        Global admin, super recruiter and recruiters of this job
                        can view everyone's feedback
                      </p>
                    </div>

                    <div className="row ">
                      <div className="col-12 mt-3">
                        <div class="custom-radio-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="interview_feedback_visible"
                              id=""
                              value="Open"
                              onClick={(e) =>
                                props.handleData(e.target.name, e.target.value)
                              }
                            />
                            <label class="form-label" for="">
                              Open
                              <p class="mb-0">
                                Interviewers can view feedbacks from others only
                                after they have submittted their own
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div class="custom-radio-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="interview_feedback_visible"
                              id=""
                              value="Restricted"
                              onClick={(e) =>
                                props.handleData(e.target.name, e.target.value)
                              }
                            />
                            <label class="form-label" for="">
                              Restricted
                              <p class="mb-0">
                                Interviewers can view feedbacks given in
                                previous & current stages, but not next stages
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div class="custom-radio-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="interview_feedback_visible"
                              id=""
                              value="Private"
                              onClick={(e) =>
                                props.handleData(e.target.name, e.target.value)
                              }
                            />
                            <label class="form-label" for="">
                              Private
                              <p class="mb-0">
                                interviewrs can only view their own feedback
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PageOne;
