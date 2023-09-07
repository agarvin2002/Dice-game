$(document).ready(function() {
    $("#rollDice").click(function() {
            var randomnumber1 = Math.floor(Math.random() * 6 + 1);
            var image1 = "images/dice" + randomnumber1 + ".png";
            $("img:eq(0)").attr("src", image1);
    
            var randomnumber2 = Math.floor(Math.random() * 6 + 1);
            var image2 = "images/dice" + randomnumber2 + ".png";
            $("img:eq(1)").attr("src", image2);
    
            if (randomnumber1 > randomnumber2) {
                $("#winner").text("Player 1 won 🚩");
            } else if (randomnumber2 > randomnumber1) {
                $("#winner").text("Player 2 won 🚩");
            } else {
                $("#winner").text("Match draw 🤝");
            }
        });
});
