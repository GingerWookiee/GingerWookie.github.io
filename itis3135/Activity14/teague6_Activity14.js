$(document).ready(function() {
	
}); // end ready

function novemberUp() {
    $.ajax({
        type: "get",
        url: "sorkin.json",
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
                    $("#speakers").append
                    (
                        "<h1>" + value.title + "</h1><br>" +
                        "<h2>" + value.month + "</h2><br>" + 
                        "<h3>" + value.speaker + "</h3><br>" +
                        "<img src=\"" + value.image + "\" alt=\"" + + "\"><br>" +
                        "<p>" + value.text + "</p>"
                    );
                });
            });
        }
    });
};

