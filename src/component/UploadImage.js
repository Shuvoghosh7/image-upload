import React, { useState } from 'react';
import axios from "axios"

const UploadImage = () => {
    const [imgname, setImgname] = useState("");

    const [file, setFile] = useState("");
  
    // const history = useNavigate();
  
    const setdata = (e) => {
      const { value } = e.target;
      setImgname(value);
      console.log(value)
    }
  
    const setimgfile = (e) => {
      setFile(e.target.files[0])
      console.log(e.target.files[0])
    }
  
    // adduser data
  
    const addUserData = async (e) => {
      e.preventDefault();
  
      var formData = new FormData();
      formData.append("photo", file);
      formData.append("imgname", imgname);
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
  
      const res = await axios.post("http://localhost:5000/images/upload-img", formData, config);
  
      if (res.data.status === 401 || !res.data) {
        console.log("errror")
      } else {
        // history("/")
      }
    }
    return (
        <div>
            <label for="my-modal-3" class="btn modal-button">open modal</label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form>
                        <label>Name</label><br />
                        <input type="text" name="imgname" id="" onChange={setdata}/><br />
                        <label>Upload Image</label><br />
                        <input type="file" name="photo" id="" onChange={setimgfile} /><br />
                        <input type="submit" value="Submit" onClick={addUserData}/>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;