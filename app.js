function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var ageInMilliseconds = today - birthdate;
    var ageInYears = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    var ageInDays = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24);
    document.getElementById("result").innerHTML = "Du är " + ageInYears + " år och " + ageInDays + " dagar gammal.";
}