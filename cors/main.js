function main()
{
    console.log("john");
    $.ajax
    ({
        url: "http://localhost:8116/user",


            success: function(data)
        {
            console.log(data);
        }
    });
}

