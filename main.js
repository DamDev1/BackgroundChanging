function ChangeBackground(){
    const colors = ["#A901DB", "#CCEEFF", "#FFFF00", "#0000FF", "#00FF00", "#FF0000", "#8A0886", "#DF3A01"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}