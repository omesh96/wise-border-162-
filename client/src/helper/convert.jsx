
// convert image into base64 format //

export const convertTobase64=(file)=>{
    return new Promise((res,rej)=>{
        const filereader=new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload=()=>{
            res(filereader.result)
        }
        filereader.onerror=(err)=>{
            rej(err)
        }
    })
}