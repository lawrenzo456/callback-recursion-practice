/***********************
 * Challenge 1 (HOF + gameScores):
 * Return an array of all MVP names from the dataset, including duplicates for each time they appear.
 * Example: If 'Ava Chen' was MVP in 4 matches, her name should appear 4 times in the returned array.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function listAllMVPs(data) {}
// console.log(listAllMVPs(gameScores));
// Expected: ['Liam Price', 'Ava Chen', 'Noah Garcia', ...] (length === number of matches)



/***********************
 * Challenge 2 (HOF + gameScores):
 * Calculate the total ticket revenue across all matches as a single number.
 * Example: If there are three matches with 2000, 3000, and 5000, the result should be 10000.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function totalTicketRevenue(data) {}
// console.log(totalTicketRevenue(gameScores));
// Expected: <sum of all ticketRevenueUSD numbers>



/***********************
 * Challenge 3 (HOF + gameScores):
 * Find the match with the highest attendance and return its match key and attendance.
 * Example: If 'match5' has 20000 attendance and that’s the maximum, return { match: 'match5', attendance: 20000 }.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function highestAttendanceMatch(data) {}
// console.log(highestAttendanceMatch(gameScores));
// Expected: { match: '<matchKey>', attendance: <number> }



/***********************
 * Challenge 4 (HOF + gameScores):
 * Return an array of dates for matches where the home team won (homeScore > awayScore).
 * Example: If matches on '2025-01-12' and '2025-01-20' had home wins, return ['2025-01-12', '2025-01-20'].
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function homeWinDates(data) {}
// console.log(homeWinDates(gameScores));
// Expected: ['YYYY-MM-DD', 'YYYY-MM-DD', ...]



/***********************
 * Challenge 5 (HOF + gameScores):
 * Calculate the average points per game (homeScore + awayScore) rounded to two decimals.
 * Example: If totals per match are [190, 182, 204], return the average of those values rounded to 2 decimals.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function averagePointsPerGame(data) {}
// console.log(averagePointsPerGame(gameScores));
// Expected: <number like 192.35>



/***********************
 * Challenge 6 (HOF + gameScores):
 * Build a tally object mapping MVP name -> number of awards.
 * Example: If 'Ava Chen' was MVP 4 times and 'Liam Price' 2 times, return { 'Ava Chen': 4, 'Liam Price': 2 }.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function mvpAwardTally(data) {}
// console.log(mvpAwardTally(gameScores));
// Expected: { 'Ava Chen': <count>, 'Liam Price': <count>, ... }



/***********************
 * Challenge 7 (HOF + gameScores):
 * Return an array of match keys sorted by descending ticket revenue.
 * Example: If match13 has the highest revenue, it should appear first in the returned array.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function sortMatchesByRevenueDesc(data) {}
// console.log(sortMatchesByRevenueDesc(gameScores));
// Expected: ['matchXX', 'matchYY', ...] (sorted high → low)



/***********************
 * Challenge 8 (HOF + gameScores):
 * Compute the average attendance for each team across all their games (home or away).
 * Example: If 'Raptors' appear in 5 matches with attendances A..E, return { Raptors: avg(A..E), ... }.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function averageAttendancePerTeam(data) {}
// console.log(averageAttendancePerTeam(gameScores));
// Expected: { Raptors: <avg>, Falcons: <avg>, Sharks: <avg>, Lions: <avg> }



/***********************
 * Challenge 9 (HOF + gameScores):
 * Find the median score margin across all matches (|homeScore - awayScore|).
 * Example: If margins are [2, 5, 9, 11, 12], median is 9; if [2, 5, 9, 11], median is (5+9)/2 = 7.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function medianScoreMargin(data) {}
// console.log(medianScoreMargin(gameScores));
// Expected: <number>



/***********************
 * Challenge 10 (HOF + gameScores):
 * Produce an object mapping each month (YYYY-MM) to its total ticket revenue.
 * Example: { '2025-01': 1_800_500, '2025-02': 2_249_200 }.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function monthlyRevenueTotals(data) {}
// console.log(monthlyRevenueTotals(gameScores));
// Expected: { 'YYYY-MM': <sum>, 'YYYY-MM': <sum>, ... }



/***********************
 * Challenge 11 (HOF + gameScores):
 * Return an array of match keys where either team scored at least a given threshold (default 110).
 * Example: With threshold 110, include matches where homeScore >= 110 OR awayScore >= 110.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function matchesWithHighScoringTeam(data, threshold = 110) {}
// console.log(matchesWithHighScoringTeam(gameScores, 110));
// Expected: ['matchXX', 'matchYY', ...]



/***********************
 * Challenge 12 (HOF + gameScores):
 * Return an object mapping each team -> total points scored across all matches (home and away combined).
 * Example: { Raptors: 1800, Falcons: 1725, ... }.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function totalPointsPerTeam(data) {}
// console.log(totalPointsPerTeam(gameScores));
// Expected: { TeamName: <points>, ... }



/***********************
 * Challenge 13 (HOF + gameScores):
 * Return an array of all unique team names present in the dataset.
 * Example: ['Falcons', 'Lions', 'Raptors', 'Sharks'] (sorted optional).
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function uniqueTeams(data) {}
// console.log(uniqueTeams(gameScores));
// Expected: ['Falcons', 'Lions', 'Raptors', 'Sharks'] (order not enforced unless you sort)



/***********************
 * Challenge 14 (HOF + gameScores):
 * Compute the home win rate for each team: wins / total home games (rounded to 3 decimals).
 * Example: If 'Raptors' hosted 6 games and won 4, return Raptors: 0.667.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function homeWinRates(data) {}
// console.log(homeWinRates(gameScores));
// Expected: { TeamName: 0.xyz, ... }



/***********************
 * Challenge 15 (HOF + gameScores):
 * Return an array of objects { date, winner, loser, margin } for each match.
 * Example: [{ date: '2025-01-12', winner: 'Falcons', loser: 'Raptors', margin: 5 }, ...].
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function matchSummaries(data) {}
// console.log(matchSummaries(gameScores));
// Expected: [{ date, winner, loser, margin }, ...]



/***********************
 * Challenge 16 (Recursion + gameScores):
 * Recursively retrieve a property from a given match key using a path array (e.g., ['ticketRevenueUSD']).
 * Example: For key 'match5' and ['ticketRevenueUSD'], return the number for that match.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function getValueRecursive(data, matchKey, pathArray) {}
// console.log(getValueRecursive(gameScores, 'match5', ['ticketRevenueUSD']));
// Expected: <number>



/***********************
 * Challenge 17 (Recursion + gameScores):
 * Recursively create a deep clone of the entire dataset object (no shared references).
 * Example: Mutating the returned object must not affect the original.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function deepCloneGameScores(data) {}
// const clone = deepCloneGameScores(gameScores);
// Expected: structurally equal, different references



/***********************
 * Challenge 18 (Recursion + gameScores):
 * Count how many matches had a total combined score above a given threshold (no loops).
 * Example: With threshold 200, return the count of matches where (homeScore + awayScore) > 200.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function countMatchesAboveTotal(data, threshold) {}
// console.log(countMatchesAboveTotal(gameScores, 200));
// Expected: <count>



/***********************
 * Challenge 19 (Recursion + gameScores):
 * Determine the highest ticket revenue among all matches without using array methods.
 * Example: Return the maximum of all ticketRevenueUSD values.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function maxRevenueRecursive(data) {}
// console.log(maxRevenueRecursive(gameScores));
// Expected: <max number>



/***********************
 * Challenge 20 (Recursion + gameScores):
 * Recursively return an array of match keys where a given predicate(match) returns true.
 * Example: With predicate "attendance > 17000", return only those match keys.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function filterMatchKeysRecursive(data, predicate) {}
// console.log(filterMatchKeysRecursive(gameScores, m => m.attendance > 17000));
// Expected: ['matchXX', 'matchYY', ...]



/***********************
 * Challenge 21 (HOF + gameScores):
 * Categorize matches into score margin ranges (e.g., 0–5, 6–10, 11–15, ...) and return counts per range.
 * Example: { '0-5': 3, '6-10': 7, '11-15': 5, ... } based on |homeScore - awayScore|.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function scoreMarginBuckets(data, step = 5) {}
// console.log(scoreMarginBuckets(gameScores, 5));
// Expected: { '0-5': <count>, '6-10': <count>, ... }



/***********************
 * Challenge 22 (HOF + gameScores):
 * Find the top three MVPs by total ticket revenue from the matches where they were MVP.
 * Example: [{ mvp: 'Ava Chen', totalRevenue: 640000 }, ...] sorted desc by totalRevenue.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function topMvpsByTotalRevenue(data, topN = 3) {}
// console.log(topMvpsByTotalRevenue(gameScores, 3));
// Expected: [{ mvp, totalRevenue }, ...] length <= 3



/***********************
 * Challenge 23 (HOF + gameScores):
 * Return the match keys for a specific month (YYYY-MM) where attendance ≥ a given threshold.
 * Example: For '2025-02' and 16500, return matches in Feb 2025 with attendance >= 16500.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function matchesInMonthWithAttendance(data, monthYYYYMM, minAttendance) {}
// console.log(matchesInMonthWithAttendance(gameScores, '2025-02', 16500));
// Expected: ['matchXX', 'matchYY']



/***********************
 * Challenge 24 (HOF + gameScores):
 * Compute net point differential per team (pointsFor - pointsAgainst) and return the top two team names.
 * Example: If Raptors and Falcons have the highest differentials, return ['Raptors', 'Falcons'].
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function topTeamsByPointDifferential(data, topN = 2) {}
// console.log(topTeamsByPointDifferential(gameScores, 2));
// Expected: ['TeamA', 'TeamB']



/***********************
 * Challenge 25 (Recursion + Memoization + gameScores):
 * Determine the home team with the most home wins for a given month (YYYY-MM), caching results by month.
 * Example: Call bestHomeTeamInMonth(gameScores, '2025-02') multiple times and reuse the cached result.
 */
// Plan Your Approach:
/*
1.
2.
3.
*/
function bestHomeTeamInMonth(data, monthYYYYMM, _cache = {}) {}
// console.log(bestHomeTeamInMonth(gameScores, '2025-02'));
// Expected: 'TeamName'
