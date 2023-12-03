
    // Retrieve high scores from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Select the finalScoresList element
const finalScoresList = document.getElementById('finalScoresList');

// Check if there are high scores to display
if (highScores.length > 0) {
    // Populate the list with high scores
    finalScoresList.innerHTML = highScores
        .map(score => `<li>${score.name} - ${score.score}</li>`)
        .join('');
} else {
    // Display a message if there are no high scores
    finalScoresList.innerHTML = '<li>No high scores available</li>';
}
