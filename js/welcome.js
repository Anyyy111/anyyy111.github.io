function welcome(){
    //let welcome_text = '欢迎光顾~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    // swal({
    //     title: "图片无法加载的情况",
    //     type: "info",
    //     text: '<p>请使用<span style="color: green">火狐浏览器</span>打开本站体验最佳;</br><span style="color: red">谷歌、Edge浏览器</span>请参考文章: <a href="https://www.anyiblog.top/inform/">https://www.anyiblog.top/inform/</a></p>',
    //     html: true,
    //     imageUrl: "",
    //     timer: 1000,
    //     showConfirmButton: true,
    //     allowOutsideClick: true,
    //     confirmButtonColor: "black",
    //     confirmButtonText: '我知道啦',
    // });
}
$(document).ready(()=>{
    welcome()
})