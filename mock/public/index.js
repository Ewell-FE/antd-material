/**
 * Created by lilei on 2017/11/30.
 */
$(function () {
    $(".send-btn").click(function () {
        $("#coderView textarea").text(JSON.stringify($(this).data("source"), null, 4))
        $("#coderView").modal()
    })
})