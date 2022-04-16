$(document).ready(function() {
	
}); // end ready

function novemberUp() {
    $.ajax({
        type: "get",
        url: "json_files/sorkin.json",
        beforeSend: function() 
        {
            $("#speakers").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) 
        {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) 
        {
            $("#speakers").html("");
            $.each(data, function() 
            {
                $.each(this, function (key, value) 
                {
                    $("#title").text(value.title);
                    $("#month").text(value.month);
                    $("#speaker").text(value.speaker);
                    $("#image").attr("src", value.image);
                    $("#text").text(value.text);
                });
            });
        }
    });
};

