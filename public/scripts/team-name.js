const setTeamNameButton = document.querySelector('.team-name button');

setTeamNameButton.addEventListener('click', function() {
    const teamNameText = String(document.querySelector('.team-name input').value);
    const teamName = document.querySelector('#team-name-heading');
    
    teamName.innerHTML = teamNameText;
});