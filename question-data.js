const STORE = [
  {
    qtext: `The Eagles’ offseason was marked by a number of key acquisitions via both free agency and trades. 
    The biggest acquisitions included these four players. Which of them was acquired in a trade?`,
    answers: [`Alshon Jeffrey`, `Torrey Smith`, `Nick Foles`, `Timmy Jernigan`],
    correctAnswer: `Timmy Jernigan`
  },
  {
    qtext: `Long snapper Jon Dorenbos was forced to retire before the start of the season after an urgent heart
    condition was discovered during a medical screening prior to a planned trade with the New Orleans Saints.
    On what TV show did Dorenbos compete in the previous year?`,
    answers: [`America's Got Talent`, `Dancing With the Stars`, `Penn & Teller: Fool Us!`, `Jeopardy!`],
    correctAnswer: `America's Got Talent`
  },
  {
    qtext: `In the preseason, the Eagles traded wide receiver Jordan Matthews and a draft pick for cornerback
    Ronald Darby. With which team did the Eagles trade?`,
    answers: [`New England Patriots`, `Buffalo Bills`, `New York Jets`, `Miami Dolphins`],
    correctAnswer: `Buffalo Bills`
  },
  {
    qtext: `The Eagles' first loss came in a Week 2 game against head coach Doug Pederson's mentor, who previously
    worked with the Eagles. Who coached the Kansas City Chiefs to their Week 2 win over the Eagles?`,
    answers: [`Chip Kelly`, `Andy Reid`, `Jim Harbaugh`, `Ron Rivera`],
    correctAnswer: `Andy Reid`
  },
  {
    qtext: `At the trade deadline, the Eagles acquired a running back from the Miami Dolphins in order to shore up
    a run game depleted by the loss of Darren Sproles to injury. For which running back did the Eagles trade?`,
    answers: [`Arian Foster`, `Kenyan Drake`, `Damien Williams`, `Jay Ajayi`],
    correctAnswer: `Jay Ajayi`
  },
  {
    qtext: `Star quarterback Carson Wentz suffered an ACL tear midway through the team's Week 14 matchup, after
    which backup Nick Foles came in and led the team to a clutch victory. Against which team did Wentz suffer his
    season-ending injury?`,
    answers: [`Los Angeles Rams`, `Dallas Cowboys`, `Oakland Raiders`, `Los Angeles Chargers`],
    correctAnswer: `Los Angeles Rams`
  },
  {
    qtext: `In the NFC Championship game against the Minnesota Vikings, the Eagles got off to a slow start,
    but after an interception return for a touchdown tied the game, momentum shifted, and the Eagles
    would eventually win 38-7. Which player returned the interception?`,
    answers: [`Malcolm Jenkins`, `Ronald Darby`, `Patrick Robinson`, `Rodney McLeod`],
    correctAnswer: `Patrick Robinson`
  },
  {
    qtext: `The Eagles faced the Patriots in Super Bowl LII, a rematch of a previous Super Bowl. Patriots
    quarterback Tom Brady and head coach Bill Belichick were the only player and coach on either team to
    play in both games. Which previous Super Bowl featured both teams?`,
    answers: [`Super Bowl XXXVII`, `Super Bowl XXXIX`, `Super Bowl XL`, `Super Bowl XLI`],
    correctAnswer: `Super Bowl XXXIX`
  },
  {
    qtext: `On fourth and goal late in the second quarter, the Eagles scored a touchdown using a trick play
    where Nick Foles called an audible at the line of scrimmage, letting the running back take a direct snap
    which was lateralled to tight end Trey Burton, who threw a touchdown pass to Foles. Which running back
    took the direct snap?`,
    answers: [`Jay Ajayi`, `LeGarrette Blount`, `Corey Clement`, `Wendell Smallwood`],
    correctAnswer: `Corey Clement`
  },
  {
    qtext: `Late in the fourth quarter, defensive end Brandon Graham sacked Tom Brady, forcing a fumble which
    was recovered by the Eagles. Which Eagle recovered the fumble that would help seal their first
    Super Bowl victory?`,
    answers: [`Derek Barnett`, `Fletcher Cox`, `Timmy Jernigan`, `Brandon Graham`],
    correctAnswer: `Derek Barnett`
  }
]

let score = 0;

let currentQuestion;
