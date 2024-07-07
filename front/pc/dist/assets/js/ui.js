
function remoteDocuList(option = {}){
    const viewer_summary_scroll = document.querySelector(".viewer_summary_scroll");
    let option_scroll_view = option.scrollView !== undefined ? option.scrollView : 3;
    const viewer_summary_item = document.querySelectorAll(".viewer_summary_item")[option_scroll_view];
    if(!!viewer_summary_item){
        viewer_summary_scroll.style.maxHeight = (viewer_summary_item.getBoundingClientRect().top - viewer_summary_scroll.getBoundingClientRect().top)  + "px";
    } 
}
