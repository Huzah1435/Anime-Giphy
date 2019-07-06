var limit = 8;
var searchTerm = "";
var termList = [];
$("#sButton").click(function () {
    $(".img").empty();
    searchTerm = $("#search").val();
    console.log(searchTerm);
    xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=VXf90t3BAsTdbqUb9jGOFAW7k58O98V3&limit=" + limit);
    xhr.done(function (data) {
        for (i = 0; i < limit; i++) {

            console.log("<img src = '" + data.data[i].images.original.url + "' >");
            $(".img").append("<img src = '" + data.data[i].images.original.url + "' >");
        }
        if (!(termList.includes(searchTerm))) {
            termList.push(searchTerm);
            $(".keywords").append("<button class='kButton' id='" + searchTerm + "' type='submit'>" + searchTerm + "</button>");
            console.log(termList);
        }
    });
    $("#search").attr("placeholder").val("");
})
$(".keywords").on("click", ".kButton", function () {
    console.log($(this).attr("id"));
    $(".img").empty();
    searchTerm = $(this).attr("id");
    console.log(searchTerm);
    xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=VXf90t3BAsTdbqUb9jGOFAW7k58O98V3&limit=" + limit);
    xhr.done(function (data) {
        for (i = 0; i < limit; i++) {

            console.log("<img src = '" + data.data[i].images.original.url + "' >");
            $(".img").append("<img src = '" + data.data[i].images.original.url + "' >");
        }
    })
})