"use strict";

const footballTeam = document.getElementById("footballTeam");
const teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
];


window.onload = function () {
    const selectTeamBtn = document.getElementById("selectTeamBtn");
    selectTeamBtn.onclick = selectTeamBtnClicked;

    initFootballTeamsDropdown();
};


function selectTeamBtnClicked(){
    //do something with the selected value
    const footballP = document.getElementById("footballP");

    if(footballTeam.value == null){
        footballP.textContent = "Please select a team!";
    }
    else{
        let teamCode = footballTeam.value;
        let selectedTeam;
        for(let team of teams){
            if(team.code == teamCode){
                selectedTeam = team;
                break;
            }
        }

        let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who plays in ${selectedTeam.plays}.`;
        footballP.textContent = message;
    }
}

function initFootballTeamsDropdown(){

    for(let team of teams){
        let theOption = new Option(team.name, team.code); 
        footballTeam.appendChild(theOption);
    }

    // for( let i = 0; i < teams.length ; i++){
    //     let theOption = new Option(teams[i].name, teams[i].code);
    //     footballTeam.appendChild(theOption);
    // }

    
    // for( let i = 0; i < teams.length ; i++){
    //     let team = teams[i];
    //     let theOption = new Option(team.name, team.code);
    //     footballTeam.appendChild(theOption);
    // }

}