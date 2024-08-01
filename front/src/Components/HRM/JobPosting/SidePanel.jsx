import CustomSelect from "@/Components/ui/CustomSelect";
import { getDepartmentsService } from "@/services/base/commonService";
import { getJDTemplates } from "@/services/hrm/recruitment/jdService";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import parse from "html-react-parser";

const JobOpeningSidePanel = ({ setEditorContent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("Select Department");
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [jdData, setJdData] = useState();

  const getDepartments = async () => {
    const deptData = await getDepartmentsService();
    console.log("dept", deptData.payload);

    const transformedDepartments = deptData.payload.map((dept) => ({
      label: dept.name,
      value: dept.code,
    }));
    setDepartments(transformedDepartments);
  };

  const getTemplates = async (selectedDept) => {
    try {
      const response = await getJDTemplates(selectedDept);
      console.log("temp", response);
      setJdData(response.payload);
    } catch (error) {
      console.log("error " + error);
    }
  };

  useEffect(() => {
    getDepartments();
  }, []);

  useEffect(() => {
    getTemplates(selectedDept);
  }, [selectedDept]);

  console.log(jdData);
  console.log("Department" + departments);
  const handleSelectedTemplate = (id) => {
    setSelectedTemplate(jdData.find((item) => item.id == id));
  };

  useEffect(() => {
    console.log("SETTTTTTTTTTTTTTTTTTT", selectedTemplate);
  }, [selectedTemplate]);

  return (
    <>
      {console.log(departments)}

      <button
        className="text-blue-600 dark:text-blue-500 hover:underline font-normal text-xs"
        onClick={handleShow}
      >
        Pick from Template
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll
        backdrop
        // bsPrefix="offcanvas offcanvas-end show"
        style={{ width: "80%" }}
      >
        <Offcanvas.Header
          closeVariant={"primary"}
          bsPrefix="flex justify-between border-b w-full offcanvas-header text-black py-3 shadow-sm bg-slate-100"
        >
          <Offcanvas.Title>
            <div className="">Select a Template</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0px" }}>
          <div className="grid grid-cols-9 h-full">
            <div className="col-span-2 border-e border-e-gray-300 py-2 px-2 flex flex-col gap-3 overflow-hidden">
              <div>
                {selectedDept && (
                  <CustomSelect
                    defaultValue={selectedDept}
                    options={departments}
                    name={"department"}
                    setSelectedOption={setSelectedDept}
                  />
                )}
              </div>

              <div className="flex flex-col overflow-y-auto h-[calc(100vh-8rem)] scrollbar-hide">
                <ul style={{ listStyle: "none" }}>
                  {jdData &&
                    jdData.map((jd) => (
                      <li
                        key={jd.id}
                        className="border-b py-2.5 px-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectedTemplate(jd.id)}
                      >
                        {jd.jd_title}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-span-7 py-2 px-2">
              {selectedTemplate && selectedTemplate.jd_description && (
                <TemplateView
                  content={selectedTemplate.jd_description}
                  setEditorContent={setEditorContent}
                  handleClose={handleClose}
                />
              )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default JobOpeningSidePanel;

const TemplateView = ({ content, setEditorContent,handleClose }) => {
  const handleEditorContent = () => {
    console.log("contnte",content);
    setEditorContent(content);
    handleClose();
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-center py-1 px-2">
        <div className="text-gray-800 text-xl">Software Engineer</div>
        <div>
          <button
            onClick={handleEditorContent}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-blue-500/50 font-medium rounded-lg text-sm px-2.5 py-2 text-center"
          >
            Select Template
          </button>
        </div>
      </div>
      <div className=" w-full py-1 px-2">{parse(content)}</div>
    </div>
  );
};
