export function searchDisplay(){
    $(".content .search").removeClass("d-none")
    $(".content .search").addClass("d-block")
 }
 export function searchHide(){
     $(".content .search").removeClass("d-block")
    $(".content .search").addClass("d-none")
 }
 export function openSideBar() {
    console.log("open")
    $(".nav-bar").animate({
        left: 0
    }, 500)
    $(".toggle").addClass("fa-xmark");
    $(".toggle").removeClass("fa-bars");

        for (let i = 0; i < 5; i++) {
            $(".nav-list li").eq(i).animate({
                top: 0
            }, (i + 100) * 10)
        }
}
export function closeSideBar() {
    let boxWidth = $(".ssss").outerWidth()
    $(".nav-bar").animate({
        left: -boxWidth
    }, 500)
    $(".toggle").addClass("fa-bars");
    $(".toggle").removeClass("fa-xmark");
    for (let i = 0; i < 5; i++) {
        $(".nav-list li").eq(i).animate({
            top: 150
        }, (i + 100) * 4)
    }
}