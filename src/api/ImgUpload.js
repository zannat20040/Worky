import axios from "axios";

export const imgUpload=async image=>{
    const formData = new FormData();
    formData.append("image", image);

    const {data} = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`,
      formData
    )
    const photo_url  = data.data.display_url
    
    return photo_url ;
}