const setTeamNameButton = document.querySelector('.team-name button');

setTeamNameButton.addEventListener('click', function() {
    let teamNameText = document.querySelector('.team-name input');
    const teamName = document.querySelector('#team-name-heading');
    teamName.innerHTML = String(teamNameText.value);
    teamNameText.value = '';
});
