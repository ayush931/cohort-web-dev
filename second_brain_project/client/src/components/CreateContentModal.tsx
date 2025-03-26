import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
  }
  return (
    <div>
      {open && (
        <div>
          <div className="h-screen w-screen bg-slate-500 top-0 left-0 fixed opacity-60 flex justify-center"></div>
          <div className="h-screen w-screen top-0 left-0 fixed opacity-100 flex justify-center">
            <div className="flex flex-col opacity-100 justify-center">
              <span className="bg-white p-4 rounded-md">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
                  <Input ref={titleRef} placeholder={"Title"} />
                  <Input ref={linkRef} placeholder={"Link"} />
                </div>
                <div>
                  <h1 className="mt-3">Type</h1>
                  <div className="flex justify-between m-4">
                    <Button
                      text="Youtube"
                      variant={
                        type === ContentType.Youtube ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setType(ContentType.Youtube);
                      }}
                    />
                    <Button
                      text="Twitter"
                      variant={
                        type === ContentType.Twitter ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setType(ContentType.Twitter);
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    text="Submit"
                    fullWidth={true}
                    onClick={addContent}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContentModal;